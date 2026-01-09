'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';

interface Exercise {
  name: string;
  reps: string;
  duration: number;
  weight?: string;
  video?: string;
  equipment?: string;
}

interface Workout {
  name: string;
  rounds: number;
  restEx: number;
  restRound: number;
  cooldown: boolean;
  exercises: Exercise[];
}

interface CooldownStretch {
  name: string;
  duration: number;
  desc: string;
}

// ============================================
// URL-BASED WORKOUT TIMER
// Reads workout config from URL: ?w=BASE64_ENCODED_JSON
// ============================================

const COOLDOWN: CooldownStretch[] = [
  { name: 'Quad Stretch', duration: 30, desc: 'Standing, pull heel to glute, 15s per leg' },
  { name: 'Forward Fold', duration: 30, desc: 'Legs straight, reach for toes' },
  { name: 'Chest Stretch', duration: 30, desc: 'Hand on wall, rotate torso away' },
  { name: 'Cat-Cow', duration: 40, desc: 'On all fours, arch and round back' },
  { name: "Child's Pose", duration: 40, desc: 'Sit on heels, arms forward, relax' },
  { name: 'Lying Twist', duration: 40, desc: 'On back, knees to side, 20s per side' },
  { name: 'Hip Stretch', duration: 60, desc: 'Half pigeon, 30s per leg' },
];

const DEMO_WORKOUT: Workout = {
  name: '💪 Demo Workout',
  rounds: 2,
  restEx: 15,
  restRound: 60,
  cooldown: true,
  exercises: [
    { name: 'Jumping Jacks', reps: '30 sec', duration: 30 },
    { name: 'Squats', reps: 'x15', duration: 45 },
    { name: 'Push-ups', reps: 'x10', duration: 45 },
    { name: 'Plank', reps: '30 sec', duration: 30 },
  ]
};

export default function WorkoutTimer() {
  const [workout, setWorkout] = useState<Workout | null>(null);
  const [phase, setPhase] = useState<string>('loading');
  const [currentRound, setCurrentRound] = useState(1);
  const [exerciseIndex, setExerciseIndex] = useState(0);
  const [cooldownIndex, setCooldownIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // Parse URL on mount (client-side only)
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const encoded = params.get('w');
      if (encoded) {
        // Fix URL encoding: + becomes space in URL params, convert back
        const fixedEncoded = encoded.replace(/ /g, '+');
        // Decode base64 with proper UTF-8 handling
        const binaryString = atob(fixedEncoded);
        const bytes = Uint8Array.from(binaryString, (c) => c.charCodeAt(0));
        const jsonString = new TextDecoder().decode(bytes);
        const parsed = JSON.parse(jsonString) as Workout;
        setWorkout(parsed);
        setPhase('ready');
      } else {
        setPhase('demo');
      }
    } catch (e) {
      console.error('Failed to parse workout:', e);
      setPhase('demo');
    }
  }, []);

  const exercises = workout?.exercises || [];
  const currentExercise = exercises[exerciseIndex];
  const currentStretch = COOLDOWN[cooldownIndex];

  const formatTime = (s: number) => `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, '0')}`;

  const totalDuration = useMemo(() => {
    if (!workout) return 0;
    const exTime = exercises.reduce((sum, e) => sum + e.duration, 0);
    const restTime = (exercises.length - 1) * workout.restEx;
    const roundTime = exTime + restTime;
    const total = (roundTime * workout.rounds) + ((workout.rounds - 1) * workout.restRound);
    const cooldownTime = workout.cooldown ? COOLDOWN.reduce((sum: number, s) => sum + s.duration, 0) : 0;
    return Math.round((total + cooldownTime) / 60);
  }, [workout, exercises]);

  const playBeep = useCallback(() => {
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioContextClass();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.value = 800;
      osc.type = 'sine';
      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.3);
    } catch (e) {}
  }, []);

  const moveToNext = useCallback(() => {
    if (!workout) return;
    
    if (phase === 'exercise') {
      if (exerciseIndex < exercises.length - 1) {
        setPhase('rest');
        setTimeLeft(workout.restEx);
      } else if (currentRound < workout.rounds) {
        setPhase('roundRest');
        setTimeLeft(workout.restRound);
      } else if (workout.cooldown) {
        setPhase('cooldown');
        setCooldownIndex(0);
        setTimeLeft(COOLDOWN[0].duration);
      } else {
        setPhase('complete');
        setIsRunning(false);
      }
    } else if (phase === 'rest') {
      setExerciseIndex(i => i + 1);
      setPhase('exercise');
      setTimeLeft(exercises[exerciseIndex + 1].duration);
    } else if (phase === 'roundRest') {
      setCurrentRound(r => r + 1);
      setExerciseIndex(0);
      setPhase('exercise');
      setTimeLeft(exercises[0].duration);
    } else if (phase === 'cooldown') {
      if (cooldownIndex < COOLDOWN.length - 1) {
        setCooldownIndex(i => i + 1);
        setTimeLeft(COOLDOWN[cooldownIndex + 1].duration);
      } else {
        setPhase('complete');
        setIsRunning(false);
      }
    }
  }, [phase, exerciseIndex, currentRound, cooldownIndex, exercises, workout]);

  useEffect(() => {
    if (!isRunning || timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 4 && t > 1) playBeep();
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isRunning, playBeep]);

  useEffect(() => {
    if (isRunning && timeLeft === 0 && phase !== 'demo' && phase !== 'ready' && phase !== 'complete') {
      playBeep();
      moveToNext();
    }
  }, [isRunning, timeLeft, phase, moveToNext, playBeep]);

  const startWorkout = () => {
    setPhase('exercise');
    setTimeLeft(exercises[0].duration);
    setIsRunning(true);
  };

  const reset = () => {
    setPhase('ready');
    setCurrentRound(1);
    setExerciseIndex(0);
    setCooldownIndex(0);
    setTimeLeft(0);
    setIsRunning(false);
  };

  const loadDemo = () => {
    setWorkout(DEMO_WORKOUT);
    setPhase('ready');
  };

  const bgColor = {
    demo: 'bg-slate-800',
    ready: 'bg-slate-800',
    exercise: 'bg-emerald-600',
    rest: 'bg-amber-500',
    roundRest: 'bg-blue-600',
    cooldown: 'bg-indigo-500',
    complete: 'bg-purple-600',
  }[phase];

  const phaseLabel = {
    exercise: '💪 WORK',
    rest: '😮‍💨 REST',
    roundRest: '🔄 REST',
    cooldown: '🧘 COOLDOWN',
    complete: '🎉 DONE',
  }[phase] || '';

  // LOADING STATE
  if (phase === 'loading') {
    return (
      <div className="min-h-screen bg-slate-800 flex flex-col items-center justify-center p-6 text-white">
        <div className="text-6xl mb-6 animate-pulse">⏱️</div>
        <p className="text-slate-400">Loading workout...</p>
      </div>
    );
  }

  // DEMO/LANDING
  if (phase === 'demo') {
    return (
      <div className="min-h-screen bg-slate-800 flex flex-col items-center justify-center p-6 text-white">
        <div className="text-6xl mb-6">⏱️</div>
        <h1 className="text-3xl font-bold mb-2 text-center">Workout Timer</h1>
        <p className="text-slate-400 text-center mb-8 max-w-md">
          This timer loads workouts from URL parameters. Ask your AI to generate a workout link!
        </p>
        
        <div className="bg-slate-700 rounded-xl p-4 mb-6 max-w-md w-full">
          <p className="text-sm text-slate-300 mb-2">Example prompt for your AI:</p>
          <p className="text-sm italic text-slate-400">
            "Create a 20-minute upper body workout with dumbbells and give me a timer link"
          </p>
        </div>

        <button
          onClick={loadDemo}
          className="bg-emerald-500 hover:bg-emerald-400 font-bold py-4 px-8 rounded-xl text-lg transition-all"
        >
          Try Demo Workout
        </button>

        <div className="mt-8 text-slate-500 text-sm">
          <p>URL format: <code className="bg-slate-700 px-2 py-1 rounded">?w=BASE64_JSON</code></p>
        </div>
      </div>
    );
  }

  // READY SCREEN
  if (phase === 'ready' && workout) {
    return (
      <div className="min-h-screen bg-slate-800 flex flex-col items-center justify-center p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">{workout.name}</h1>
        <p className="text-slate-400 mb-4">
          {workout.rounds} rounds • ~{totalDuration} min
          {workout.cooldown && ' • + cooldown'}
        </p>

        <div className="bg-slate-700 rounded-xl p-4 mb-6 w-full max-w-md">
          {exercises.map((ex, i) => (
            <div key={i} className="flex justify-between py-2 border-b border-slate-600 last:border-0 text-sm">
              <span>{ex.name}</span>
              <span className="text-slate-400">
                {ex.weight && ex.weight !== '—' && `${ex.weight} • `}{ex.reps}
              </span>
            </div>
          ))}
        </div>

        <button
          onClick={startWorkout}
          className="bg-emerald-500 hover:bg-emerald-400 font-bold py-5 px-14 rounded-2xl text-xl transition-all transform hover:scale-105 active:scale-95"
        >
          START
        </button>
      </div>
    );
  }

  // COMPLETE SCREEN
  if (phase === 'complete' && workout) {
    return (
      <div className={`min-h-screen ${bgColor} flex flex-col items-center justify-center p-6 text-white`}>
        <div className="text-6xl mb-6">🎉</div>
        <h1 className="text-4xl font-bold mb-4">Great Work!</h1>
        <p className="text-xl mb-8 opacity-90">{workout.name} complete ✓</p>

        <div className="flex flex-col gap-3">
          <button onClick={reset} className="bg-white/20 hover:bg-white/30 font-bold py-4 px-8 rounded-xl transition-all">
            Start Again
          </button>
          <button 
            onClick={() => { setWorkout(null); setPhase('demo'); }}
            className="bg-black/20 hover:bg-black/30 font-bold py-3 px-8 rounded-xl transition-all"
          >
            New Workout
          </button>
        </div>
      </div>
    );
  }

  // COOLDOWN SCREEN
  if (phase === 'cooldown') {
    return (
      <div className={`min-h-screen ${bgColor} flex flex-col text-white transition-colors duration-500`}>
        <div className="flex justify-between items-center p-4 bg-black/20">
          <span className="text-lg font-semibold">{phaseLabel}</span>
          <div className="flex gap-1.5">
            {COOLDOWN.map((_, i) => (
              <div key={i} className={`w-3 h-3 rounded-full ${i < cooldownIndex ? 'bg-white/40' : i === cooldownIndex ? 'bg-white' : 'bg-black/20'}`} />
            ))}
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center p-6">
          <h1 className="text-4xl font-bold mb-4 text-center">{currentStretch.name}</h1>
          <p className="text-xl opacity-80 mb-8 text-center max-w-md">{currentStretch.desc}</p>
          <div className="text-8xl font-mono font-bold">{formatTime(timeLeft)}</div>
        </div>

        <div className="p-6 flex flex-col items-center gap-4">
          <div className="flex gap-4">
            <button onClick={() => setIsRunning(!isRunning)} className="bg-white/20 hover:bg-white/30 font-bold py-4 px-8 rounded-xl text-xl transition-all">
              {isRunning ? '⏸️ PAUSE' : '▶️ CONTINUE'}
            </button>
            <button onClick={moveToNext} className="bg-black/20 hover:bg-black/30 font-bold py-4 px-8 rounded-xl text-xl transition-all">
              ⏭️ SKIP
            </button>
          </div>
          <button onClick={reset} className="opacity-40 hover:opacity-100 transition-opacity text-sm">Reset</button>
        </div>
      </div>
    );
  }

  // MAIN WORKOUT SCREEN
  if (!workout) return null;

  return (
    <div className={`min-h-screen ${bgColor} flex flex-col text-white transition-colors duration-500`}>
      <div className="flex justify-between items-center p-4 bg-black/20">
        <span className="text-lg font-semibold">{phaseLabel}</span>
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            {Array.from({ length: workout.rounds }, (_, i) => (
              <div key={i} className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
                ${i + 1 < currentRound ? 'bg-white/40' : i + 1 === currentRound ? 'bg-white text-emerald-700' : 'bg-black/20'}`}>
                {i + 1 < currentRound ? '✓' : i + 1}
              </div>
            ))}
          </div>
          <div className="w-px h-6 bg-white/30" />
          <div className="flex gap-1.5">
            {exercises.map((_, i) => (
              <div key={i} className={`w-3 h-3 rounded-full ${i < exerciseIndex ? 'bg-white/40' : i === exerciseIndex ? 'bg-white' : 'bg-black/20'}`} />
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-6">
        {phase === 'exercise' && (
          <>
            <h1 className="text-5xl font-bold mb-6 text-center">{currentExercise.name}</h1>
            <div className="flex gap-4 justify-center text-2xl mb-4">
              {currentExercise.weight && currentExercise.weight !== '—' && (
                <span className="bg-black/20 px-5 py-3 rounded-xl font-semibold">{currentExercise.weight}</span>
              )}
              <span className="bg-black/20 px-5 py-3 rounded-xl font-semibold">{currentExercise.reps}</span>
            </div>
            {currentExercise.video && (
              <a href={currentExercise.video} target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 underline transition-opacity mb-4">
                📹 Video
              </a>
            )}
          </>
        )}

        {phase === 'rest' && (
          <div className="text-center">
            <p className="text-xl mb-2 opacity-70">Next:</p>
            <h1 className="text-5xl font-bold mb-6">{exercises[exerciseIndex + 1]?.name}</h1>
            {exercises[exerciseIndex + 1]?.equipment && (
              <div className="bg-black/20 px-6 py-3 rounded-xl inline-block">
                <span className="text-xl">🏋️ {exercises[exerciseIndex + 1].equipment}</span>
              </div>
            )}
          </div>
        )}

        {phase === 'roundRest' && (
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-2">Round {currentRound} ✓</h1>
            <p className="text-2xl opacity-80 mb-6">Prepare for round {currentRound + 1}</p>
          </div>
        )}

        <div className="text-8xl font-mono font-bold my-8">{formatTime(timeLeft)}</div>
      </div>

      <div className="p-6 flex flex-col items-center gap-4">
        <div className="flex gap-4">
          <button onClick={() => setIsRunning(!isRunning)} className="bg-white/20 hover:bg-white/30 font-bold py-4 px-8 rounded-xl text-xl transition-all">
            {isRunning ? '⏸️ PAUSE' : '▶️ CONTINUE'}
          </button>
          <button onClick={moveToNext} className="bg-black/20 hover:bg-black/30 font-bold py-4 px-8 rounded-xl text-xl transition-all">
            ⏭️ SKIP
          </button>
        </div>
        <button onClick={reset} className="opacity-40 hover:opacity-100 transition-opacity text-sm">Reset</button>
      </div>
    </div>
  );
}
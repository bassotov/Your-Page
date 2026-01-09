import React, { useState, useEffect, useCallback } from 'react';

// ============================================
// WORKOUT CONFIGURATIONS
// Add new workouts here - just copy a block and modify
// ============================================

const WORKOUTS = {
  strength: {
    id: 'strength',
    name: { ru: 'ðŸ’ª Ð¡Ð¸Ð»Ð¾Ð²Ð°Ñ Ñ‚Ñ€ÐµÐ½Ð¸Ñ€Ð¾Ð²ÐºÐ°', en: 'ðŸ’ª Strength Training' },
    description: { ru: '3 ÐºÑ€ÑƒÐ³Ð° â€¢ 6 ÑƒÐ¿Ñ€Ð°Ð¶Ð½ÐµÐ½Ð¸Ð¹', en: '3 rounds â€¢ 6 exercises' },
    rounds: 3,
    restBetweenExercises: 20,
    restBetweenRounds: 90,
    includeCooldown: true,
    exercises: {
      ru: [
        { name: 'Ð“Ð¾Ð±Ð»ÐµÑ‚-Ð¿Ñ€Ð¸ÑÐµÐ´', weight: '14 ÐºÐ³', reps: 'x12', duration: 60, video: 'https://www.youtube.com/watch?v=MeIiIdhvXT4', equipment: '1 Ð³Ð°Ð½Ñ‚ÐµÐ»ÑŒ 14 ÐºÐ³' },
        { name: 'Ð ÑƒÐ¼Ñ‹Ð½ÑÐºÐ°Ñ Ñ‚ÑÐ³Ð°', weight: '2Ã—12 ÐºÐ³', reps: 'x10', duration: 60, video: 'https://www.youtube.com/watch?v=JCXUYuzwNrM', equipment: '2 Ð³Ð°Ð½Ñ‚ÐµÐ»Ð¸ Ð¿Ð¾ 12 ÐºÐ³' },
        { name: 'Ð–Ð¸Ð¼ Ð³Ð°Ð½Ñ‚ÐµÐ»ÐµÐ¹ ÑÑ‚Ð¾Ñ', weight: '2Ã—10 ÐºÐ³', reps: 'x10', duration: 60, video: 'https://www.youtube.com/watch?v=qEwKCR5JCog', equipment: '2 Ð³Ð°Ð½Ñ‚ÐµÐ»Ð¸ Ð¿Ð¾ 10 ÐºÐ³' },
        { name: 'Ð¢ÑÐ³Ð° Ð³Ð°Ð½Ñ‚ÐµÐ»Ð¸ Ð² Ð½Ð°ÐºÐ»Ð¾Ð½Ðµ', weight: '16 ÐºÐ³', reps: 'x10 Ð½Ð° Ñ€ÑƒÐºÑƒ', duration: 75, video: 'https://www.youtube.com/watch?v=roCP6wCXPqo', equipment: '1 Ð³Ð°Ð½Ñ‚ÐµÐ»ÑŒ 16 ÐºÐ³ + ÑÐºÐ°Ð¼ÑŒÑ' },
        { name: 'Ð’Ñ‹Ð¿Ð°Ð´Ñ‹ Ð½Ð°Ð·Ð°Ð´', weight: '2Ã—10 ÐºÐ³', reps: 'x8 Ð½Ð° Ð½Ð¾Ð³Ñƒ', duration: 75, video: 'https://www.youtube.com/watch?v=xrPteyQLGAo', equipment: '2 Ð³Ð°Ð½Ñ‚ÐµÐ»Ð¸ Ð¿Ð¾ 10 ÐºÐ³' },
        { name: 'ÐŸÐ»Ð°Ð½ÐºÐ°', weight: 'â€”', reps: '60 ÑÐµÐº', duration: 60, video: null, equipment: 'ÐšÐ¾Ð²Ñ€Ð¸Ðº' },
      ],
      en: [
        { name: 'Goblet Squat', weight: '14 kg', reps: 'x12', duration: 60, video: 'https://www.youtube.com/watch?v=MeIiIdhvXT4', equipment: '1 dumbbell 14 kg' },
        { name: 'Romanian Deadlift', weight: '2Ã—12 kg', reps: 'x10', duration: 60, video: 'https://www.youtube.com/watch?v=JCXUYuzwNrM', equipment: '2 dumbbells 12 kg' },
        { name: 'Standing Dumbbell Press', weight: '2Ã—10 kg', reps: 'x10', duration: 60, video: 'https://www.youtube.com/watch?v=qEwKCR5JCog', equipment: '2 dumbbells 10 kg' },
        { name: 'Bent-Over Row', weight: '16 kg', reps: 'x10 per arm', duration: 75, video: 'https://www.youtube.com/watch?v=roCP6wCXPqo', equipment: '1 dumbbell 16 kg + bench' },
        { name: 'Reverse Lunges', weight: '2Ã—10 kg', reps: 'x8 per leg', duration: 75, video: 'https://www.youtube.com/watch?v=xrPteyQLGAo', equipment: '2 dumbbells 10 kg' },
        { name: 'Plank', weight: 'â€”', reps: '60 sec', duration: 60, video: null, equipment: 'Mat' },
      ]
    }
  },

  hiit: {
    id: 'hiit',
    name: { ru: 'ðŸ”¥ HIIT ÐšÐ°Ñ€Ð´Ð¸Ð¾', en: 'ðŸ”¥ HIIT Cardio' },
    description: { ru: '4 ÐºÑ€ÑƒÐ³Ð° â€¢ 6 ÑƒÐ¿Ñ€Ð°Ð¶Ð½ÐµÐ½Ð¸Ð¹', en: '4 rounds â€¢ 6 exercises' },
    rounds: 4,
    restBetweenExercises: 15,
    restBetweenRounds: 60,
    includeCooldown: true,
    exercises: {
      ru: [
        { name: 'Ð”Ð¶Ð°Ð¼Ð¿Ð¸Ð½Ð³ Ð”Ð¶ÐµÐºÐ¸', weight: 'â€”', reps: '45 ÑÐµÐº', duration: 45, video: 'https://www.youtube.com/watch?v=c4DAnQ6DtF8', equipment: 'â€”' },
        { name: 'Ð‘ÐµÑ€Ð¿Ð¸', weight: 'â€”', reps: '30 ÑÐµÐº', duration: 30, video: 'https://www.youtube.com/watch?v=dZgVxmf6jkA', equipment: 'â€”' },
        { name: 'Ð“Ð¾Ñ€Ð½Ñ‹Ðµ Ð°Ð»ÑŒÐ¿Ð¸Ð½Ð¸ÑÑ‚Ñ‹', weight: 'â€”', reps: '40 ÑÐµÐº', duration: 40, video: 'https://www.youtube.com/watch?v=nmwgirgXLYM', equipment: 'â€”' },
        { name: 'ÐŸÑ€Ð¸ÑÐµÐ´Ð°Ð½Ð¸Ñ Ñ Ð¿Ñ€Ñ‹Ð¶ÐºÐ¾Ð¼', weight: 'â€”', reps: '30 ÑÐµÐº', duration: 30, video: 'https://www.youtube.com/watch?v=YGGq0AE5Uyc', equipment: 'â€”' },
        { name: 'Ð’Ñ‹ÑÐ¾ÐºÐ¸Ðµ ÐºÐ¾Ð»ÐµÐ½Ð¸', weight: 'â€”', reps: '40 ÑÐµÐº', duration: 40, video: 'https://www.youtube.com/watch?v=tx5rgpDAJRI', equipment: 'â€”' },
        { name: 'ÐŸÐ»Ð°Ð½ÐºÐ° Ñ ÐºÐ°ÑÐ°Ð½Ð¸ÐµÐ¼ Ð¿Ð»ÐµÑ‡', weight: 'â€”', reps: '40 ÑÐµÐº', duration: 40, video: 'https://www.youtube.com/watch?v=LEZq7QZ8ySQ', equipment: 'â€”' },
      ],
      en: [
        { name: 'Jumping Jacks', weight: 'â€”', reps: '45 sec', duration: 45, video: 'https://www.youtube.com/watch?v=c4DAnQ6DtF8', equipment: 'â€”' },
        { name: 'Burpees', weight: 'â€”', reps: '30 sec', duration: 30, video: 'https://www.youtube.com/watch?v=dZgVxmf6jkA', equipment: 'â€”' },
        { name: 'Mountain Climbers', weight: 'â€”', reps: '40 sec', duration: 40, video: 'https://www.youtube.com/watch?v=nmwgirgXLYM', equipment: 'â€”' },
        { name: 'Jump Squats', weight: 'â€”', reps: '30 sec', duration: 30, video: 'https://www.youtube.com/watch?v=YGGq0AE5Uyc', equipment: 'â€”' },
        { name: 'High Knees', weight: 'â€”', reps: '40 sec', duration: 40, video: 'https://www.youtube.com/watch?v=tx5rgpDAJRI', equipment: 'â€”' },
        { name: 'Plank Shoulder Taps', weight: 'â€”', reps: '40 sec', duration: 40, video: 'https://www.youtube.com/watch?v=LEZq7QZ8ySQ', equipment: 'â€”' },
      ]
    }
  },

  core: {
    id: 'core',
    name: { ru: 'ðŸŽ¯ ÐšÐ¾Ñ€ Ð¸ Ð¿Ñ€ÐµÑÑ', en: 'ðŸŽ¯ Core & Abs' },
    description: { ru: '3 ÐºÑ€ÑƒÐ³Ð° â€¢ 6 ÑƒÐ¿Ñ€Ð°Ð¶Ð½ÐµÐ½Ð¸Ð¹', en: '3 rounds â€¢ 6 exercises' },
    rounds: 3,
    restBetweenExercises: 15,
    restBetweenRounds: 60,
    includeCooldown: false,
    exercises: {
      ru: [
        { name: 'ÐŸÐ»Ð°Ð½ÐºÐ°', weight: 'â€”', reps: '45 ÑÐµÐº', duration: 45, video: null, equipment: 'ÐšÐ¾Ð²Ñ€Ð¸Ðº' },
        { name: 'Ð¡ÐºÑ€ÑƒÑ‡Ð¸Ð²Ð°Ð½Ð¸Ñ', weight: 'â€”', reps: 'x20', duration: 45, video: 'https://www.youtube.com/watch?v=Xyd_fa5zoEU', equipment: 'ÐšÐ¾Ð²Ñ€Ð¸Ðº' },
        { name: 'Ð’ÐµÐ»Ð¾ÑÐ¸Ð¿ÐµÐ´', weight: 'â€”', reps: 'x20 Ð½Ð° ÑÑ‚Ð¾Ñ€Ð¾Ð½Ñƒ', duration: 50, video: 'https://www.youtube.com/watch?v=9FGilxCbdz8', equipment: 'ÐšÐ¾Ð²Ñ€Ð¸Ðº' },
        { name: 'ÐŸÐ¾Ð´ÑŠÑ‘Ð¼ Ð½Ð¾Ð³', weight: 'â€”', reps: 'x15', duration: 45, video: 'https://www.youtube.com/watch?v=JB2oyawG9KI', equipment: 'ÐšÐ¾Ð²Ñ€Ð¸Ðº' },
        { name: 'Ð‘Ð¾ÐºÐ¾Ð²Ð°Ñ Ð¿Ð»Ð°Ð½ÐºÐ° (Ð»ÐµÐ²Ð¾)', weight: 'â€”', reps: '30 ÑÐµÐº', duration: 30, video: 'https://www.youtube.com/watch?v=K2VljzCC16g', equipment: 'ÐšÐ¾Ð²Ñ€Ð¸Ðº' },
        { name: 'Ð‘Ð¾ÐºÐ¾Ð²Ð°Ñ Ð¿Ð»Ð°Ð½ÐºÐ° (Ð¿Ñ€Ð°Ð²Ð¾)', weight: 'â€”', reps: '30 ÑÐµÐº', duration: 30, video: 'https://www.youtube.com/watch?v=K2VljzCC16g', equipment: 'ÐšÐ¾Ð²Ñ€Ð¸Ðº' },
      ],
      en: [
        { name: 'Plank', weight: 'â€”', reps: '45 sec', duration: 45, video: null, equipment: 'Mat' },
        { name: 'Crunches', weight: 'â€”', reps: 'x20', duration: 45, video: 'https://www.youtube.com/watch?v=Xyd_fa5zoEU', equipment: 'Mat' },
        { name: 'Bicycle Crunches', weight: 'â€”', reps: 'x20 per side', duration: 50, video: 'https://www.youtube.com/watch?v=9FGilxCbdz8', equipment: 'Mat' },
        { name: 'Leg Raises', weight: 'â€”', reps: 'x15', duration: 45, video: 'https://www.youtube.com/watch?v=JB2oyawG9KI', equipment: 'Mat' },
        { name: 'Side Plank (left)', weight: 'â€”', reps: '30 sec', duration: 30, video: 'https://www.youtube.com/watch?v=K2VljzCC16g', equipment: 'Mat' },
        { name: 'Side Plank (right)', weight: 'â€”', reps: '30 sec', duration: 30, video: 'https://www.youtube.com/watch?v=K2VljzCC16g', equipment: 'Mat' },
      ]
    }
  },

  // Add more workouts here following the same pattern...
};

// ============================================
// COOLDOWN STRETCHES (shared across workouts)
// ============================================

const cooldownData = {
  ru: [
    { name: 'Ð Ð°ÑÑ‚ÑÐ¶ÐºÐ° ÐºÐ²Ð°Ð´Ñ€Ð¸Ñ†ÐµÐ¿ÑÐ°', duration: 30, description: 'Ð¡Ñ‚Ð¾Ñ, Ð¿Ð¾Ð´Ñ‚ÑÐ½Ð¸ Ð¿ÑÑ‚ÐºÑƒ Ðº ÑÐ³Ð¾Ð´Ð¸Ñ†Ðµ, 15 ÑÐµÐº Ð½Ð° Ð½Ð¾Ð³Ñƒ' },
    { name: 'ÐÐ°ÐºÐ»Ð¾Ð½ Ðº Ð½Ð¾Ð³Ð°Ð¼', duration: 30, description: 'ÐÐ¾Ð³Ð¸ Ð¿Ñ€ÑÐ¼Ñ‹Ðµ, Ñ‚ÑÐ½Ð¸ÑÑŒ Ðº Ð½Ð¾ÑÐºÐ°Ð¼' },
    { name: 'Ð Ð°ÑÑ‚ÑÐ¶ÐºÐ° Ð³Ñ€ÑƒÐ´Ð½Ñ‹Ñ…', duration: 30, description: 'Ð ÑƒÐºÐ° Ð½Ð° ÑÑ‚ÐµÐ½Ðµ, Ñ€Ð°Ð·Ð²ÐµÑ€Ð½Ð¸ ÐºÐ¾Ñ€Ð¿ÑƒÑ' },
    { name: 'ÐšÐ¾ÑˆÐºÐ°-ÐºÐ¾Ñ€Ð¾Ð²Ð°', duration: 40, description: 'ÐÐ° Ñ‡ÐµÑ‚Ð²ÐµÑ€ÐµÐ½ÑŒÐºÐ°Ñ…, Ð¿Ñ€Ð¾Ð³Ð¸Ð±Ð°Ð¹ Ð¸ Ð¾ÐºÑ€ÑƒÐ³Ð»ÑÐ¹ ÑÐ¿Ð¸Ð½Ñƒ' },
    { name: 'ÐŸÐ¾Ð·Ð° Ñ€ÐµÐ±Ñ‘Ð½ÐºÐ°', duration: 40, description: 'Ð¡ÑÐ´ÑŒ Ð½Ð° Ð¿ÑÑ‚ÐºÐ¸, Ñ€ÑƒÐºÐ¸ Ð²Ð¿ÐµÑ€Ñ‘Ð´, Ñ€Ð°ÑÑÐ»Ð°Ð±ÑŒÑÑ' },
    { name: 'Ð›ÐµÐ¶Ð°Ñ‡Ð¸Ð¹ Ñ‚Ð²Ð¸ÑÑ‚', duration: 40, description: 'ÐÐ° ÑÐ¿Ð¸Ð½Ðµ, ÐºÐ¾Ð»ÐµÐ½Ð¸ Ð² ÑÑ‚Ð¾Ñ€Ð¾Ð½Ñƒ, 20 ÑÐµÐº Ð½Ð° ÑÑ‚Ð¾Ñ€Ð¾Ð½Ñƒ' },
    { name: 'Ð Ð°ÑÑ‚ÑÐ¶ÐºÐ° Ð±Ñ‘Ð´ÐµÑ€ (Ð³Ð¾Ð»ÑƒÐ±ÑŒ)', duration: 60, description: 'ÐŸÐ¾Ð»ÑƒÐ³Ð¾Ð»ÑƒÐ±ÑŒ, 30 ÑÐµÐº Ð½Ð° Ð½Ð¾Ð³Ñƒ' },
  ],
  en: [
    { name: 'Quad Stretch', duration: 30, description: 'Standing, pull heel to glute, 15 sec per leg' },
    { name: 'Forward Fold', duration: 30, description: 'Legs straight, reach for toes' },
    { name: 'Chest Stretch', duration: 30, description: 'Hand on wall, rotate torso away' },
    { name: 'Cat-Cow', duration: 40, description: 'On all fours, arch and round your back' },
    { name: "Child's Pose", duration: 40, description: 'Sit on heels, arms forward, relax' },
    { name: 'Lying Twist', duration: 40, description: 'On back, knees to side, 20 sec per side' },
    { name: 'Hip Stretch (Pigeon)', duration: 60, description: 'Half pigeon, 30 sec per leg' },
  ]
};

// ============================================
// TRANSLATIONS
// ============================================

const translations = {
  ru: {
    selectWorkout: 'Ð’Ñ‹Ð±ÐµÑ€Ð¸ Ñ‚Ñ€ÐµÐ½Ð¸Ñ€Ð¾Ð²ÐºÑƒ',
    start: 'ÐÐÐ§ÐÐ¢Ð¬',
    work: 'ðŸ’ª Ð ÐÐ‘ÐžÐ¢Ð',
    rest: 'ðŸ˜®â€ðŸ’¨ ÐžÐ¢Ð”Ð«Ð¥',
    roundRest: 'ðŸ”„ ÐžÐ¢Ð”Ð«Ð¥',
    cooldown: 'ðŸ§˜ Ð—ÐÐœÐ˜ÐÐšÐ',
    complete: 'ðŸŽ‰ Ð“ÐžÐ¢ÐžÐ’Ðž',
    pause: 'â¸ï¸ ÐŸÐÐ£Ð—Ð',
    resume: 'â–¶ï¸ Ð”ÐÐ›Ð¬Ð¨Ð•',
    skip: 'â­ï¸ ÐŸÐ ÐžÐŸÐ£Ð¡Ð¢Ð˜Ð¢Ð¬',
    reset: 'Ð¡Ð±Ñ€Ð¾ÑÐ¸Ñ‚ÑŒ',
    back: 'â† ÐÐ°Ð·Ð°Ð´',
    next: 'Ð¡Ð»ÐµÐ´ÑƒÑŽÑ‰ÐµÐµ:',
    roundComplete: 'ÐšÑ€ÑƒÐ³',
    prepareForRound: 'Ð“Ð¾Ñ‚Ð¾Ð²ÑŒÑÑ Ðº ÐºÑ€ÑƒÐ³Ñƒ',
    greatWork: 'ÐžÑ‚Ð»Ð¸Ñ‡Ð½Ð°Ñ Ñ€Ð°Ð±Ð¾Ñ‚Ð°!',
    roundsComplete: 'Ð¢Ñ€ÐµÐ½Ð¸Ñ€Ð¾Ð²ÐºÐ° Ð·Ð°Ð²ÐµÑ€ÑˆÐµÐ½Ð° âœ“',
    finishWhoop: 'âœ… Ð—Ð°Ð²ÐµÑ€ÑˆÐ¸ Activity Ð² WHOOP',
    startAgain: 'ÐÐ°Ñ‡Ð°Ñ‚ÑŒ Ð·Ð°Ð½Ð¾Ð²Ð¾',
    chooseAnother: 'Ð”Ñ€ÑƒÐ³Ð°Ñ Ñ‚Ñ€ÐµÐ½Ð¸Ñ€Ð¾Ð²ÐºÐ°',
    video: 'ðŸ“¹ Ð’Ð¸Ð´ÐµÐ¾',
    whoopTitle: 'WHOOP',
    whoopMessage: 'ÐžÑ‚ÐºÑ€Ð¾Ð¹ WHOOP â†’ Activity â†’ Strength Training',
    whoopConfirm: "Yes, let's go ðŸ’ª",
    whoopClose: 'Ð—Ð°ÐºÑ€Ñ‹Ñ‚ÑŒ',
    cooldownNote: 'ðŸ§˜ + Ð·Ð°Ð¼Ð¸Ð½ÐºÐ°',
    min: 'Ð¼Ð¸Ð½',
    rounds: 'ÐºÑ€ÑƒÐ³Ð¾Ð²',
  },
  en: {
    selectWorkout: 'Select Workout',
    start: 'START',
    work: 'ðŸ’ª WORK',
    rest: 'ðŸ˜®â€ðŸ’¨ REST',
    roundRest: 'ðŸ”„ REST',
    cooldown: 'ðŸ§˜ COOLDOWN',
    complete: 'ðŸŽ‰ DONE',
    pause: 'â¸ï¸ PAUSE',
    resume: 'â–¶ï¸ CONTINUE',
    skip: 'â­ï¸ SKIP',
    reset: 'Reset',
    back: 'â† Back',
    next: 'Next:',
    roundComplete: 'Round',
    prepareForRound: 'Prepare for round',
    greatWork: 'Great work!',
    roundsComplete: 'Workout complete âœ“',
    finishWhoop: 'âœ… Finish Activity in WHOOP',
    startAgain: 'Start again',
    chooseAnother: 'Choose another',
    video: 'ðŸ“¹ Video',
    whoopTitle: 'WHOOP',
    whoopMessage: 'Open WHOOP â†’ Activity â†’ Strength Training',
    whoopConfirm: "Yes, let's go ðŸ’ª",
    whoopClose: 'Close',
    cooldownNote: 'ðŸ§˜ + cooldown',
    min: 'min',
    rounds: 'rounds',
  }
};

// ============================================
// MAIN COMPONENT
// ============================================

export default function WorkoutTimer() {
  const [lang, setLang] = useState('ru');
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [phase, setPhase] = useState('select'); // select, ready, exercise, rest, roundRest, cooldown, complete
  const [currentRound, setCurrentRound] = useState(1);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [currentCooldownIndex, setCurrentCooldownIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [showWhoopDialog, setShowWhoopDialog] = useState(false);

  const t = translations[lang];
  const workout = selectedWorkout ? WORKOUTS[selectedWorkout] : null;
  const exercises = workout ? workout.exercises[lang] : [];
  const cooldownStretches = cooldownData[lang];
  
  const currentExercise = exercises[currentExerciseIndex];
  const currentStretch = cooldownStretches[currentCooldownIndex];

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getEstimatedDuration = (w) => {
    const ex = w.exercises.en;
    const exerciseTime = ex.reduce((sum, e) => sum + e.duration, 0);
    const restTime = (ex.length - 1) * w.restBetweenExercises;
    const roundTime = exerciseTime + restTime;
    const totalTime = (roundTime * w.rounds) + ((w.rounds - 1) * w.restBetweenRounds);
    const cooldownTime = w.includeCooldown ? cooldownData.en.reduce((sum, s) => sum + s.duration, 0) : 0;
    return Math.round((totalTime + cooldownTime) / 60);
  };

  const playBeep = useCallback(() => {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    oscillator.frequency.value = 800;
    oscillator.type = 'sine';
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.3);
  }, []);

  const moveToNext = useCallback(() => {
    if (!workout) return;
    
    if (phase === 'exercise') {
      if (currentExerciseIndex < exercises.length - 1) {
        setPhase('rest');
        setTimeLeft(workout.restBetweenExercises);
      } else if (currentRound < workout.rounds) {
        setPhase('roundRest');
        setTimeLeft(workout.restBetweenRounds);
      } else if (workout.includeCooldown) {
        setPhase('cooldown');
        setCurrentCooldownIndex(0);
        setTimeLeft(cooldownStretches[0].duration);
      } else {
        setPhase('complete');
        setIsRunning(false);
      }
    } else if (phase === 'rest') {
      setCurrentExerciseIndex(prev => prev + 1);
      setPhase('exercise');
      setTimeLeft(exercises[currentExerciseIndex + 1].duration);
    } else if (phase === 'roundRest') {
      setCurrentRound(prev => prev + 1);
      setCurrentExerciseIndex(0);
      setPhase('exercise');
      setTimeLeft(exercises[0].duration);
    } else if (phase === 'cooldown') {
      if (currentCooldownIndex < cooldownStretches.length - 1) {
        setCurrentCooldownIndex(prev => prev + 1);
        setTimeLeft(cooldownStretches[currentCooldownIndex + 1].duration);
      } else {
        setPhase('complete');
        setIsRunning(false);
      }
    }
  }, [phase, currentExerciseIndex, currentRound, currentCooldownIndex, exercises, cooldownStretches, workout]);

  useEffect(() => {
    let interval = null;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 4 && prev > 1) playBeep();
          return prev - 1;
        });
      }, 1000);
    } else if (isRunning && timeLeft === 0 && phase !== 'select' && phase !== 'ready' && phase !== 'complete') {
      playBeep();
      moveToNext();
    }
    return () => clearInterval(interval);
  }, [isRunning, timeLeft, phase, moveToNext, playBeep]);

  const startWorkout = () => {
    setPhase('exercise');
    setTimeLeft(exercises[0].duration);
    setIsRunning(true);
  };

  const togglePause = () => setIsRunning(!isRunning);
  const skipToNext = () => moveToNext();

  const resetWorkout = () => {
    setPhase('ready');
    setCurrentRound(1);
    setCurrentExerciseIndex(0);
    setCurrentCooldownIndex(0);
    setTimeLeft(0);
    setIsRunning(false);
    setShowWhoopDialog(false);
  };

  const backToSelect = () => {
    setSelectedWorkout(null);
    setPhase('select');
    setCurrentRound(1);
    setCurrentExerciseIndex(0);
    setCurrentCooldownIndex(0);
    setTimeLeft(0);
    setIsRunning(false);
    setShowWhoopDialog(false);
  };

  const getBackgroundColor = () => {
    switch (phase) {
      case 'exercise': return 'bg-emerald-600';
      case 'rest': return 'bg-amber-500';
      case 'roundRest': return 'bg-blue-600';
      case 'cooldown': return 'bg-indigo-500';
      case 'complete': return 'bg-purple-600';
      default: return 'bg-slate-800';
    }
  };

  const getPhaseLabel = () => {
    switch (phase) {
      case 'exercise': return t.work;
      case 'rest': return t.rest;
      case 'roundRest': return t.roundRest;
      case 'cooldown': return t.cooldown;
      case 'complete': return t.complete;
      default: return '';
    }
  };

  const RoundBubbles = () => (
    <div className="flex gap-2">
      {Array.from({ length: workout.rounds }, (_, i) => i + 1).map(r => (
        <div
          key={r}
          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
            ${r < currentRound ? 'bg-white/40' : r === currentRound ? 'bg-white text-emerald-700' : 'bg-black/20'}`}
        >
          {r < currentRound ? 'âœ“' : r}
        </div>
      ))}
    </div>
  );

  const ExerciseBubbles = () => (
    <div className="flex gap-1.5">
      {exercises.map((_, i) => (
        <div
          key={i}
          className={`w-3 h-3 rounded-full
            ${i < currentExerciseIndex ? 'bg-white/40' : i === currentExerciseIndex ? 'bg-white' : 'bg-black/20'}`}
        />
      ))}
    </div>
  );

  const LanguageToggle = () => (
    <button
      onClick={() => setLang(lang === 'ru' ? 'en' : 'ru')}
      className="absolute top-4 right-4 bg-slate-600 hover:bg-slate-500 px-3 py-1.5 rounded-lg text-sm font-medium transition-all"
    >
      {lang === 'ru' ? 'EN' : 'RU'}
    </button>
  );

  // ============================================
  // WORKOUT SELECTION SCREEN
  // ============================================
  if (phase === 'select') {
    return (
      <div className="min-h-screen bg-slate-800 flex flex-col items-center p-4 text-white relative">
        <LanguageToggle />
        
        <h1 className="text-2xl font-bold mt-8 mb-6">{t.selectWorkout}</h1>
        
        <div className="w-full max-w-md space-y-3">
          {Object.values(WORKOUTS).map((w) => (
            <button
              key={w.id}
              onClick={() => {
                setSelectedWorkout(w.id);
                setPhase('ready');
              }}
              className="w-full bg-slate-700 hover:bg-slate-600 rounded-xl p-4 text-left transition-all"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-semibold">{w.name[lang]}</h2>
                  <p className="text-slate-400 text-sm">{w.description[lang]}</p>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold">~{getEstimatedDuration(w)}</span>
                  <span className="text-slate-400 text-sm ml-1">{t.min}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // ============================================
  // READY SCREEN (with exercise list)
  // ============================================
  if (phase === 'ready') {
    return (
      <div className="min-h-screen bg-slate-800 flex flex-col items-center justify-center p-4 text-white relative">
        <LanguageToggle />
        
        <button
          onClick={backToSelect}
          className="absolute top-4 left-4 text-slate-400 hover:text-white transition-colors"
        >
          {t.back}
        </button>
        
        {/* WHOOP Dialog */}
        {showWhoopDialog && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
            <div className="bg-slate-700 rounded-2xl p-6 max-w-sm w-full">
              <div className="text-4xl text-center mb-4">âŒš</div>
              <h2 className="text-xl font-bold text-center mb-2">{t.whoopTitle}</h2>
              <p className="text-center text-slate-300 mb-6">{t.whoopMessage}</p>
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => {
                    setShowWhoopDialog(false);
                    startWorkout();
                  }}
                  className="bg-emerald-500 hover:bg-emerald-400 font-bold py-4 rounded-xl text-lg transition-all"
                >
                  {t.whoopConfirm}
                </button>
                <button
                  onClick={() => setShowWhoopDialog(false)}
                  className="bg-slate-600 hover:bg-slate-500 font-bold py-3 rounded-xl transition-all"
                >
                  {t.whoopClose}
                </button>
              </div>
            </div>
          </div>
        )}

        <h1 className="text-2xl font-bold mb-1">{workout.name[lang]}</h1>
        <p className="text-slate-400 text-sm mb-4">
          {workout.rounds} {t.rounds} â€¢ ~{getEstimatedDuration(workout)} {t.min}
        </p>
        
        <div className="bg-slate-700 rounded-xl p-3 mb-3 w-full max-w-md">
          {exercises.map((ex, i) => (
            <div key={i} className="flex justify-between py-1.5 border-b border-slate-600 last:border-0 text-sm">
              <span>{ex.name}</span>
              <span className="text-slate-400">{ex.weight !== 'â€”' ? `${ex.weight} ` : ''}{ex.reps}</span>
            </div>
          ))}
        </div>

        {workout.includeCooldown && (
          <div className="bg-indigo-900/40 border border-indigo-500/50 rounded-xl p-2 mb-4 w-full max-w-md">
            <p className="text-center text-sm text-indigo-200">{t.cooldownNote}</p>
          </div>
        )}

        <button
          onClick={() => setShowWhoopDialog(true)}
          className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-5 px-14 rounded-2xl text-xl transition-all transform hover:scale-105 active:scale-95"
        >
          {t.start}
        </button>
      </div>
    );
  }

  // ============================================
  // COMPLETE SCREEN
  // ============================================
  if (phase === 'complete') {
    return (
      <div className={`min-h-screen ${getBackgroundColor()} flex flex-col items-center justify-center p-6 text-white`}>
        <div className="text-6xl mb-6">ðŸŽ‰</div>
        <h1 className="text-4xl font-bold mb-4">{t.greatWork}</h1>
        <p className="text-xl mb-8 opacity-90">{t.roundsComplete}</p>
        
        <div className="bg-white/20 rounded-xl p-4 mb-8">
          <p className="text-center font-semibold">{t.finishWhoop}</p>
        </div>

        <div className="flex flex-col gap-3">
          <button
            onClick={resetWorkout}
            className="bg-white/20 hover:bg-white/30 font-bold py-4 px-8 rounded-xl transition-all"
          >
            {t.startAgain}
          </button>
          <button
            onClick={backToSelect}
            className="bg-black/20 hover:bg-black/30 font-bold py-3 px-8 rounded-xl transition-all"
          >
            {t.chooseAnother}
          </button>
        </div>
      </div>
    );
  }

  // ============================================
  // COOLDOWN SCREEN
  // ============================================
  if (phase === 'cooldown') {
    return (
      <div className={`min-h-screen ${getBackgroundColor()} flex flex-col text-white transition-colors duration-500`}>
        <div className="flex justify-between items-center p-4 bg-black/20">
          <span className="text-lg font-semibold">{getPhaseLabel()}</span>
          <div className="flex gap-1.5">
            {cooldownStretches.map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full
                  ${i < currentCooldownIndex ? 'bg-white/40' : i === currentCooldownIndex ? 'bg-white' : 'bg-black/20'}`}
              />
            ))}
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center p-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">{currentStretch.name}</h1>
          <p className="text-xl opacity-80 mb-8 text-center max-w-md">{currentStretch.description}</p>
          <div className="text-8xl md:text-9xl font-mono font-bold my-4">
            {formatTime(timeLeft)}
          </div>
        </div>

        <div className="p-6 flex flex-col items-center gap-4">
          <div className="flex gap-4">
            <button onClick={togglePause} className="bg-white/20 hover:bg-white/30 font-bold py-4 px-8 rounded-xl text-xl transition-all">
              {isRunning ? t.pause : t.resume}
            </button>
            <button onClick={skipToNext} className="bg-black/20 hover:bg-black/30 font-bold py-4 px-8 rounded-xl text-xl transition-all">
              {t.skip}
            </button>
          </div>
          <button onClick={resetWorkout} className="opacity-40 hover:opacity-100 transition-opacity text-sm">
            {t.reset}
          </button>
        </div>
      </div>
    );
  }

  // ============================================
  // MAIN WORKOUT SCREEN
  // ============================================
  return (
    <div className={`min-h-screen ${getBackgroundColor()} flex flex-col text-white transition-colors duration-500`}>
      <div className="flex justify-between items-center p-4 bg-black/20">
        <span className="text-lg font-semibold">{getPhaseLabel()}</span>
        <div className="flex items-center gap-4">
          <RoundBubbles />
          <div className="w-px h-6 bg-white/30" />
          <ExerciseBubbles />
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-6">
        {phase === 'exercise' && (
          <>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">{currentExercise.name}</h1>
            <div className="flex gap-4 justify-center text-2xl mb-4">
              {currentExercise.weight !== 'â€”' && (
                <span className="bg-black/20 px-5 py-3 rounded-xl font-semibold">{currentExercise.weight}</span>
              )}
              <span className="bg-black/20 px-5 py-3 rounded-xl font-semibold">{currentExercise.reps}</span>
            </div>
            {currentExercise.video && (
              <a href={currentExercise.video} target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 underline transition-opacity mb-4">
                {t.video}
              </a>
            )}
          </>
        )}

        {phase === 'rest' && (
          <div className="text-center">
            <p className="text-xl mb-2 opacity-70">{t.next}</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{exercises[currentExerciseIndex + 1]?.name}</h1>
            <div className="bg-black/20 px-6 py-3 rounded-xl inline-block">
              <span className="text-xl">ðŸ‹ï¸ {exercises[currentExerciseIndex + 1]?.equipment}</span>
            </div>
          </div>
        )}

        {phase === 'roundRest' && (
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-2">{t.roundComplete} {currentRound} âœ“</h1>
            <p className="text-2xl opacity-80 mb-6">{t.prepareForRound} {currentRound + 1}</p>
            <div className="bg-black/20 px-6 py-3 rounded-xl inline-block">
              <span className="text-xl">ðŸ‹ï¸ {exercises[0].equipment}</span>
            </div>
          </div>
        )}

        <div className="text-8xl md:text-9xl font-mono font-bold my-8">
          {formatTime(timeLeft)}
        </div>
      </div>

      <div className="p-6 flex flex-col items-center gap-4">
        <div className="flex gap-4">
          <button onClick={togglePause} className="bg-white/20 hover:bg-white/30 font-bold py-4 px-8 rounded-xl text-xl transition-all">
            {isRunning ? t.pause : t.resume}
          </button>
          <button onClick={skipToNext} className="bg-black/20 hover:bg-black/30 font-bold py-4 px-8 rounded-xl text-xl transition-all">
            {t.skip}
          </button>
        </div>
        <button onClick={resetWorkout} className="opacity-40 hover:opacity-100 transition-opacity text-sm">
          {t.reset}
        </button>
      </div>
    </div>
  );
}
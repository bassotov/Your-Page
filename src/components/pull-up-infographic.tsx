"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
  Tooltip,
} from "recharts";

const milestones: Record<string, string> = {
  Feb: "17 Feb: First pull-up ever",
  Apr: "19 Apr: First 2-rep set",
  Jun: "4 Jun: First 3-rep set",
  Jul: "28 Jul: First 5-rep set",
  Oct: '16 Oct: 8-rep set "WTF HOW??"',
  Dec: "1 Dec: First 10-rep set",
};

const data = [
  { month: "Jan", sessions: 6, total: 0, bestSet: 0, bestDay: 0 },
  { month: "Feb", sessions: 9, total: 5, bestSet: 1, bestDay: 2 },
  { month: "Mar", sessions: 7, total: 15, bestSet: 1, bestDay: 3 },
  { month: "Apr", sessions: 8, total: 28, bestSet: 2, bestDay: 4 },
  { month: "May", sessions: 6, total: 29, bestSet: 2, bestDay: 6 },
  { month: "Jun", sessions: 4, total: 33, bestSet: 4, bestDay: 10 },
  { month: "Jul", sessions: 6, total: 70, bestSet: 5, bestDay: 14 },
  { month: "Aug", sessions: 5, total: 84, bestSet: 6, bestDay: 18 },
  { month: "Sep", sessions: 8, total: 151, bestSet: 7, bestDay: 22 },
  { month: "Oct", sessions: 8, total: 180, bestSet: 8, bestDay: 27 },
  { month: "Nov", sessions: 9, total: 196, bestSet: 9, bestDay: 28 },
  { month: "Dec", sessions: 9, total: 188, bestSet: 10, bestDay: 25 },
];

const getBarColor = (value: number, isDark: boolean) => {
  if (isDark) {
    if (value === 0) return "#3a3a3a";
    if (value <= 2) return "#4a5568";
    if (value <= 5) return "#2d6a4f";
    if (value <= 7) return "#40916c";
    if (value <= 9) return "#52b788";
    return "#95d5b2";
  } else {
    if (value === 0) return "#e2e8f0";
    if (value <= 2) return "#94a3b8";
    if (value <= 5) return "#40916c";
    if (value <= 7) return "#2d6a4f";
    if (value <= 9) return "#1b4332";
    return "#081c15";
  }
};

interface TooltipPayload {
  value: number;
  payload: {
    sessions: number;
  };
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: TooltipPayload[];
  label?: string;
  unit: string;
  isDark: boolean;
}

const CustomTooltip = ({ active, payload, label, unit, isDark }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    const milestone = label ? milestones[label] : null;
    return (
      <div
        className={`rounded-xl px-4 py-3 max-w-[220px] ${
          isDark
            ? "bg-[#1a1a1a] border border-[#333] text-white"
            : "bg-white border border-gray-200 text-gray-900 shadow-lg"
        }`}
      >
        <p className={`m-0 font-bold text-lg ${isDark ? "text-[#52b788]" : "text-[#2d6a4f]"}`}>
          {payload[0].value} {unit}
        </p>
        <p className={`mt-1 text-sm ${isDark ? "text-[#888]" : "text-gray-500"}`}>
          {label} • {payload[0].payload.sessions} sessions
        </p>
        {milestone && (
          <p
            className={`mt-2 px-2.5 py-2 rounded-md text-sm border-l-[3px] ${
              isDark
                ? "bg-[#252525] text-[#d4d4d4] border-l-[#52b788]"
                : "bg-gray-50 text-gray-700 border-l-[#2d6a4f]"
            }`}
          >
            {milestone}
          </p>
        )}
      </div>
    );
  }
  return null;
};

interface CustomCursorProps {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
}

const CustomCursor = ({ x, y, width, height }: CustomCursorProps) => {
  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      fill="rgba(82, 183, 136, 0.15)"
      rx={4}
    />
  );
};

interface PullUpInfographicProps {
  forceDark?: boolean;
}

export function PullUpInfographic({ forceDark = false }: PullUpInfographicProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Default to dark theme colors during SSR to avoid hydration mismatch
  const isDark = forceDark || !mounted || resolvedTheme === "dark";

  const chartColors = {
    stroke: isDark ? "#52b788" : "#2d6a4f",
    axisText: isDark ? "#666" : "#9ca3af",
    cursorStroke: isDark ? "rgba(82, 183, 136, 0.3)" : "rgba(45, 106, 79, 0.3)",
  };

  return (
    <div className="bg-gray-50 dark:bg-[#0a0a0a] text-gray-900 dark:text-[#fafafa] rounded-xl p-6 md:p-8 mt-6 border border-gray-200 dark:border-[#1f1f1f]">
      <div>
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-xs tracking-[4px] text-[#2d6a4f] dark:text-[#52b788] mb-3 font-medium">
            2024 PROGRESS REPORT
          </p>
          <h3 className="text-3xl md:text-4xl font-extrabold mb-3 leading-tight">
            From <span className="text-gray-300 dark:text-[#3a3a3a]">0</span> to{" "}
            <span className="text-[#2d6a4f] dark:text-[#95d5b2]">10</span>
          </h3>
          <p className="text-lg text-gray-500 dark:text-[#a0a0a0] font-light">A Year of Pull-Ups</p>
        </div>

        {/* Big Numbers */}
        <div className="grid grid-cols-3 gap-3 md:gap-5 mb-8">
          <div className="bg-white dark:bg-gradient-to-br dark:from-[#1a1a1a] dark:to-[#0d0d0d] rounded-xl p-4 md:p-6 text-center border border-gray-200 dark:border-[#2a2a2a] shadow-sm dark:shadow-none">
            <p className="text-3xl md:text-4xl font-extrabold text-[#2d6a4f] dark:text-[#52b788]">
              979
            </p>
            <p className="text-[10px] md:text-xs text-gray-500 dark:text-[#888] mt-1 tracking-wider">
              TOTAL REPS
            </p>
          </div>
          <div className="bg-white dark:bg-gradient-to-br dark:from-[#1a1a1a] dark:to-[#0d0d0d] rounded-xl p-4 md:p-6 text-center border border-gray-200 dark:border-[#2a2a2a] shadow-sm dark:shadow-none">
            <p className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-[#fafafa]">
              85
            </p>
            <p className="text-[10px] md:text-xs text-gray-500 dark:text-[#888] mt-1 tracking-wider">
              SESSIONS
            </p>
          </div>
          <div className="bg-white dark:bg-gradient-to-br dark:from-[#1a1a1a] dark:to-[#0d0d0d] rounded-xl p-4 md:p-6 text-center border border-gray-200 dark:border-[#2a2a2a] shadow-sm dark:shadow-none relative overflow-visible">
            <span className="absolute -top-2 -right-2 text-2xl rotate-[15deg] drop-shadow-md">
              🎉
            </span>
            <p className="text-3xl md:text-4xl font-extrabold text-[#1b4332] dark:text-[#95d5b2]">
              10
            </p>
            <p className="text-[10px] md:text-xs text-gray-500 dark:text-[#888] mt-1 tracking-wider">
              BEST SET
            </p>
            <p className="text-[10px] text-gray-400 dark:text-[#555] mt-0.5">Dec 15th</p>
          </div>
        </div>

        {/* Monthly Volume Chart */}
        <div className="bg-white dark:bg-[#111] rounded-xl p-5 md:p-6 mb-4 border border-gray-200 dark:border-[#1f1f1f] shadow-sm dark:shadow-none">
          <h4 className="text-xs tracking-[2px] text-gray-500 dark:text-[#666] mb-1 font-medium">
            MONTHLY VOLUME
          </h4>
          <p className="text-[11px] text-gray-400 dark:text-[#444] mb-4">Hover for milestones</p>
          <ResponsiveContainer width="100%" height={160}>
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={chartColors.stroke} stopOpacity={0.4} />
                  <stop offset="95%" stopColor={chartColors.stroke} stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fill: chartColors.axisText, fontSize: 11 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: chartColors.axisText, fontSize: 11 }}
              />
              <Tooltip
                content={<CustomTooltip unit="reps" isDark={isDark} />}
                cursor={{ stroke: chartColors.cursorStroke, strokeWidth: 2 }}
              />
              <Area
                type="monotone"
                dataKey="total"
                stroke={chartColors.stroke}
                strokeWidth={3}
                fill="url(#colorTotal)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Best Set Progress */}
        <div className="bg-white dark:bg-[#111] rounded-xl p-5 md:p-6 border border-gray-200 dark:border-[#1f1f1f] shadow-sm dark:shadow-none">
          <h4 className="text-xs tracking-[2px] text-gray-500 dark:text-[#666] mb-1 font-medium">
            BEST SINGLE SET BY MONTH
          </h4>
          <p className="text-[11px] text-gray-400 dark:text-[#444] mb-4">Hover for milestones</p>
          <ResponsiveContainer width="100%" height={140}>
            <BarChart data={data} barCategoryGap="20%">
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fill: chartColors.axisText, fontSize: 11 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: chartColors.axisText, fontSize: 11 }}
                domain={[0, 10]}
              />
              <Tooltip content={<CustomTooltip unit="reps" isDark={isDark} />} cursor={<CustomCursor />} />
              <Bar dataKey="bestSet" radius={[4, 4, 0, 0]}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={getBarColor(entry.bestSet, isDark)} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Video */}
        <div className="mt-6 flex justify-center">
          <div className="w-full max-w-[280px] aspect-[9/16] rounded-xl overflow-hidden border border-gray-200 dark:border-[#1f1f1f] shadow-sm dark:shadow-none">
            <iframe
              src="https://www.youtube.com/embed/k2_vdUDCmJc"
              title="Pull-up progress video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-400 dark:text-[#555] text-sm mt-6">
          Consistency beats intensity. 85 sessions. One rep at a time.
        </p>
      </div>
    </div>
  );
}

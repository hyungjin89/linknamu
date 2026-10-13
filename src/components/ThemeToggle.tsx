"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !isDark;
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
    setIsDark(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "밝은 화면으로 전환" : "어두운 화면으로 전환"}
      className="fixed right-4 top-4 rounded-full border border-gray-300 bg-white/80 p-2 text-xl leading-none backdrop-blur transition hover:scale-105 dark:border-gray-700 dark:bg-gray-800/80"
    >
      {/* 마운트 전에는 테마를 알 수 없으므로 빈 자리만 유지해 깜빡임을 막습니다. */}
      <span className="inline-block h-6 w-6">{isDark === null ? "" : isDark ? "☀️" : "🌙"}</span>
    </button>
  );
}

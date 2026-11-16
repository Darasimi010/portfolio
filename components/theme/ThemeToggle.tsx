"use client";

import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle({ showLabel = false }: { showLabel?: boolean }) {
  const { resolvedTheme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle light and dark theme"
      className="relative flex items-center justify-center p-2 rounded-xl bg-slate-200/70 hover:bg-slate-300/80 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 text-slate-800 dark:text-slate-100 transition-all duration-200 shadow-xs hover:scale-105 active:scale-95 border border-slate-300/60 dark:border-slate-700/60 cursor-pointer"
      title={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {resolvedTheme === "dark" ? (
          <Moon className="w-4 h-4 text-indigo-300 transition-transform duration-300 rotate-0 scale-100" />
        ) : (
          <Sun className="w-4 h-4 text-amber-500 transition-transform duration-300 rotate-0 scale-100" />
        )}
      </div>
      {showLabel && (
        <span className="ml-2 text-xs font-medium">
          {resolvedTheme === "dark" ? "Dark Mode" : "Light Mode"}
        </span>
      )}
    </button>
  );
}

"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon, Monitor } from "lucide-react";
import { motion } from "motion/react";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={`w-9 h-9 rounded-full bg-slate-200 dark:bg-slate-800 animate-pulse ${className}`} />
    );
  }

  const nextTheme = resolvedTheme === "dark" ? "light" : "dark";

  return (
    <div className={`relative flex items-center bg-slate-100 dark:bg-slate-800/80 p-1 rounded-full border border-slate-200 dark:border-slate-700/60 shadow-xs ${className}`}>
      <button
        onClick={() => setTheme("light")}
        className={`relative p-1.5 rounded-full transition-colors ${
          theme === "light"
            ? "text-amber-500 font-medium"
            : "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
        }`}
        title="Light theme"
        aria-label="Switch to light theme"
      >
        {theme === "light" && (
          <motion.div
            layoutId="theme-active-indicator"
            className="absolute inset-0 bg-white dark:bg-slate-700 rounded-full shadow-xs -z-10"
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
        )}
        <Sun className="w-4 h-4" />
      </button>

      <button
        onClick={() => setTheme("dark")}
        className={`relative p-1.5 rounded-full transition-colors ${
          theme === "dark"
            ? "text-indigo-400 font-medium"
            : "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
        }`}
        title="Dark theme"
        aria-label="Switch to dark theme"
      >
        {theme === "dark" && (
          <motion.div
            layoutId="theme-active-indicator"
            className="absolute inset-0 bg-white dark:bg-slate-700 rounded-full shadow-xs -z-10"
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
        )}
        <Moon className="w-4 h-4" />
      </button>

      <button
        onClick={() => setTheme("system")}
        className={`relative p-1.5 rounded-full transition-colors ${
          theme === "system"
            ? "text-emerald-500 font-medium"
            : "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
        }`}
        title="System preference"
        aria-label="Follow system theme"
      >
        {theme === "system" && (
          <motion.div
            layoutId="theme-active-indicator"
            className="absolute inset-0 bg-white dark:bg-slate-700 rounded-full shadow-xs -z-10"
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
        )}
        <Monitor className="w-4 h-4" />
      </button>
    </div>
  );
}

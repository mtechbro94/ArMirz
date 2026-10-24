"use client";

import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      className={`relative p-2.5 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 ${
        theme === "dark"
          ? "bg-slate-900/80 border-slate-700/80 text-amber-400 hover:border-amber-400/50 hover:bg-slate-800"
          : "bg-white/90 border-slate-200 text-slate-800 hover:border-indigo-400/50 hover:bg-slate-100 shadow-sm"
      } ${className}`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {theme === "dark" ? (
          <Sun className="w-4 h-4 transition-transform duration-300 rotate-0 hover:rotate-45" />
        ) : (
          <Moon className="w-4 h-4 transition-transform duration-300 text-indigo-600 rotate-0 hover:-rotate-12" />
        )}
      </div>
    </button>
  );
}

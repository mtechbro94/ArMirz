import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-24 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-cyan-500 bg-cyan-500/10 border border-cyan-500/20">
          <Sparkles className="w-3.5 h-3.5" />
          <span>ERROR 404</span>
        </div>
        
        <h1 className="text-5xl sm:text-6xl font-display font-extrabold text-slate-900 dark:text-white">
          404
        </h1>
        
        <p className="text-base text-slate-600 dark:text-slate-400">
          The requested coordinate could not be resolved in the model space. It may have been relocated or updated.
        </p>

        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-indigo-400 hover:opacity-95 shadow-md shadow-cyan-500/20"
          >
            <Home className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

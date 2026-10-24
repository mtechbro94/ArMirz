"use client";

import React, { useState } from "react";
import { workshopsData, Workshop } from "@/data/workshops";
import {
  GraduationCap,
  Users,
  Presentation,
  Terminal,
  BookOpen,
  Sparkles,
  CheckCircle2,
  Calendar,
  Layers,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export function TeachingSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "GenAI & LLMs", "Cloud & DevOps", "Data Science & Python", "Agentic Systems"];

  const filteredWorkshops =
    selectedCategory === "All"
      ? workshopsData
      : workshopsData.filter((w) => w.category === selectedCategory);

  return (
    <section id="teaching" className="py-24 relative scroll-mt-20 border-t border-slate-200/80 dark:border-zinc-800/80 bg-slate-50/50 dark:bg-zinc-950/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-slate-700 dark:text-zinc-300 bg-slate-100 dark:bg-zinc-800/70 border border-slate-200 dark:border-zinc-700/80 mb-3">
            <span>TECHNICAL EDUCATION &bull; WORKSHOPS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
            Democratizing AI Engineering Through Project-Based Mentorship
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-zinc-400 leading-relaxed">
            Bridging theoretical concepts with hands-on systems programming. Over 500+ engineers, students, and faculty trained across 15+ specialized technical workshops.
          </p>

          {/* Stats Bar */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl">
            <div className="p-3.5 rounded-xl bg-white dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800 shadow-xs text-center">
              <div className="text-xl sm:text-2xl font-display font-extrabold text-slate-900 dark:text-zinc-100">500+</div>
              <div className="text-[11px] text-slate-500 dark:text-zinc-400 mt-0.5">Engineers Trained</div>
            </div>
            <div className="p-3.5 rounded-xl bg-white dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800 shadow-xs text-center">
              <div className="text-xl sm:text-2xl font-display font-extrabold text-slate-900 dark:text-zinc-100">15+</div>
              <div className="text-[11px] text-slate-500 dark:text-zinc-400 mt-0.5">Bootcamps &amp; Seminars</div>
            </div>
            <div className="p-3.5 rounded-xl bg-white dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800 shadow-xs text-center">
              <div className="text-xl sm:text-2xl font-display font-extrabold text-slate-900 dark:text-zinc-100">100+</div>
              <div className="text-[11px] text-slate-500 dark:text-zinc-400 mt-0.5">Capstones Mentored</div>
            </div>
            <div className="p-3.5 rounded-xl bg-white dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800 shadow-xs text-center">
              <div className="text-xl sm:text-2xl font-display font-extrabold text-slate-900 dark:text-zinc-100">3+</div>
              <div className="text-[11px] text-slate-500 dark:text-zinc-400 mt-0.5">Years in Academia</div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="mt-6 flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-slate-900 text-white dark:bg-zinc-100 dark:text-zinc-950 shadow-sm"
                    : "bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Workshop Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWorkshops.map((workshop, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white dark:bg-zinc-900/40 border border-slate-200 dark:border-zinc-800 hover:border-slate-400 dark:hover:border-zinc-700 shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300">
                    {workshop.category}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500 dark:text-zinc-400">
                    {workshop.duration}
                  </span>
                </div>

                <h3 className="font-display font-bold text-base text-slate-900 dark:text-zinc-100 mb-1">
                  {workshop.title}
                </h3>

                <p className="text-xs text-slate-500 dark:text-zinc-400 mb-3 font-mono">
                  {workshop.institution}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 mb-4 leading-relaxed">
                  {workshop.description}
                </p>

                <div className="space-y-1.5 mb-4 pt-3 border-t border-slate-100 dark:border-zinc-800/80">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-zinc-400 font-semibold">
                    Core Topics:
                  </div>
                  {workshop.keyTopics.map((topic, i) => (
                    <div key={i} className="text-xs text-slate-600 dark:text-zinc-300 flex items-start gap-1.5">
                      <span className="inline-block w-1 h-1 rounded-full bg-slate-400 dark:bg-zinc-500 mt-1.5 flex-shrink-0" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-zinc-800/80 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 dark:text-zinc-400 font-mono">
                  {workshop.audience.split("(")[0]}
                </span>
                <Link
                  href="#contact"
                  className="text-xs font-semibold text-slate-800 dark:text-zinc-200 hover:text-slate-950 dark:hover:text-white flex items-center gap-1 transition-colors"
                >
                  <span>Book Session</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Collaboration Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-slate-900 dark:bg-zinc-900 border border-slate-800 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1.5 text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-display font-bold">
              Looking for a Technical Speaker, Corporate Trainer, or Academic Advisor?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Available for university guest lectures, corporate GenAI bootcamps, and outcome-based curriculum architecture.
            </p>
          </div>
          <Link
            href="#contact"
            className="flex-shrink-0 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-slate-950 bg-white hover:bg-slate-100 transition-colors"
          >
            Schedule a Discussion
          </Link>
        </div>

      </div>
    </section>
  );
}

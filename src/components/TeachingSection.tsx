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
    <section id="teaching" className="py-24 relative scroll-mt-20 bg-slate-50/50 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 mb-4">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>EDUCATOR &amp; TRAINER IDENTITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Democratizing AI Engineering Through Project-Based Mentorship
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            As a former Assistant Professor and technical trainer, I bridge academic rigor with real-world industry engineering. Over 500+ engineers, students, and faculty trained across 15+ specialized technical workshops.
          </p>

          {/* Stats Bar */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-center">
              <div className="text-2xl sm:text-3xl font-display font-extrabold text-cyan-500">500+</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Engineers &amp; Students Trained</div>
            </div>
            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-center">
              <div className="text-2xl sm:text-3xl font-display font-extrabold text-indigo-500">15+</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Intensive Workshops &amp; Boot Camps</div>
            </div>
            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-center">
              <div className="text-2xl sm:text-3xl font-display font-extrabold text-purple-500">100+</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Capstone Projects Mentored</div>
            </div>
            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-center">
              <div className="text-2xl sm:text-3xl font-display font-extrabold text-emerald-500">3+</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Years Teaching Experience</div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/20"
                    : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-cyan-500/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Workshop Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWorkshops.map((workshop, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                    {workshop.category}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                    {workshop.duration}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-2 group-hover:text-cyan-500 transition-colors">
                  {workshop.title}
                </h3>

                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-3">
                  {workshop.institution}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  {workshop.description}
                </p>

                <div className="space-y-2 mb-4 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                  <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Core Topics Covered:
                  </div>
                  {workshop.keyTopics.map((topic, i) => (
                    <div key={i} className="text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 mt-0.5 flex-shrink-0" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                  Audience: {workshop.audience.split("(")[0]}
                </span>
                <Link
                  href="#contact"
                  className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 flex items-center gap-1"
                >
                  <span>Book Session</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Collaboration Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border border-cyan-500/30 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-cyan-500/10">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-display font-bold">
              Looking for a Technical Speaker, Corporate Trainer or Academic Consultant?
            </h3>
            <p className="text-sm text-slate-300 max-w-2xl">
              Available for university guest lectures, corporate GenAI bootcamps, executive AI seminars, and outcome-based curriculum design.
            </p>
          </div>
          <Link
            href="#contact"
            className="flex-shrink-0 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-indigo-400 hover:opacity-95 shadow-md shadow-cyan-500/20"
          >
            Schedule a Discussion
          </Link>
        </div>

      </div>
    </section>
  );
}

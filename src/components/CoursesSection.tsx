"use client";

import React, { useState } from "react";
import { coursesData, Course } from "@/data/courses";
import {
  BookOpen,
  CheckCircle2,
  Clock,
  Layers,
  ArrowRight,
  Building2,
} from "lucide-react";
import Link from "next/link";

export function CoursesSection() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  const categories = ["All", "Generative AI", "Agentic AI", "Data Science & ML", "Core Programming"];

  const filteredCourses =
    selectedFilter === "All"
      ? coursesData
      : coursesData.filter((c) => c.category === selectedFilter);

  return (
    <section id="courses" className="py-24 relative scroll-mt-20 border-t border-slate-200/80 dark:border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-slate-700 dark:text-zinc-300 bg-slate-100 dark:bg-zinc-800/70 border border-slate-200 dark:border-zinc-700/80 mb-3">
            <span>CURRICULUM ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
            Curated Curricula &amp; Masterclasses
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-zinc-400 leading-relaxed">
            Engineered for practitioners who seek first-principles structural intuition over superficial tutorials. Delivered via <strong className="text-slate-900 dark:text-zinc-200">The Coding Science</strong>.
          </p>

          {/* Filter Pills */}
          <div className="mt-6 flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedFilter === cat
                    ? "bg-slate-900 text-white dark:bg-zinc-100 dark:text-zinc-950 shadow-sm"
                    : "bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-900/40 border border-slate-200 dark:border-zinc-800 hover:border-slate-400 dark:hover:border-zinc-700 shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header Badge */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300">
                      {course.category}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 dark:text-zinc-400">
                      {course.level}
                    </span>
                  </div>
                  {course.badge && (
                    <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                      {course.badge}
                    </span>
                  )}
                </div>

                {/* Course Title */}
                <h3 className="text-lg sm:text-xl font-display font-bold text-slate-900 dark:text-zinc-100 mb-2">
                  {course.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 mb-5 leading-relaxed">
                  {course.description}
                </p>

                {/* Duration & Delivery */}
                <div className="flex items-center gap-4 text-xs font-mono text-slate-500 dark:text-zinc-400 mb-4 pb-3 border-b border-slate-100 dark:border-zinc-800">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    {course.duration}
                  </span>
                  {course.associatedOrg && (
                    <span className="flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-slate-400" />
                      {course.associatedOrg}
                    </span>
                  )}
                </div>

                {/* Syllabus Modules */}
                <div className="space-y-1.5 mb-5">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-zinc-400 font-semibold">
                    Curriculum Modules:
                  </div>
                  {course.curriculum.map((mod, i) => (
                    <div key={i} className="text-xs text-slate-600 dark:text-zinc-300 flex items-start gap-1.5">
                      <span className="inline-block w-1 h-1 rounded-full bg-slate-400 dark:bg-zinc-500 mt-1.5 flex-shrink-0" />
                      <span>{mod}</span>
                    </div>
                  ))}
                </div>

                <div className="p-3 rounded-lg bg-slate-50 dark:bg-zinc-950/60 border border-slate-100 dark:border-zinc-800/80 mb-5 text-xs text-slate-600 dark:text-zinc-400">
                  <span className="font-semibold text-slate-800 dark:text-zinc-200">Prerequisites:</span>{" "}
                  {course.prerequisites}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-3 border-t border-slate-100 dark:border-zinc-800 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 font-mono">
                  {course.targetAudience.split(",")[0]}
                </span>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-900 dark:text-zinc-100 border border-slate-300 dark:border-zinc-700 hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors"
                >
                  <span>Inquire / Enroll</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

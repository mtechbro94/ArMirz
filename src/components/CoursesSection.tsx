"use client";

import React, { useState } from "react";
import { coursesData, Course } from "@/data/courses";
import {
  BookOpen,
  CheckCircle2,
  Clock,
  Layers,
  Sparkles,
  ArrowRight,
  ShieldCheck,
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
    <section id="courses" className="py-24 relative scroll-mt-20">
      {/* Background glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>LEARNING PATHWAYS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Curated Curricula &amp; Masterclasses
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Engineered for practitioners who want deep structural understanding rather than surface-level tutorials. Designed and taught by Aaqib Rashid Mir in partnership with <strong className="text-slate-900 dark:text-slate-200">The Coding Science</strong>.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  selectedFilter === cat
                    ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md shadow-indigo-500/20"
                    : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-indigo-500/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="p-8 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/40 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header Badge */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                      {course.category}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      {course.level}
                    </span>
                  </div>
                  {course.badge && (
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                      {course.badge}
                    </span>
                  )}
                </div>

                {/* Course Title */}
                <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-400 transition-colors">
                  {course.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  {course.description}
                </p>

                {/* Duration & Delivery */}
                <div className="flex items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-400 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-indigo-500" />
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
                <div className="space-y-2.5 mb-6">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
                    Curriculum Modules:
                  </div>
                  {course.curriculum.map((mod, i) => (
                    <div key={i} className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                      <span>{mod}</span>
                    </div>
                  ))}
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800/80 mb-6 text-xs text-slate-600 dark:text-slate-400">
                  <span className="font-semibold text-slate-800 dark:text-slate-200">Prerequisites:</span>{" "}
                  {course.prerequisites}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-mono">
                  Target: {course.targetAudience.split(",")[0]}
                </span>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 transition-colors"
                >
                  <span>Inquire / Enroll</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

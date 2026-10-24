"use client";

import React, { useState } from "react";
import { testimonialsData, Testimonial } from "@/data/testimonials";
import { Quote, Star, CheckCircle2, MessageSquare } from "lucide-react";

export function TestimonialsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Student", "Faculty & Research", "Corporate Engineer"];

  const filteredTestimonials =
    activeCategory === "All"
      ? testimonialsData
      : testimonialsData.filter((t) => t.category === activeCategory);

  return (
    <section id="testimonials" className="py-24 relative scroll-mt-20 border-t border-slate-200/80 dark:border-zinc-800/80 bg-slate-50/50 dark:bg-zinc-950/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-slate-700 dark:text-zinc-300 bg-slate-100 dark:bg-zinc-800/70 border border-slate-200 dark:border-zinc-700/80 mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>PEDAGOGICAL IMPACT &bull; ENDORSEMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
            Voices from Classrooms, Labs &amp; Bootcamps
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-zinc-400 leading-relaxed">
            Real feedback from engineering students, faculty members, and working developers trained through university lectures and The Coding Science cohorts.
          </p>

          {/* Filter Pills */}
          <div className="mt-6 flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                type="button"
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-slate-900 text-white dark:bg-zinc-100 dark:text-zinc-950 shadow-xs"
                    : "bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredTestimonials.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-900/40 border border-slate-200 dark:border-zinc-800 hover:border-slate-400 dark:hover:border-zinc-700 shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                {/* Quote Header */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                    <Quote className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400">
                    {item.category}
                  </span>
                </div>

                {/* Highlight */}
                <p className="text-sm font-semibold text-slate-900 dark:text-zinc-100 mb-3 font-display">
                  &ldquo;{item.highlight}&rdquo;
                </p>

                {/* Content */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-6">
                  {item.content}
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-slate-100 dark:border-zinc-800/80 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-slate-900 text-white dark:bg-zinc-800 dark:text-zinc-200 flex items-center justify-center font-mono font-bold text-xs shrink-0 border border-slate-200 dark:border-zinc-700">
                  {item.avatarInitials}
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs font-bold text-slate-900 dark:text-zinc-100 truncate">
                    {item.name}
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-zinc-400 truncate">
                    {item.role} &bull; {item.organization}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

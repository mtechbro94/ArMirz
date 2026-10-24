"use client";

import React, { useState } from "react";
import { skillCategories, SkillCategory } from "@/data/skills";
import {
  BrainCircuit,
  Bot,
  Cpu,
  Code2,
  Cloud,
  BarChart3,
  Layers,
  Sparkles,
  Check,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  BrainCircuit: <BrainCircuit className="w-5 h-5" />,
  Bot: <Bot className="w-5 h-5" />,
  Cpu: <Cpu className="w-5 h-5" />,
  Code2: <Code2 className="w-5 h-5" />,
  Cloud: <Cloud className="w-5 h-5" />,
  BarChart3: <BarChart3 className="w-5 h-5" />,
};

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const displayedCategories =
    selectedCategory === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === selectedCategory);

  return (
    <section id="skills" className="py-24 relative scroll-mt-20 bg-slate-50/50 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>VERIFIED CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Technical Competencies Grounded in Code &amp; Research
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Every technology listed below represents verified hands-on engineering from deployed applications, peer-reviewed publications, or formal curriculum delivery.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === "all"
                  ? "bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/20"
                  : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-cyan-500/40"
              }`}
            >
              All Domains
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                  selectedCategory === cat.id
                    ? "bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/20"
                    : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-cyan-500/40"
                }`}
              >
                <span>{cat.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedCategories.map((cat) => (
            <div
              key={cat.id}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-cyan-500/40 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 group-hover:scale-110 transition-transform">
                    {iconMap[cat.iconName] || <Cpu className="w-5 h-5" />}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                      {cat.name}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400 mb-5 leading-normal">
                  {cat.description}
                </p>

                {/* Skills List */}
                <div className="space-y-3">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="font-medium text-xs sm:text-sm text-slate-900 dark:text-slate-200 flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-cyan-500" />
                          {skill.name}
                        </span>
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                            skill.level === "Advanced"
                              ? "bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 border-cyan-500/30"
                              : skill.level === "Proficient"
                              ? "bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 border-indigo-500/30"
                              : "bg-slate-500/10 text-slate-600 dark:text-slate-300 border-slate-500/30"
                          }`}
                        >
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 pl-5">
                        {skill.context}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

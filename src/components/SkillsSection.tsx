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
  Check,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  BrainCircuit: <BrainCircuit className="w-4 h-4 text-slate-700 dark:text-zinc-300" />,
  Bot: <Bot className="w-4 h-4 text-slate-700 dark:text-zinc-300" />,
  Cpu: <Cpu className="w-4 h-4 text-slate-700 dark:text-zinc-300" />,
  Code2: <Code2 className="w-4 h-4 text-slate-700 dark:text-zinc-300" />,
  Cloud: <Cloud className="w-4 h-4 text-slate-700 dark:text-zinc-300" />,
  BarChart3: <BarChart3 className="w-4 h-4 text-slate-700 dark:text-zinc-300" />,
};

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const displayedCategories =
    selectedCategory === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === selectedCategory);

  return (
    <section id="skills" className="py-24 relative scroll-mt-20 border-t border-slate-200/80 dark:border-zinc-800/80 bg-slate-50/50 dark:bg-zinc-950/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-slate-700 dark:text-zinc-300 bg-slate-100 dark:bg-zinc-800/70 border border-slate-200 dark:border-zinc-700/80 mb-3">
            <span>TECHNICAL PROFICIENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
            Competencies Grounded in Code &amp; Research
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-zinc-400 leading-relaxed">
            Skills backed by production deployments, formal university curricula, and peer-reviewed benchmark evaluations.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedCategory === "all"
                  ? "bg-slate-900 text-white dark:bg-zinc-100 dark:text-zinc-950 shadow-sm"
                  : "bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200"
              }`}
            >
              All Domains
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                  selectedCategory === cat.id
                    ? "bg-slate-900 text-white dark:bg-zinc-100 dark:text-zinc-950 shadow-sm"
                    : "bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200"
                }`}
              >
                <span>{cat.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((cat) => (
            <div
              key={cat.id}
              className="p-5 rounded-2xl bg-white dark:bg-zinc-900/40 border border-slate-200 dark:border-zinc-800 shadow-sm hover:border-slate-400 dark:hover:border-zinc-700 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="p-2 rounded-lg bg-slate-100 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700/60">
                    {iconMap[cat.iconName] || <Cpu className="w-4 h-4 text-slate-700 dark:text-zinc-300" />}
                  </div>
                  <h3 className="font-display font-bold text-base text-slate-900 dark:text-zinc-100">
                    {cat.name}
                  </h3>
                </div>

                <p className="text-xs text-slate-500 dark:text-zinc-400 mb-4 leading-normal">
                  {cat.description}
                </p>

                {/* Skills List */}
                <div className="space-y-2">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-2.5 rounded-lg bg-slate-50/80 dark:bg-zinc-950/60 border border-slate-100 dark:border-zinc-800/80"
                    >
                      <div className="flex items-center justify-between gap-2 mb-0.5">
                        <span className="font-medium text-xs text-slate-900 dark:text-zinc-200 flex items-center gap-1.5">
                          <Check className="w-3 h-3 text-emerald-500" />
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-200/60 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-zinc-400 pl-4.5">
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

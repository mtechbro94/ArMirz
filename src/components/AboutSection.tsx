"use client";

import React, { useState } from "react";
import { profileData } from "@/data/profile";
import {
  GraduationCap,
  Briefcase,
  CheckCircle2,
  Lightbulb,
  Compass,
  ArrowUpRight,
  BookOpen,
  Calendar,
  MapPin,
} from "lucide-react";

export function AboutSection() {
  const [activeTab, setActiveTab] = useState<"narrative" | "timeline" | "education">("narrative");

  return (
    <section id="about" className="py-24 relative scroll-mt-20 border-t border-slate-200/80 dark:border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-slate-700 dark:text-zinc-300 bg-slate-100 dark:bg-zinc-800/70 border border-slate-200 dark:border-zinc-700/80 mb-3">
            <span>ABOUT &bull; PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
            Bridging High-Impact AI Research &amp; Real-World Engineering Education
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-zinc-400 leading-relaxed">
            From university lecture halls to developer bootcamps, my work focuses on demystifying complex machine learning systems and teaching engineers how to build with them responsibly.
          </p>

          {/* Sub-tab Navigation */}
          <div className="mt-6 inline-flex p-1 rounded-xl bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800">
            <button
              onClick={() => setActiveTab("narrative")}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                activeTab === "narrative"
                  ? "bg-white dark:bg-zinc-800 text-slate-900 dark:text-zinc-100 shadow-sm"
                  : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200"
              }`}
            >
              Professional Narrative
            </button>
            <button
              onClick={() => setActiveTab("timeline")}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                activeTab === "timeline"
                  ? "bg-white dark:bg-zinc-800 text-slate-900 dark:text-zinc-100 shadow-sm"
                  : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200"
              }`}
            >
              Career Timeline
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                activeTab === "education"
                  ? "bg-white dark:bg-zinc-800 text-slate-900 dark:text-zinc-100 shadow-sm"
                  : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200"
              }`}
            >
              Academic Pedigree
            </button>
          </div>
        </div>

        {/* Tab 1: Narrative & Core Philosophy */}
        {activeTab === "narrative" && (
          <div className="space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-7 space-y-4 text-slate-700 dark:text-zinc-300 leading-relaxed text-sm sm:text-base">
                <p>
                  I am <strong className="text-slate-950 dark:text-zinc-100 font-semibold">Aaqib Rashid Mir</strong>, an AI Trainer, Researcher, and Engineer with over three years of intensive academic and laboratory teaching experience. My work sits at the intersection of deep neural architecture research, Explainable AI (XAI), and practical AI engineering.
                </p>
                <p>
                  Having served as an <strong className="text-slate-950 dark:text-zinc-100 font-semibold">Assistant Professor in AI &amp; Data Science</strong> at Guru Nanak Institutions Technical Campus (Autonomous), Hyderabad, I had the privilege of pioneering and formalizing modern coursework in Large Language Models, Retrieval-Augmented Generation (RAG), and Prompt Engineering. I believe AI education cannot remain purely theoretical; students and engineers must understand token economics, context window constraints, inference latency, and vector search mechanics.
                </p>
                <p>
                  In addition to academic instruction, I established <strong className="text-amber-600 dark:text-amber-400 font-semibold">The Coding Science</strong> and the <strong className="text-slate-950 dark:text-zinc-100 font-semibold">AIwithMir</strong> learning initiative to democratize hands-on technical skills across Python, Machine Learning, Docker, and agentic workflows.
                </p>
                <p>
                  As an active researcher, my focus is on <strong className="text-slate-950 dark:text-zinc-100 font-semibold">faithful, transparent AI architectures</strong>. In medical diagnostic domains—such as cranial MRI tumor classification and multimodal ICU mortality prediction—I design Concept Bottleneck Models (CBMs) and Grad-CAM saliency systems that ensure machine decisions can be inspected, audited, and safely adjusted by human clinical experts.
                </p>
              </div>

              {/* Core Pillars / Teaching Philosophy */}
              <div className="lg:col-span-5 space-y-3">
                <h3 className="text-sm font-mono uppercase tracking-wider text-slate-500 dark:text-zinc-400 mb-2">
                  Guiding Principles
                </h3>
                {profileData.philosophy.map((item) => (
                  <div
                    key={item.title}
                    className="p-4 rounded-xl bg-white dark:bg-zinc-900/50 border border-slate-200 dark:border-zinc-800 shadow-sm"
                  >
                    <h4 className="font-semibold text-sm text-slate-900 dark:text-zinc-100 mb-1 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                      <span>{item.title}</span>
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-zinc-400 leading-normal">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        )}

        {/* Tab 2: Career Timeline */}
        {activeTab === "timeline" && (
          <div className="max-w-3xl space-y-6">
            <div className="relative border-l border-slate-300 dark:border-zinc-800 ml-3 pl-6 space-y-8">
              {profileData.experience.map((exp, index) => (
                <div key={index} className="relative group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-slate-900 dark:bg-zinc-100 border-2 border-white dark:border-zinc-950" />

                  {/* Card */}
                  <div className="p-5 rounded-xl bg-white dark:bg-zinc-900/50 border border-slate-200 dark:border-zinc-800 shadow-sm">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                      <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300">
                        {exp.period}
                      </span>
                      <span className="text-xs text-slate-500 dark:text-zinc-400">
                        {exp.location}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100">
                      {exp.role}
                    </h3>
                    <div className="text-xs font-mono text-slate-600 dark:text-zinc-400 mb-3">
                      {exp.organization}
                    </div>

                    <ul className="space-y-1.5">
                      {exp.responsibilities.map((resp, i) => (
                        <li
                          key={i}
                          className="text-xs text-slate-600 dark:text-zinc-300 flex items-start gap-2"
                        >
                          <span className="inline-block w-1 h-1 rounded-full bg-slate-400 dark:bg-zinc-600 mt-1.5 flex-shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Academic Pedigree */}
        {activeTab === "education" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {profileData.education.map((edu) => (
              <div
                key={edu.degree}
                className="p-6 rounded-2xl bg-white dark:bg-zinc-900/50 border border-slate-200 dark:border-zinc-800 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="text-xs font-mono text-slate-500 dark:text-zinc-400">
                      {edu.period}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-zinc-100">
                    {edu.degree}
                  </h3>
                  <div className="text-sm font-medium text-slate-700 dark:text-zinc-300 mb-4">
                    {edu.field}
                  </div>

                  <div className="space-y-1.5 pt-3 border-t border-slate-100 dark:border-zinc-800/80">
                    {edu.highlights.map((h, i) => (
                      <div
                        key={i}
                        className="text-xs text-slate-600 dark:text-zinc-400 flex items-start gap-2"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

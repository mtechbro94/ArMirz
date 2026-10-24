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
    <section id="about" className="py-24 relative overflow-hidden scroll-mt-20">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>BACKGROUND &amp; PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Bridging High-Impact AI Research &amp; Real-World Engineering Education
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            From formal academic classrooms to developer bootcamps, my mission is to make advanced AI concepts tangible, reproducible, and production-ready.
          </p>

          {/* Sub-tab Navigation */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <button
              onClick={() => setActiveTab("narrative")}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "narrative"
                  ? "bg-white dark:bg-slate-800 text-cyan-600 dark:text-cyan-400 shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Professional Narrative
            </button>
            <button
              onClick={() => setActiveTab("timeline")}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "timeline"
                  ? "bg-white dark:bg-slate-800 text-cyan-600 dark:text-cyan-400 shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Career Timeline
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "education"
                  ? "bg-white dark:bg-slate-800 text-cyan-600 dark:text-cyan-400 shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
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
              
              <div className="lg:col-span-7 space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed text-base">
                <p>
                  I am <strong className="text-slate-950 dark:text-white font-semibold">Aaqib Rashid Mir</strong>, an AI Trainer, Researcher, and Engineer with over three years of intensive academic and laboratory teaching experience. My work sits at the intersection of deep neural architecture research, Explainable AI (XAI), and practical AI engineering.
                </p>
                <p>
                  Having served as an <strong className="text-slate-950 dark:text-white font-semibold">Assistant Professor in AI &amp; Data Science</strong> at Guru Nanak Institutions Technical Campus (Autonomous), Hyderabad, I had the privilege of pioneering and institutionalizing modern coursework in Large Language Models, Retrieval-Augmented Generation (RAG), and Prompt Engineering. I believe AI education cannot remain purely theoretical; students and engineers must understand token economics, context window constraints, inference latency, and vector search mechanics.
                </p>
                <p>
                  In addition to academic instruction, I established <strong className="text-cyan-600 dark:text-cyan-400 font-semibold">The Coding Science</strong> and the <strong className="text-slate-950 dark:text-white font-semibold">AIwithMir</strong> learning initiative to democratize hands-on technical skills across Python, Machine Learning, Docker, and agentic workflows.
                </p>
                <p>
                  As an active researcher, my focus is on <strong className="text-slate-950 dark:text-white font-semibold">faithful, transparent AI architectures</strong>. In medical diagnostic domains—such as cranial MRI tumor classification and multimodal ICU mortality prediction—I design Concept Bottleneck Models (CBMs) and Grad-CAM saliency systems that ensure machine decisions can be inspected, audited, and safely adjusted by human clinical experts.
                </p>
              </div>

              {/* Core Pillars / Teaching Philosophy */}
              <div className="lg:col-span-5 space-y-4">
                <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-2">
                  <Lightbulb className="w-5 h-5 text-amber-500" />
                  <span>Guiding Principles</span>
                </h3>
                {profileData.philosophy.map((item) => (
                  <div
                    key={item.title}
                    className="p-5 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-cyan-500/40 transition-colors"
                  >
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1.5 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                      <span>{item.title}</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-normal">
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
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="relative border-l-2 border-cyan-500/30 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-10">
              {profileData.experience.map((exp, index) => (
                <div key={index} className="relative group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[33px] sm:-left-[41px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 group-hover:scale-125 transition-transform" />

                  {/* Card */}
                  <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-cyan-500/40 transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                      <span className="text-xs font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-medium text-cyan-600 dark:text-cyan-400 mb-4">
                      {exp.organization}
                    </div>

                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, i) => (
                        <li
                          key={i}
                          className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 flex items-start gap-2.5"
                        >
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {profileData.education.map((edu) => (
              <div
                key={edu.degree}
                className="p-8 rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-indigo-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 border border-indigo-500/20">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                      {edu.score}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                    {edu.degree}
                  </h3>
                  <div className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-indigo-500 mb-2">
                    {edu.field}
                  </div>
                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-4">
                    {edu.institution} &bull; {edu.period}
                  </div>

                  <div className="space-y-2 mt-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                    {edu.highlights.map((h, i) => (
                      <div
                        key={i}
                        className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 flex items-start gap-2"
                      >
                        <CheckCircle2 className="w-4 h-4 text-cyan-500 mt-0.5 flex-shrink-0" />
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

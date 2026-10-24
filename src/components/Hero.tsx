"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Award,
  GraduationCap,
  Sparkles,
  Terminal,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-28 pb-16 overflow-hidden">
      {/* Background Subtle Depth - Clean & Non-Distracting */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-sky-500/[0.04] dark:bg-sky-500/[0.03] rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-500/[0.03] rounded-full blur-3xl" />
        
        {/* Subtle engineering grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_35%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Left Column: Authentic Senior Engineer Narrative */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 text-xs font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Workshops, Advisory &amp; AI Engineering</span>
            </div>

            {/* Name & Headline */}
            <div className="space-y-2">
              <p className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-zinc-400">
                Personal Portfolio &bull; Aaqib Rashid Mir
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-slate-900 dark:text-zinc-50 leading-[1.08]">
                Aaqib Rashid Mir
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-700 dark:text-zinc-300">
                Data Science &amp; AI Trainer &bull; AI Researcher &bull; AI Engineer
              </p>
            </div>

            {/* Editorial Quote */}
            <p className="text-lg font-serif italic text-slate-800 dark:text-zinc-200 border-l-2 border-amber-500/60 pl-3.5 py-0.5">
              &ldquo;{siteConfig.heroQuote}&rdquo;
            </p>

            {/* Concise Bio */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 max-w-xl leading-relaxed">
              Former Assistant Professor in AI &amp; Data Science at Guru Nanak Institutions, founder of{" "}
              <strong className="text-slate-900 dark:text-zinc-200 font-semibold">The Coding Science</strong>, and published researcher in Explainable AI (XAI) and Multimodal Clinical Decision Support. Over 3 years delivering hands-on engineering education to 500+ engineers.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2 w-full sm:w-auto">
              <Link
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-white shadow-sm hover:scale-[1.01] active:scale-[0.99] transition-all"
              >
                <span>View Projects &amp; Code</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-800 dark:text-zinc-200 border border-slate-300 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/40 hover:bg-slate-100 dark:hover:bg-zinc-800/80 transition-all"
              >
                <span>Get in Touch</span>
              </Link>

              <Link
                href="/docs/Aaqib_Rashid_Mir_CV.pdf"
                target="_blank"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl text-sm font-medium text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Resume (PDF)</span>
              </Link>
            </div>

            {/* Verified Profiles */}
            <div className="flex items-center gap-3 pt-3 border-t border-slate-200 dark:border-zinc-800/80 w-full text-xs font-mono text-slate-500 dark:text-zinc-400">
              <span className="uppercase tracking-wider">Profiles:</span>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors flex items-center gap-1"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <span>&bull;</span>
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-900 dark:hover:text-zinc-100 transition-colors flex items-center gap-1"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <span>&bull;</span>
              <a
                href={siteConfig.socials.colab}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-500 transition-colors flex items-center gap-1"
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>Colab</span>
              </a>
            </div>

          </div>

          {/* Right Column: Authentic Workspace Photograph (No Cheap AI Overlays) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="w-full max-w-[390px] group">
              
              {/* Studio Frame Card */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-100 dark:bg-zinc-900 border border-slate-300 dark:border-zinc-800 shadow-2xl shadow-black/20 dark:shadow-black/60 transition-transform duration-500 group-hover:scale-[1.01]">
                
                {/* Photo Header Bar (Clean Studio Accent) */}
                <div className="px-4 py-2.5 bg-slate-200/70 dark:bg-zinc-950/70 border-b border-slate-300 dark:border-zinc-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-400 dark:bg-zinc-700" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-400 dark:bg-zinc-700" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-400 dark:bg-zinc-700" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 dark:text-zinc-400">
                    aaqib-workspace.jpg
                  </span>
                </div>

                {/* Real Photo Image */}
                <div className="relative aspect-[551/790] w-full bg-slate-950 overflow-hidden">
                  <Image
                    src="/images/aaqib-profile.jpg"
                    alt="Aaqib Rashid Mir at his workspace in The Coding Science studio"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 390px"
                    className="object-cover object-center"
                  />
                </div>

                {/* Photo Caption Bar */}
                <div className="p-3.5 bg-white dark:bg-zinc-950 border-t border-slate-200 dark:border-zinc-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-xs font-mono font-medium text-slate-800 dark:text-zinc-200">
                      The Coding Science Studio
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 dark:text-zinc-400">
                    Hyderabad / J&amp;K
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Minimalist Credibility Stats Bar */}
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-zinc-800/80">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {siteConfig.stats.map((stat) => (
              <div
                key={stat.label}
                className="p-4 rounded-xl bg-slate-50/80 dark:bg-zinc-900/30 border border-slate-200/80 dark:border-zinc-800/60"
              >
                <div className="text-2xl font-display font-extrabold text-slate-900 dark:text-zinc-100">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-500 dark:text-zinc-400 mt-1 leading-snug">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

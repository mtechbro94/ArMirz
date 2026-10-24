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
  BookOpen,
  Terminal,
} from "lucide-react";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden">
      {/* Background Subtle AI Mesh & Glow Elements */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-cyan-500/10 via-indigo-600/10 to-purple-600/10 rounded-full blur-3xl opacity-70 dark:opacity-60" />
        <div className="absolute top-1/3 left-10 w-72 h-72 bg-cyan-400/10 rounded-full blur-2xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0f_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] dark:bg-[linear-gradient(to_right,#38bdf80a_1px,transparent_1px),linear-gradient(to_bottom,#38bdf80a_1px,transparent_1px)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 dark:bg-cyan-950/40 backdrop-blur-sm shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
              </span>
              <span className="text-xs font-mono font-medium text-cyan-600 dark:text-cyan-300">
                Available for Training, Keynotes & AI Engineering
              </span>
            </div>

            {/* Name & Title */}
            <div>
              <p className="text-sm sm:text-base font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2">
                Portfolio &amp; Lab of
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                Aaqib Rashid Mir
              </h1>
              <div className="mt-3 text-lg sm:text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-sky-400 to-indigo-500 dark:from-cyan-300 dark:via-sky-300 dark:to-indigo-300">
                Data Science &amp; AI Trainer | AI Researcher | AI Engineer
              </div>
            </div>

            {/* Headline & Mission Copy */}
            <p className="text-xl sm:text-2xl font-display font-semibold text-slate-800 dark:text-slate-200 leading-snug">
              &ldquo;{siteConfig.heroQuote}&rdquo;
            </p>

            <p className="text-base text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              {siteConfig.heroDescription} Former Assistant Professor in AI &amp; Data Science at Guru Nanak Institutions, founder of{" "}
              <strong className="text-slate-900 dark:text-slate-200 font-semibold">The Coding Science</strong>, and published researcher in Explainable AI (XAI) and Multimodal Clinical Decision Support.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <Link
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 hover:opacity-95 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Let&apos;s Connect</span>
              </Link>

              <Link
                href="/docs/Aaqib_Rashid_Mir_CV.pdf"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-cyan-400 dark:hover:text-cyan-300 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Resume (PDF)</span>
              </Link>
            </div>

            {/* Verified Social Profiles Strip */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-800/80 w-full">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Verified Links:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-blue-500/10 transition-colors"
                  aria-label="Aaqib Rashid Mir LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors"
                  aria-label="Aaqib Rashid Mir GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.socials.email}
                  className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-purple-400 hover:bg-purple-500/10 transition-colors"
                  aria-label="Email Aaqib Rashid Mir"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.socials.colab}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 text-xs font-mono text-slate-700 dark:text-slate-300 hover:text-amber-400 hover:bg-amber-500/10 transition-colors flex items-center gap-1.5"
                  aria-label="Google Colab Experiments"
                >
                  <Terminal className="w-3.5 h-3.5 text-amber-500" />
                  <span>Google Colab</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Photo & Brand Floating Cards */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-[420px]">
              
              {/* Outer decorative gradient border */}
              <div className="relative rounded-3xl p-1.5 bg-gradient-to-b from-cyan-400 via-indigo-500/40 to-purple-600 shadow-2xl shadow-cyan-500/20">
                <div className="relative rounded-[22px] overflow-hidden bg-slate-950 aspect-[4/5]">
                  <Image
                    src="/images/aaqib-profile.jpg"
                    alt="Aaqib Rashid Mir — Data Science and AI Trainer, AI Researcher, and AI Engineer"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-cover object-top hover:scale-[1.02] transition-transform duration-700"
                  />
                  
                  {/* Subtle Gradient Overlay at bottom for text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                  
                  {/* Badge on Photo */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-900/85 backdrop-blur-md border border-slate-700/60 shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="relative w-9 h-9 rounded-lg overflow-hidden border border-amber-500/40 bg-black/60 flex-shrink-0">
                        <Image
                          src="/images/aiwithmir-logo.jpg"
                          alt="AIwithMir"
                          fill
                          sizes="36px"
                          className="object-cover"
                        />
                      </div>
                      <div className="overflow-hidden">
                        <div className="text-xs font-semibold text-white tracking-tight flex items-center gap-1">
                          AIwithMir Lab
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono">
                            Verified
                          </span>
                        </div>
                        <div className="text-[11px] text-slate-300 truncate font-mono">
                          M.Tech AI • AWS &amp; Azure Certified
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Credential Pill 1: Top Right */}
              <div className="absolute -top-4 -right-4 hidden sm:flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-slate-900/90 dark:bg-slate-900/95 border border-cyan-500/30 shadow-xl shadow-cyan-500/10 backdrop-blur-md">
                <div className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-400">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">M.Tech in AI &amp; DS</div>
                  <div className="text-[10px] text-cyan-300 font-mono">CGPA: 8.15 / 10</div>
                </div>
              </div>

              {/* Floating Credential Pill 2: Bottom Left */}
              <div className="absolute -bottom-4 -left-4 hidden sm:flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-slate-900/90 dark:bg-slate-900/95 border border-purple-500/30 shadow-xl shadow-purple-500/10 backdrop-blur-md">
                <div className="p-1.5 rounded-lg bg-purple-500/20 text-purple-400">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">AWS &amp; Azure</div>
                  <div className="text-[10px] text-purple-300 font-mono">CLF-C02 &bull; AI-900</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Professional Credibility Strip (Strictly Verified Facts) */}
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800/80">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {siteConfig.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/60"
              >
                <span className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 dark:text-white bg-clip-text dark:bg-gradient-to-r dark:from-cyan-400 dark:to-indigo-300">
                  {stat.value}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-snug">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

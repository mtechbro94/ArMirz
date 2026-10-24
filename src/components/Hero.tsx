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
  Terminal,
  Sparkles,
} from "lucide-react";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-20 overflow-hidden bg-[#090a0f] text-zinc-100">
      {/* Cinematic Ambient Background Lighting */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Soft radial warm glow behind portrait */}
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-amber-500/[0.04] rounded-full blur-[120px]" />
        {/* Subtle indigo depth glow */}
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[400px] bg-indigo-500/[0.03] rounded-full blur-[140px]" />
        {/* Architectural subtle grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,#000_60%,transparent_100%)]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/80 backdrop-blur-md text-zinc-300 text-xs font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Data Science &amp; AI Trainer &bull; GenAI Engineer &bull; XAI Researcher &bull; Healthcare Analyst</span>
            </div>

            {/* Name & Main Display Title */}
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-400 block">
                THE CODING SCIENCE — SCHOOL OF TECHNOLOGY &amp; AI INNOVATIONS
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-[-0.035em] text-white leading-[1.02]">
                Aaqib Rashid Mir
              </h1>
              <p className="text-xl sm:text-2xl font-display font-medium text-zinc-300 leading-snug">
                Designing Explainable AI Systems. <br className="hidden sm:inline" />
                Training the Next Generation of AI Engineers.
              </p>
            </div>

            {/* Editorial Narrative */}
            <p className="text-sm sm:text-base text-zinc-400 max-w-xl leading-relaxed">
              Founder of <strong className="text-white font-medium">The Coding Science</strong>, AI Researcher, and Technical Trainer. Over 3 years bridging academic research in Explainable AI with production engineering across Python, Data Science, GenAI, and cloud pipelines.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2 w-full sm:w-auto">
              <Link
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-zinc-950 bg-white hover:bg-zinc-200 shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all"
              >
                <span>Explore Code &amp; Systems</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-zinc-200 border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800/80 hover:text-white transition-all"
              >
                <span>Get in Touch</span>
              </Link>

              <Link
                href="/docs/Aaqib_Rashid_Mir_CV.pdf"
                target="_blank"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-xl text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Resume (PDF)</span>
              </Link>
            </div>

            {/* Verified Links Strip */}
            <div className="flex items-center gap-3 pt-4 border-t border-zinc-800/80 w-full text-xs font-mono text-zinc-400">
              <span className="uppercase tracking-wider text-zinc-400">Verified:</span>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-400 transition-colors flex items-center gap-1"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <span>&bull;</span>
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <span>&bull;</span>
              <a
                href={siteConfig.socials.colab}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-400 transition-colors flex items-center gap-1"
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>Colab</span>
              </a>
            </div>

          </div>

          {/* Right Column: Seamlessly Blended Workspace Portrait */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-[420px] group">
              
              {/* Soft Ambient Halo behind the portrait */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-amber-500/10 via-indigo-500/5 to-transparent rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition-opacity" />

              {/* Seamless Blended Image Container */}
              <div className="relative rounded-3xl overflow-hidden bg-[#090a0f] border border-zinc-800/80 shadow-2xl shadow-black/80">
                
                {/* Photo with blurred bokeh background smoothly melted into hero bg */}
                <div className="relative aspect-[551/790] w-full overflow-hidden bg-[#090a0f]">
                  <Image
                    src="/images/aaqib-profile.jpg"
                    alt="Aaqib Rashid Mir at his desk in The Coding Science studio"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  {/* Additional soft gradient mask at bottom to ensure zero visible seams */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#090a0f] via-[#090a0f]/60 to-transparent pointer-events-none" />
                </div>

                {/* Editorial Floating Info Overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-zinc-950/80 backdrop-blur-xl border border-zinc-800/80 shadow-xl flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold text-white tracking-tight">
                      Aaqib Rashid Mir
                    </div>
                    <div className="text-[11px] text-zinc-400 font-mono">
                      Founder, The Coding Science &bull; AI Trainer
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Active Lab</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Minimalist Metrics Strip */}
        <div className="mt-16 pt-8 border-t border-zinc-800/80">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {siteConfig.stats.map((stat) => (
              <div
                key={stat.label}
                className="p-4 rounded-xl bg-zinc-900/30 border border-zinc-800/60"
              >
                <div className="text-2xl font-display font-extrabold text-white">
                  {stat.value}
                </div>
                <div className="text-xs text-zinc-400 mt-1 leading-snug">
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

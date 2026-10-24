"use client";

import React from "react";
import { publicationsData } from "@/data/publications";
import {
  FileText,
  ExternalLink,
  Award,
  Sparkles,
  BookOpen,
  Microscope,
  Cpu,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

export function ResearchSection() {
  const researchInterests = [
    {
      title: "Explainable AI (XAI) & Interpretability",
      description: "Concept Bottleneck Models (CBMs), Grad-CAM, and attribution fidelity metrics (Deletion-AUC, Insertion-AUC) in safety-critical domains.",
    },
    {
      title: "Multimodal Deep Learning in Medicine",
      description: "Fusion of Electronic Health Record (EHR) tabular vitals with radiographic imaging (CXR, cranial MRI) for calibrated mortality risk estimation.",
    },
    {
      title: "Computer Vision & Biometrics",
      description: "Adaptive multi-model facial and anatomical pattern recognition with temporal stability validation under environmental variations.",
    },
    {
      title: "Agentic Systems & Constrained Decoding",
      description: "Stateful graph-based multi-agent coordination, tool execution constraints, and formal verification of language model reasoning.",
    },
  ];

  return (
    <section id="research" className="py-24 relative scroll-mt-20 bg-slate-50/50 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-purple-600 dark:text-purple-400 bg-purple-500/10 border border-purple-500/20 mb-4">
            <Microscope className="w-3.5 h-3.5" />
            <span>SCHOLARLY INQUIRY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Peer-Reviewed Research &amp; Applied AI Investigations
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Investigating trustworthy machine intelligence, multimodal clinical decision support, and explainability frameworks that empower domain experts.
          </p>
        </div>

        {/* Research Interests Matrix */}
        <div className="mb-16">
          <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-purple-500" />
            <span>Active Research Thrusts</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchInterests.map((interest, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-purple-500/40 shadow-sm transition-all"
              >
                <div className="w-8 h-8 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center font-mono font-bold text-xs mb-3 border border-purple-500/20">
                  0{i + 1}
                </div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-2">
                  {interest.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {interest.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Publications List */}
        <div className="space-y-6">
          <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <FileText className="w-5 h-5 text-cyan-500" />
            <span>Peer-Reviewed Papers &amp; Preprints</span>
          </h3>

          <div className="space-y-6">
            {publicationsData.map((pub, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                      {pub.type}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-300 border border-purple-500/20">
                      {pub.year}
                    </span>
                    {pub.impactFactor && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                        IF: {pub.impactFactor}
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    Status: <strong className="text-slate-800 dark:text-slate-200">{pub.status}</strong>
                  </span>
                </div>

                <h4 className="text-lg sm:text-xl font-display font-bold text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors mb-2">
                  {pub.title}
                </h4>

                <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-2">
                  {pub.authors}
                </p>

                <p className="text-xs font-medium text-cyan-600 dark:text-cyan-400 mb-4">
                  {pub.journal} {pub.paperId && `• Paper ID: ${pub.paperId}`}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                  {pub.abstract}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                  <div className="flex flex-wrap gap-1.5">
                    {pub.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {pub.links && pub.links.length > 0 && (
                    <div className="flex items-center gap-3">
                      {pub.links.map((link, lIdx) => (
                        <a
                          key={lIdx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-500"
                        >
                          <span>{link.label}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Research Collaboration Callout */}
        <div className="mt-12 text-center p-8 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800">
          <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
            Interested in Joint Research or Co-Authorship?
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto mb-4">
            I actively collaborate with universities, clinical researchers, and AI laboratories on Explainable AI, multimodal architectures, and medical diagnostics.
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:underline"
          >
            <span>Inquire About Research Collaboration</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}

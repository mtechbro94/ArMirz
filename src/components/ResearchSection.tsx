"use client";

import React, { useState } from "react";
import { publicationsData } from "@/data/publications";
import {
  FileText,
  ExternalLink,
  Cpu,
  ArrowRight,
  Copy,
  Check,
  Quote,
} from "lucide-react";
import Link from "next/link";
import { InteractiveXaiDemo } from "./InteractiveXaiDemo";

export function ResearchSection() {
  const [copiedBibtexIndex, setCopiedBibtexIndex] = useState<number | null>(null);

  const copyBibtex = (bibtex: string, index: number) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(bibtex);
      setCopiedBibtexIndex(index);
      setTimeout(() => setCopiedBibtexIndex(null), 2200);
    }
  };

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
    <section id="research" className="py-24 relative scroll-mt-20 border-t border-slate-200/80 dark:border-zinc-800/80 bg-slate-50/50 dark:bg-zinc-950/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-slate-700 dark:text-zinc-300 bg-slate-100 dark:bg-zinc-800/70 border border-slate-200 dark:border-zinc-700/80 mb-3">
            <span>SCHOLARLY INQUIRY &bull; PEER-REVIEWED</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
            Peer-Reviewed Research &amp; Applied AI Investigations
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-zinc-400 leading-relaxed">
            Investigating trustworthy machine intelligence, multimodal clinical decision support, and explainability frameworks that empower domain experts.
          </p>
        </div>

        {/* Research Interests Matrix */}
        <div className="mb-14">
          <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-zinc-400 mb-4 flex items-center gap-2">
            <Cpu className="w-4 h-4 text-slate-600 dark:text-zinc-400" />
            <span>Active Research Thrusts</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {researchInterests.map((interest, i) => (
              <div
                key={i}
                className="p-5 rounded-xl bg-white dark:bg-zinc-900/40 border border-slate-200 dark:border-zinc-800 shadow-xs"
              >
                <div className="text-xs font-mono text-slate-400 dark:text-zinc-500 mb-2 font-bold">
                  0{i + 1}
                </div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-zinc-100 mb-1.5">
                  {interest.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                  {interest.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive XAI Attribution Visualizer */}
        <div className="mb-14">
          <InteractiveXaiDemo />
        </div>

        {/* Publications List */}
        <div className="space-y-4">
          <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-zinc-400 mb-2 flex items-center gap-2">
            <FileText className="w-4 h-4 text-slate-600 dark:text-zinc-400" />
            <span>Peer-Reviewed Papers &amp; Preprints</span>
          </h3>

          <div className="space-y-4">
            {publicationsData.map((pub, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-zinc-900/40 border border-slate-200 dark:border-zinc-800 hover:border-slate-400 dark:hover:border-zinc-700 shadow-sm transition-all"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300">
                      {pub.type}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500 dark:text-zinc-400">
                      {pub.year}
                    </span>
                    {pub.impactFactor && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                        IF: {pub.impactFactor}
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-mono text-slate-500 dark:text-zinc-400">
                    Status: <strong className="text-slate-800 dark:text-zinc-200">{pub.status}</strong>
                  </span>
                </div>

                <h4 className="text-base sm:text-lg font-display font-bold text-slate-900 dark:text-zinc-100 mb-1">
                  {pub.title}
                </h4>

                <p className="text-xs font-mono text-slate-500 dark:text-zinc-400 mb-1.5">
                  {pub.authors}
                </p>

                <p className="text-xs font-medium text-slate-700 dark:text-zinc-300 mb-3">
                  {pub.journal} {pub.paperId && `• Paper ID: ${pub.paperId}`}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-4">
                  {pub.abstract}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100 dark:border-zinc-800/80">
                  <div className="flex flex-wrap gap-1.5">
                    {pub.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-50 dark:bg-zinc-950 text-slate-500 dark:text-zinc-400 border border-slate-200 dark:border-zinc-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    {pub.bibtex && (
                      <button
                        onClick={() => copyBibtex(pub.bibtex!, idx)}
                        type="button"
                        className="inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-lg border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-900 text-slate-700 dark:text-zinc-300 hover:border-slate-400 dark:hover:border-zinc-600 transition-all cursor-pointer"
                        title="Copy BibTeX entry to clipboard"
                      >
                        {copiedBibtexIndex === idx ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-500" />
                            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">BibTeX Copied</span>
                          </>
                        ) : (
                          <>
                            <Quote className="w-3.5 h-3.5 text-slate-500 dark:text-zinc-400" />
                            <span>Cite (BibTeX)</span>
                          </>
                        )}
                      </button>
                    )}

                    {pub.links && pub.links.length > 0 && (
                      <div className="flex items-center gap-3">
                        {pub.links.map((link, lIdx) => (
                          <a
                            key={lIdx}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-semibold text-slate-800 dark:text-zinc-200 hover:text-slate-950 dark:hover:text-white"
                          >
                            <span>{link.label}</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Research Collaboration Callout */}
        <div className="mt-10 text-center p-6 rounded-xl bg-white dark:bg-zinc-900/30 border border-slate-200 dark:border-zinc-800">
          <h4 className="text-sm font-bold text-slate-900 dark:text-zinc-100 mb-1">
            Interested in Joint Research or Co-Authorship?
          </h4>
          <p className="text-xs text-slate-600 dark:text-zinc-400 max-w-lg mx-auto mb-3">
            Active collaborations with academic faculties and clinical researchers on Explainable AI, multimodal architectures, and diagnostic models.
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-1 text-xs font-semibold text-slate-900 dark:text-zinc-100 hover:underline"
          >
            <span>Inquire About Research Collaboration</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}

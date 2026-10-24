"use client";

import React from "react";
import { certificationsData } from "@/data/certifications";
import { Award, ShieldCheck, CheckCircle2, ExternalLink } from "lucide-react";

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 relative scroll-mt-20 border-t border-slate-200/80 dark:border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-slate-700 dark:text-zinc-300 bg-slate-100 dark:bg-zinc-800/70 border border-slate-200 dark:border-zinc-700/80 mb-3">
            <span>INDUSTRY CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
            Certified Cloud, AI &amp; Analytics Proficiencies
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-zinc-400 leading-relaxed">
            Vendor-verified credentials in cloud infrastructure, machine learning fundamentals, and web telemetry.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="p-5 rounded-2xl bg-white dark:bg-zinc-900/40 border border-slate-200 dark:border-zinc-800 hover:border-slate-400 dark:hover:border-zinc-700 shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="p-2 rounded-lg bg-slate-100 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700/60">
                    <ShieldCheck className="w-4 h-4 text-slate-700 dark:text-zinc-300" />
                  </div>
                  {cert.code && (
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300">
                      {cert.code}
                    </span>
                  )}
                </div>

                <div className="text-[11px] font-mono text-slate-500 dark:text-zinc-400 mb-1">
                  {cert.issuer}
                </div>

                <h3 className="font-display font-bold text-sm sm:text-base text-slate-900 dark:text-zinc-100 mb-2">
                  {cert.name}
                </h3>

                <p className="text-xs text-slate-600 dark:text-zinc-400 mb-4 leading-relaxed">
                  {cert.description}
                </p>

                <div className="space-y-1 mb-4">
                  {cert.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="text-[11px] text-slate-600 dark:text-zinc-300 flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-slate-400 dark:bg-zinc-600" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-zinc-800/80 flex items-center justify-between">
                <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                  {cert.status}
                </span>

                {cert.verificationUrl ? (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-mono font-medium text-slate-700 dark:text-zinc-300 hover:text-slate-950 dark:hover:text-white hover:underline transition-colors"
                  >
                    <span>Verify</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="text-[10px] font-mono text-slate-400">
                    {cert.category}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

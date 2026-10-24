"use client";

import React from "react";
import { certificationsData } from "@/data/certifications";
import { Award, ShieldCheck, CheckCircle2, Sparkles, ExternalLink } from "lucide-react";

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-amber-600 dark:text-amber-400 bg-amber-500/10 border border-amber-500/20 mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>INDUSTRY CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Certified Cloud, AI &amp; Analytics Proficiencies
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Rigorous vendor certifications validating cloud infrastructure design, machine learning fundamentals, and enterprise data analytics.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="p-6 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-amber-500/40 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-500 dark:text-amber-400 border border-amber-500/20">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  {cert.code && (
                    <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      {cert.code}
                    </span>
                  )}
                </div>

                <div className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400 font-medium mb-1">
                  {cert.issuer}
                </div>

                <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 dark:text-white mb-2 group-hover:text-amber-500 transition-colors">
                  {cert.name}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 mb-5 leading-relaxed">
                  {cert.description}
                </p>

                <div className="space-y-1.5 mb-6">
                  {cert.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="text-[11px] text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-amber-500 flex-shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
                  {cert.status}
                </span>
                <span className="text-[10px] font-mono text-slate-500">
                  {cert.category}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

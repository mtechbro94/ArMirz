import React from "react";
import Link from "next/link";
import { Download, ArrowLeft, Printer, Mail, MapPin, Linkedin, Github, Award, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/data/site";
import { profileData } from "@/data/profile";
import { publicationsData } from "@/data/publications";
import { certificationsData } from "@/data/certifications";

export const metadata = {
  title: "Resume & Curriculum Vitae | Aaqib Rashid Mir — AIwithMir",
  description:
    "Curriculum Vitae of Aaqib Rashid Mir: Assistant Professor, Data Science & AI Trainer, AI Researcher, AWS & Azure Certified.",
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#090a0f] text-slate-900 dark:text-zinc-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Navigation & Action Bar (Hidden in Print) */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 print:hidden">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-cyan-500 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </Link>

          <div className="flex items-center gap-3">
            <a
              href="/docs/Aaqib_Rashid_Mir_CV.pdf"
              download="Aaqib_Rashid_Mir_CV.pdf"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-indigo-400 hover:opacity-95 shadow-md shadow-cyan-500/20"
            >
              <Download className="w-4 h-4" />
              <span>Download Official PDF</span>
            </a>
          </div>
        </div>

        {/* Printable Resume Container */}
        <div className="bg-white dark:bg-slate-900 p-8 sm:p-12 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl print:shadow-none print:border-none print:p-0">
          
          {/* Header */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-8 mb-8">
            <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white">
              Aaqib Rashid Mir
            </h1>
            <div className="text-lg font-semibold text-cyan-600 dark:text-cyan-400 mt-1">
              Assistant Professor | Data Science &amp; AI Trainer | AI Researcher
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-600 dark:text-slate-400">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                {siteConfig.location}
              </span>
              <span>&bull;</span>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-1 hover:text-cyan-500">
                <Mail className="w-3.5 h-3.5" />
                {siteConfig.email}
              </a>
              <span>&bull;</span>
              <a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                LinkedIn
              </a>
              <span>&bull;</span>
              <a href={siteConfig.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-purple-500">
                GitHub: mtechbro94
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <section className="mb-8">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {profileData.summary}
            </p>
          </section>

          {/* Education */}
          <section className="mb-8">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-3">
              Education
            </h2>
            <div className="space-y-4">
              {profileData.education.map((edu, idx) => (
                <div key={idx} className="border-l-2 border-cyan-500/40 pl-4">
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <span className="font-bold text-sm text-slate-900 dark:text-white">
                      {edu.degree} &mdash; {edu.field}
                    </span>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                      {edu.period}
                    </span>
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">
                    {edu.institution} &bull; <strong className="text-slate-900 dark:text-slate-200">{edu.score}</strong>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section className="mb-8">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-3">
              Academic &amp; Industry Experience
            </h2>
            <div className="space-y-6">
              {profileData.experience.map((exp, idx) => (
                <div key={idx} className="border-l-2 border-indigo-500/40 pl-4">
                  <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                    <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                      {exp.period}
                    </span>
                  </div>
                  <div className="text-xs font-medium text-cyan-600 dark:text-cyan-400 mb-2">
                    {exp.organization} &bull; {exp.location}
                  </div>
                  <ul className="space-y-1.5">
                    {exp.responsibilities.map((r, rIdx) => (
                      <li key={rIdx} className="text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2">
                        <span className="inline-block w-1 h-1 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section className="mb-8">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-3">
              Industry Certifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {certificationsData.map((c) => (
                <div key={c.id} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 text-xs">
                  <div className="font-bold text-slate-900 dark:text-white">{c.name}</div>
                  <div className="text-slate-500 font-mono">{c.issuer} {c.code && `(${c.code})`}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Publications */}
          <section>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-3">
              Peer-Reviewed Publications
            </h2>
            <div className="space-y-3">
              {publicationsData.map((pub, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 text-xs">
                  <div className="font-semibold text-slate-900 dark:text-white">{pub.title}</div>
                  <div className="text-slate-600 dark:text-slate-400 font-mono mt-0.5">{pub.authors} ({pub.year})</div>
                  <div className="text-cyan-600 dark:text-cyan-400 font-medium mt-0.5">{pub.journal}</div>
                </div>
              ))}
            </div>
          </section>

        </div>

      </div>
    </div>
  );
}

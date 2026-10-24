"use client";

import React, { useState } from "react";
import { projectsData, Project } from "@/data/projects";
import {
  FolderGit2,
  ExternalLink,
  Github,
  Terminal,
  Cpu,
  Layers,
  Sparkles,
  ChevronRight,
  X,
  CheckCircle2,
  FileText,
} from "lucide-react";

export function ProjectsSection() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ["All", "Computer Vision & XAI", "AI Agents", "GenAI & LLMs", "Automation"];

  const filteredProjects =
    selectedFilter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedFilter);

  return (
    <section id="projects" className="py-24 relative scroll-mt-20">
      {/* Background glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 mb-4">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>PORTFOLIO CODEBASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Production AI Architectures &amp; Open-Source Projects
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            From clinical Explainable AI frameworks with human-in-the-loop intervention to multi-agent autonomous schedulers and enterprise RAG engines.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  selectedFilter === cat
                    ? "bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/20"
                    : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-cyan-500/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 shadow-sm hover:shadow-xl hover:shadow-cyan-500/5 transition-all flex flex-col justify-between overflow-hidden group"
            >
              <div className="p-6">
                {/* Category & Status */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                    {project.category}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    {project.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors line-clamp-2 mb-2">
                  {project.title}
                </h3>

                {/* Tagline */}
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-3 line-clamp-1 font-mono">
                  {project.tagline}
                </p>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-3 mb-5 leading-relaxed">
                  {project.summary}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-950 text-slate-500 border border-slate-200 dark:border-slate-800">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 py-4 bg-slate-50 dark:bg-slate-950/60 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-2">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Read Case Study</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-cyan-400 transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {project.colabUrl && (
                    <a
                      href={project.colabUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-amber-500 hover:text-amber-400 transition-colors"
                      title="Run on Google Colab"
                      aria-label="Google Colab"
                    >
                      <Terminal className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-indigo-400 transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Deep Dive Case Study Modal */}
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
            <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-[#070c1b] border border-slate-200 dark:border-cyan-500/30 p-6 sm:p-8 shadow-2xl">
              
              {/* Close Button */}
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-6 right-6 p-2 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
                aria-label="Close Case Study"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Category & Title */}
              <div className="mb-4">
                <span className="text-xs font-mono font-medium px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                  {activeModalProject.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white mt-3">
                  {activeModalProject.title}
                </h3>
                <p className="text-sm font-medium text-cyan-600 dark:text-cyan-400 mt-1 font-mono">
                  {activeModalProject.tagline}
                </p>
              </div>

              {/* Modal Content Sections */}
              <div className="space-y-6 pt-4 border-t border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-sm">
                
                {/* Problem Statement */}
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-slate-200 mb-1 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    Problem Statement &amp; Real-World Relevance
                  </h4>
                  <p className="leading-relaxed text-slate-600 dark:text-slate-300">
                    {activeModalProject.problemStatement}
                  </p>
                </div>

                {/* Solution & Implementation */}
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-slate-200 mb-1 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    Methodology &amp; Architecture
                  </h4>
                  <p className="leading-relaxed text-slate-600 dark:text-slate-300">
                    {activeModalProject.solution}
                  </p>
                </div>

                {/* Dataset / Scope */}
                {activeModalProject.datasetOrScope && (
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-slate-200 mb-1 flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-cyan-400" />
                      Dataset / Benchmarks
                    </h4>
                    <p className="text-xs font-mono text-slate-600 dark:text-slate-300">
                      {activeModalProject.datasetOrScope}
                    </p>
                  </div>
                )}

                {/* Key Features */}
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-slate-200 mb-2">
                    Key Architectural Features
                  </h4>
                  <ul className="space-y-2">
                    {activeModalProject.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-slate-200 mb-2">
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-3">
                  {activeModalProject.githubUrl && (
                    <a
                      href={activeModalProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:opacity-90 transition-opacity"
                    >
                      <Github className="w-4 h-4" />
                      <span>View GitHub Codebase</span>
                    </a>
                  )}
                  {activeModalProject.colabUrl && (
                    <a
                      href={activeModalProject.colabUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/30 hover:bg-amber-500/30 transition-colors"
                    >
                      <Terminal className="w-4 h-4" />
                      <span>Run on Google Colab</span>
                    </a>
                  )}
                  {activeModalProject.demoUrl && (
                    <a
                      href={activeModalProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/30 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Open Live Deployment</span>
                    </a>
                  )}
                </div>

              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

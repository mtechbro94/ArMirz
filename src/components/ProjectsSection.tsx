"use client";

import React, { useState } from "react";
import { projectsData, Project } from "@/data/projects";
import {
  FolderGit2,
  ExternalLink,
  Github,
  Terminal,
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
    <section id="projects" className="py-24 relative scroll-mt-20 border-t border-slate-200/80 dark:border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-slate-700 dark:text-zinc-300 bg-slate-100 dark:bg-zinc-800/70 border border-slate-200 dark:border-zinc-700/80 mb-3">
            <span>SELECTED CODEBASES &amp; SYSTEMS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
            Production AI Architectures &amp; Open-Source Projects
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-zinc-400 leading-relaxed">
            Real systems built with PyTorch, LangGraph, FastAPI, and Docker. Explore codebases, notebooks, and architectural case studies.
          </p>

          {/* Filter Pills */}
          <div className="mt-6 flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedFilter === cat
                    ? "bg-slate-900 text-white dark:bg-zinc-100 dark:text-zinc-950 shadow-sm"
                    : "bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-white dark:bg-zinc-900/40 border border-slate-200 dark:border-zinc-800 hover:border-slate-400 dark:hover:border-zinc-700 shadow-sm transition-all flex flex-col justify-between overflow-hidden group"
            >
              <div className="p-6">
                {/* Category & Status */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300">
                    {project.category}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 dark:text-zinc-500">
                    {project.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 dark:text-zinc-100 line-clamp-2 mb-1.5">
                  {project.title}
                </h3>

                {/* Tagline */}
                <p className="text-xs text-slate-500 dark:text-zinc-400 mb-3 line-clamp-1 font-mono">
                  {project.tagline}
                </p>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 line-clamp-3 mb-4 leading-relaxed">
                  {project.summary}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-50 dark:bg-zinc-950 text-slate-600 dark:text-zinc-400 border border-slate-200 dark:border-zinc-800"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-50 dark:bg-zinc-950 text-slate-400 border border-slate-200 dark:border-zinc-800">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 py-3 bg-slate-50/70 dark:bg-zinc-950/60 border-t border-slate-100 dark:border-zinc-800/80 flex items-center justify-between gap-2">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="text-xs font-semibold text-slate-800 dark:text-zinc-200 hover:text-slate-950 dark:hover:text-white flex items-center gap-1 transition-colors"
                >
                  <span>Case Study</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200 transition-colors"
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
                      className="p-1.5 rounded-lg bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-amber-600 dark:text-amber-400 hover:opacity-80 transition-opacity"
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
                      className="p-1.5 rounded-lg bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200 transition-colors"
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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-150">
            <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-white dark:bg-zinc-950 border border-slate-300 dark:border-zinc-800 p-6 sm:p-8 shadow-2xl">
              
              {/* Close Button */}
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-6 right-6 p-2 rounded-lg bg-slate-100 dark:bg-zinc-900 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
                aria-label="Close Case Study"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Category & Title */}
              <div className="mb-4">
                <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300">
                  {activeModalProject.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-zinc-50 mt-2">
                  {activeModalProject.title}
                </h3>
                <p className="text-xs font-mono text-slate-500 dark:text-zinc-400 mt-1">
                  {activeModalProject.tagline}
                </p>
              </div>

              {/* Modal Content Sections */}
              <div className="space-y-5 pt-3 border-t border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 text-sm">
                
                {/* Problem Statement */}
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-zinc-200 mb-1">
                    Problem &amp; Context
                  </h4>
                  <p className="leading-relaxed text-slate-600 dark:text-zinc-300 text-xs sm:text-sm">
                    {activeModalProject.problemStatement}
                  </p>
                </div>

                {/* Solution & Implementation */}
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-zinc-200 mb-1">
                    Methodology &amp; Architecture
                  </h4>
                  <p className="leading-relaxed text-slate-600 dark:text-zinc-300 text-xs sm:text-sm">
                    {activeModalProject.solution}
                  </p>
                </div>

                {/* Dataset / Scope */}
                {activeModalProject.datasetOrScope && (
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-zinc-200 mb-1">
                      Data &amp; Benchmarks
                    </h4>
                    <p className="text-xs font-mono text-slate-600 dark:text-zinc-400">
                      {activeModalProject.datasetOrScope}
                    </p>
                  </div>
                )}

                {/* Key Features */}
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-zinc-200 mb-2">
                    Key Features
                  </h4>
                  <ul className="space-y-1.5">
                    {activeModalProject.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-zinc-200 mb-1.5">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeModalProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2.5 py-0.5 rounded bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-800 dark:text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="pt-3 border-t border-slate-200 dark:border-zinc-800 flex flex-wrap items-center gap-3">
                  {activeModalProject.githubUrl && (
                    <a
                      href={activeModalProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-slate-900 text-white dark:bg-zinc-100 dark:text-zinc-950 hover:opacity-90 transition-opacity"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub Codebase</span>
                    </a>
                  )}
                  {activeModalProject.colabUrl && (
                    <a
                      href={activeModalProject.colabUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 hover:bg-amber-500/20 transition-colors"
                    >
                      <Terminal className="w-3.5 h-3.5" />
                      <span>Run on Colab</span>
                    </a>
                  )}
                  {activeModalProject.demoUrl && (
                    <a
                      href={activeModalProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold border border-slate-300 dark:border-zinc-700 text-slate-800 dark:text-zinc-200 hover:bg-slate-100 dark:hover:bg-zinc-900 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
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

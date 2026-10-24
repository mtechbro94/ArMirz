"use client";

import React, { useState } from "react";
import { articlesData, Article } from "@/data/articles";
import {
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  Sparkles,
  X,
  Share2,
  FileCode,
} from "lucide-react";

export function BlogSection() {
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  return (
    <section id="articles" className="py-24 relative scroll-mt-20 bg-slate-50/50 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>TECHNICAL INSIGHTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Engineering Logs, Tutorials &amp; Research Notes
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Practical breakdowns of local LLM tool calling, Explainable AI mathematics, and multi-agent systems designed from production experience.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articlesData.map((article) => (
            <article
              key={article.slug}
              className="p-6 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                    <Clock className="w-3 h-3" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-5 line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {article.date}
                </span>
                <button
                  onClick={() => setActiveArticle(article)}
                  className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Article Reader Modal */}
        {activeArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
            <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-[#070c1b] border border-slate-200 dark:border-cyan-500/30 p-6 sm:p-10 shadow-2xl">
              
              <button
                onClick={() => setActiveArticle(null)}
                className="absolute top-6 right-6 p-2 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
                aria-label="Close Article"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-4">
                <div className="flex items-center gap-3 text-xs font-mono text-cyan-600 dark:text-cyan-400 mb-2">
                  <span>{activeArticle.category}</span>
                  <span>&bull;</span>
                  <span>{activeArticle.date}</span>
                  <span>&bull;</span>
                  <span>{activeArticle.readTime}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 dark:text-white">
                  {activeArticle.title}
                </h3>
              </div>

              <div className="prose prose-slate dark:prose-invert max-w-none pt-6 border-t border-slate-200 dark:border-slate-800 text-sm sm:text-base leading-relaxed">
                <div className="whitespace-pre-line text-slate-700 dark:text-slate-300 font-sans">
                  {activeArticle.content}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {activeArticle.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setActiveArticle(null)}
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-950 hover:opacity-90"
                >
                  Close Reader
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}

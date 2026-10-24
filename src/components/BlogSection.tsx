"use client";

import React, { useState } from "react";
import { articlesData, Article } from "@/data/articles";
import {
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  X,
} from "lucide-react";

export function BlogSection() {
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  return (
    <section id="articles" className="py-24 relative scroll-mt-20 border-t border-slate-200/80 dark:border-zinc-800/80 bg-slate-50/50 dark:bg-zinc-950/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-slate-700 dark:text-zinc-300 bg-slate-100 dark:bg-zinc-800/70 border border-slate-200 dark:border-zinc-700/80 mb-3">
            <span>ENGINEERING LOGS &bull; WRITING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
            Engineering Logs, Tutorials &amp; Research Notes
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-zinc-400 leading-relaxed">
            Practical breakdowns of local LLM tool calling, Explainable AI mathematics, and multi-agent systems designed from production experience.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articlesData.map((article) => (
            <article
              key={article.slug}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-900/40 border border-slate-200 dark:border-zinc-800 hover:border-slate-400 dark:hover:border-zinc-700 shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-slate-400 dark:text-zinc-500 font-mono">
                    <Clock className="w-3 h-3" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 dark:text-zinc-100 mb-2 line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 mb-4 line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-50 dark:bg-zinc-950 text-slate-500 dark:text-zinc-400 border border-slate-200 dark:border-zinc-800"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-zinc-800/80 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400 dark:text-zinc-500 flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {article.date}
                </span>
                <button
                  onClick={() => setActiveArticle(article)}
                  className="text-xs font-semibold text-slate-800 dark:text-zinc-200 hover:text-slate-950 dark:hover:text-white flex items-center gap-1 transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Article Reader Modal */}
        {activeArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-150">
            <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-white dark:bg-zinc-950 border border-slate-300 dark:border-zinc-800 p-6 sm:p-8 shadow-2xl">
              
              <button
                onClick={() => setActiveArticle(null)}
                className="absolute top-6 right-6 p-2 rounded-lg bg-slate-100 dark:bg-zinc-900 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
                aria-label="Close Article"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="mb-4">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-zinc-400 mb-1">
                  <span>{activeArticle.category}</span>
                  <span>&bull;</span>
                  <span>{activeArticle.date}</span>
                  <span>&bull;</span>
                  <span>{activeArticle.readTime}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-zinc-50">
                  {activeArticle.title}
                </h3>
              </div>

              <div className="prose prose-slate dark:prose-invert max-w-none pt-4 border-t border-slate-200 dark:border-zinc-800 text-xs sm:text-sm leading-relaxed">
                <div className="whitespace-pre-line text-slate-700 dark:text-zinc-300 font-sans">
                  {activeArticle.content}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {activeArticle.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2.5 py-0.5 rounded bg-slate-100 dark:bg-zinc-900 text-slate-700 dark:text-zinc-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setActiveArticle(null)}
                  className="px-4 py-2 rounded-lg text-xs font-semibold bg-slate-900 text-white dark:bg-zinc-100 dark:text-zinc-950 hover:opacity-90"
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}

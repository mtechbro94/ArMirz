"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-50 dark:bg-zinc-950 border-t border-slate-200 dark:border-zinc-800 text-slate-500 dark:text-zinc-400 py-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-slate-200 dark:border-zinc-800/80">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-slate-200 dark:border-zinc-800 bg-black/60 shadow-xs">
                <Image
                  src="/images/aiwithmir-logo.jpg"
                  alt="AIwithMir Logo"
                  fill
                  sizes="32px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-sm text-slate-900 dark:text-zinc-100 tracking-tight">
                  AIwithMir
                </span>
                <span className="text-[10px] tracking-wider uppercase font-mono text-slate-500 dark:text-zinc-400">
                  {siteConfig.tagline}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed max-w-sm">
              Empowering engineers, university students, and organizations with practical Artificial Intelligence, Large Language Models, and Machine Learning engineering.
            </p>

            <div className="text-xs font-mono text-slate-500">
              Founded by <strong className="text-slate-800 dark:text-zinc-200">Aaqib Rashid Mir</strong> &bull; M.Tech (AI &amp; DS)
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4">
            <div>
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-900 dark:text-zinc-200 mb-2.5">
                Navigation
              </div>
              <ul className="space-y-1.5 text-xs">
                {siteConfig.navLinks.slice(0, 5).map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="hover:text-slate-900 dark:hover:text-zinc-200 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-900 dark:text-zinc-200 mb-2.5">
                Resources
              </div>
              <ul className="space-y-1.5 text-xs">
                {siteConfig.navLinks.slice(5).map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="hover:text-slate-900 dark:hover:text-zinc-200 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Profiles & Back to Top */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end space-y-4">
            <div>
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-900 dark:text-zinc-200 mb-2.5 md:text-right">
                Connect
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-600 dark:text-zinc-400 hover:text-blue-500 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
                <a
                  href={siteConfig.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-3.5 h-3.5" />
                </a>
                <a
                  href={siteConfig.socials.email}
                  className="p-2 rounded-lg bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200 transition-colors"
                  aria-label="Send Email"
                >
                  <Mail className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-xs text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white transition-all shadow-xs"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-500 dark:text-zinc-500">
          <div>
            &copy; {new Date().getFullYear()} AIwithMir &bull; Aaqib Rashid Mir.
          </div>
          <div>
            Built with Next.js 15 &bull; Deployed on Vercel
          </div>
        </div>

      </div>
    </footer>
  );
}

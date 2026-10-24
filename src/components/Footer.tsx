"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { ArrowUp, Github, Linkedin, Mail, Sparkles } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-16 relative overflow-hidden">
      {/* Subtle top border glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-xl overflow-hidden border border-amber-500/40 bg-black/60 shadow-md">
                <Image
                  src="/images/aiwithmir-logo.jpg"
                  alt="AIwithMir Logo"
                  fill
                  sizes="36px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg text-white tracking-tight">
                  AIwithMir
                </span>
                <span className="text-[10px] tracking-wider uppercase font-mono text-cyan-400">
                  {siteConfig.tagline}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Empowering engineers, university students, and organizations with practical Artificial Intelligence, Large Language Models, and Machine Learning engineering.
            </p>

            <div className="text-xs font-mono text-slate-500">
              Founded by <strong className="text-slate-300">Aaqib Rashid Mir</strong> &bull; M.Tech (AI &amp; DS)
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4">
            <div>
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-200 mb-3">
                Navigation
              </div>
              <ul className="space-y-2 text-xs">
                {siteConfig.navLinks.slice(0, 5).map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="hover:text-cyan-400 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-200 mb-3">
                Resources
              </div>
              <ul className="space-y-2 text-xs">
                {siteConfig.navLinks.slice(5).map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="hover:text-cyan-400 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Profiles & Back to Top */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end space-y-6">
            <div>
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-200 mb-3 md:text-right">
                Connect
              </div>
              <div className="flex items-center gap-2.5">
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-blue-500/40 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.socials.email}
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-purple-400 hover:border-purple-500/40 transition-colors"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              type="button"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} AIwithMir — Aaqib Rashid Mir. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Built with Next.js, TypeScript &amp; Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

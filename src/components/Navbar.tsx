"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/site";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = siteConfig.navLinks
        .map((link) => link.href.replace("/#", ""))
        .filter((id) => !id.startsWith("/"));

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/85 dark:bg-[#070c1b]/90 backdrop-blur-md border-b border-slate-800/80 dark:border-cyan-500/10 shadow-lg shadow-black/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-1"
          >
            <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-amber-500/30 group-hover:border-cyan-400/50 transition-colors shadow-md shadow-amber-500/10 bg-black/40">
              <Image
                src="/images/aiwithmir-logo.jpg"
                alt="AIwithMir Logo"
                fill
                sizes="40px"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg tracking-tight text-slate-100 flex items-center gap-1.5">
                AIwithMir
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              </span>
              <span className="text-[10px] tracking-wider uppercase font-mono text-cyan-400/80">
                Learn • Build • Automate
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 dark:bg-slate-900/40 backdrop-blur-md border border-slate-800/80 dark:border-slate-800/60 rounded-full px-3 py-1.5 shadow-inner">
            {siteConfig.navLinks.map((link) => {
              const isActive = activeSection && link.href.includes(activeSection);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? "text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 shadow-sm"
                      : "text-slate-300 hover:text-cyan-300 hover:bg-slate-800/60"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 hover:opacity-95 transition-all shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/30 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Let&apos;s Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-slate-950/95 dark:bg-[#070c1b]/98 border-b border-slate-800 px-4 pt-3 pb-6 mt-3 shadow-2xl backdrop-blur-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-1.5">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-900/80 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-3 mt-2 border-t border-slate-800/80 flex flex-col gap-2">
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-indigo-400"
              >
                <span>Let&apos;s Connect</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/docs/Aaqib_Rashid_Mir_CV.pdf"
                target="_blank"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 border border-slate-800 hover:bg-slate-900"
              >
                <span>Download CV (PDF)</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

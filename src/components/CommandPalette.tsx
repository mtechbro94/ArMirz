"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "./ThemeProvider";
import { siteConfig } from "@/data/site";
import { projectsData } from "@/data/projects";
import { publicationsData } from "@/data/publications";
import {
  Search,
  FileText,
  Code,
  GraduationCap,
  Mail,
  Phone,
  Moon,
  Sun,
  ExternalLink,
  X,
  Sparkles,
  BookOpen,
  ArrowRight,
  Check,
  Award,
} from "lucide-react";

interface CommandItem {
  id: string;
  title: string;
  subtitle?: string;
  category: "Navigation" | "Projects" | "Research" | "Actions";
  icon: React.ElementType;
  action: () => void;
}

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copiedAction, setCopiedAction] = useState<string | null>(null);
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  const handleOpen = useCallback(() => {
    setIsOpen(true);
    setQuery("");
    setSelectedIndex(0);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    setQuery("");
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === "Escape" && isOpen) {
        e.preventDefault();
        handleClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, handleClose]);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const copyToClipboard = (text: string, label: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedAction(label);
      setTimeout(() => {
        setCopiedAction(null);
        handleClose();
      }, 1200);
    }
  };

  const items: CommandItem[] = useMemo(() => {
    const list: CommandItem[] = [
      // Quick Actions
      {
        id: "action-email",
        title: "Copy Email",
        subtitle: siteConfig.email,
        category: "Actions",
        icon: Mail,
        action: () => copyToClipboard(siteConfig.email, "email"),
      },
      {
        id: "action-phone",
        title: "Copy Phone Number",
        subtitle: siteConfig.phone,
        category: "Actions",
        icon: Phone,
        action: () => copyToClipboard(siteConfig.phone, "phone"),
      },
      {
        id: "action-theme",
        title: "Toggle Dark / Light Theme",
        subtitle: `Currently: ${theme || "dark"}`,
        category: "Actions",
        icon: theme === "dark" ? Sun : Moon,
        action: () => {
          setTheme(theme === "dark" ? "light" : "dark");
          handleClose();
        },
      },
      {
        id: "action-resume",
        title: "Open Verified Resume",
        subtitle: "View credentials, pedagogy & timeline",
        category: "Navigation",
        icon: FileText,
        action: () => {
          router.push("/resume");
          handleClose();
        },
      },
      // Sections
      {
        id: "nav-projects",
        title: "Selected Codebases & Projects",
        subtitle: "Jump to production architectures",
        category: "Navigation",
        icon: Code,
        action: () => {
          router.push("/#projects");
          handleClose();
        },
      },
      {
        id: "nav-research",
        title: "Peer-Reviewed Research & Papers",
        subtitle: "Jump to IJFMR, IJSR publications and preprints",
        category: "Navigation",
        icon: BookOpen,
        action: () => {
          router.push("/#research");
          handleClose();
        },
      },
      {
        id: "nav-teaching",
        title: "Workshops & Technical Training",
        subtitle: "Jump to 15+ labs & pedagogy metrics",
        category: "Navigation",
        icon: GraduationCap,
        action: () => {
          router.push("/#teaching");
          handleClose();
        },
      },
      {
        id: "nav-certifications",
        title: "Certifications & Credentials",
        subtitle: "AWS Cloud Practitioner & Azure AI-900",
        category: "Navigation",
        icon: Award,
        action: () => {
          router.push("/#certifications");
          handleClose();
        },
      },
      {
        id: "nav-contact",
        title: "Contact & Booking Inquiry",
        subtitle: "Inquire about workshops or engineering consulting",
        category: "Navigation",
        icon: Mail,
        action: () => {
          router.push("/#contact");
          handleClose();
        },
      },
    ];

    // Projects
    projectsData.forEach((p) => {
      list.push({
        id: `proj-${p.id}`,
        title: p.title,
        subtitle: `${p.category} • ${p.techStack.slice(0, 3).join(", ")}`,
        category: "Projects",
        icon: Code,
        action: () => {
          router.push("/#projects");
          handleClose();
        },
      });
    });

    // Research Papers
    publicationsData.forEach((pub, i) => {
      list.push({
        id: `pub-${i}`,
        title: pub.title,
        subtitle: `${pub.journal} (${pub.year})`,
        category: "Research",
        icon: FileText,
        action: () => {
          router.push("/#research");
          handleClose();
        },
      });
    });

    return list;
  }, [theme, setTheme, router, handleClose]);

  const filteredItems = useMemo(() => {
    if (!query.trim()) return items;
    const q = query.toLowerCase();
    return items.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        (item.subtitle && item.subtitle.toLowerCase().includes(q)) ||
        item.category.toLowerCase().includes(q)
    );
  }, [items, query]);

  // Keyboard navigation within list
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleKeyDownInMenu = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    } else if (e.key === "Enter" && filteredItems[selectedIndex]) {
      e.preventDefault();
      filteredItems[selectedIndex].action();
    }
  };

  return (
    <>
      {/* Global Navbar Trigger Button */}
      <button
        onClick={handleOpen}
        type="button"
        className="hidden md:inline-flex items-center gap-2 px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-900/80 text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100 hover:border-slate-300 dark:hover:border-zinc-700 text-xs font-mono transition-all"
        title="Search or jump to command (Ctrl+K)"
      >
        <Search className="w-3.5 h-3.5" />
        <span className="text-[11px]">Search</span>
        <kbd className="px-1.5 py-0.5 rounded text-[10px] bg-slate-200 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400 border border-slate-300 dark:border-zinc-700">
          ⌘K
        </kbd>
      </button>

      {/* Command Palette Modal */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150"
          onClick={handleClose}
        >
          <div
            className="w-full max-w-xl rounded-2xl bg-white dark:bg-[#0d0f17] border border-slate-200 dark:border-zinc-800 shadow-2xl overflow-hidden flex flex-col max-h-[75vh]"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={handleKeyDownInMenu}
          >
            {/* Input Header */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-200 dark:border-zinc-800/80">
              <Search className="w-4 h-4 text-slate-400 dark:text-zinc-500 shrink-0" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command, project, paper, or jump to section..."
                className="w-full bg-transparent text-sm text-slate-900 dark:text-zinc-100 placeholder:text-slate-400 dark:placeholder:text-zinc-500 focus:outline-none"
                autoFocus
              />
              <button
                onClick={handleClose}
                type="button"
                className="p-1 rounded-md text-slate-400 hover:text-slate-700 dark:hover:text-zinc-200"
              >
                <kbd className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700">
                  ESC
                </kbd>
              </button>
            </div>

            {/* Notification / Copied Alert */}
            {copiedAction && (
              <div className="px-4 py-2 bg-emerald-500/10 border-b border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs flex items-center gap-2 font-mono">
                <Check className="w-3.5 h-3.5" />
                <span>Copied {copiedAction} to clipboard!</span>
              </div>
            )}

            {/* Results List */}
            <div className="overflow-y-auto p-2 divide-y divide-slate-100 dark:divide-zinc-900/60">
              {filteredItems.length === 0 ? (
                <div className="py-12 text-center text-xs text-slate-400 dark:text-zinc-500">
                  No matching results for &ldquo;{query}&rdquo;
                </div>
              ) : (
                filteredItems.map((item, idx) => {
                  const Icon = item.icon;
                  const isSelected = idx === selectedIndex;
                  return (
                    <div
                      key={item.id}
                      onClick={item.action}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl cursor-pointer text-xs transition-colors ${
                        isSelected
                          ? "bg-slate-100 dark:bg-zinc-800/80 text-slate-900 dark:text-zinc-100"
                          : "text-slate-700 dark:text-zinc-400 hover:bg-slate-50 dark:hover:bg-zinc-900/50"
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className={`p-1.5 rounded-lg border ${
                            isSelected
                              ? "bg-white dark:bg-zinc-900 border-slate-300 dark:border-zinc-700 text-slate-900 dark:text-zinc-100"
                              : "bg-slate-50 dark:bg-zinc-950 border-slate-200 dark:border-zinc-800 text-slate-500 dark:text-zinc-400"
                          }`}
                        >
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <div className="min-w-0">
                          <p className="font-medium text-slate-900 dark:text-zinc-100 truncate">
                            {item.title}
                          </p>
                          {item.subtitle && (
                            <p className="text-[11px] text-slate-500 dark:text-zinc-400 truncate">
                              {item.subtitle}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 dark:bg-zinc-900 text-slate-500 dark:text-zinc-400">
                          {item.category}
                        </span>
                        {isSelected && (
                          <ArrowRight className="w-3.5 h-3.5 text-slate-400 dark:text-zinc-500" />
                        )}
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Footer Quick Keys */}
            <div className="px-4 py-2 bg-slate-50 dark:bg-zinc-950/70 border-t border-slate-200 dark:border-zinc-800 text-[11px] font-mono text-slate-500 dark:text-zinc-400 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span>&uarr;&darr; Navigate</span>
                <span>&crarr; Select</span>
                <span>ESC Close</span>
              </div>
              <span className="text-[10px]">AIwithMir &bull; The Coding Science</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

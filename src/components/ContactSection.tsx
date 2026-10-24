"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/site";
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Clock,
  Sparkles,
  MessageSquare,
  Phone,
} from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Training / Workshop Inquiry",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please fill out all required fields.");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      // If NEXT_PUBLIC_CONTACT_ENDPOINT is configured, send request
      const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;

      if (endpoint) {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setStatus("success");
          setFormData({ name: "", email: "", subject: "Training / Workshop Inquiry", message: "" });
          return;
        }
      }

      // Fallback: Simulate submission and open mailto link
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus("success");

      // Trigger mailto client
      const mailtoUrl = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
        `[AIwithMir Inquiry] ${formData.subject} from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`
      )}`;

      window.open(mailtoUrl, "_blank");
    } catch (err) {
      setStatus("error");
      setErrorMessage("Could not send directly. Please email me at " + siteConfig.email);
    }
  };

  return (
    <section id="contact" className="py-24 relative scroll-mt-20">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-t from-cyan-500/10 via-indigo-600/5 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>CONNECT &amp; COLLABORATE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Let&apos;s Build the Future of AI Together
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Whether you are looking to upskill engineering teams, book a keynote, consult on an AI architecture, or collaborate on academic research.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Info & Social Proof */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">
                Contact Details
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Direct communications are welcomed for university guest sessions, enterprise AI training programs, and research inquiries.
              </p>

              <div className="space-y-4 pt-2">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3.5 p-3 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800 hover:border-cyan-500/40 transition-colors group"
                >
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Email Address
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors">
                      {siteConfig.email}
                    </div>
                  </div>
                </a>

                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800 hover:border-blue-500/40 transition-colors group"
                >
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      LinkedIn Profile
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white group-hover:text-blue-400 transition-colors">
                      linkedin.com/in/aaqib-rashid-mir
                    </div>
                  </div>
                </a>

                <a
                  href={siteConfig.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800 hover:border-purple-500/40 transition-colors group"
                >
                  <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      GitHub Codebase
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white group-hover:text-purple-400 transition-colors">
                      github.com/mtechbro94
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800">
                  <div className="p-2.5 rounded-xl bg-slate-500/10 text-slate-600 dark:text-slate-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Primary Locations
                    </div>
                    <div className="text-xs font-semibold text-slate-900 dark:text-white">
                      {siteConfig.location}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-transparent border border-cyan-500/20 text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-cyan-500 mt-0.5 flex-shrink-0" />
                <span>Typical response time is within 24 hours for academic and engineering inquiries.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5"
            >
              <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">
                Send a Direct Message
              </h3>

              {status === "success" && (
                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Message prepared successfully!</p>
                    <p className="text-xs text-emerald-600/80 dark:text-emerald-400/80 mt-0.5">
                      Your default mail client was triggered to send this message to mtechbro94@gmail.com.
                    </p>
                  </div>
                </div>
              )}

              {status === "error" && (
                <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400 text-xs sm:text-sm flex items-center gap-2.5">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Dr. Jane Doe"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all placeholder:text-slate-400"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@organization.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                  Topic of Discussion
                </label>
                <select
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                >
                  <option value="Training / Workshop Inquiry">Training / Workshop Inquiry</option>
                  <option value="Keynote / University Guest Lecture">Keynote / University Guest Lecture</option>
                  <option value="AI / ML Architecture Consulting">AI / ML Architecture Consulting</option>
                  <option value="Academic Research Collaboration">Academic Research Collaboration</option>
                  <option value="The Coding Science Inquiries">The Coding Science Inquiries</option>
                  <option value="General Technical Inquiry">General Technical Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Outline your timeline, audience size, or project specifications..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all placeholder:text-slate-400 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 hover:opacity-95 shadow-lg shadow-cyan-500/20 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50"
              >
                {status === "loading" ? (
                  <span>Processing...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              <p className="text-[11px] text-center text-slate-500 font-mono">
                Safe &amp; direct. No spam, promotional tracking, or private credentials shared.
              </p>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}

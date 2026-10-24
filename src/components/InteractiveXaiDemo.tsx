"use client";

import React, { useState } from "react";
import {
  Sliders,
  Eye,
  CheckCircle2,
  Activity,
  Layers,
  Sparkles,
  Info,
  RefreshCw,
} from "lucide-react";

export function InteractiveXaiDemo() {
  const [activeMode, setActiveMode] = useState<"overlay" | "heatmap" | "raw">("overlay");
  const [heatmapAlpha, setHeatmapAlpha] = useState<number>(75);
  const [selectedScan, setSelectedScan] = useState<"mri-axial" | "cxr-pulmonary">("mri-axial");
  const [selectedClass, setSelectedClass] = useState<"pathology" | "benign">("pathology");

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/60 p-6 sm:p-8 shadow-sm">
      {/* Widget Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-zinc-800/80">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-[11px] font-mono bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 mb-2">
            <Sparkles className="w-3 h-3" />
            <span>LIVE INTERACTIVE RESEARCH DEMO &bull; GRAD-CAM &amp; CBM</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-zinc-100">
            Explainable AI (XAI) Attribution Visualizer
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 mt-1 max-w-2xl">
            Inspect model feature attribution and concept activation maps in real-time. Slide to observe how gradient-weighted activations localize pathological regions.
          </p>
        </div>

        {/* Scan Selector */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shrink-0 self-start sm:self-auto">
          <button
            onClick={() => setSelectedScan("mri-axial")}
            type="button"
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              selectedScan === "mri-axial"
                ? "bg-white dark:bg-zinc-800 text-slate-900 dark:text-zinc-100 shadow-xs"
                : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200"
            }`}
          >
            Cranial MRI (VGG16)
          </button>
          <button
            onClick={() => setSelectedScan("cxr-pulmonary")}
            type="button"
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              selectedScan === "cxr-pulmonary"
                ? "bg-white dark:bg-zinc-800 text-slate-900 dark:text-zinc-100 shadow-xs"
                : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200"
            }`}
          >
            Chest X-ray (XM-CBM)
          </button>
        </div>
      </div>

      {/* Main Interactive Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6">
        
        {/* Left: Interactive Scan Canvas */}
        <div className="lg:col-span-7 flex flex-col items-center">
          <div className="relative w-full max-w-[420px] aspect-square rounded-2xl overflow-hidden border border-slate-200 dark:border-zinc-800 bg-[#06080d] flex items-center justify-center shadow-inner group">
            
            {/* Base Scan Graphics (Procedural Anatomical SVG Rendering) */}
            <svg
              viewBox="0 0 300 300"
              className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300"
            >
              <defs>
                <radialGradient id="brainBg" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#2a3042" stopOpacity="0.8" />
                  <stop offset="70%" stopColor="#141824" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#080a10" stopOpacity="1" />
                </radialGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {selectedScan === "mri-axial" ? (
                // Brain MRI Axial Outline
                <g>
                  {/* Skull outline */}
                  <ellipse cx="150" cy="150" rx="105" ry="120" fill="url(#brainBg)" stroke="#3f4865" strokeWidth="2" />
                  <ellipse cx="150" cy="150" rx="98" ry="112" fill="none" stroke="#222838" strokeWidth="1.5" />
                  {/* Cerebral hemispheres fissure */}
                  <path d="M150 45 Q147 150 150 255" stroke="#1f2535" strokeWidth="2.5" fill="none" />
                  {/* Ventricles */}
                  <path d="M135 125 Q128 150 138 175 Q145 150 135 125 Z" fill="#0d111a" stroke="#283144" strokeWidth="1" />
                  <path d="M165 125 Q172 150 162 175 Q155 150 165 125 Z" fill="#0d111a" stroke="#283144" strokeWidth="1" />
                  {/* Sulci gyri patterns */}
                  <path d="M85 110 Q110 120 100 150 Q90 180 120 190" stroke="#2c344a" strokeWidth="1.5" fill="none" strokeDasharray="3 3" />
                  <path d="M215 110 Q190 120 200 150 Q210 180 180 190" stroke="#2c344a" strokeWidth="1.5" fill="none" strokeDasharray="3 3" />
                  
                  {/* Simulated Hyperintense Lesion Region */}
                  <circle cx="185" cy="135" r="22" fill="#58688a" fillOpacity="0.45" stroke="#8da0c4" strokeWidth="1.5" />
                  <circle cx="185" cy="135" r="14" fill="#a4b8db" fillOpacity="0.6" />
                </g>
              ) : (
                // Chest X-ray Outline
                <g>
                  {/* Thoracic cage & spine */}
                  <rect x="144" y="30" width="12" height="240" fill="#1b212f" rx="3" />
                  {/* Left & Right Lung fields */}
                  <path d="M70 70 Q130 50 135 120 Q135 220 80 230 Q60 170 70 70 Z" fill="url(#brainBg)" stroke="#3f4865" strokeWidth="1.5" />
                  <path d="M230 70 Q170 50 165 120 Q165 220 220 230 Q240 170 230 70 Z" fill="url(#brainBg)" stroke="#3f4865" strokeWidth="1.5" />
                  {/* Rib arches */}
                  <path d="M80 90 Q110 110 135 105" stroke="#2d354a" strokeWidth="1.5" fill="none" />
                  <path d="M75 125 Q110 145 135 140" stroke="#2d354a" strokeWidth="1.5" fill="none" />
                  <path d="M75 160 Q110 180 135 175" stroke="#2d354a" strokeWidth="1.5" fill="none" />
                  <path d="M220 90 Q190 110 165 105" stroke="#2d354a" strokeWidth="1.5" fill="none" />
                  <path d="M225 125 Q190 145 165 140" stroke="#2d354a" strokeWidth="1.5" fill="none" />
                  <path d="M225 160 Q190 180 165 175" stroke="#2d354a" strokeWidth="1.5" fill="none" />
                  {/* Heart silhouette */}
                  <path d="M135 140 Q170 170 145 225 Q125 210 135 140 Z" fill="#293348" fillOpacity="0.8" stroke="#415070" strokeWidth="1" />
                  {/* Pulmonary Infiltrate / Consolidation */}
                  <circle cx="95" cy="145" r="26" fill="#5c6e91" fillOpacity="0.5" stroke="#8ea3cb" strokeWidth="1.5" />
                </g>
              )}
            </svg>

            {/* Grad-CAM Heatmap Layer (Turbo/Jet Gradient Spectrum) */}
            {activeMode !== "raw" && (
              <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-200"
                style={{
                  opacity: activeMode === "heatmap" ? 1 : heatmapAlpha / 100,
                  background:
                    selectedScan === "mri-axial"
                      ? "radial-gradient(circle at 62% 45%, rgba(239, 68, 68, 0.95) 0%, rgba(245, 158, 11, 0.85) 15%, rgba(16, 185, 129, 0.6) 30%, rgba(59, 130, 246, 0.25) 45%, transparent 65%)"
                      : "radial-gradient(circle at 32% 48%, rgba(239, 68, 68, 0.95) 0%, rgba(245, 158, 11, 0.85) 15%, rgba(16, 185, 129, 0.6) 30%, rgba(59, 130, 246, 0.25) 45%, transparent 65%)",
                  mixBlendMode: activeMode === "heatmap" ? "normal" : "screen",
                }}
              />
            )}

            {/* Bounding Indicator / Target Anchor */}
            {activeMode !== "raw" && (
              <div
                className="absolute w-20 h-20 rounded-full border border-dashed border-red-400/80 pointer-events-none animate-pulse"
                style={{
                  top: selectedScan === "mri-axial" ? "35%" : "38%",
                  left: selectedScan === "mri-axial" ? "52%" : "22%",
                }}
              >
                <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[9px] font-mono px-1 rounded bg-red-950/80 text-red-300 border border-red-500/30 whitespace-nowrap">
                  Attribution Peak (L_Grad)
                </span>
              </div>
            )}

            {/* HUD Status Overlay */}
            <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 text-[10px] font-mono text-zinc-300 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>Model: {selectedScan === "mri-axial" ? "VGG16-GradCAM" : "XM-CBM-ViT"}</span>
            </div>

            <div className="absolute bottom-3 right-3 bg-black/75 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-mono text-zinc-400 border border-white/10">
              {activeMode === "raw" ? "RAW SCAN" : activeMode === "heatmap" ? "ATTRIBUTION ONLY" : `BLEND ${heatmapAlpha}%`}
            </div>
          </div>

          {/* Colorbar Spectrum Scale */}
          <div className="w-full max-w-[420px] mt-3">
            <div className="h-2 w-full rounded-full bg-gradient-to-r from-blue-600 via-emerald-400 via-amber-400 to-red-600" />
            <div className="flex justify-between text-[10px] font-mono text-slate-500 dark:text-zinc-500 mt-1">
              <span>0.00 (Background)</span>
              <span>Attribution Weight (A_k^c)</span>
              <span>1.00 (Max Focus)</span>
            </div>
          </div>
        </div>

        {/* Right: Controls & Scientific Attribution Metrics */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
          
          {/* View Mode Controls */}
          <div className="space-y-3">
            <label className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-zinc-400 flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5" />
              <span>Visualization View Mode</span>
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setActiveMode("overlay")}
                type="button"
                className={`px-3 py-2 rounded-xl text-xs font-medium border transition-all text-center ${
                  activeMode === "overlay"
                    ? "bg-slate-900 text-white dark:bg-zinc-100 dark:text-zinc-950 border-slate-900 dark:border-white shadow-xs"
                    : "bg-white dark:bg-zinc-900/60 border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 hover:border-slate-300 dark:hover:border-zinc-700"
                }`}
              >
                Overlay
              </button>
              <button
                onClick={() => setActiveMode("heatmap")}
                type="button"
                className={`px-3 py-2 rounded-xl text-xs font-medium border transition-all text-center ${
                  activeMode === "heatmap"
                    ? "bg-slate-900 text-white dark:bg-zinc-100 dark:text-zinc-950 border-slate-900 dark:border-white shadow-xs"
                    : "bg-white dark:bg-zinc-900/60 border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 hover:border-slate-300 dark:hover:border-zinc-700"
                }`}
              >
                Heatmap
              </button>
              <button
                onClick={() => setActiveMode("raw")}
                type="button"
                className={`px-3 py-2 rounded-xl text-xs font-medium border transition-all text-center ${
                  activeMode === "raw"
                    ? "bg-slate-900 text-white dark:bg-zinc-100 dark:text-zinc-950 border-slate-900 dark:border-white shadow-xs"
                    : "bg-white dark:bg-zinc-900/60 border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 hover:border-slate-300 dark:hover:border-zinc-700"
                }`}
              >
                Raw Scan
              </button>
            </div>
          </div>

          {/* Heatmap Opacity Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-mono text-slate-600 dark:text-zinc-400 flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5" />
                <span>Heatmap Blend Intensity</span>
              </span>
              <span className="font-mono font-semibold text-slate-900 dark:text-zinc-100">
                {heatmapAlpha}%
              </span>
            </div>
            <input
              type="range"
              min="10"
              max="100"
              value={heatmapAlpha}
              onChange={(e) => {
                setHeatmapAlpha(Number(e.target.value));
                if (activeMode === "raw") setActiveMode("overlay");
              }}
              className="w-full accent-indigo-500 cursor-pointer h-2 bg-slate-200 dark:bg-zinc-800 rounded-lg appearance-none"
            />
          </div>

          {/* Quantitative Attribution Fidelity Metrics */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800/80 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono font-semibold uppercase text-slate-700 dark:text-zinc-300 flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-indigo-500" />
                <span>Faithfulness &amp; Diagnostic Calibration</span>
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                Calibrated
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-2.5 rounded-lg bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800">
                <p className="text-[10px] font-mono text-slate-400 dark:text-zinc-500">Predicted Class</p>
                <p className="font-bold text-slate-900 dark:text-zinc-100">
                  {selectedScan === "mri-axial" ? "Glioma / Tumor (94.8%)" : "Consolidation (91.4%)"}
                </p>
              </div>

              <div className="p-2.5 rounded-lg bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800">
                <p className="text-[10px] font-mono text-slate-400 dark:text-zinc-500">Deletion-AUC (Fidelity)</p>
                <p className="font-bold text-slate-900 dark:text-zinc-100">
                  0.142 <span className="text-[10px] font-normal text-emerald-500">(&darr; Lower is better)</span>
                </p>
              </div>

              <div className="p-2.5 rounded-lg bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800">
                <p className="text-[10px] font-mono text-slate-400 dark:text-zinc-500">Insertion-AUC</p>
                <p className="font-bold text-slate-900 dark:text-zinc-100">
                  0.887 <span className="text-[10px] font-normal text-emerald-500">(&uarr; Higher is better)</span>
                </p>
              </div>

              <div className="p-2.5 rounded-lg bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800">
                <p className="text-[10px] font-mono text-slate-400 dark:text-zinc-500">Bottleneck Concept</p>
                <p className="font-bold text-slate-900 dark:text-zinc-100 truncate">
                  {selectedScan === "mri-axial" ? "Parietal Mass Effect" : "Lower Lobe Infiltrate"}
                </p>
              </div>
            </div>
          </div>

          {/* Research Context Callout */}
          <div className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-zinc-400">
            <Info className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              Implemented in PyTorch using layer <code className="px-1 py-0.5 rounded bg-slate-100 dark:bg-zinc-800 text-slate-800 dark:text-zinc-200 text-[11px] font-mono">features[28]</code> of VGG16 &amp; cross-attention concept heads in XM-CBM. Published in IJSR and targeting IEEE JBHI.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

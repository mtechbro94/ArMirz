import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        navy: {
          950: "#040711",
          900: "#070c1b",
          850: "#0b1328",
          800: "#101b38",
          700: "#192a54",
          600: "#243c75",
        },
        electric: {
          cyan: "#00f5ff",
          blue: "#38bdf8",
          indigo: "#6366f1",
          violet: "#a855f7",
          purple: "#c084fc",
        },
        gold: {
          400: "#fbbf24",
          500: "#d4af37",
          600: "#b48b1d",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "mesh-dark": "radial-gradient(at 0% 0%, rgba(56, 189, 248, 0.12) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(168, 85, 247, 0.12) 0px, transparent 50%), radial-gradient(at 50% 50%, rgba(212, 175, 55, 0.05) 0px, transparent 50%)",
      },
      boxShadow: {
        "glow-cyan": "0 0 25px -5px rgba(0, 245, 255, 0.3)",
        "glow-violet": "0 0 25px -5px rgba(168, 85, 247, 0.3)",
        "glow-gold": "0 0 25px -5px rgba(212, 175, 55, 0.3)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

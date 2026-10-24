# AIwithMir — Official Personal Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat&logo=tailwindcss)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

Production-ready, static-first personal portfolio and research hub for **Aaqib Rashid Mir** — Data Science and AI Trainer, AI Researcher, and AI Engineer.

---

## 🌟 Features & Highlights

- **Aesthetic Direction:** Dark navy/black futuristic editorial aesthetic with electric cyan, sky blue, and restrained violet accents matching the official **AIwithMir** brand logo.
- **Accessible & Responsive:** High-contrast WCAG-compliant design, keyboard navigable, reduced-motion friendly, mobile-optimized drawer, and dynamic Dark/Light theme switcher.
- **Centralized Content Architecture:** Zero hardcoded data in components. All copy, projects, workshops, publications, courses, certifications, and credentials live in dedicated TypeScript data files under `src/data/`.
- **Authentic Assets:** Uses Aaqib's real portrait photograph, official brand logo, and approved CV PDF download.
- **Technical SEO Ready:** Dynamic sitemap (`/sitemap.xml`), robots.txt (`/robots.txt`), OpenGraph and Twitter card metadata, and dual JSON-LD structured data schemas (`Person` and `WebSite`).
- **Interactive Capabilities:**
  - Dynamic project category filtering and deep-dive case study modal.
  - Interactive course and workshop domain filters.
  - In-place modal reader for engineering logs and technical tutorials.
  - Fully validated contact form with direct mail client (`mailto:`) fallback.
  - Dedicated printable `/resume` route with one-click official PDF download.

---

## 🚀 Quick Start (Local Development)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build & Verify for Production
```bash
npm run build
npm run start
```

---

## 📁 How to Update Content & Assets

All content is strictly separated from UI components. You can customize any section in seconds:

| What to Update | File to Edit | Notes |
| :--- | :--- | :--- |
| **Brand, Headline, Social Links, Stats** | `src/data/site.ts` | Edit headlines, email, LinkedIn, GitHub, and hero tagline. |
| **Bio, Education & Work History** | `src/data/profile.ts` | Update roles, universities, teaching narrative, and career timeline. |
| **Technical Skills & Tools** | `src/data/skills.ts` | Add or adjust skills, proficiency levels, and context notes. |
| **Featured Projects & Demos** | `src/data/projects.ts` | Add new projects, problem statements, GitHub links, and live demos. |
| **Workshops & Bootcamps** | `src/data/workshops.ts` | Add new corporate or university workshops, topics, and duration. |
| **Courses & Curricula** | `src/data/courses.ts` | Update course modules, prerequisites, and target audiences. |
| **Publications & Preprints** | `src/data/publications.ts` | Add new journal articles, conference papers, and DOIs. |
| **Certifications & Badges** | `src/data/certifications.ts` | Add newly acquired AWS, Azure, Google, or Coursera credentials. |
| **Technical Articles & Blog** | `src/data/articles.ts` | Add new engineering guides, code snippets, and tutorials. |

### Replacing Images and Documents

- **Brand Logo:** Replace `public/images/aiwithmir-logo.jpg` with your updated logo file.
- **Profile Portrait:** Replace `public/images/aaqib-profile.jpg` with your latest high-res photograph.
- **Official Resume PDF:** Replace `public/docs/Aaqib_Rashid_Mir_CV.pdf` whenever you generate a revised CV.

---

## 🌐 Free Vercel Deployment

This project is optimized for deployment on the free **Vercel Hobby Plan**:

1. Push your latest code to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete AIwithMir portfolio"
   git push origin main
   ```
2. Navigate to [vercel.com](https://vercel.com) and log in with your GitHub account.
3. Click **"Add New Project"** and select **`mtechbro94/AIwithMir`**.
4. Keep the default settings:
   - Framework Preset: **Next.js**
   - Root Directory: `./`
   - Build Command: `next build`
   - Output Directory: `.next`
5. Click **Deploy**. Your portfolio will be live in under 60 seconds with automatic HTTPS and continuous deployment on every Git push!

---

## 📄 License

MIT © [Aaqib Rashid Mir](https://github.com/mtechbro94) — AIwithMir

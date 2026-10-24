import type { Metadata } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/data/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Official portfolio of Aaqib Rashid Mir (AIwithMir): Assistant Professor, Data Science & AI Trainer, AI Researcher, and AI Engineer. Explore production AI projects, Explainable AI research, and workshops.",
  keywords: [
    "Aaqib Rashid Mir",
    "AIwithMir",
    "Data Science Trainer",
    "Artificial Intelligence Trainer",
    "AI Researcher",
    "AI Engineer",
    "Explainable AI",
    "Concept Bottleneck Models",
    "Grad-CAM",
    "LangGraph Multi-Agent",
    "Ollama Tool Calling",
    "The Coding Science",
    "Mewar University Data Science",
    "Guru Nanak Institutions Hyderabad",
    "AWS Certified Cloud Practitioner",
    "Azure AI-900",
  ],
  authors: [{ name: "Aaqib Rashid Mir", url: siteConfig.siteUrl }],
  creator: "Aaqib Rashid Mir",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.siteUrl,
    title: siteConfig.title,
    description: siteConfig.heroDescription,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/aiwithmir-logo.jpg",
        width: 1024,
        height: 902,
        alt: "AIwithMir — Aaqib Rashid Mir Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.heroDescription,
    images: ["/images/aiwithmir-logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/aiwithmir-logo.jpg",
    apple: "/images/aiwithmir-logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLdPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Aaqib Rashid Mir",
    alternateName: "AIwithMir",
    jobTitle: "Data Science & AI Trainer | AI Researcher | AI Engineer",
    description: siteConfig.heroDescription,
    url: siteConfig.siteUrl,
    image: `${siteConfig.siteUrl}/images/aaqib-profile.jpg`,
    sameAs: [
      siteConfig.socials.linkedin,
      siteConfig.socials.github,
      siteConfig.socials.colab,
    ],
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Mewar University",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Islamic University of Science & Technology (IUST)",
      },
    ],
    knowsAbout: [
      "Artificial Intelligence",
      "Deep Learning",
      "Explainable AI (XAI)",
      "Generative AI",
      "Large Language Models",
      "LangGraph",
      "Python",
      "Cloud Computing",
      "Computer Vision",
    ],
  };

  const jsonLdWebSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AIwithMir",
    url: siteConfig.siteUrl,
    author: {
      "@type": "Person",
      name: "Aaqib Rashid Mir",
    },
  };

  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable} font-sans antialiased bg-slate-50 dark:bg-[#040711] text-slate-900 dark:text-slate-100 min-h-screen flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200`}
      >
        <ThemeProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

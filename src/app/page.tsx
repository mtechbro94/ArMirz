import React from "react";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { TeachingSection } from "@/components/TeachingSection";
import { CoursesSection } from "@/components/CoursesSection";
import { ResearchSection } from "@/components/ResearchSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { BlogSection } from "@/components/BlogSection";
import { ContactSection } from "@/components/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <TeachingSection />
      <CoursesSection />
      <ResearchSection />
      <CertificationsSection />
      <BlogSection />
      <ContactSection />
    </>
  );
}

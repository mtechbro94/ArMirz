import test from "node:test";
import assert from "node:assert/strict";

import { siteConfig } from "../src/data/site.ts";
import { profileData } from "../src/data/profile.ts";
import { projectsData } from "../src/data/projects.ts";
import { publicationsData } from "../src/data/publications.ts";
import { certificationsData } from "../src/data/certifications.ts";
import { coursesData } from "../src/data/courses.ts";
import { workshopsData } from "../src/data/workshops.ts";
import { skillCategories } from "../src/data/skills.ts";
import { testimonialsData } from "../src/data/testimonials.ts";

test("Unit Test: siteConfig integrity and verified URLs", () => {
  assert.equal(siteConfig.name, "AIwithMir");
  assert.equal(siteConfig.author, "Aaqib Rashid Mir");
  assert.match(siteConfig.email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  assert.equal(siteConfig.socials.github, "https://github.com/mtechbro94");
  assert.equal(siteConfig.socials.linkedin, "https://www.linkedin.com/in/aaqib-rashid-mir/");
  assert.ok(siteConfig.stats.length >= 5, "Stats array must have at least 5 metrics");
  assert.ok(siteConfig.navLinks.some(link => link.href === "/resume"));
});

test("Unit Test: profileData academic credentials & timeline", () => {
  assert.equal(profileData.name, "Aaqib Rashid Mir");
  
  // Verify M.Tech and B.Tech degree qualifications exist
  const mtech = profileData.education.find(e => e.degree.includes("M.Tech"));
  assert.ok(mtech, "M.Tech degree must exist");
  assert.equal(mtech.field, "Data Science & Artificial Intelligence");
  assert.equal(mtech.score, undefined, "CGPA score must be omitted/hidden");
  assert.equal(mtech.institution, undefined, "College/university name must be omitted/hidden");

  const btech = profileData.education.find(e => e.degree.includes("B.Tech"));
  assert.ok(btech, "B.Tech degree must exist");
  assert.equal(btech.field, "Computer Science & Engineering");
  assert.equal(btech.score, undefined, "CGPA score must be omitted/hidden");
  assert.equal(btech.institution, undefined, "College/university name must be omitted/hidden");

  // Verify Assistant Professor tenure at Guru Nanak Institutions
  const asstProf = profileData.experience.find(e => e.role.includes("Assistant Professor"));
  assert.ok(asstProf, "Assistant Professor role must exist");
  assert.ok(asstProf.organization.includes("Guru Nanak Institutions"), "Must be GNITC");
});

test("Unit Test: projectsData flagship technical specifications", () => {
  const xmcbm = projectsData.find(p => p.id === "xm-cbm-clinical-decision-support");
  assert.ok(xmcbm, "XM-CBM Clinical Decision Support project must exist");
  assert.equal(xmcbm.category, "Computer Vision & XAI");
  assert.ok(xmcbm.githubUrl?.includes("github.com/mtechbro94"));
  assert.ok(xmcbm.colabUrl?.includes("colab.research.google.com"));

  const smilesync = projectsData.find(p => p.id === "smilesync-ai-agent-system");
  assert.ok(smilesync, "SmileSync-AI project must exist");
  assert.equal(smilesync.category, "AI Agents");
  assert.ok(smilesync.techStack.includes("LangGraph"));
});

test("Unit Test: publicationsData peer-reviewed citations", () => {
  const ijfmr = publicationsData.find(p => p.journal.includes("IJFMR"));
  assert.ok(ijfmr, "IJFMR publication must exist");
  assert.equal(ijfmr.paperId, "84195");
  assert.equal(ijfmr.impactFactor, "9.24");
  assert.ok(ijfmr.bibtex && ijfmr.bibtex.includes("@article"), "IJFMR must have valid BibTeX");

  const ijsr = publicationsData.find(p => p.journal.includes("IJSR"));
  assert.ok(ijsr, "IJSR publication must exist");
  assert.ok(ijsr.title.includes("Grad-CAM"));
  assert.ok(ijsr.bibtex && ijsr.bibtex.includes("@article"), "IJSR must have valid BibTeX");
});

test("Unit Test: testimonialsData integrity and institutional endorsements", () => {
  assert.ok(testimonialsData.length >= 3, "Must have at least 3 endorsements");
  for (const t of testimonialsData) {
    assert.ok(t.name.length > 0, "Testimonial must have a name");
    assert.ok(t.content.length > 20, "Testimonial must have substantive content");
    assert.ok(t.highlight.length > 0, "Testimonial must have a highlight quote");
    assert.ok(t.avatarInitials.length === 2, "Testimonial must have 2 initials");
  }
});

test("Unit Test: certificationsData credentials validation", () => {
  const aws = certificationsData.find(c => c.code === "CLF-C02");
  assert.ok(aws, "AWS CLF-C02 must exist");
  assert.equal(aws.issuer, "Amazon Web Services (AWS)");

  const azure = certificationsData.find(c => c.code === "AI-900");
  assert.ok(azure, "Azure AI-900 must exist");
  assert.equal(azure.issuer, "Microsoft");
});

test("Unit Test: coursesData & workshopsData pedagogical coverage", () => {
  assert.ok(coursesData.length >= 4, "Must offer at least 4 flagship courses");
  assert.ok(workshopsData.length >= 5, "Must document at least 5 workshop sessions");
  
  const genaiCourse = coursesData.find(c => c.category === "Generative AI");
  assert.ok(genaiCourse, "Generative AI course must exist");
  assert.ok(genaiCourse.curriculum.length >= 4, "Curriculum must have modules");
});

test("Unit Test: skillCategories evidence-based structure", () => {
  assert.ok(skillCategories.length >= 5, "Must have at least 5 skill categories");
  for (const cat of skillCategories) {
    assert.ok(cat.skills.length > 0, `Category ${cat.name} must have skills`);
    for (const skill of cat.skills) {
      assert.ok(["Advanced", "Proficient", "Working Knowledge"].includes(skill.level));
      assert.ok(skill.context.length > 0, `Skill ${skill.name} must have context`);
    }
  }
});

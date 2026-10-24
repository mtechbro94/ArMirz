import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

test("Integration Test: verify authentic public assets exist", () => {
  const publicDir = path.resolve(process.cwd(), "public");

  // Profile photo
  const profilePhoto = path.join(publicDir, "images", "aaqib-profile.jpg");
  assert.ok(fs.existsSync(profilePhoto), "public/images/aaqib-profile.jpg must exist");
  const photoStats = fs.statSync(profilePhoto);
  assert.ok(photoStats.size > 20000, "Profile photo size must be valid (>20KB)");

  // Brand logo
  const logo = path.join(publicDir, "images", "aiwithmir-logo.jpg");
  assert.ok(fs.existsSync(logo), "public/images/aiwithmir-logo.jpg must exist");
  const logoStats = fs.statSync(logo);
  assert.ok(logoStats.size > 10000, "Logo size must be valid (>10KB)");

  // Official CV PDF
  const cvPdf = path.join(publicDir, "docs", "Aaqib_Rashid_Mir_CV.pdf");
  assert.ok(fs.existsSync(cvPdf), "public/docs/Aaqib_Rashid_Mir_CV.pdf must exist");
  const cvStats = fs.statSync(cvPdf);
  assert.ok(cvStats.size > 50000, "CV PDF must be valid (>50KB)");
});

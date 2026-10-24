import test from "node:test";
import assert from "node:assert/strict";

import sitemap from "../src/app/sitemap.ts";
import robots from "../src/app/robots.ts";

test("Integration Test: sitemap generator outputs valid XML routes", () => {
  const routes = sitemap();
  assert.ok(Array.isArray(routes), "Sitemap must return an array of routes");
  
  const homeRoute = routes.find(r => r.url === "https://aiwithmir.vercel.app");
  assert.ok(homeRoute, "Home route must be declared in sitemap");
  assert.equal(homeRoute.priority, 1.0);

  const resumeRoute = routes.find(r => r.url.endsWith("/resume"));
  assert.ok(resumeRoute, "Resume route must be declared in sitemap");
});

test("Integration Test: robots generator provides valid directives", () => {
  const robotConfig = robots();
  assert.ok(robotConfig.sitemap, "Robots must declare sitemap URL");
  assert.ok(robotConfig.sitemap.includes("/sitemap.xml"));
});

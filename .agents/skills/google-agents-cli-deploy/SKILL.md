---
name: google-agents-cli-deploy
description: Deployment configuration, Netlify SSG build verification, and release pipeline for kognitif-blog.
---

# Deployment Skill: kognitif-blog

## Scope & Guidelines
This skill handles deployment preparation and Netlify integration:

1. **Netlify Configuration (`netlify.toml`):**
   - Ensure `build.command = "npm run build"`.
   - Ensure `build.publish = "dist"`.
   - Maintain static headers (cache headers for fonts and static assets, security headers like CSP and X-Content-Type-Options).

2. **Pre-deployment Verification:**
   - Run `npm run build` locally to ensure zero build errors.
   - Verify that output files are properly placed in `./dist/`.
   - Confirm that all static assets and 404 pages are resolved correctly.


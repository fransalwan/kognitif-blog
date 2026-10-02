---
name: google-agents-cli-workflow
description: Development lifecycle, local preview, static compilation, and quality control workflows for kognitif-blog.
---

# Workflow Skill: kognitif-blog

## Scope & Guidelines
This skill standardizes the day-to-day development workflow:

1. **Local Development:**
   - Run `npm run dev` for fast Astro development server.
   - Run `npm run check` for Astro and TypeScript diagnostics.

2. **Production Build & Preview:**
   - Execute `npm run build` to generate pure static HTML into `dist/`.
   - Run `npm run preview` to locally test the production build on a local static server.

3. **Pre-commit Checklist:**
   - No errors in `astro check`.
   - Production build succeeds without warnings.
   - Zero JS runtime bundle generated in client HTML.


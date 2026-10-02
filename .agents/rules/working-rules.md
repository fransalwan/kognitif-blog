# Working Rules & Operational Guidelines

## Operational Principles
1. **Deterministic Execution:**
   - Execute tasks step-by-step with zero assumptions.
   - Run type checks (`npx astro check`) and production builds (`npm run build`) before declaring tasks complete.
2. **Code Quality & Types:**
   - Always enforce strict TypeScript definitions.
   - Use strict Zod validation schemas for all Content Collections.
   - Avoid `any` types; export explicit TypeScript interfaces where necessary.
3. **Audit & Validation Protocol:**
   - Verify that generated output files in `dist/` do not contain unnecessary client-side JavaScript bundle tags.
   - Maintain clean semantic markup (`<main>`, `<article>`, `<header>`, `<nav>`, `<footer>`).
   - Validate frontmatter dates, drafts, slugs, and tags before publishing articles.


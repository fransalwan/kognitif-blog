# Project Rules: kognitif-blog

## 1. Architecture & Tech Stack
- **Framework:** Astro 4.x configured with strict TypeScript (`output: 'static'`).
- **Content Engine:** Astro Content Collections strictly typed with Zod schemas and MDX rendering.
- **Styling:** Tailwind CSS with `@tailwindcss/typography` (`prose prose-invert prose-lg`). Base styles custom-handled (`applyBaseStyles: false`).
- **Hosting & CI/CD:** Netlify Static (`@astrojs/netlify`, publishing `dist`, build command `npm run build`).

## 2. Hard Constraints
- **ZERO Client-Side JavaScript:** 
  - Strictly no `<script>` hydration in content or layouts.
  - No client-side frameworks (React, Vue, Svelte Islands) unless explicitly requested.
  - Rely exclusively on HTML semantics and modern CSS for layout and presentation.
- **Local Content Only:**
  - Strictly NO external databases (PostgreSQL, Supabase, Firebase, SQLite).
  - Strictly NO external API calls during runtime or build time. All content originates in `src/content/`.
- **Performance Standard:**
  - 100/100/100/100 on Google Lighthouse.
  - Zero layout shifts (CLS = 0).
  - Sub-second First Contentful Paint (FCP) and Largest Contentful Paint (LCP).

## 3. Theming & Design
- Dark mode by default (`bg-neutral-950 text-neutral-100` / slate / zinc).
- Clean typographic scale with clear visual hierarchy for code snippets, blockquotes, and callouts.


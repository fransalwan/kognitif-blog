---
name: google-agents-cli-scaffold
description: Scaffolding routines for layouts, pages, MDX content, and components in kognitif-blog.
---

# Scaffolding Skill: kognitif-blog

## Scope & Guidelines
This skill automates creation of new modules and templates:

1. **New Blog Post Scaffolding:**
   - Template file in `src/content/blog/<slug>.mdx` with standard frontmatter schema.
   - Inject dummy outline with deep-dive sections (AI, Hardware, Cyber Security).

2. **Component Scaffolding:**
   - Create `.astro` components in `src/components/`.
   - Ensure props are strictly typed with `interface Props`.
   - Keep components purely static and styled with Tailwind utility classes.

3. **Layout Scaffolding:**
   - Create layouts in `src/layouts/` adhering to standard semantic HTML and SEO meta tags.


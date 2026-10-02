---
name: google-agents-cli-publish
description: Content publishing workflow, frontmatter validation, draft handling, and MDX authoring for kognitif-blog.
---

# Publishing Skill: kognitif-blog

## Scope & Guidelines
This skill guides the authoring and publishing lifecycle for blog posts:

1. **Frontmatter Schema Validation:**
   - Every post in `src/content/blog/*.mdx` must adhere to `src/content/config.ts`:
     - `title`: string (required)
     - `description`: string (required)
     - `pubDate`: Date (required)
     - `updatedDate`: Date (optional)
     - `tags`: string[] (required)
     - `draft`: boolean (default: false)

2. **Publishing Checklist:**
   - Toggle `draft: false` when ready to go live.
   - Ensure title and description are compelling and SEO-optimized.
   - Verify all referenced MDX components (like `Callout`) are imported or auto-provided.
   - Run `npm run build` to verify frontmatter type compliance.


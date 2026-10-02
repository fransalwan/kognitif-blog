---
name: google-agents-cli-adk-code
description: Code quality, Astro component patterns, MDX processing, and TypeScript guidelines for kognitif-blog.
---

# ADK Code Standard: kognitif-blog

## Scope & Guidelines
This skill governs the code generation and maintenance standards for the kognitif-blog project:

1. **Astro Components (`.astro`):**
   - Keep components purely presentational and statically rendered.
   - Separate frontmatter component script (`---`) and template cleanly.
   - Do not include client-side script tags (`<script>`) or hydration directives (`client:load`, `client:idle`).

2. **MDX Custom Components:**
   - Callout components, code blocks, and diagrams must render strictly as static HTML and CSS.
   - Accept typed props and define default values clearly.

3. **Styling Standards:**
   - Use Tailwind CSS utility classes.
   - Ensure typography follows `@tailwindcss/typography` prose modifiers (`prose prose-invert prose-neutral`).


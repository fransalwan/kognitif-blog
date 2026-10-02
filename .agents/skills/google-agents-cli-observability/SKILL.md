---
name: google-agents-cli-observability
description: Build artifact inspection, bundle size tracking, and static asset monitoring for kognitif-blog.
---

# Observability Skill: kognitif-blog

## Scope & Guidelines
This skill monitors build output metrics and asset integrity:

1. **Build Metrics Tracking:**
   - Log build duration and generated HTML file count.
   - Inspect CSS output size produced by Tailwind CSS to verify purge/JIT efficiency.
   - Monitor total transfer size per article (aim for < 50 KB raw transfer).

2. **Route Integrity:**
   - Verify all generated paths in `dist/` correspond accurately to Content Collections.
   - Catch broken links, missing assets, or invalid markdown references during static site generation.


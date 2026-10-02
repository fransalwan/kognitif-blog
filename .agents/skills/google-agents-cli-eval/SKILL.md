---
name: google-agents-cli-eval
description: Performance auditing, Lighthouse metric compliance, zero-JS validation, and SEO evaluation for kognitif-blog.
---

# Evaluation Skill: kognitif-blog

## Scope & Guidelines
This skill governs audits, performance benchmarking, and SEO checks:

1. **Zero-JS Invariant:**
   - Scan generated HTML in `dist/` to confirm that no client-side runtime JavaScript `<script>` bundles are injected into the payload.
   - Confirm total page weight remains minimal.

2. **Lighthouse 100/100/100/100 Checks:**
   - **Performance:** Check LCP, FCP, CLS (must be 0).
   - **Accessibility:** Ensure high contrast, ARIA landmarks, alt text on images, descriptive link labels.
   - **Best Practices:** Proper HTTPS meta tags, DOCTYPE declaration, charset `UTF-8`.
   - **SEO:** Validate presence of `<title>`, `<meta name="description">`, Open Graph tags, canonical URLs, and structured data.


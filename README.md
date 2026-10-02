# kognitif-blog

> **High-Performance Static Technical Journal**  
> Deep-dive engineering insights at the intersection of **Artificial Intelligence**, **Hardware Architecture**, and **Cyber Security**.

[![Astro](https://img.shields.io/badge/Astro-4.x-FF5D01.svg?style=flat-square&logo=astro&logoColor=white)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6.svg?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.x-38B2AC.svg?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Deployment](https://img.shields.io/badge/Netlify-Static%20SSG-00C7B7.svg?style=flat-square&logo=netlify&logoColor=white)](https://netlify.com)
[![Performance](https://img.shields.io/badge/Lighthouse-100%2F100-success.svg?style=flat-square)](#performance--quality-invariants)
[![JavaScript](https://img.shields.io/badge/Client--Side%20JS-0%20KB-brightgreen.svg?style=flat-square)](#architecture--constraints)

---

## Architecture & Constraints

1. **Pure Static Generation (SSG):** Pre-rendered at build time. No SSR node servers, no edge functions.
2. **Zero Client-Side JavaScript:** Exactly **0 KB** client runtime bundle. No framework hydration islands (no React/Vue/Svelte in runtime output) to eliminate Total Blocking Time (TBT) and First Input Delay (FID).
3. **Local Markdown & MDX:** Strictly local content collections powered by type-safe Zod schema validation.
4. **No External Dependencies at Runtime:** No external databases (Supabase, Firebase, Postgres), no remote third-party CMS APIs, no client tracking scripts.
5. **Dark Mode First:** Tailored typographic scale using `@tailwindcss/typography` with optimal contrast ratios.

---

## Directory Structure

```text
kognitif-blog/
├── .agents/                      # Autonomous agent guidelines & operational skills
│   ├── rules/
│   │   ├── personal-context.md   # Developer identity & engineering philosophy
│   │   ├── project-rules.md      # Hard constraints & technical invariants
│   │   └── working-rules.md      # Deterministic execution & validation protocol
│   └── skills/                   # Modular skills (ADK code, deploy, eval, publish, etc.)
├── public/                       # Static public assets (favicons, SVGs, OG images)
├── src/
│   ├── components/               # Pure HTML/CSS presentational components (Callout, etc.)
│   ├── content/                  # Astro Content Collections (Zod schema & MDX posts)
│   │   ├── blog/                 # Technical essays (*.mdx)
│   │   └── config.ts             # Strict content schema definition
│   ├── layouts/                  # Base HTML wrappers (SEO meta tags, typography shell)
│   ├── pages/                    # File-based routing (index, blog/[...slug])
│   └── styles/                   # Global CSS & Tailwind directives
├── astro.config.mjs              # Astro configuration with Netlify adapter & Shiki syntax theme
├── netlify.toml                  # Netlify build command, publish dir, & cache headers
├── package.json                  # Dependencies & execution scripts
├── tailwind.config.mjs           # Tailwind theme & typography plugin configuration
└── tsconfig.json                 # Strict TypeScript configuration
```

---

## Getting Started

### Prerequisites
- **Node.js:** v18.17.0 or higher (v20+ recommended)
- **Package Manager:** `npm` (v9+) or `pnpm`

### Installation
Clone the repository and install dependencies from the root directory:

```bash
git clone https://github.com/<your-username>/kognitif-blog.git
cd kognitif-blog
npm install
```

### Environment Configuration
Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

| Variable | Description | Default |
| :--- | :--- | :--- |
| `PUBLIC_SITE_URL` | Canonical origin URL for Open Graph & SEO links | `https://kognitif-blog.netlify.app` |

---

## Development & Build Commands

All commands **must be executed from the root folder** (`kognitif-blog/`):

```bash
# Start local development server with hot-reload (http://localhost:4321)
npm run dev

# Run strict TypeScript and Astro type diagnostics
npx astro check

# Compile the pure static site to ./dist
npm run build

# Preview the production static output locally
npm run preview
```

---

## Content Authoring Workflow

All essays are stored in `src/content/blog/` as `.mdx` files.

### 1. Frontmatter Schema
Each post must satisfy the Zod schema defined in `src/content/config.ts`:

```yaml
---
title: "The Thermodynamics of Artificial Intelligence: Energy, Entropy, and Compute"
description: "Exploring Landauer's principle, thermal limits, and reversible computing."
pubDate: 2026-10-01
updatedDate: 2026-10-02       # Optional
tags: ["AI", "Hardware", "Physics"]
draft: false                  # Set true to exclude from production build
---
```

### 2. Using Custom Components
MDX allows embedding pure static Astro components without client hydration:

```mdx
import Callout from '../../components/Callout.astro';

<Callout type="info" title="Thermodynamic Invariant">
Landauer's principle bounds the minimum energy required to erase a bit to $k_B T \ln 2$.
</Callout>
```

Supported `type` values: `info`, `warning`, `tip`.

---

## Deployment (Netlify)

This project is configured out-of-the-box for **Netlify Static Hosting**:

- **Build Command:** `npm run build`
- **Publish Directory:** `dist`
- **Configuration File:** `netlify.toml` (includes immutable asset cache headers and security headers).

Simply connect your GitHub repository to Netlify; production builds trigger automatically on every push to `main`.

---

## Performance & Quality Invariants

- **Google Lighthouse Target:** 100 / 100 / 100 / 100
- **Cumulative Layout Shift (CLS):** 0
- **Zero JS Payload:** `<script>` tags in output = 0
- **Typography:** Rendered using `@tailwindcss/typography` with Shiki syntax highlighting (`github-dark`).

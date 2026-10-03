# Frans Alwan Purba &middot; Academic Research Portfolio

> **Master of Computer Science (M.Cs.) in Artificial Intelligence &middot; Universitas Gadjah Mada (UGM)**  
> Prospective Ph.D. Applicant  
> Focus: **Instance-Dependent Cost-Sensitive (IDCS) Machine Learning**, **Explainable AI (XAI) Stability**, and **Trustworthy AI Governance**.

[![Astro](https://img.shields.io/badge/Astro-4.x-FF5D01.svg?style=flat-square&logo=astro&logoColor=white)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6.svg?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.x-38B2AC.svg?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Deployment](https://img.shields.io/badge/Netlify-Static%20SSG-00C7B7.svg?style=flat-square&logo=netlify&logoColor=white)](https://kognitif-blog.netlify.app)
[![Lighthouse](https://img.shields.io/badge/Lighthouse-100%2F100-success.svg?style=flat-square)](#architectural-principles--features)
[![Zero-JS](https://img.shields.io/badge/Client--Side%20JS-0%20KB-brightgreen.svg?style=flat-square)](#architectural-principles--features)

---

## Academic Profile & Research Vision

This repository hosts **kognitif-blog**, an open-source academic research portfolio and digital garden by **Frans Alwan Purba**. The platform transparently documents the ongoing journey of my Master's thesis research at Universitas Gadjah Mada (UGM) and serves as an academic portfolio for future Ph.D. applications.

My primary research investigates the causal trade-offs of automated algorithmic decision-making:
1. **The Cost-Interpretability Dilemma:** Why profit-driven and instance-dependent loss functions (such as Average Expected Cost / AEC) produce unstable post-hoc explanations (SHAP and LIME) under extreme class imbalance.
2. **Parametric Regularization as a Stabilizing Instrument:** Restricting model weight complexity ($L_1/L_2$, inverse penalty $C$, tree depth) to curb gradient swings without deteriorating cost savings.
3. **Causal Hypothesis Testing via Cost-Shuffle:** Conducting stratified cost permutations to decouple customer features from financial loss distributions, validating the *feature-cost entanglement* hypothesis.
4. **Regulatory Alignment:** Ensuring algorithmic decision boundaries comply with the statutory mandates of the **EU AI Act** (*High-Risk AI Systems*) and **GDPR** (*Right to Explanation*).

---

## Featured Research (Master's Thesis Proposal)

- **Title:** *Stabilisasi Penjelasan Model Instance-Dependent Cost-Sensitive Menggunakan Regularisasi dan Uji Permutasi Biaya Terstratifikasi*  
- **Author:** Frans Alwan Purba (25/563545/PPA/07116)  
- **Affiliation:** Department of Computer Science & Electronics, FMIPA, Universitas Gadjah Mada (UGM)  
- **Target Publication:** European Journal of Operational Research (EJOR) / IEEE Transactions.  
- **Essay Adaptation:** [`/blog/cost-interpretability-dilemma-idcs`](https://kognitif-blog.netlify.app/blog/cost-interpretability-dilemma-idcs)

---

## Research Workbench (Open Science Pipeline)

The repository features an integrated **Research Workbench** (`/workbench`), providing a transparent window into active literature deconstructions:
- **Primary Benchmark:** *Ballegeer et al. (EJOR 2025)* &mdash; Evaluating explanation stability in instance-dependent cost-sensitive credit scoring.
- **Cost Matrix Foundations:** *Bahnsen et al. (Expert Systems with Applications 2015)* &mdash; Novel cost-sensitive framework with instance-dependent cost matrices.
- **XAI Fragility Mechanics:** *Slack et al. (AAAI/ACM AIES 2020)* &mdash; Empirical instability and Monte-Carlo perturbation sampling variance in post-hoc explainers.

---

## Architectural Principles & Features

- **Dual-Theme Support (Light & Dark Mode):** Zero-FOUC (no flash of unstyled content) theme switching with high-contrast academic typography.
- **Pure Static Generation (SSG):** Pre-rendered at build time with Astro 4.x. Exactly **0 KB** client-side framework runtime.
- **Mathematical Rigor:** Native KaTeX rendering for LaTeX equations and algorithmic proofs.
- **Type-Safe Content Collections:** Powered by strict Zod schemas for published essays (`src/content/blog/`) and active literature deconstructions (`src/content/research/`).
- **Academic CV & Bio Page:** Comprehensive curriculum vitae, research statement, and prospective Ph.D. profile accessible at [`/about`](https://kognitif-blog.netlify.app/about).

---

## Directory Structure

```text
kognitif-blog/
├── .agents/                      # Autonomous agent guidelines & Socratic research skills
│   ├── rules/                    # Personal context, project rules, & working protocols
│   └── skills/                   # Cognitive challenger, code evaluation, & publishing skills
├── public/                       # Static public assets (favicon, vectors, icons)
├── src/
│   ├── components/               # Pure HTML/CSS presentational components (Callout, etc.)
│   ├── content/                  # Astro Content Collections (Zod typed)
│   │   ├── blog/                 # Published semi-scientific essays (*.mdx)
│   │   ├── research/             # Active paper deconstructions (*.md)
│   │   └── config.ts             # Content schemas
│   ├── layouts/                  # BaseLayout with theme toggle & academic metadata
│   ├── pages/                    
│   │   ├── about.astro           # Academic CV, bio, & prospective PhD statement
│   │   ├── index.astro           # Research portfolio hub & thesis spotlight
│   │   ├── blog/[...slug].astro  # Essay reader with typography styling
│   │   └── workbench/            # Local research synthesis dashboard
│   └── styles/                   # Global CSS & Tailwind typography directives
├── astro.config.mjs              # Astro configuration (static output, Netlify adapter)
├── netlify.toml                  # Netlify build configuration & immutable cache headers
├── package.json                  # Scripts & dependencies
└── tailwind.config.mjs           # Tailwind theme configuration with typography plugin
```

---

## Development & Execution

```bash
# 1. Clone repository
git clone https://github.com/fransalwan/kognitif-blog.git
cd kognitif-blog

# 2. Install dependencies
npm install

# 3. Start local development server (http://localhost:4321)
npm run dev

# 4. Access local research workbench
# Open browser to: http://localhost:4321/workbench

# 5. Type-check and build production bundle
npm run build

# 6. Preview production static build locally
npm run preview
```

---

## Author & Academic Inquiries

**Frans Alwan Purba**  
Master of Computer Science (M.Cs.) in Artificial Intelligence  
Department of Computer Science & Electronics, FMIPA  
Universitas Gadjah Mada (UGM), Yogyakarta, Indonesia  
- **Email:** [fransalwanpurba@mail.ugm.ac.id](mailto:fransalwanpurba@mail.ugm.ac.id)  
- **GitHub:** [@fransalwan](https://github.com/fransalwan)  
- **Web Portfolio:** [kognitif-blog.netlify.app](https://kognitif-blog.netlify.app)

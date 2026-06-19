# mitchellsam.com

Personal portfolio site for Mitchell Sam — Fullstack Software Engineer, New York.

Built with Next.js 15 on Cloudflare Pages. Dark, angular aesthetic — slate substrate, Tower gold accent, 0px-radius shapes.

---

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 + TypeScript (App Router) |
| Styling | Tailwind CSS v3 + custom design token system |
| Fonts | Archivo (display) · Hanken Grotesk (body) via `next/font` |
| Animation | Framer Motion |
| Deployment | Cloudflare Pages via `@cloudflare/next-on-pages` |

---

## Local development

```bash
npm install
npm run dev
```

Opens at `http://localhost:3000`. Uses Turbopack for fast refresh.

---

## Build

```bash
npm run build
```

Standard Next.js production build. Run this to catch type errors and verify the output before deploying.

---

## Deploy to Cloudflare Pages

Deployment is a two-step process: compile for the Cloudflare edge runtime, then push.

```bash
# 1. Compile for Cloudflare's edge runtime
npm run pages:build

# 2. Deploy to Cloudflare Pages
npm run pages:deploy
```

Or preview the Cloudflare build locally before deploying:

```bash
npm run pages:build
npm run pages:dev
```

`pages:dev` serves the static output via Wrangler at `http://localhost:8788`.

> **Cloudflare constraint**: no Node.js-only APIs. All content is static or client-rendered — this is fine for a portfolio site.

---

## Resume PDF

The PDF at `/public/resume.pdf` is compiled from a LaTeX source in `resume/`.

```bash
npm run resume:build
```

**Prerequisites** (one-time setup):

```bash
# macOS
brew install --cask basictex
sudo tlmgr update --self
sudo tlmgr install latexmk titlesec enumitem fontawesome5 fancyhdr babel-english
```

The build script compiles `resume/resume.tex` and copies the output to `public/resume.pdf`.

---

## Project structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout — font setup, metadata
│   ├── page.tsx            # Landing page (all sections)
│   └── globals.css         # DS tokens + Tailwind directives
├── components/
│   ├── nav/Nav.tsx
│   ├── sections/           # Hero, Experience, Projects, Skills, Footer
│   └── ui/                 # Button, Badge, Card, CornerFrame (DS ports)
└── content/
    ├── experience.ts       # Work history data
    ├── projects.ts         # Projects data
    └── skills.ts           # Skills + certifications data

resume/                     # LaTeX resume source + build script
public/
└── resume.pdf              # Compiled resume (not committed — run resume:build)
```

---

## Design language

Key visual decisions, all expressed as CSS custom properties in `globals.css`:

- **Colors**: cool blue-slate substrate (`#0a0e15`), warm gold accent (`#c9a23a`), cyan for focus states
- **Shape**: 0px border radius everywhere; L-corner bracket frames via `CornerFrame`
- **Typography**: Archivo (uppercase, tracked headings) + Hanken Grotesk (body)
- **Motion**: 120–200ms, `ease-sharp` — snappy, mechanical feel

The four UI primitives (`Button`, `Badge`, `Card`, `CornerFrame`) live in `src/components/ui/` and compose using these tokens via inline styles.

---

## Adding content

**New project card** — add an entry to `src/content/projects.ts`. The grid picks it up automatically; no layout changes needed.

**New experience entry** — add to `src/content/experience.ts`.

**Case study pages** — add `src/app/projects/[slug]/page.tsx` and set `caseStudy: true` on the project entry.

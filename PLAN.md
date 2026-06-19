# Personal Website — Design & Implementation Plan

## Goal

A visually stunning personal site that doubles as an online resume for Mitchell Sam —
fullstack engineer, former BA/IT, New York. Primary audience: hiring managers,
technical recruiters, and peer engineers. The site should signal craft, taste, and
fullstack depth immediately.

---

## Stack

| Layer | Choice | Reason |
|---|---|---|
| Framework | Next.js 15 + TypeScript | App Router, RSC, Edge runtime compat |
| Styling | Tailwind CSS v4 | Utility-first, dark-mode native |
| Animation | Framer Motion | Declarative, composable, production-grade |
| Deployment | Cloudflare Pages | Edge-native, global perf, free tier |
| Adapter | `@cloudflare/next-on-pages` | Bridges Next.js to Cloudflare's edge runtime |
| OG Images | `@vercel/og` (via Satori) | Dynamic social cards |

> **Cloudflare constraint**: No Node.js-only APIs. All content is static or
> client-rendered — fine for this use case.

---

## Visual Design System

**Aesthetic**: dark, angular, cinematic. Cool blue-slate substrate, warm gold accent, 0px-radius shapes, thin hairline borders.

### Color palette (DS core tokens)

```
Background:     #0a0e15  (--slate-900 / --bg-base)
Surface card:   #1a212d  (--slate-700 / --surface-card)
Border:         #3b4654  (--slate-500 / --border-hairline)
Text primary:   #e8ecf1  (--slate-100 / --text-primary)
Text muted:     #8b95a3  (--slate-300 / --text-muted)
Accent:         #c9a23a  (--gold)
Accent bright:  #f0c850  (--gold-bright)
Selection/focus:#5fd0e6  (--cyan-bright)
```

### Typography (DS tokens)

```
Display / hero: Archivo (variable) — uppercase, tracked, weight 600–800  (--font-display)
Body:           Hanken Grotesk — weight 400–500                           (--font-text)
Numerals:       Archivo thin — zero-padded readouts, weight 200–300      (--font-numeric)
```

### Shape language

- **0px border radius everywhere** (`--radius-0`) — hard angular corners, no rounding
- `--radius-pill` reserved for progress capsules and round button glyphs only
- L-corner bracket frames via `CornerFrame` — the DS density dial (full HUD ↔ minimal hairline)

### Motion principles

- Transitions: 120–200ms (`--dur-fast` / `--dur-base`), `ease-sharp` — snappy mechanical feel
- Hover: brightened fill + faint cyan edge on interactive surfaces
- Press: quick darken + `scale(0.98)` on buttons
- No bounce springs, no infinite loops

---

## Site Structure

```
/                     → Single-page scroll (all resume sections)
/projects/[slug]      → Case study pages (added over time as projects are written up)
```

The projects/demos section on the landing page is **data-driven and extensible** —
new cards (future games, side projects, case studies) are added by dropping an entry
into `src/content/projects.ts`. No layout changes required.

### Sections (in order)

#### 1. Hero
- Name, title ("Full Stack Software Engineer"), short punchy bio
- Animated word swap in the tagline (Framer Motion `AnimatePresence`)
- CTAs: [View Work ↓] · [Download Resume] · [GitHub] · [LinkedIn]
- Ambient gradient mesh background

#### 2. Work Experience
- Vertical timeline — each entry: company, title, date range, 2–3 impact bullets
- Tech stack chips per role

#### 3. Projects
- Responsive card grid, fully data-driven from `content/projects.ts`
- Each card: title, description, tech stack badges, [Live Demo] + [GitHub] links
- "More coming soon" slot — honest placeholder, replaced as projects are added
- Cards with `type: "game"` will eventually link to `/demos/[slug]` routes (not built yet)
- Cards with `type: "project"` link to `/projects/[slug]` case studies

#### 4. Skills
- Structured grid, not a tag cloud: Languages · Frameworks · Databases · DevOps · Testing

#### 5. Certifications
- Foundation Certificate in Business Analysis (2015)
- ITIL Foundation Certificate in IT Service Management
- AWS Certified Developer – Associate *(in progress)*

#### 6. Contact / Footer
- Email, GitHub, LinkedIn
- "Download Resume (PDF)" link

---

## Resume Content (extracted from LaTeX source)

### Contact
- **Email**: msam478@gmail.com
- **LinkedIn**: linkedin.com/in/mitchell-sam
- **GitHub**: github.com/MitchellSam
- **Location**: New York, NY

### Summary (source material — rewrite for web)
Full Stack Software Engineer with experience building scalable applications and
modernizing complex legacy systems in fast-paced Agile environments. Currently serving
as the dedicated engineer for a mission-critical internal application at JPMorgan Chase,
leading systematic tech debt remediation and architecting a full system rewrite.
Proficient in React, TypeScript, Node.js, SQL, and cloud infrastructure, with hands-on
experience applying AI-assisted development workflows — including GitHub Copilot and
Claude Code — and spec-driven development practices. Former business analyst and IT
support technician with a strong ability to bridge technical and non-technical
stakeholders. Currently preparing for the AWS Developer Associate certification.

### Experience

**Fullstack Software Engineer II** · A.V. Services Inc. (contracted to JPMC) · Dec 2025 – Present · Jersey City, NJ  
*Primary engineer on a multimedia integration application at JPMorgan Chase, focused on codebase modernization and platform stability.*
- Leading a systematic refactoring initiative across the full stack, improving code
  quality, maintainability, and long-term extensibility of a complex internal platform.
- Leveraging GitHub Copilot and Claude Code to accelerate large-scale refactoring
  efforts, significantly increasing throughput and code quality across the codebase.
- Championing the adoption of spec-driven development practices with the broader
  engineering team, establishing a disciplined approach to defining behavior before
  implementation.
- Collaborating with the team to architect a full rewrite of the platform, applying
  spec-driven development to modernize the application's architecture and improve
  scalability.
- Stack: JavaScript, TypeScript, React, Python, MS SQL Server

**Consultant Software Developer** · Independent · Jun 2023 – Dec 2025 · New York, NY
- *Windows on the Lake*: Refactored a legacy email parsing system that routes client
  inquiries to a CRM; integrated the GLiNER Named Entity Recognition model for
  intelligent NLP-based tagging and categorization.
- *HEVO*: Led a post-migration technical audit of AWS infrastructure, legacy Java
  codebases, and CI/CD pipelines to restore platform functionality after a contractor
  transition.

**Software Engineer** · CircleBlack Inc. · Mar 2020 – Jun 2023 · Jersey City, NJ  
*All-in-one FinTech wealth management platform (portfolio management, performance reporting, rebalancing)*
- Migrated multiple Angular front ends to React, preserving 100% functionality and
  reducing page load times by 50%.
- Built a Redis-based queuing system for high-volume financial report processing,
  cutting backend processing time by 50%.
- Integrated third-party systems via RESTful APIs, expanding platform functionality
  and product offerings by 50%.
- Achieved 100% test coverage across automated test suites (Mocha, Chai, Jasmine).
- Reduced new-hire ramp-up time by 25% through onboarding documentation and
  environment setup.

**Junior Developer** · Windows on the Lake · Mar 2019 – Feb 2020 · New York, NY  
*Premiere waterfront wedding venue and events facility*
- Improved email parser data extraction accuracy by 33%.
- Optimized CRM data flow, resulting in a 20% increase in customer conversions.
- Developed backend API features using Node.js and Express, expanding functionality
  by 25%.
- Managed Docker container deployments, achieving 99.9% uptime.

**Business Analyst Consultant (at Fannie Mae)** · FDM Group · May 2016 – Jan 2018 · Washington, DC  
*Government-sponsored enterprise issuing mortgage-backed securities*
- Produced, analyzed, and visualized 100+ usage and performance metrics to inform
  stakeholder decisions.
- Wrote Python, Bash, and SQL tooling for QA and data analysis, reducing manual
  testing time by 50%.
- Automated production tasks, saving ~100 man-hours per month.
- Delivered Loan Performance application enhancements, reducing report generation
  time by 50%.

**IT Support** · Amelotte International Corporation · Nov 2014 – Jul 2015 · New York, NY
- Built a database solution for financial tracking, reducing invoice processing time
  by 25%.
- Led training sessions on database schema design and data best practices.

**IT Support** · Ascend Leadership · Jun 2013 – Apr 2014 · New York, NY  
*Non-profit career and mentorship programs for Pan-Asian professionals*
- Managed website and membership database; contributed to a 50% increase in event
  registrations.
- Analyzed metrics for 50+ volunteer branches and 5,000+ registered members.
- Supported acquisition: merged 60,000+ contact records from two organizations,
  ensuring data integrity.

### Education

- **Fullstack Academy of Code** · Full-Time Immersive Software Engineering Program ·
  Oct 2018 – Feb 2019 · New York, NY
- **Binghamton University** · B.S. Bioengineering · Sep 2008 – Mar 2013 · New York, NY

### Technical Skills

| Category | Items |
|---|---|
| Languages | JavaScript (ES6+), TypeScript, SQL, HTML, CSS, Python, Java |
| Frameworks & Libraries | React, Node.js, Express, Next.js, Bootstrap, Redux, Angular |
| Databases | MySQL, PostgreSQL, MS SQL Server, MongoDB, Redis |
| DevOps & Tools | Git, Docker, Vite, Webpack, Jenkins, Maven, Liquibase, AWS (Lambda, S3, CloudFront, Route53) |
| Testing | Jest, Mocha, Chai, Jasmine, Playwright, Postman |
| AI Tools | GitHub Copilot, Claude Code |
| Other | REST APIs, Agile/Scrum, CI/CD, BDD/TDD, Spec-Driven Development, UNIX, Bash, Data Analysis |

---

## Implementation Plan

> **Current state (as of June 2026):** Phases 1 & 2 are complete. The site is scaffolded and
> all content sections are implemented. Phase 5 (design system migration) is also complete.

### Phase 1 — Scaffold & design foundation ✅

- [x] `npm create next-app@latest . --typescript --tailwind --app --src-dir`
- [x] Install: `framer-motion`, `geist`, `@cloudflare/next-on-pages`, `wrangler`
- [x] Implement design tokens in `tailwind.config.ts`
- [x] Create layout shell: fixed nav, scroll container, footer
- [x] Connect to GitHub repo + set up Cloudflare Pages project
- [x] `wrangler.toml` config; verify `wrangler pages dev` runs locally
- [ ] Wire `mitchellsam.com` custom domain in Cloudflare Pages dashboard

### Phase 2 — Content sections ✅

- [x] Hero section with animated tagline word swap
- [x] Work Experience timeline (from `src/content/experience.ts`)
- [x] Projects card grid (from `src/content/projects.ts`)
- [x] Skills grid (from `src/content/skills.ts`)
- [x] Contact / Footer with PDF resume download link
- [ ] Run `npm run resume:build` to generate `public/resume.pdf`

### Phase 3 — Case study pages

- [ ] `/projects/[slug]` template page
- [ ] Write up initial case studies (start with CircleBlack and consultant projects)
- [ ] Dynamic OG images per project (Satori)

### Phase 4 — Polish & deploy

- [ ] Mobile responsive audit
- [ ] Lighthouse: target 95+ Performance, 100 Accessibility
- [ ] `robots.txt`, `sitemap.xml`, meta/OG tags
- [ ] Deploy to Cloudflare Pages on `mitchellsam.com`

### Phase 5 — Design System Migration ✅

Migrated from the initial emerald/Geist aesthetic to the current dark angular design language.
CSS custom properties defined in `globals.css`; UI primitives in `src/components/ui/`.

Completed work:
- [x] Design tokens inlined in `src/app/globals.css` (color, spacing, motion, typography)
- [x] Tailwind config updated to match token values
- [x] Fonts switched to Archivo + Hanken Grotesk via `next/font/google`
- [x] `Button`, `Badge`, `Card`, `CornerFrame` ported to TSX in `src/components/ui/`
- [x] All sections restyled: Nav, Hero, SectionHeader, Experience, Projects, Skills, Footer
- [x] `geist` package removed; `npm run build` passes clean

---

## Extensibility — Future Modules

The Projects section is designed to accept new cards without layout changes:

```ts
// src/content/projects.ts
export type ProjectType = "project" | "game" | "demo" | "oss";

export interface Project {
  slug: string;
  type: ProjectType;
  title: string;
  description: string;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  caseStudy?: boolean;   // true → card links to /projects/[slug]
  comingSoon?: boolean;  // true → renders placeholder card
}
```

When the Asteroids and Pandemic games are ready as a separate module, adding them is:
1. Add two entries to `projects.ts` with `type: "game"` and a `liveUrl`
2. No changes to layout, section components, or routing needed

The `liveUrl` can point to a separate subdomain (`games.mitchellsam.com`) or a new
route within this app — either works without touching the portfolio layout.

---

## File Structure

```
personal-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx                    ← landing (all sections)
│   │   └── projects/
│   │       └── [slug]/
│   │           └── page.tsx
│   ├── components/
│   │   ├── nav/
│   │   │   └── Nav.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Certifications.tsx
│   │   │   └── Contact.tsx
│   │   └── ui/
│   │       ├── Badge.tsx
│   │       ├── Card.tsx
│   │       └── Button.tsx
│   ├── content/
│   │   ├── experience.ts
│   │   ├── projects.ts
│   │   └── skills.ts
│   └── lib/
│       └── utils.ts
├── public/
│   └── resume.pdf
├── wrangler.toml
└── PLAN.md
```

---

## Resolved Decisions

| Question | Decision |
|---|---|
| Games | Deferred — Projects section extensible to accept them as future cards |
| Interactive demo | Not in initial scope; Projects section is the showcase |
| Custom domain | mitchellsam.com (Cloudflare — direct Pages hookup) |
| Resume | PDF downloadable from Hero + Footer; site replaces it for browsing |
| Work experience | 6 roles with real metrics; internal tooling framed by scope/impact |

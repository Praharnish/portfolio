# Architecture

## Project type

This repository is a personal portfolio built with the Next.js App Router. The site is intentionally lightweight and content-focused, with no database, authentication, or backend data layer.

## Current technical stack

- Next.js `16.3.6`
- React `19.2.8`
- TypeScript
- Tailwind CSS `4`
- ESLint 9
- EmailJS Browser
- Vercel Analytics

## Repository structure

```text
portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── projects/
│       ├── page.tsx
│       └── [slug]/
│           └── page.tsx
├── components/
│   ├── about.tsx
│   ├── career.tsx
│   ├── contact.tsx
│   ├── experience.tsx
│   ├── goals.tsx
│   ├── hero.tsx
│   ├── navbar.tsx
│   ├── projects.tsx
│   └── skills.tsx
├── data/
│   ├── career.ts
│   ├── experience.ts
│   ├── portfolio.ts
│   ├── projects.ts
│   └── skills.ts
├── types/
│   ├── career.ts
│   ├── experience.ts
│   ├── portfolio.ts
│   ├── projects.ts
│   └── skills.ts
├── public/
│   ├── profile.jpg
│   └── projects/
├── docs/
├── README.md
├── package.json
├── next.config.ts
├── tsconfig.json
├── eslint.config.mjs
├── next-env.d.ts
└── package-lock.json
```

## App architecture

- `app/layout.tsx` loads the Geist fonts, global metadata, and base HTML structure.
- `app/page.tsx` assembles the homepage by composing the portfolio sections.
- `app/projects/page.tsx` renders the complete project index from the shared project data.
- `app/projects/[slug]/page.tsx` resolves a slug against the project data and renders a project detail page.
- `components/` contains the reusable homepage sections and the navigation structure.
- `data/` stores content used in the application, including portfolio data and project records.
- `types/` defines the TypeScript models used to structure the content.
- `public/` stores static assets, including the profile image.

## Routing and rendering

- `/` renders the main portfolio homepage.
- `/projects` renders every project record in a dedicated index.
- `/projects/[slug]` renders a detail page for each encoded project.
- Unknown slugs fall back to a user-friendly `Project Not Found` state and a return link.
- Rendering is static and server-driven with no API layer or client-side database dependency.
- The contact form is a client component that submits to EmailJS using public environment variables.
- Vercel Analytics is mounted in the root layout.

## Data architecture

The portfolio uses a centralized content model that keeps copy and project records organized:

- `data/portfolio.ts` contains the profile, hero text, stats, and contact details.
- `data/projects.ts` stores the featured project list, descriptions, repositories, highlights, and technologies.
- `components/` render the content rather than owning the copy directly.
- `types/` enforce structure across the portfolio and project models.
- `public/projects/` stores optional preview images; records without an image render an accent-gradient fallback.

This keeps updates simple and reduces risk of layout drift when content changes.

## Styling approach

Tailwind utility classes drive the UI while a small global stylesheet handles the dark base theme, smooth scrolling, and root styling. The visual language uses a deep navy palette, violet and cyan accents, layered surfaces, soft glows, and strong typographic hierarchy.

## Extension points

The project is already structured for easy expansion:

- Add new project entries in `data/projects.ts` to create another portfolio case study.
- Extend `data/portfolio.ts` for new profile details or content updates.
- Reuse components when additional sections are needed.
- Add a real CMS or backend only when the portfolio needs dynamic content or remote data management.

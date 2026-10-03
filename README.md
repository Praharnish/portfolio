# Harnish Prajapati | Portfolio

A Next.js portfolio for Harnish Prajapati. The site presents his background, technical skills, selected projects, career direction, and a direct email contact path.

## Live site

Production deployment:

<https://portfolio-praharnishs-projects.vercel.app/>

## What is included

- Responsive single-page portfolio homepage
- About, career, skills, projects, and contact sections
- Three project detail pages backed by route-based in-file data
- Repository links for the featured projects
- Local profile image at `public/profile.jpg`
- Dark visual system built with Tailwind CSS utilities and global CSS

## Technology

- Next.js `16.3.6` with the App Router
- React `19.2.8`
- TypeScript
- Tailwind CSS `4`
- ESLint 9 with the Next.js Core Web Vitals and TypeScript configurations

## Requirements

- Node.js and npm compatible with the versions used by Next.js 16
- A local clone of this repository

## Getting started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open <http://localhost:3000> in a browser.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create an optimized production build |
| `npm run start` | Serve the production build locally |
| `npm run lint` | Run ESLint across the project |

## Routes

| Route | Behavior |
| --- | --- |
| `/` | Portfolio homepage |
| `/projects/enterprise-web-api` | Enterprise Web API case-study page |
| `/projects/interactive-recipe-book` | Interactive Recipe Book case-study page |
| `/projects/portfolio-system` | Portfolio case-study page |
| `/projects/[slug]` | Dynamic project route; unknown slugs render a not-found message |

## Project structure

```text
portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── projects/
│       └── [slug]/
│           └── page.tsx
├── public/
│   └── profile.jpg
├── Doc/
├── README.md
├── package.json
├── tsconfig.json
├── next.config.ts
└── eslint.config.mjs
```

## Updating the portfolio

- Edit homepage profile, skills, and project-card content in `app/page.tsx`.
- Edit project descriptions, technologies, highlights, and repository URLs in `app/projects/[slug]/page.tsx`.
- Replace the profile image at `public/profile.jpg` while keeping the filename, or update the import in `app/page.tsx`.
- Update page metadata in `app/layout.tsx`.
- Keep product and implementation decisions synchronized with the files in `Doc/`.

## Validation

Run both checks before publishing:

```bash
npm run lint
npm run build
```

The production build and ESLint checks currently complete successfully.

## Documentation

- [Product requirements](Doc/prd.md)
- [Architecture](Doc/architecture.md)
- [Design direction](Doc/design.md)
- [Coding rules](Doc/rules.md)
- [Tasks and progress](Doc/tasks.md)
- [Project context](Doc/memory.md)

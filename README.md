# Harnish Prajapati | Portfolio

A responsive developer portfolio built with Next.js to present Harnish Prajapati's background, software skills, project work, and career direction.

## Live site

Production deployment:

<https://portfolio-praharnishs-projects.vercel.app/>

## Project status

This project is an active portfolio MVP. The homepage, project index, and
generated project detail pages are complete. Content is organized through
centralized, typed data modules instead of being embedded in page components.

## Included features

- Responsive single-page portfolio homepage
- About, career, experience, skills, projects, goals, and contact sections
- Dedicated all-projects index at `/projects`
- Four featured project case studies with dedicated dynamic routes
- Reusable components and typed content data for maintainability
- Dark, developer-focused visual design with Tailwind utilities
- EmailJS-powered contact form and external repository links
- Sticky navigation and footer with section links, social profiles, email, and resume download
- Vercel Analytics integration

## Stack

- Next.js `16.3.6` with App Router
- React `19.2.8`
- TypeScript
- Tailwind CSS `4`
- ESLint 9
- EmailJS Browser
- Vercel Analytics

## Requirements

- Node.js and npm compatible with the current Next.js 16 toolchain
- Git clone of this repository
- EmailJS service, template, and public key for the contact form

The contact form reads these client-safe environment variables at runtime:

```text
NEXT_PUBLIC_EMAILJS_SERVICE_ID
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
```

Create a `.env.local` file in the project root and provide values for all three
variables before testing the contact form. These values are intentionally
public client-side configuration values; do not place private service
credentials in the browser bundle.

## Getting started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open <http://localhost:3000> in the browser.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build locally |
| `npm run lint` | Run ESLint across the project |

## Route overview

| Route | Behavior |
| --- | --- |
| `/` | Portfolio homepage with all main sections |
| `/projects` | Index of all project records |
| `/projects/my-portfolio` | Portfolio project case study |
| `/projects/interactive-recipe-book-v2` | Recipe book project case study |
| `/projects/enterprise-web-api-suite` | API suite project case study |
| `/projects/super-mario-bros` | Game project case study |
| `/projects/[slug]` | Dynamic project route with fallback not-found state |

The detailed route hierarchy and static/SSG rendering explanation are
maintained in [docs/architecture.md](docs/architecture.md).

## Project structure

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
│   ├── footer.tsx
│   ├── navbar.tsx
│   ├── projects.tsx
│   └── skills.tsx
├── data/
│   ├── portfolio.ts
│   ├── projects.ts
│   ├── career.ts
│   ├── experience.ts
│   ├── navigation.ts
│   └── skills.ts
├── types/
│   ├── portfolio.ts
│   ├── projects.ts
│   ├── career.ts
│   ├── experience.ts
│   ├── navigation.ts
│   └── skills.ts
├── public/
│   ├── profile.jpg
│   ├── resume.pdf
│   ├── icons/
│   └── projects/
│       ├── interactive-recipe-book-v2.jpg
│       ├── my-portfolio.jpg
│       └── super-mario-bros.jpg
├── docs/
│   ├── architecture.md
│   ├── design.md
│   ├── memory.md
│   ├── prd.md
│   ├── rules.md
│   └── tasks.md
├── README.md
├── package.json
├── package-lock.json
├── next.config.ts
├── tsconfig.json
├── eslint.config.mjs
└── next-env.d.ts
```

## Content ownership and maintenance

Use the following source-of-truth files when updating content:

- Update page-level structure in `app/page.tsx` and `app/projects/[slug]/page.tsx` only when the layout changes.
- `data/portfolio.ts` — identity, hero, stats, about, goals, and contact content.
- `data/career.ts` — career-development cards.
- `data/experience.ts` — employment history and achievements.
- `data/skills.ts` — technology and capability list.
- `data/projects.ts` — project summaries, details, links, technologies, and highlights.
- `data/navigation.ts` — shared header and footer section links.
- `components/footer.tsx` — social profile URLs and resume link.
- The homepage shows the first three project records; `/projects` lists every record.
- Add a project image under `public/projects/` and reference it from `data/projects.ts` when a preview is available. Projects without an image use their configured accent fallback.
- Configure the three `NEXT_PUBLIC_EMAILJS_*` variables before testing the contact form.
- Replace the profile photo at `public/profile.jpg` if needed.
- Replace `public/resume.pdf` when publishing an updated resume.
- Update the social profile URLs in `components/footer.tsx` when those profiles change.
- Keep the implementation decisions and product requirements aligned with the files in `docs/`.

## Validation

Run the project checks before publishing:

```bash
npm run lint
npm run build
```

The latest recorded application checks completed successfully; run both commands again after application changes before publishing.

### Production build route output

The production build currently generates the following routes:

```text
Route (app)
┌ ○ /
├ ○ /_not-found
├ ○ /projects
└   /projects/[slug]
  ├ ● /projects/my-portfolio
  ├ ● /projects/interactive-recipe-book-v2
  ├ ● /projects/enterprise-web-api-suite
  └ ● /projects/super-mario-bros

○  (Static) prerendered as static content
●  (SSG)     prerendered as static HTML (uses generateStaticParams)
```

The dynamic project detail pages are statically generated from the project
records in `data/projects.ts`. Adding a project record adds its slug to the
generated route set.

## Documentation map

Each documentation file has a distinct purpose:

- [Product requirements](docs/prd.md)
- [Architecture](docs/architecture.md)
- [Design direction](docs/design.md)
- [Coding rules](docs/rules.md)
- [Tasks and progress](docs/tasks.md)
- [Project context](docs/memory.md)

Keep route and rendering details in the architecture document, product
behavior in the PRD, visual behavior in the design document, coding standards
in the rules document, and completed or planned work in the task document.

# Architecture

## Project type

This is a personal portfolio built with the Next.js App Router. It is currently a small, content-driven application with no database, API layer, authentication, or client-side state management.

## Technology

- Next.js `16.3.6`
- React `19.2.8`
- TypeScript
- Tailwind CSS `4` through `@tailwindcss/postcss`
- ESLint 9 with Next.js rules

## Repository structure

```text
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
├── package.json
├── next.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
└── tsconfig.json
```

## App architecture

- `app/layout.tsx` defines the root HTML structure, Geist font variables, language, and global metadata.
- `app/page.tsx` renders the homepage and owns the current profile, skills, and featured-project arrays.
- `app/projects/[slug]/page.tsx` resolves a slug against an in-file project object and renders the project overview, highlights, technologies, and repository link.
- `app/globals.css` imports Tailwind, defines the base colors, and applies global background, typography, scrolling, and selection styles.
- `public/` contains static assets, including the profile image and default Next.js assets.

## Routes and rendering

- `/` is a static homepage.
- `/projects/[slug]` is a dynamic server-rendered route. The project records are stored in the page module rather than fetched from an external service.
- An unknown project slug renders an in-page `Project Not Found` state and a link back to the project section.
- `next.config.ts` currently uses the default Next.js configuration.

## Styling approach

Tailwind utility classes handle nearly all component layout and styling. Global CSS supplies the dark page background, smooth scrolling, selection colors, and Tailwind theme variables. The visual language uses dark surfaces, white text, violet/cyan accents, gradients, borders, and rounded panels.

## Extension points

For a larger portfolio, move repeated content into `data/` and repeated visual blocks into `components/`. Add a content source or CMS only when the number of projects or editing workflow justifies the extra runtime and maintenance cost. A contact form, analytics, or resume download would also require an explicit implementation and privacy review; none is currently present.

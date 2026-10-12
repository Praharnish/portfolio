# Project Context

## Portfolio context

This repository contains Harnish Prajapati's active developer portfolio. It is a dark, responsive Next.js project intended for recruiters, collaborators, mentors, and visitors reviewing his software development work.

## Current stack

- Next.js `16.3.6` App Router
- React `19.2.8`
- TypeScript
- Tailwind CSS `4`
- ESLint 9

## Current state

- The homepage includes the full visitor journey from introduction through contact.
- The `/projects` page lists the complete project catalog, while the homepage highlights the first three records.
- The portfolio includes four featured projects with dedicated dynamic detail routes.
- Content is centralized in `data/portfolio.ts` and `data/projects.ts` with matching types in `types/`.
- Reusable section components live under `components/`.
- The profile image is stored at `public/profile.jpg`.
- There is no custom backend, database, or CMS. The contact form uses EmailJS, and the site includes Vercel Analytics.

## Key decisions

- Keep the experience dark, focused, and technically credible.
- Favor centralizing content in data objects so the site remains easy to update.
- Use project detail pages instead of introducing a CMS before the workload requires it.
- Prefer native Next.js, React, and Tailwind features over additional dependencies.

## Maintenance notes

- Update `README.md` and the relevant file in `docs/` when routes, scripts, or product behavior change.
- Verify repository URLs, contact information, and project details before publishing.
- Keep generation and documentation aligned with the current implementation when new sections are added.

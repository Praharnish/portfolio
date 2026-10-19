# Project Context

## Portfolio context

This repository contains Harnish Prajapati's active developer portfolio. It is a dark, responsive Next.js project intended for recruiters, collaborators, mentors, and visitors reviewing his software development work.

## Current stack

- Next.js `16.3.6` App Router
- React `19.2.8`
- TypeScript
- Tailwind CSS `4`
- ESLint 9
- EmailJS Browser
- Vercel Analytics

## Current state

- The homepage includes the full visitor journey from introduction through contact.
- The homepage includes shared sticky navigation and a footer with section links.
- The `/projects` page lists the complete project catalog, while the homepage highlights the first three records.
- The portfolio includes four featured projects with dedicated dynamic detail routes.
- Content is centralized in `data/`, including portfolio, navigation, career, experience, skills, and project records, with matching types in `types/`.
- Reusable section components live under `components/`.
- Static assets include the profile image, project previews, social icons, and downloadable resume under `public/`.
- There is no custom backend, database, or CMS. The contact form uses EmailJS, the footer provides direct email and social links, and the site includes Vercel Analytics.

## Key decisions

- Keep the experience dark, focused, and technically credible.
- Favor centralizing content in data objects so the site remains easy to update.
- Use project detail pages instead of introducing a CMS before the workload requires it.
- Prefer native Next.js, React, and Tailwind features over additional dependencies.

## Documentation ownership

- `README.md` is the onboarding and command reference.
- `docs/architecture.md` is the source of truth for structure, routes, rendering,
  and data flow.
- `docs/prd.md` describes product behavior, scope, and audiences.
- `docs/design.md` describes visual, interaction, and accessibility direction.
- `docs/rules.md` defines implementation and quality conventions.
- `docs/tasks.md` tracks completed work and planned enhancements.

## Maintenance notes

- Update `README.md` and the relevant file in `docs/` when routes, scripts, or product behavior change.
- Verify repository URLs, contact information, and project details before publishing.
- Verify the EmailJS variables and resume file before publishing.
- Keep `data/navigation.ts` aligned with the header and footer links.
- Keep generation and documentation aligned with the current implementation when new sections are added.

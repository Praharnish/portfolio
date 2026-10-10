# Project Context

## Portfolio context

This repository contains Harnish Prajapati's working developer portfolio. It is a dark, responsive Next.js site intended for recruiters, collaborators, mentors, and other visitors evaluating his software development experience.

## Stack

- Next.js `16.3.6` App Router
- React `19.2.8`
- TypeScript
- Tailwind CSS `4`
- ESLint 9

## Current state

- The homepage is implemented and contains the full visitor journey from introduction through contact.
- Three featured projects have dynamic detail pages under `/projects/[slug]`.
- Portfolio content is currently colocated in `app/page.tsx` and `app/projects/[slug]/page.tsx`.
- The profile image is stored at `public/profile.jpg`.
- There is no backend, database, CMS, form handler, or authentication.

## Key decisions

- Keep the default experience dark, focused, and content-driven.
- Use route-based project pages rather than introducing a content service prematurely.
- Keep repeated content in arrays or objects so it can be updated without changing layout logic.
- Prefer native Next.js and Tailwind capabilities over additional dependencies.

## Maintenance notes

- Update `README.md` and the relevant file in `Doc/` when routes, scripts, or product behavior changes.
- Verify repository URLs and email content before deployment.
- The build and lint checks currently pass; the remaining polish item is the global body font fallback documented in `Doc/design.md`.

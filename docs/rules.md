# Coding Rules

## General principles

- Keep changes small, readable, and maintainable.
- Prefer clear names and direct data flow over clever abstractions.
- Preserve the project’s App Router and Tailwind conventions unless a change has a clear benefit.
- Keep portfolio content specific, professional, and grounded in real work.

## Project conventions

- Use TypeScript for app code and typed content structures.
- Keep page routes in `app/` and use the Next.js App Router pattern.
- Store reusable content in `data/` and model it with `types/`.
- Keep static assets in `public/` and update references when files change.
- Store project preview images in `public/projects/` and use a configured accent fallback when an image is unavailable.
- Use `next/link` for internal navigation and standard external links for email and repositories.

## Styling rules

- Use Tailwind utility classes for layout and styling.
- Preserve the dark, high-contrast, developer-focused palette and accent system.
- Reuse established spacing, borders, radii, and hover treatments before adding new patterns.
- Keep responsive behavior explicit for mobile, tablet, and desktop layouts.

## Accessibility rules

- Use semantic headings, sections, navigation, and links.
- Preserve a logical heading order.
- Provide meaningful alternative text for images.
- Maintain readable contrast and visible focus states.
- Do not rely on color alone to communicate meaning.
- Use descriptive link text for repositories, email, and navigation.

## Quality rules

- Run `npm run build` after application changes.
- Run `npm run lint` and resolve regressions before release.
- Keep TypeScript and ESLint output clean before merging or deploying.
- Update the relevant files in `docs/` and `README.md` when routes, architecture, or project scope change.

## Content rules

- Do not leave sample or placeholder content in the live portfolio.
- Prefer concise, evidence-based descriptions with concrete technologies, responsibilities, and outcomes.
- Verify repository URLs, emails, and project details before publishing.
- Configure and verify `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`, and `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` before publishing the contact form.

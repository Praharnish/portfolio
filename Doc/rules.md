# Coding Rules

## General principles

- Keep changes small, readable, and maintainable.
- Prefer clear names and direct data flow over clever abstractions.
- Preserve the existing App Router and Tailwind conventions unless a change has a concrete benefit.
- Keep portfolio copy specific, professional, and supported by real project work.

## Project conventions

- Use TypeScript for application code.
- Keep route files in `app/` and use the App Router.
- Use arrays or typed objects for repeated content such as skills, projects, highlights, and technologies.
- Keep static assets in `public/` and update references when filenames change.
- Use `next/link` for internal navigation and native external links for repositories or email.

## Styling rules

- Use Tailwind utility classes for component styling and layout.
- Keep the dark surface, high-contrast text, and violet/cyan accent language coherent.
- Reuse existing spacing, border, radius, and hover patterns before introducing new values.
- Keep responsive behavior explicit at mobile, tablet, and desktop breakpoints.

## Accessibility rules

- Use semantic headings, sections, navigation, and links.
- Preserve a logical heading hierarchy.
- Provide meaningful alternative text for images.
- Maintain readable contrast and visible keyboard focus states.
- Do not rely on color alone to communicate meaning.
- Use descriptive link text, especially for external repositories and email actions.

## Quality rules

- Run `npm run build` after application changes.
- Run `npm run lint` and resolve new errors; distinguish existing warnings from regressions.
- Keep TypeScript and ESLint output clean before release.
- Update the relevant files in `Doc/` and `README.md` when routes, workflows, or architecture change.

## Content rules

- Do not leave sample or placeholder content in the production portfolio.
- Prefer concise descriptions with concrete technologies, responsibilities, and outcomes.
- Verify repository URLs and contact details before publishing.

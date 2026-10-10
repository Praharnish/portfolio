# Product Requirements Document

## Product overview

This is Harnish Prajapati's personal developer portfolio. It communicates his education, software interests, technical skills, selected projects, career direction, and contact information in a maintainable web experience.

## Audiences

- Recruiters and hiring managers evaluating co-op or internship candidates
- Developers, mentors, and collaborators
- Visitors interested in Harnish's project work and technical growth

## Product goals

- Establish a clear professional identity quickly.
- Show evidence of practical experience across web, backend, data, mobile, and application development.
- Make selected projects easy to compare and inspect.
- Provide a direct, low-friction contact path.
- Keep content updates simple for a single maintainer.

## Current user flows

1. A visitor opens `/` and reads the hero and summary stats.
2. The visitor scans About, Career, Skills, and the featured project cards.
3. The visitor opens a project detail route to read its overview, highlights, technologies, and repository link.
4. The visitor uses the Contact section's email CTA to start a conversation.
5. The visitor navigates the same content on desktop or mobile layouts.

## Current requirements

- Homepage sections for hero, About, Career, Skills, Projects, career direction, Contact, and footer.
- In-page navigation to the major homepage sections.
- Three featured projects with dedicated dynamic routes.
- Project detail content for descriptions, technologies, highlights, and source repositories.
- Responsive layout and dark visual theme.
- Accessible semantic headings, image alternative text, readable contrast, and native links.
- Maintainable Next.js App Router implementation with no backend dependency.

## Non-functional requirements

- Use Next.js, React, TypeScript, and Tailwind CSS.
- Keep the site fast and lightweight by avoiding unnecessary runtime services.
- Keep portfolio content easy to locate and update.
- Validate changes with `npm run build` and `npm run lint` before release.

## Out of scope today

There is currently no blog, resume download, social-link section, theme toggle, contact form backend, analytics integration, CMS, or database.

## Future enhancements

- Resolve all current ESLint errors and the image optimization warning.
- Normalize the configured Geist font usage in the global body styles.
- Add richer case-study media and measurable project outcomes.
- Add a resume download and professional social links.
- Add a form only when a privacy-conscious submission service or backend is selected.
- Consider separating content data from page rendering as the portfolio grows.

## Success criteria

- A new visitor can identify the owner and software focus from the hero.
- Featured projects can be reached in one clear interaction and understood without reading source code.
- Contact is reachable from the homepage without a form or account.
- The layout remains readable and usable across mobile and desktop viewports.
- Production builds complete without errors.

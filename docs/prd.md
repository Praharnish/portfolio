# Product Requirements Document

## Product overview

This repository contains Harnish Prajapati's personal developer portfolio. The site communicates his software development background, current interests, project work, and career direction through a polished dark-themed web experience built with Next.js.

## Product stage

The project is currently in an active portfolio-MVP stage. The site is fully functional, content is centralized, and the project includes multiple case-study pages that showcase work across frontend, backend, full-stack, and game development.

## Audiences

- Recruiters and hiring managers evaluating internships, co-op roles, or junior developer opportunities
- Developers, mentors, and collaborators looking for technical fit
- Visitors reviewing project examples and career direction

## Product goals

- Establish a clear professional identity within the first screen.
- Present practical software experience using real project examples.
- Explain technical focus areas across frontend, backend, APIs, data, and software engineering.
- Provide a concise but effective contact route for outreach.
- Keep the site maintainable by a single owner without a CMS or backend.

## Current user flows

1. A visitor lands on `/` and reads the hero, summary stats, and introduction.
2. They scan the About, Career, Experience, Skills, and Projects sections.
3. They click into a project card to view a dedicated case-study page.
4. They review the technologies, highlights, and project repository link.
5. They use the Contact section to reach out through email.

## Current requirements

- Responsive homepage with hero, about, career, experience, skills, projects, goals, contact, and footer sections.
- In-page navigation between major homepage sections.
- A project index at `/projects` containing all project records.
- Four featured projects with dedicated dynamic routes.
- Project detail pages that present overview, highlights, technologies, and repository links.
- A contact form that submits through EmailJS when its public environment variables are configured.
- Privacy-conscious traffic measurement through Vercel Analytics.
- Reusable component structure and centralized typed data in `data/` and `types/`.
- Dark visual theme, keyboard-friendly navigation, semantic HTML, and accessible contrast.
- Lightweight static portfolio without database, authentication, or backend services.

## Non-functional requirements

- Use Next.js, React, TypeScript, and Tailwind CSS.
- Keep the site fast, clear, and easy to maintain.
- Keep portfolio content easy to update for a single developer.
- Validate with `npm run lint` and `npm run build` before release.

## Current scope

Included in the project today:

- Developer-focused landing page with portfolio sections
- Reusable data-driven portfolio content
- Four project pages for portfolio, recipe book, API suite, and game development work
- Direct email-based contact path
- Clean project documentation and architecture references

## Out of scope today

- Blog or article publishing system
- Resume download flow
- Social media profile hub
- Theme switcher or personalization settings
- Custom contact-form backend
- CMS, database, or authentication layer

## Future enhancements

- Add richer project media and measurable outcomes
- Include professional social profiles and a downloadable resume
- Expand the case-study set as the portfolio grows
- Improve metadata, Open Graph, and SEO details
- Review the EmailJS contact flow and its privacy implications as the portfolio grows

## Success criteria

- A new visitor can quickly understand who the portfolio belongs to and where the technical focus is.
- The featured projects are easy to compare and access through the portfolio interface.
- The site remains readable and usable across mobile and desktop layouts.
- The portfolio remains maintainable without introducing unnecessary infrastructure.
- Production builds complete successfully and the repo remains documentation-aligned.

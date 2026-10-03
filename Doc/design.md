# UI/UX Direction

## Design intent

The portfolio should make Harnish Prajapati's technical direction legible within the first screen, then give visitors a quick path from background to skills, projects, career goals, and contact. The experience should feel professional and focused rather than like a generic marketing landing page.

## Current visual system

- Dark navy and near-black page surfaces
- Violet and cyan accents with occasional amber and orange project accents
- Large, high-contrast headings and uppercase section labels
- Rounded panels with translucent borders and restrained shadows
- Responsive grids that collapse for smaller screens
- Gradients and soft glow effects used as visual depth, not as content

## Page composition

The homepage is ordered as:

1. Navigation and identity
2. Hero, introduction, profile image, and summary stats
3. About section
4. Career development cards
5. Technical skills
6. Featured project cards
7. Current career direction
8. Contact CTA and footer

Project pages use a focused reading layout: back navigation, category and title, overview, highlights, technologies, repository CTA, career connection, and bottom navigation.

## Typography

The layout uses a bold display hierarchy, readable body copy, and uppercase labels for section markers. Geist is loaded by `app/layout.tsx` and exposed through Tailwind variables; `app/globals.css` currently sets the body fallback to Arial, so typography should be normalized if the intended Geist treatment is required.

## Interaction and accessibility

- Navigation links scroll to homepage sections.
- Project cards and repository links have visible hover states and keyboard-accessible native link behavior.
- The profile image has meaningful alternative text.
- Maintain heading order, readable contrast, visible focus states, and touch-friendly controls as the UI evolves.
- Keep external repository links explicit and opening in a new tab only where that behavior remains useful.

## Brand personality

Confident, practical, curious, modern, and career-focused. Copy should favor specific evidence of software work over broad claims.

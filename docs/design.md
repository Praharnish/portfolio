# UI/UX Direction

## Design intent

The portfolio is designed to make Harnish Prajapati's software direction easy to understand within the first screen. The experience feels professional, focused, and technically credible rather than overly promotional.

## Current visual system

- Dark navy and near-black surfaces
- Violet, cyan, and subtle amber/orange accent treatments
- High-contrast typography with strong section hierarchy
- Rounded cards, translucent borders, and restrained shadowing
- Responsive grids that adapt cleanly across mobile and desktop layouts
- Gradient accents used as subtle depth rather than decorative noise

## Page composition

The homepage is arranged in the following order:

1. Navigation and brand identity
2. Hero section with summary and profile image
3. About section
4. Career timeline or experience cards
5. Skills and technical focus
6. Featured project cards
7. Goals and career direction
8. Contact CTA and footer

The all-projects page follows a browse-first flow: back link, page heading, project count, and full-width project cards with preview imagery or accent fallbacks.

Project detail pages follow a focused content flow: back link, category, title, optional project image, overview, key highlights, technology tags, optional live-site CTA, optional repository CTA, and career connection statement.

## Typography

The design uses bold, readable headings with generous spacing and section labels that feel technical and modern. Geist fonts are loaded through `app/layout.tsx`, and the global design uses a clear dark-surface layout that supports strong contrast and readable body copy.

## Interaction and accessibility

- Navigation links scroll to major sections on the homepage.
- Project cards and repository links include clear hover treatment and native link behavior.
- The contact form provides labeled fields, inline status feedback, and a disabled state while a message is sending.
- The profile image includes meaningful alt text.
- Layouts stay predictable across screen sizes.
- Semantic headings and accessible contrast are maintained across the interface.
- External links open in a new tab when needed without reducing link clarity.

## Brand personality

Confident, practical, curious, and career-focused. The writing emphasizes concrete technical capability, project evidence, and learning direction over broad marketing language.

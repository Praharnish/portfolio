# Coding Rules

## 1. General principles
- Keep code simple, readable, and maintainable
- Favor reusable layouts and small component blocks
- Keep styles consistent with the existing dark design system
- Prefer clear names over clever abstractions

## 2. Project conventions
- Use TypeScript for all app logic
- Use the App Router pattern in `app/`
- Keep root pages focused and section-based
- Use arrays of content objects to structure repeated data

## 3. Styling rules
- Use Tailwind utility classes for most styling
- Keep design tokens consistent: dark surface, violet/cyan accents, white text
- Avoid ad-hoc styling that conflicts with the visual system
- Use accessible contrast and readable typography

## 4. Component rules
- If a block is reused, extract it into a component
- Avoid deeply nested conditional markup
- Keep sections small and purposeful

## 5. Accessibility rules
- Ensure text contrast meets readability standards
- Use semantic HTML for headings, sections, navigation, and links
- Provide meaningful alt text for images
- Ensure CTA buttons are visually clear and keyboard-focusable

## 6. Quality rules
- Run the build before considering work complete
- Keep the app free of TypeScript errors
- Keep code formatting consistent
- Update documentation when structure or workflow changes

## 7. Content rules
- Use professional, concise, and polished language
- Keep copy focused on clarity and value
- Avoid placeholder text in the final portfolio

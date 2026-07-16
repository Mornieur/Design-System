# Documentation UI Spec

## Source Direction

- Primary visual direction comes from the approved Figma Make file `UMwZHkUGnd0qOPluFyECTx`.
- The Figma Make code is reference material only.
- Inferred Figma proportions from the Make source:
  - sidebar width: `224px`
  - sticky top bar height: approximately `52px`
  - primary content max width: `1024px`
  - page horizontal padding: `40px`
  - default radius: `4px`

## Global Layout

- Desktop layout should prioritize content over chrome.
- Navigation must be structurally stable and editorially quiet.
- Major content should sit inside a readable column, not stretch edge-to-edge.
- Surfaces should define hierarchy only where hierarchy is meaningful.

## Header

- Include brand, minimal top-level navigation, theme toggle, and future language/search entry points.
- Keep the header visually light.
- Avoid system-runtime framing in the top bar.
- Search or quick-jump should be its own affordance, not mixed into primary nav labels.
- GitHub and Storybook links are optional utilities, not the headline.

## Sidebar

Desktop behavior:

- Width target: `224px` to `240px`.
- Acts as a navigation index, not a status panel.
- Use real groups:
  - Getting Started
  - Foundations
  - Components
  - Patterns
  - Resources

Do not show:

- route IDs
- tracked route counts
- runtime boundary labels
- shell mode labels
- preview ready labels
- fake telemetry

Mobile behavior:

- Sidebar becomes a simple drawer or sheet.
- Focus on route access and orientation only.
- Avoid persistent metadata panels above the nav list.

## Content Width

- Reading pages: target `720px` to `820px` main prose width inside a larger page frame.
- Component pages: allow wider sections for preview plus code, but keep text blocks readable.
- Home and index pages: wider composition is acceptable, but the main headline and body copy still need a readable column.

## Home

- The hero must communicate what FeitozaUI is in one glance.
- Real component examples should be more prominent than pseudo-operational framing.
- Use the Figma atmosphere and spacing discipline, but remove dashboard metaphors.
- Foundations and components should preview the actual documentation structure.

## Getting Started

Recommended order:

1. Introduction
2. Publication state
3. Installation
4. Peer dependencies
5. First component
6. Verified frameworks
7. Next steps

## Foundations Index

Each foundation entry should show:

- what it is
- why it matters
- relevant tokens
- visual example
- usage notes
- accessibility notes
- relevant source links

Avoid empty framing cards that do not teach anything.

## Component Index

- Present real public entries only.
- Each card should make scanning easy:
  - name
  - level/category
  - concise description
  - API stability when real
  - example count or links only when real

## Component Page

Required order:

1. name
2. description
3. real status or API stability
4. primary preview
5. import
6. examples
7. code
8. API
9. accessibility
10. best practices
11. related components
12. Storybook/source

Guidelines:

- Preview must be visually prominent.
- Code must stay close to the preview.
- Tabs are acceptable, but the preview must remain easy to find.
- Long narratives should not bury the first usable example.

## Code And Preview

- Preview and source belong to the same conceptual block.
- Imports should be easy to copy.
- Code blocks need strong contrast and clean padding.
- Avoid over-framing with multiple nested borders.
- Use monospace only where it helps scanning or copying.

## Typography

- Headings should feel precise and high-confidence.
- Body text should remain the dominant reading voice.
- Monospace is for real technical detail only.
- Keep enough spacing between headings, previews, and code to separate tasks clearly.

## Surfaces

- Background: dark-first blue-gray infrastructure field.
- Primary reading surface: restrained and quiet.
- Secondary surface: used for preview, code, related panels, and navigation when useful.
- Accent edges or cyan top borders should be reserved for active or important blocks.

## Dark Theme

- This is the primary brand environment.
- Use contrast, spacing, and cyan signal to create identity.
- Do not rely on decorative telemetry language to create mood.

## Light Theme

- Must be intentional, not simply inverted dark mode.
- Reduce texture density.
- Increase whitespace and simplify surface contrast.
- Cyan should remain crisp but less neon.

## Accessibility

- Keyboard flow must remain obvious.
- Focus states must be visible in both themes.
- 200% zoom must preserve reading order and navigation access.
- Reduced motion must be honored.
- Color alone cannot carry status meaning.

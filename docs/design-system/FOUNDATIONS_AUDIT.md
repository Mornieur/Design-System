# Foundations Audit

## Purpose

This audit compares the current FeitozaUI implementation with the official Figma Make visual reference:

```text
docs/docs/design-system/figma-make-reference.md
```

The purpose is architectural history. This document records what should change, what should be delayed, and what must be decided before tokens or components are modified.

No implementation is implied by this audit.

## Summary

The current project already has a small component platform foundation: tokens, Button, Box, Flex, Card, Storybook documentation, tests, and public exports.

The Figma Make reference proposes a more specific visual language:

- Blue-gray infrastructure neutrals.
- Cyan as the primary platform signal.
- Compact technical typography.
- Small radius.
- Hairline borders.
- Elevation through surface lightness.
- Status-driven color.
- Dashboard and observability patterns.

The gap is not component count. The gap is visual language consistency.

## Audit Matrix

| Area | Current Project | Figma Make Reference | Difference | Decision | Priority | Technical Justification | Impact | Risks |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Button | Public atom with `primary`, `secondary`, `accent`; currently warm brand direction; native button API preserved. | Primary cyan, secondary neutral, outline, ghost, destructive; compact radius; subtle glow only on hover/focus. | Current Button is simpler and visually warmer. Figma is more technical and state-rich. | Align later through tokens only; preserve API. Do not add variants in this phase. | High | Button is the most visible primitive and sets action language. | Strong visual identity improvement when tokens are approved. | Changing primary color may affect brand perception and tests. |
| Card | Internal molecule with title, body, elevation prop, surface styling. | Border-first panel, small radius, no dark-mode shadow by default, optional active top edge/accent. | Current Card treats elevation more like shadow; Figma treats elevation as surface hierarchy. | Align later by reducing shadow reliance and documenting active/selected card patterns. | High | Cards define platform surfaces and dashboard density. | Better infrastructure feel. | May change existing visual snapshots if added later. |
| Typography | Current docs/tokens use Inter, Outfit, Space Grotesk, and JetBrains Mono roles. | Barlow for display/headings, DM Sans for body, JetBrains Mono for data/code/labels. | FeitozaUI keeps Inter for interface, Space Grotesk for brand/display, JetBrains Mono for technical data, and Outfit as compatibility. | Resolved for current phase. Preserve compatibility; do not expand Outfit. | High | Typography affects every component and brand signal. | Stronger identity without a destructive font migration. | Storybook uses remote font loading until local/self-hosted font strategy is approved. |
| Spacing | Numeric 4px-based scale, compact and simple. | 4px base with a 2px micro step and 11 stops through 64px. | Mostly aligned; Figma includes smaller micro spacing. | Consider adding a micro step in token phase if API shape allows it. | Medium | Dense platform UI benefits from a 2px micro token. | Better fit for badges, dots, table cells. | Numeric token keys like `0.5` may complicate typing and DX. |
| Radius | Current scale includes larger values suitable for general UI. | Minimal radius: 0, 2px, 4px, 6px, full. | Current project is softer than Figma. | Decision Pending: reduce default radius scale later. | High | Radius is a visible identity marker. | More technical and precise visual language. | Reducing radius changes perceived component friendliness. |
| Motion | Current motion tokens are simple and functional. | Short transitions, `duration-150`/`duration-200`, overlay entrance/exit, loading spinners. | Compatible direction. | Keep motion minimal; no new dependency. | Low | Existing architecture can express this with tokens. | Consistent feedback. | Over-animating would make the UI feel less professional. |
| Shadows | Current tokens include shadows and reserved neon shadow. | Dark mode relies on surface lightness, not shadow; light mode may use soft shadow. | Current shadow model may be too prominent for dark infrastructure UI. | Reframe elevation docs first; token changes later. | High | Elevation is foundational to cards, overlays, menus, and dashboards. | Cleaner platform feel. | Removing shadows without surface hierarchy can flatten too much. |
| Colors | Current project contains warm coral/amber compatibility aliases plus dark neutrals and status colors. | Blue-gray neutrals, cyan primary, semantic status colors. | The semantic direction is now resolved: cyan is primary signal/action; coral remains expressive accent. | Implement semantic mapping with compatibility aliases. | Critical | Color is the highest-risk public token decision, so compatibility must be explicit. | Determines Button, focus, links, charts, docs. | Existing `colors.primary` consumers may remain visually warm until migrated. |
| Icons | Current project uses lucide-react dependency. | Figma uses lucide icons heavily at small sizes. | Aligned. | Continue with lucide where icons are needed. | Low | Existing dependency supports the visual language. | Consistent icon stroke and sizing. | Overusing icons can add noise. |
| Tables | No table component currently. | Dense rows, mono data, small status badges, hover muted background, hairline dividers. | Missing component, but strong language direction. | Document only. Do not create Table in this phase. | Medium Future | Tables are important for developer tools and observability. | Future component roadmap clarity. | Creating too early expands scope and API surface. |
| Dashboard | No dashboard showcase component. | Metric cards, sparklines, top accent lines, status rows, operational examples. | Missing product examples, but useful visual guidance. | Treat as usage reference, not component requirement. | Low Future | Dashboards validate foundation decisions. | Helps future Storybook examples. | Showcase can distract from component platform goals. |

## Resolved Decision: Primary Signal Direction

Cyan is the approved semantic primary signal for action, focus, selection, links, charts, and important interactive states.

Coral remains in the identity as an expressive accent. It should not be the dominant action color and should not disappear from the brand.

Compatibility note:

- Existing public aliases may remain warm temporarily.
- Future component work should migrate toward semantic roles instead of raw `colors.primary`.
- Documentation must distinguish semantic primary from compatibility aliases.

## Resolved Decision: Typography Direction

Decision:

- Inter owns interface, controls, labels, body copy, documentation, and reading.
- Space Grotesk owns display, brand, and expressive headings.
- JetBrains Mono owns code, tokens, IDs, logs, metrics, and technical metadata.
- Outfit remains a compatibility heading family while existing consumers still reference `typography.heading`.

Do not expand Outfit usage. Future component and documentation work should prefer semantic roles over the older `typography.heading` alias.

## Resolved Decision: Radius Scale

The Figma Make reference uses smaller radius values than the current project.

Decision:

- Tokens should prefer a sharper default for product controls and surfaces.
- Do not remove existing radius tokens without compatibility review.
- Preserve `pill` and `round` only for semantic cases such as badges, avatars, status dots, and specific controls.
- Avoid making large radius the default visual language.

## Architectural Notes

- The Figma Make reference includes shadcn/ui and Radix patterns. They are useful references for accessibility and state modeling, but they should not be copied into the current architecture.
- The reference uses Tailwind and CSS variables. FeitozaUI should translate the design into its current token and styled-components model until an architecture decision says otherwise.
- Dashboard examples should inform foundations, not become a product-specific dependency.
- Component tokens should be delayed until repeated component-specific decisions exist.

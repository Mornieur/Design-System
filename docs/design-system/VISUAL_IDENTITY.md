# Visual Identity

## Source Of Truth

The official visual reference for FeitozaUI is:

```text
docs/references/design-system/figma-make-reference.md
```

That file is a reference artifact, not implementation code. It includes generated React, Tailwind, shadcn/ui, Radix, example dashboards, CSS variables, and dependency metadata. FeitozaUI should not copy that code literally. The approved work is to translate the visual direction into FeitozaUI foundations, documentation, tokens, and component decisions that fit the current React, TypeScript, styled-components, Storybook, and library-build architecture.

## Direction

**Quiet Future / Neon Infrastructure** is the official visual direction for FeitozaUI.

The identity is:

- 80% Clean Platform.
- 20% Cyberpunk.
- Technical, calm, dense, and precise.
- Inspired by infrastructure, observability, fintech, developer tools, and contemporary night-city architecture.
- Professional enough for a company design system and distinctive enough for a portfolio-level UI Engineering Platform.

The identity is not:

- Gaming UI.
- Decorative cyberpunk.
- Neon everywhere.
- Glow as a default style.
- A direct copy of Figma Make, shadcn/ui, Linear, Stripe, Vercel, Raycast, Radix Themes, or Cyberpunk 2077.

## Design Principles

### Infrastructure Over Decoration

The interface should feel engineered. Structure comes from grid, type, borders, alignment, density, and state clarity before color effects.

Decoration is acceptable only when it communicates a real state: selected, focused, active, critical, degraded, or successful.

### Calm Density

FeitozaUI should support dashboards, component documentation, developer workflows, and operational tools. Information density is expected, but each surface must remain scannable.

Dense does not mean cramped. Spacing should be compact, systematic, and predictable.

### Signal, Not Noise

Accent color is a signal. It should identify action, focus, status, selected state, or data category.

Accent should not be used simply because a surface looks empty.

### Dark First, Light Capable

The visual identity is strongest in dark mode. Dark mode should be treated as the canonical expression because the Figma Make reference is centered on infrastructure dashboards and night-city surfaces.

Light mode should remain professional and usable. It should not be an inverted afterthought, but full runtime theme switching is not part of the current implementation scope.

### Accessible By Construction

The cyberpunk influence cannot override contrast, focus visibility, keyboard access, reduced motion, or semantic HTML. If a visual decision conflicts with accessibility, the visual decision must be adapted.

## Visual Language

### Color Behavior

The Figma Make reference centers on blue-gray infrastructure neutrals and cyan as the primary signal:

- Dark background around `#07090f`.
- Dark surface around `#0d1220`.
- Raised surface around `#111827`.
- Primary signal around `#00b4d8` in dark mode.
- Primary signal around `#0284c7` in light mode.
- Success around `#10b981`.
- Warning around `#f59e0b`.
- Error around `#ef4444`.
- Info around `#818cf8`.

The semantic token direction is approved:

- Cyan is the primary signal for action, focus, selection, links, and important interactive states.
- Coral remains part of the identity as an expressive brand accent for special emphasis, visualization, and distinct brand moments.
- Amber is reserved for warning and caution.
- Green or mint is reserved for success and healthy state.
- Red is reserved for error, danger, and destructive state.
- Blue-gray and navy define the infrastructure surface system.

The current `colors` export may keep compatibility aliases while future component work migrates to semantic roles.

## Accent Rules

Use accent for:

- Expressive brand moments.
- Special highlights that should not read as warning, success, or danger.
- Data visualization moments that need a warm brand signal.
- Empty states or documentation callouts when used sparingly.

Use cyan signal for:

- Primary action.
- Link or active navigation state.
- Keyboard focus.
- Selected state.
- Live/active operational state.
- Data visualization category.

Do not use accent for:

- Default card backgrounds.
- Large decorative gradients.
- Body text.
- Every icon in a panel.
- Every border in a layout.
- Background glow behind content.
- Marketing-style hero treatment inside product UI.

## Neon And Glow

Neon is permitted only as a restrained signal. The Figma Make reference states the correct philosophy: glow is exceptional, never default.

Allowed:

- Subtle focus ring or focus shadow.
- Small status dot glow for active or critical states.
- Selected card top edge or active border.
- Data highlight in charts or metric bars.

Not allowed:

- Permanent glowing cards.
- Glowing page backgrounds.
- Multiple competing neon colors in the same local area.
- Neon text for paragraphs.
- Large blurred accent fields.
- Visual effects that reduce readability.

## Dark Mode

Dark mode should express the identity through:

- Deep blue-gray canvas.
- Slightly lighter panels and cards.
- Hairline borders.
- High-contrast foreground text.
- Muted secondary text.
- Cyan focus and active states.
- Semantic status colors used sparingly.

Dark elevation should rely primarily on surface lightness, not heavy shadows.

## Light Mode

Light mode should express the same system with:

- Soft blue-gray page background.
- White or near-white cards.
- Dark foreground text.
- Muted slate secondary text.
- Darker cyan/blue accents for contrast.
- Subtle borders and minimal shadow.

Light mode needs more contrast discipline than dark mode. Raw accent colors from the reference may need darker semantic variants before becoming tokens.

## Infrastructure Surfaces

The default surface style should be:

- Flat or nearly flat.
- Hairline border.
- Small radius.
- Predictable padding.
- No decorative shadow in dark mode.
- Optional top accent edge only for active, selected, or metric surfaces.

This creates the feeling of panels, racks, terminals, dashboards, and observability tooling without imitating a terminal UI.

## Typography Philosophy

The Figma Make reference uses:

- Barlow for display and infrastructure headings.
- DM Sans for readable body text.
- JetBrains Mono for data, code, labels, metrics, and technical metadata.

The current project uses:

- Outfit for headings.
- Inter for body.
- Space Grotesk for accent.

Approved for the current token phase:

- Preserve `Inter` for interface and reading.
- Preserve `Space Grotesk` for display, brand, and identity moments.
- Preserve `Outfit` as the current heading family until a dedicated typography migration is approved.
- Use JetBrains Mono for code and data roles in FeitozaUI product surfaces, with system monospace fallbacks for consumers that do not load it.

Recommended direction:

- Preserve body readability as the highest priority.
- Use a strong heading family for product identity.
- Use a real monospaced family for code, metrics, status labels, and dense technical UI.
- Do not use a decorative or pseudo-technical font where a monospace data style is expected.

## Spacing Philosophy

Spacing should use a compact scale based on a 4px grid with a small 2px micro step for dense UI details.

Use compact spacing for:

- Tables.
- Badges.
- Status rows.
- Toolbar controls.
- Dashboard metrics.

Use more generous spacing for:

- Documentation pages.
- Section breaks.
- Empty states.
- Larger panels.

## Radius Philosophy

Radius should communicate precision. The Figma Make reference prefers:

- 0px for tables, hairlines, grids, and bars.
- 2px for badges, chips, and tags.
- 4px for buttons, inputs, and cards.
- 6px for dialogs and larger panels.
- Full radius only for avatars, status dots, and pills.

Approved for the current token phase:

- The semantic radius direction becomes sharper and more technical.
- Default controls and surfaces should use small radius.
- Larger radius remains available for expressive panels, but should not become the default component language.
- `pill` and `round` are semantic exceptions for badges, avatars, status dots, and specific controls.

## Elevation Philosophy

Dark mode elevation:

- Prefer surface lightness.
- Prefer borders.
- Avoid shadow as the main depth mechanism.

Light mode elevation:

- Use soft shadows only when borders and background are not enough.
- Keep shadow blur restrained.

Neon elevation:

- Reserved for focus, active, and exceptional operational states.

## Motion Philosophy

Motion should be short, functional, and state-driven.

Use motion for:

- Hover feedback.
- Focus transitions.
- Opening and closing overlays.
- Loading indicators.
- Progress feedback.

Do not use motion for:

- Decorative page atmosphere.
- Distracting loops.
- Unnecessary scale effects on product controls.
- Interactions that hide state changes.

Motion must respect reduced motion when movement is spatial, repeated, or attention-heavy.

## Accessibility Philosophy

The identity must remain accessible even when it becomes visually distinctive.

Required:

- Text contrast must meet WCAG AA for normal text.
- Focus must be visible without relying only on glow.
- Color must not be the only state indicator.
- Disabled controls must remain understandable.
- Keyboard behavior must match user expectations.
- Motion must not block comprehension.

## Implementation Boundary

This document defines visual direction. It does not implement:

- Tokens.
- ThemeProvider.
- Theme switching.
- New components.
- Storybook showcases.
- Runtime styling architecture.

Those decisions belong to later implementation phases.

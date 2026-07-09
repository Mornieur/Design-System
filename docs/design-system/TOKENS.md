# Token Architecture

## Purpose

FeitozaUI tokens translate the approved visual identity into stable engineering decisions.

The goal is not to replace component design with a large token catalog. The goal is to make repeated visual decisions explicit, typed, reusable, and reviewable.

This token system is inspired by mature design systems, but it is intentionally sized for the current FeitozaUI codebase.

The new architecture files are internal in this phase. They are not exported through the public package entrypoint yet, because public API expansion requires a separate approval.

## Source References

- `docs/docs/design-system/figma-make-reference.md`
- `docs/design-system/VISUAL_IDENTITY.md`
- `docs/design-system/FOUNDATIONS.md`
- `docs/design-system/FOUNDATIONS_AUDIT.md`
- `docs/design-system/ACCESSIBILITY.md`

## Layer Model

### Primitive Tokens

Primitive tokens are raw values. They do not describe product intent.

Responsibilities:

- Store raw color families, spacing values, font sizes, radius values, shadows, durations, easing, border widths, opacity, and z-index levels.
- Preserve low-level values in one place.
- Avoid component-specific naming.

Consumers:

- Semantic tokens.
- Documentation.
- Rare low-level implementation cases where intent is not available yet.

Future evolution:

- Primitive values may grow as the visual language is refined.
- Primitive values should not be used as the default component contract when semantic intent exists.

### Semantic Tokens

Semantic tokens describe intent. They are the preferred layer for reusable components.

Responsibilities:

- Map raw values to roles such as background, surface, foreground, border, focus, state, elevation, transition, and layer.
- Support dark and light foundations without requiring a runtime theme implementation.
- Keep future component styling decoupled from raw color and motion values.

Consumers:

- Reusable components.
- Documentation examples.
- Future Storybook foundation pages.

Future evolution:

- Semantic tokens can evolve toward theme-aware structures later.
- Runtime theme switching requires a separate architecture decision.

### Component Tokens

Component tokens are not introduced in this phase.

Reason:

- Current repeated component-specific decisions are not mature enough to justify a component token layer.
- Adding `button.*`, `card.*`, or `badge.*` tokens now would create premature API surface.

Future evolution:

- Introduce component tokens only when multiple components or variants repeatedly need the same component-scoped decision.

## Token Groups

### Colors

Objective:

- Separate raw color families from semantic roles.

Responsibility:

- `primitiveColors` stores raw families.
- `colorRoles` stores nested dark and light intent.
- `semanticColors` stores flat compatibility access to semantic roles.
- `colors` remains as the compatibility export for current consumers and may not represent the future component mapping.

Who can consume:

- New reusable components should prefer semantic roles.
- Existing components may continue using `colors` until a migration is approved.

Future evolution:

- Cyan is the approved semantic primary signal.
- Coral is the approved expressive brand accent.
- Existing warm aliases remain only as a compatibility layer until component migration is approved.
- New component work should prefer `colorRoles` or `semanticTokens.colorRole`.

### Typography

Objective:

- Represent font families, sizes, weights, and line heights as reusable foundation values.

Responsibility:

- Preserve the current typography API.
- Expose typography through primitive aggregation.

Who can consume:

- Components, documentation, and future text primitives.

Future evolution:

- Preserve Inter for interface and reading.
- Preserve Space Grotesk for display, brand, and identity.
- Keep Outfit as the heading family until a dedicated typography migration is approved.
- Use JetBrains Mono for code and data roles in FeitozaUI product surfaces, with system monospace fallbacks for consumers that do not load it.

### Spacing

Objective:

- Provide a compact spacing scale for layout, component padding, and gaps.

Responsibility:

- Keep spacing generic and numeric.
- Avoid component-specific spacing names.

Who can consume:

- Layout primitives.
- Components.
- Documentation examples.

Future evolution:

- A 2px micro step may be added if the API shape remains clean.

### Radius

Objective:

- Provide consistent corner treatment for controls, surfaces, and circular UI.

Responsibility:

- Keep radius values reusable across components.
- Avoid naming radius after component types.

Who can consume:

- Components and surface primitives.

Future evolution:

- The approved direction is sharper and more technical.
- Preserve pill and round only for semantic cases.
- Avoid adding component-specific radius tokens until semantic roles are insufficient.

### Motion

Objective:

- Define reusable duration and easing values.

Responsibility:

- Keep motion short, functional, and state-driven.
- Avoid animation-specific runtime behavior.

Who can consume:

- Transition tokens.
- Components with hover, focus, open, close, or loading states.

Future evolution:

- Spatial animation should be added only with reduced-motion rules.

### Elevation

Objective:

- Define hierarchy for flat, raised, floating, overlay, focus, and accent surfaces.

Responsibility:

- Reuse existing shadow values without requiring components to know raw shadow names.
- Keep neon/accent elevation exceptional.

Who can consume:

- Future overlays, menus, cards, dialogs, and focus treatments.

Future evolution:

- Dark mode may rely more on surface lightness than shadow when tokens are refined.

### Borders

Objective:

- Make border width and style explicit.

Responsibility:

- Represent hairline and focus-width borders.
- Keep border color in semantic color tokens.

Who can consume:

- Components, panels, inputs, tables, overlays, and focus states.

Future evolution:

- Border color roles may expand after visual contrast review.

### Opacity

Objective:

- Standardize emphasis, disabled, overlay, and subtle state opacity.

Responsibility:

- Avoid one-off opacity values across components.

Who can consume:

- State tokens.
- Components with disabled, overlay, muted, or low-emphasis states.

Future evolution:

- Opacity values should be validated visually in both dark and light mode.

### Focus

Objective:

- Define reliable focus geometry independent of component implementation.

Responsibility:

- Store outline width, offset, ring width, and transition duration.
- Keep focus color in semantic color tokens.

Who can consume:

- Interactive components.

Future evolution:

- Focus tokens may become component-aware only if specific controls need distinct geometry.

### States

Objective:

- Define interaction state intensity.

Responsibility:

- Represent hover, active, selected, focus, and disabled emphasis.
- Avoid component-specific state values.

Who can consume:

- Buttons, rows, menu items, tabs, cards, and future form controls.

Future evolution:

- State tokens can later map to semantic colors or alpha overlays if needed.

### Transitions

Objective:

- Standardize common transition strings.

Responsibility:

- Compose common transition properties from motion tokens.
- Avoid repeating ad hoc transition declarations.

Who can consume:

- Components with hover, focus, active, disabled, or open/closed states.

Future evolution:

- More transition groups should be added only when repeated patterns appear.

### Z-index

Objective:

- Provide predictable layering.

Responsibility:

- Define relative layer order for dropdown, overlay, modal, popover, tooltip, and toast patterns.

Who can consume:

- Future overlay components.

Future evolution:

- Values should remain semantic and sparse. Avoid adding z-index tokens for one-off layout fixes.

## Compatibility Layer

The `colors` export remains for current consumers. It should be treated as a compatibility layer while future component work moves toward semantic roles.

Current compatibility implication:

- `colors.primary` may remain warm for existing consumers.
- `colorRoles.dark.action.primary` and `semanticColors.dark.actionPrimary` represent the approved cyan signal.
- Future migrations should avoid hard dependency on raw color names or legacy aliases.

## Remaining Decision Pending

### Typography Direction

Current typography tokens preserve existing font-family aliases and introduce roles.

Impact of changing typography later:

- Token values.
- Storybook foundation docs.
- Component density and layout.
- Font loading strategy.

Open question:

- Outfit remains a compatibility heading family for now. New identity work should prefer Space Grotesk for display and brand roles.

## Review Rules

Before adding a new token, answer:

- Is this value reused?
- Is it primitive, semantic, or component-specific?
- Can an existing token express the same decision?
- Does the name describe responsibility rather than appearance?
- Will this token still make sense if the visual identity evolves?
- Does it create public API that we are ready to support?

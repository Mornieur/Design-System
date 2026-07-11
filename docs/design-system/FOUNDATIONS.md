# Foundations

Foundations are the shared design decisions that components should use before introducing custom values.

FeitozaUI's initial approved direction is documented in [Visual Identity](VISUAL_IDENTITY.md): **Quiet Future / Neon Infrastructure**.

The current foundation audit is documented in [Foundations Audit](FOUNDATIONS_AUDIT.md).

The token architecture is documented in [Token Architecture](TOKENS.md).

This document describes the intended foundation structure. It does not mean every foundation is fully implemented in code today.

## Foundation Categories

- Colors: primitive families plus semantic dark and light roles.
- Typography: font families, sizes, weights, and line heights.
- Spacing: layout and component spacing scale.
- Radius: corner radius scale for surfaces and controls.
- Elevation: shadows and focus/neon treatments.
- Motion: durations and easing.
- Icons: icon usage, sizing, stroke, and accessibility.
- Breakpoints: responsive layout thresholds.
- Z-index: layering rules for overlays and fixed elements.
- Opacity: disabled, overlay, and emphasis treatment.

Detailed typography rules are documented in [Typography](TYPOGRAPHY.md).

Detailed iconography rules are documented in [Iconography](ICONOGRAPHY.md).

## Token Layers

Large design systems usually separate tokens into layers.

### Primitive Tokens

Primitive tokens are raw values such as color families, spacing steps, and font sizes.

Example:

```ts
primitiveColors.blueGray[900]
space.4
fontSize.md
```

### Semantic Tokens

Semantic tokens describe intent. Components should prefer semantic tokens when possible.

Example:

```ts
colorRoles.dark.text.primary
colorRoles.dark.background.canvas
colorRoles.dark.action.primary
```

The current `colors` export remains available as the default dark-compatible color surface for public API compatibility.

### Component Tokens

Component tokens are specific to a component. They should be introduced only when repeated component-specific decisions justify them.

Example:

```ts
button.primary.background
card.border.radius
```

## Current Rule

Use existing tokens where possible. Avoid hardcoded values in reusable components unless there is a documented reason.

## Current Token Direction

Future implementation should translate the Figma Make reference into:

- Primitive tokens for raw color families, spacing, radius, type scale, elevation, and motion.
- Semantic tokens for product intent such as background, surface, foreground, border, focus, action, status, and disabled state.
- Component tokens only when repeated component-level decisions justify them.

Do not introduce tokens only because they appear in the Figma Make reference. Tokens should exist because they support repeatable implementation decisions in FeitozaUI.

## Resolved Visual Decisions

- Cyan is the semantic primary signal for action, focus, selection, links, and important interactive states.
- Coral is an expressive brand accent, not the dominant action color.
- Dark mode is the primary expression of the identity.
- Light mode remains represented in tokens without runtime theme switching.
- Surface hierarchy should use background lightness and borders before shadow.
- Glow is not elevation.
- Component tokens remain out of scope until semantic tokens prove insufficient.

## Theme Scope

Dark and light mode should be documented as foundation targets, but FeitozaUI does not yet ship a full ThemeProvider or runtime theme switching. Components should not promise theme switching until that architecture is explicitly introduced.

## Accessibility Baseline

The Figma Make reference includes several contrast-safe dark-mode pairs:

| Pair | Ratio | Status |
| --- | ---: | --- |
| Figma dark background `#07090f` / foreground `#dde4f0` | 15.57 | Pass |
| Figma dark card `#0d1220` / foreground `#dde4f0` | 14.61 | Pass |
| Figma dark primary `#00b4d8` / foreground `#040c10` | 8.00 | Pass |
| Figma success `#10b981` / dark text `#03200f` | 6.80 | Pass |
| Figma warning `#f59e0b` / dark text `#1a0f00` | 8.79 | Pass |
| Figma error `#ef4444` / dark text `#1a0202` | 5.30 | Pass |
| Figma info `#818cf8` / dark text `#07081a` | 6.65 | Pass |
| Semantic light action `#0369a1` / white `#ffffff` | 5.93 | Pass |

Future token work must resolve any pair that does not meet normal text contrast before it is used as a default component color.

# Foundations

Foundations are the shared design decisions that components should use before introducing custom values.

This document describes the intended structure. It does not mean every foundation is fully implemented today.

## Foundation Categories

- Colors: brand, neutral, feedback, surface, text, border, and action colors.
- Typography: font families, sizes, weights, line heights, and text roles.
- Spacing: layout and component spacing scale.
- Radius: corner radius scale for surfaces and controls.
- Elevation: shadows or depth treatment for layered UI.
- Motion: durations, easing, and motion preferences.
- Icons: icon usage, sizing, stroke, and accessibility.
- Breakpoints: responsive layout thresholds.
- Z-index: layering rules for overlays and fixed elements.
- Opacity: disabled, overlay, and emphasis treatment.

## Token Layers

Large design systems usually separate tokens into layers.

### Primitive Tokens

Primitive tokens are raw values such as color scales, spacing steps, and font sizes.

Example:

```ts
gray.900
space.4
fontSize.md
```

### Semantic Tokens

Semantic tokens describe intent. Components should prefer semantic tokens when possible.

Example:

```ts
color.text.primary
color.background.default
color.action.primary
```

### Component Tokens

Component tokens are specific to a component. They should be introduced only when repeated component-specific decisions justify them.

Example:

```ts
button.primary.background
card.border.radius
```

## Current Rule

Use existing tokens where possible. Avoid hardcoded values in reusable components unless there is a documented reason.

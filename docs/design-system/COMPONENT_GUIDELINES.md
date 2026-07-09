# Component Guidelines

Components should be added only when they solve a reusable UI problem.

Use [Component Language](COMPONENT_LANGUAGE.md) for visual and behavioral language before designing or implementing a component. This document remains focused on implementation guidance.

## When To Create A Component

- The same UI pattern appears in more than one place.
- The component has a clear API.
- The behavior can be documented and tested.
- The component can use foundations instead of custom one-off values.

## When Not To Create A Component

- The UI is product-specific.
- The abstraction hides too much behavior.
- A native HTML element is enough.
- The component would exist only to increase component count.

## Expected Structure

A component should usually include:

- implementation
- styles
- story
- tests
- exported types when useful
- documentation notes when behavior is not obvious

## Props

Props should be predictable, typed, and aligned with the API conventions. Avoid one-off prop names that cannot be reused across the system.

## Stories

Stories should show meaningful states, not only the default case. Interactive components should include keyboard and disabled examples when applicable.

## Tests

Tests should describe behavior: rendering, interactions, disabled states, keyboard behavior, focus, and accessibility expectations.

## Accessibility

Start from semantic HTML. Use ARIA only when necessary. Interactive components must be usable with keyboard input.

## Tokens

Reusable components should use foundation tokens for spacing, color, typography, radius, elevation, and motion.

## Review

A component is not ready until it passes the component checklist and the public API is intentional.

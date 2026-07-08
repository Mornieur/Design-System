# Accessibility

Accessibility is a core requirement for FeitozaUI components.

## Semantic HTML

Prefer native elements before custom behavior. Buttons should be buttons. Links should be links. Form controls should use real form elements.

## Focus Management

Interactive components need visible focus states. Components that open overlays or manage complex interactions must define how focus enters, moves, and returns.

## Keyboard Navigation

Interactive components should support keyboard behavior expected for their pattern. Native behavior should be preserved whenever possible.

## ARIA

Use ARIA only when semantic HTML is not enough. Incorrect ARIA can make a component less accessible.

## Labels

Inputs and controls need accessible names. Use visible labels when possible. Icon-only buttons need clear accessible labels.

## Disabled States

Disabled controls should communicate state visually and programmatically. Native `disabled` should be preferred when available.

## Presentational Primitives

Layout and surface primitives should not add landmarks or ARIA roles by default. Consumers may pass semantic props when the surrounding product context requires them.

## Contrast

Text, icons, focus indicators, and important UI states should meet reasonable contrast expectations.

## Motion Preferences

Motion should respect reduced motion preferences when animations become meaningful or potentially distracting.

## Landmarks

Landmarks should be used intentionally. Avoid adding `role="region"` or other landmarks to every visual container.

## Headless Libraries

For complex components such as Dialog, Tooltip, Popover, Tabs, and Select, future work may use headless libraries such as Radix UI when they provide stronger accessibility foundations.

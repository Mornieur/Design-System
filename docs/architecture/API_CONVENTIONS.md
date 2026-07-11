# API Conventions

Component APIs should be consistent, typed, and easy to discover.

## Common Props

- `children`: supported when composition is expected.
- `className`: supported on public visual components when styling extension is reasonable.
- `style`: supported only when it does not break the component contract.
- `ref`: supported when consumers need access to the underlying DOM node.
- `as`: considered only for primitives or components where polymorphism is useful.
- `size`: use predictable values such as `sm`, `md`, `lg`.
- `variant`: describes visual intent, not one-off styling.
- `disabled`: should use native disabled behavior when possible.
- `loading`: should prevent duplicate actions and communicate progress when applicable.

## Naming

Names should describe behavior or intent, not implementation details. Similar components should use similar prop names.

## Controlled And Uncontrolled Patterns

When a component holds state, document whether it is controlled, uncontrolled, or supports both. Use React naming conventions such as `value`, `defaultValue`, and `onValueChange` when applicable.

## Composition

Prefer composition for complex UI. A component should not hide unrelated layout, data fetching, or product behavior.

## DOM Pass-Through

Public primitives should preserve native props such as `className`, `style`, and `data-*` attributes. Internal style props should not leak to the DOM. Use implementation-specific transient props when needed.

## Ref Forwarding

Public primitives and controls should forward refs to their underlying DOM element when that element is part of the component contract.

## Type Exports

Public component props should be exported when useful:

```ts
export type ButtonProps = ...
```

Types are part of the public API and should be treated as stable after release.

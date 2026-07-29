# Developer Experience

Developer Experience is part of the product quality of FeitozaUI.

## Simple Imports

Consumers should be able to import public APIs from the package root when possible:

```ts
import { Button } from '@feitoza-ui/core';
```

## Predictable APIs

Components should use consistent prop names for shared concepts such as `variant`, `size`, and `disabled`. A state prop such as `loading` is added only when the component has a defined loading contract.

## Autocomplete And IntelliSense

Types should make options discoverable. Union types are preferred for known variants and sizes.

## Examples

Documentation should include small, realistic examples. Examples should show valid usage, not only visual output.

## Error Messages

When runtime validation is needed in future work, errors should be clear and actionable.

## Naming Consistency

Names should match the language of the platform. Avoid mixing product-specific names with reusable component APIs.

## Good API Example

```tsx
<Button variant="primary" disabled>
  Save
</Button>
```

## Weak API Example

```tsx
<Button color="pink" big blockedState>
  Save
</Button>
```

The weak example mixes visual values, unclear naming, and inconsistent state language.

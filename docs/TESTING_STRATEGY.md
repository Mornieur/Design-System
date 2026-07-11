# Testing Strategy

FeitozaUI uses tests to describe component behavior and protect public APIs.

## Tools

- Vitest for test running.
- Testing Library for user-centered component tests.
- jest-dom matchers for DOM assertions.
- Accessibility tooling may be added later when the baseline is stable.

## What To Test

- Rendering of required content.
- User interactions.
- Keyboard behavior.
- Focus behavior.
- Disabled states.
- Loading states when applicable.
- Accessible names and roles.
- Public API behavior.

## What To Avoid

- Testing implementation details.
- Testing every CSS declaration.
- Overusing snapshots.
- Tests that duplicate Storybook examples without checking behavior.

## Accessibility Tests

Accessibility tests should support manual review; they do not replace it. Automated checks can catch common issues but cannot prove full accessibility.

## Future Visual Tests

Visual regression testing may be added later through Storybook or Chromatic workflows after component APIs and stories become stable.

# Core Principles

These principles guide every component, token, document, and technical decision in FeitozaUI.

## Accessibility By Default

Interactive components should start from semantic HTML and keyboard support. ARIA should be used only when it improves the experience and matches the interaction pattern.

## TypeScript First

Public APIs should be strongly typed, discoverable, and predictable through IntelliSense. Types are part of the developer experience.

## Predictable APIs

Components should use consistent prop names and behavior. Similar concepts should look similar across the library.

## Composition Over Abstraction

Prefer small, composable APIs over large components that hide too much behavior. Add abstractions only when they remove real complexity.

## Documentation Is Part Of Delivery

A public component is not complete without usage examples, API documentation, accessibility notes, and known limitations.

## Tests Describe Behavior

Tests should focus on what users and consumers can observe: rendering, interactions, keyboard behavior, disabled states, accessibility, and API contracts.

## Tokens Before Hardcoded Values

Components should use design tokens for repeated visual decisions. Hardcoded values are allowed only when they are local, justified, and not part of the design language.

## Avoid Premature Abstractions

Do not introduce themes, variants, factories, or architecture layers before there is enough repeated behavior to justify them.

## DX Matters

Imports, exports, names, examples, autocomplete, and errors should make the package easy to consume and hard to misuse.

## Performance Should Be Measured

Performance work should be based on evidence: bundle size, tree shaking, render behavior, and build outputs.

# Architecture

FeitozaUI is a React and TypeScript project with a Next.js documentation app, Storybook, Vite library build, Styled Components, Vitest, and Testing Library.

The architecture is a UI Engineering Platform with clear separation between reusable package code, documentation, and future examples.

## Current Architecture

- `src/design-tokens`: current token definitions.
- `src/components`: current component implementation grouped by component type.
- `src/stories` and component stories: Storybook documentation surface.
- `src/app`: Next.js documentation app for installation, foundations, components, accessibility, and guides.
- `vite.config.ts`: library build configuration.
- `package.json`: package metadata, scripts, and future publishing configuration.

## Core Package

The core package exposes reusable foundations, primitives, components, and types through a stable root public API. It does not depend on the showcase.

Target package name: `@feitoza-ui/core`.

## Documentation App

The Next.js app is the navigable public documentation surface. It explains adoption, foundations, components, accessibility, and architecture without becoming the source of truth for reusable components.

## Storybook As Product

Storybook is the primary documentation and exploration surface. It should explain foundations, component APIs, accessibility, examples, guidelines, and roadmap.

## Library Build

The Vite build should generate package outputs that match `package.json` exports. Build files and publishing settings should be verified before any release.

## V1 Boundary

V1 freezes the editorial catalog at Button, Checkbox, Radio, RadioGroup, Input, Textarea, Select, Tabs, Surface, and Card. Supporting primitives remain public, but do not expand the V1 documentation scope. See [V1 Scope](../V1.md).

## Future Possibilities

BFF, micro-frontends, monorepo, React Native, CLI, and devtools may be explored later. They are not part of the current implementation scope.

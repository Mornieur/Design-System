# Project Context

## Purpose

FeitozaUI is a React and TypeScript UI Engineering Platform focused on:

- foundations and design tokens;
- public component primitives and compositions;
- accessibility;
- behavior-focused tests;
- documentation;
- future package distribution;
- portfolio-grade engineering quality.

This repository is not trying to maximize component count. It prioritizes stable APIs, architectural clarity, and design-system maturity.

## Current project state

FeitozaUI is an unpublished package under active development.

The public package surface is intentionally compact and currently exports:

- `Alert`
- `Badge`
- `Box`
- `Button`
- `Divider`
- `EmptyState`
- `Flex`
- `Input`
- `Progress`
- `Select`
- `Skeleton`
- `Spinner`
- `Surface`
- `Tabs`
- `Textarea`

## Repository surfaces

### 1. Public library

Primary source of truth for reusable behavior and public APIs.

Main locations:

- [`src/components`](../../src/components)
- [`src/design-tokens`](../../src/design-tokens)
- [`src/index.ts`](../../src/index.ts)

Rules:

- public components must remain usable outside Next.js;
- Next-specific assumptions must not leak into package code;
- showcase-only compositions must not become exports without an explicit decision.

### 2. Storybook

Current primary documentation and exploration surface.

Main locations:

- [`src/stories`](../../src/stories)
- component `stories/` folders
- [`src/showcase`](../../src/showcase)
- [`.storybook`](../../.storybook)

Current maturity:

- highest documentation maturity in the repository;
- best place to validate public states, examples, and design language.

Rules:

- Storybook documents the system;
- `src/showcase` is Storybook-only composition code;
- showcase code does not become public package API automatically.

### 3. Next.js app

Navigable documentation surface for the public library.

Main location:

- [`src/app`](../../src/app)

Current maturity:

- active documentation surface;
- focused on the current public documentation scope;
- not the source of truth for component APIs.

Rules:

- do not treat `src/app` as the canonical implementation model for reusable components;
- do not introduce backend, BFF, auth, or unnecessary rendering complexity.

## Tokens and exports

Token source:

- [`src/design-tokens`](../../src/design-tokens)

Public exports:

- root entrypoint: [`src/index.ts`](../../src/index.ts)
- atoms barrel: [`src/components/atoms/index.ts`](../../src/components/atoms/index.ts)
- molecules barrel: [`src/components/molecules/index.ts`](../../src/components/molecules/index.ts)

The exported token surface is smaller than the internal token set. Do not assume every internal token file is part of the intended public contract without checking exports first.

## Maturity summary

- Public library: active and authoritative for package behavior.
- Storybook: primary documentation product today.
- Next.js app: active documentation surface and should remain within its documented scope.

## Out of scope for the current platform phase

Unless the task explicitly changes scope, do not introduce:

- new theme architecture or runtime theme switching;
- package publishing automation;
- BFF or route handlers used as artificial data layers;
- micro-frontends;
- auth flows;
- remote MDX pipelines;
- product-specific components promoted into the public package.

## Non-negotiable principles

- Do not invent APIs.
- Do not create abstractions before repetition proves the need.
- Prefer semantic HTML before ARIA.
- Prefer behavior tests over implementation-detail tests.
- Keep public APIs stable and explicit.
- Keep Storybook and Next responsibilities separate.
- Keep public components independent from Next.js runtime assumptions.

## Normative references

- [Architecture](../architecture/ARCHITECTURE.md)
- [API Conventions](../architecture/API_CONVENTIONS.md)
- [Component Guidelines](../design-system/COMPONENT_GUIDELINES.md)
- [Component Checklist](../design-system/COMPONENT_CHECKLIST.md)
- [Accessibility](../design-system/ACCESSIBILITY.md)
- [Storybook](../STORYBOOK.md)
- [Testing Strategy](../TESTING_STRATEGY.md)

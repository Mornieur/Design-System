# Next.js Guidelines

## Role of the Next app

The Next.js app in this repository is:

- a future showcase frontend;
- a future navigable documentation surface;
- not part of the published package;
- not the source of truth for component APIs;
- not a BFF;
- not a backend layer;
- not a place to add infrastructure without concrete need.

Current location:

- [`../../src/app`](../../src/app)

## App Router

Use App Router.

Recommended:

- layouts for shared structure;
- route groups when they improve organization;
- private folders for internal route-only code;
- route metadata when a page has real public-documentation meaning;
- `loading.tsx`, `error.tsx`, and `not-found.tsx` only when they have real responsibility.

Avoid:

- route complexity added only to demonstrate framework features;
- dynamic routing without a real content model;
- framework structure that outgrows the current showcase role.

## Server and Client Components

Use Server Components by default.

Add `"use client"` only when required by:

- local state;
- event handlers;
- effects;
- browser-only APIs;
- client-only context usage;
- third-party libraries that require client execution.

Rules:

- keep client boundaries small;
- do not mark whole pages as client components for convenience;
- do not pull server-only concerns into client components;
- library components must remain consumable outside Next.js.

## Rendering strategy for FeitozaUI

### Static generation

Preferred for:

- documentation pages versioned with the repository;
- foundations pages;
- component catalog pages;
- content that changes only when the codebase changes.

### Dynamic routes

Appropriate only when the content model is real, for example:

- `/components/[component]`
- `/foundations/[foundation]`

Do not create dynamic routes only to demonstrate knowledge of the feature.

### `generateStaticParams`

Use it only when:

- route parameters are known at build time;
- the content is static and repository-owned.

### SSR or dynamic rendering

Use only when output depends on:

- request data;
- cookies;
- headers;
- authentication;
- per-request computation that is actually required.

For the current FeitozaUI documentation/showcase scope, this is usually unnecessary.

### ISR

Use only when content must update without a new deploy.

Repository-versioned documentation usually does not need ISR.

### Client-side fetching

Avoid it for local repository content that can be rendered from static imports or server rendering.

Do not create HTTP APIs just to read content that already exists inside the repository.

## Data and content

- Prefer local, typed content.
- Avoid duplicating the same content between Storybook and the Next app.
- Decide explicitly what content is shared and what is surface-specific.
- Do not import stories as if they were the Next app domain model.
- Do not use internal package implementation files in ways that would compromise future distribution.

## MDX

- Use MDX only when it adds real documentation value.
- Validate compatibility between Next.js and `@next/mdx` before expanding usage.
- Do not enable remote MDX without a concrete need and a security review.
- Treat remote content as untrusted.
- Do not assume the currently installed `@next/mdx` integration is aligned just because it compiles today.

## Styling

- Do not create a second visual identity inside `src/app`.
- Reuse public components and tokens when appropriate.
- Do not create circular dependency between the library and the showcase.
- Hardcoded values must be rare and justified.
- Documentation shell styling must not leak into the public component API.

## Performance

- Use `next/font`, `next/image`, and `next/link` when they serve a real need.
- Measure before optimizing.
- Avoid indiscriminate lazy loading.
- Keep client JavaScript small.
- Avoid global providers without a demonstrated repository-level need.

## Security

- Never expose secrets in client components.
- Do not introduce Route Handlers without real need.
- Do not create internal APIs just to proxy repository-local content.
- Avoid rendering untrusted HTML.
- Keep external links safe.
- Do not introduce auth, persistence, or backend workflows without a new architecture decision.

## Testing and validation

Changes touching `src/app` should include:

- `yarn.cmd type-check`
- `yarn.cmd lint`
- tests when behavior is covered by the existing setup

Current limitation:

- the main repository validation flow does not include a dedicated Next production build script
- if a task changes `src/app`, report explicitly whether a Next production build was not validated

Do not claim that the showcase production build passed unless that build was actually executed.

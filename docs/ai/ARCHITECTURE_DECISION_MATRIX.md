# Documentation Website Phase 1

## 1. Spec

Phase 1 implements a **Documentation Architecture + Site Shell** for the Next.js app.

Included:

- a minimal route system for core docs, foundations, components, architecture, accessibility, and showcase;
- a local typed content model under `src/app/_content`;
- a documentation shell with header, footer, sidebar, breadcrumbs, page header, mobile nav, and theme toggle;
- dark and light local theme support for the documentation surface;
- first-use integration of real FeitozaUI components in the homepage hero and route cards.

Explicitly excluded:

- full component catalog depth;
- search;
- CMS or remote content;
- runtime MDX expansion;
- ISR;
- request-driven rendering;
- sandboxes or code playgrounds;
- Storybook duplication.

## 2. Diagnóstico

Initial repository state:

- `src/app` was still the default placeholder;
- Storybook was already the primary documentation product;
- the library package and tokens already expressed the approved visual language;
- `next dev --turbopack` was already the development entrypoint;
- `next.config.ts` included MDX configuration, but the phase did not need MDX to satisfy its goals.

Repository constraints that shaped the solution:

- Storybook must remain the source of truth for component behavior;
- the Next app must not redefine the package API;
- the package is still framework-agnostic even though the repo includes Next;
- documentation content is repository-owned and versioned with code.

## 3. Architecture Decision Matrix

| Concern | Options Considered | Decision | Why |
| --- | --- | --- | --- |
| Route model | Single landing page, shallow static pages, typed static routes, remote CMS | Typed static routes | Stable URLs now, easy to evolve later, no content infrastructure overhead |
| Content source | MDX, JSON, CMS, TypeScript registries | TypeScript registries | Strong typing, build-time safety, local ownership |
| Rendering | SSR, ISR, static generation | Static generation | Repository-owned content does not need per-request rendering |
| Theme strategy | `next-themes`, ThemeProvider, CSS vars + local storage | CSS vars + local storage | Small client boundary, no new dependency, enough for a local docs shell |
| Component integration | Build custom shell-only widgets, import public components directly | Use public components selectively | Reinforces real system usage without changing exports |
| Storybook relationship | Migrate docs into Next, duplicate stories, keep Storybook primary | Keep Storybook primary | Matches repository architecture and avoids parallel truth sources |
| Future content engine | Design now for CMS/remote MDX, keep local adapter seam | Keep local adapter seam | Reduces premature architecture while leaving a path forward |

## 4. Route And Content Model

Implemented route structure:

- `/`
- `/docs/getting-started`
- `/docs/installation`
- `/foundations`
- `/foundations/[slug]`
- `/components`
- `/components/[slug]`
- `/architecture`
- `/accessibility`
- `/showcase`

Content model:

- `src/app/_content/site.ts`: site metadata and theme bootstrap;
- `src/app/_content/navigation.ts`: top navigation, sidebar groups, footer navigation;
- `src/app/_content/foundations.ts`: foundation registry and detail helpers;
- `src/app/_content/components.ts`: component registry and detail helpers.

Reasoning:

- the content is small, static, and repository-owned;
- dynamic detail pages use `generateStaticParams`;
- no local HTTP API is created because the content already exists in the repo.

## 5. Visual System For Documentation

Documentation shell direction:

- same Quiet Future / Neon Infrastructure logic already documented for Storybook;
- dark mode as the primary surface;
- light mode supported for validation and future proofing;
- blue-gray infrastructure layers, cyan action/focus, coral used sparingly.

Shell rules:

- body uses readable Inter copy;
- display hierarchy uses Outfit and Space Grotesk;
- code-like metrics use JetBrains Mono;
- borders and surface lightness do more work than shadow;
- hero and route cards express the system without becoming a marketing landing page.

## 6. Theme Strategy

Decision:

- no `next-themes` in phase 1;
- no package-level ThemeProvider;
- documentation-only CSS variables controlled from `document.documentElement.dataset.theme`.

Implementation notes:

- theme initializes before paint from `localStorage` or `prefers-color-scheme`;
- a tiny client component toggles between light and dark;
- `suppressHydrationWarning` is used on `<html>`;
- the public package API remains unchanged.

## 7. Turbopack Audit

Findings:

- the repo already uses `next dev --turbopack`;
- the documentation shell introduces no custom loaders or route handlers;
- the chosen static TypeScript registry model is friendly to Turbopack;
- MDX remains out of scope in this phase.
- the original Turbopack warning came from a Webpack-backed Next MDX integration still enabled in `next.config.ts`;
- the manual `webpack()` callback was also redundant and removed.

Important caution:

- the repository currently pairs `next@15.5.4` with `@next/mdx@14.2.33`;
- because this phase does not require MDX, the implementation removes Next MDX integration instead of expanding it;
- the dependency may remain installed temporarily, but it is no longer part of the active Next toolchain.

Toolchain decision:

- default development flow: `next dev --turbopack`;
- explicit fallback development flow: `next dev`;
- explicit documentation production build: `next build`;
- library package build remains `vite build`.

## 8. Package And Integration Boundary

Boundary rules for phase 1:

- the Next app may consume the public library surface and tokens;
- the Next app must not create new public exports;
- the Next app must not import Storybook stories as its content model;
- the documentation shell must not become the behavior reference for interactive components.

Framework support note:

- the package remains a React library that can be consumed outside Next;
- the Next app is repository infrastructure, not a package feature.

Route group note:

- the earlier `(docs)` build failure is recorded as a historical local failure, not as a proven Windows limitation;
- official Next.js documentation supports route groups, and the cause of that earlier failure was not recoverable with enough certainty to treat route groups as unsupported in this repository.

Future component documentation engine note:

- keep the current typed registries as the stable seam;
- if richer docs are needed later, add adapters from approved repository-owned sources rather than coupling directly to Storybook internals.

## 9. Plano Mínimo

Minimum deliverable:

1. Replace the placeholder Next app with a documentation shell.
2. Create the route skeleton and typed registries.
3. Add local theme support and reduced-motion-safe styling.
4. Use real FeitozaUI components in the home hero and route cards.
5. Preserve package boundaries and validate the repository.

Motion budget:

- navigation, hover, and focus transitions stay within `160ms` to `220ms`;
- no decorative looping animation is added;
- reduced motion disables transitions globally for the shell.

## 10. Documentation Visual Identity Refinement

### Spec

This refinement phase improves the documentation shell so it reads as FeitozaUI even without a logo:

- Quiet Future;
- Neon Infrastructure;
- Infrastructure over Decoration;
- dark-first, light-capable;
- dense and technical without becoming noisy.

### Visual diagnosis

Before refinement, the shell already had sound architecture, route coverage, and local content ownership, but the visual language still leaned toward generic documentation:

- page background was atmospheric, but not structured enough;
- navigation was clear, but not technical enough;
- hero composition was functional, but not distinctive enough;
- cards, metadata, and labels did not yet create a recognizable infrastructure rhythm.

### Decisions taken

- keep the implementation docs-only and CSS-first;
- introduce docs-only visual variables instead of touching package tokens;
- use a technical background system with gradients and hairlines only;
- refine header, sidebar, hero, and cards with mono labels, system IDs, and restrained cyan signaling;
- keep coral as a rare expressive accent rather than a default UI color;
- preserve Storybook as the behavioral source of truth.

### Cyberpunk detail budget

Approved signatures for this phase:

- mono eyebrow labels;
- status dots;
- small corner/top-edge accents on key surfaces;
- system IDs and technical metadata labels.

Rejected in this phase:

- persistent glow;
- large decorative scanlines;
- multi-color neon effects;
- decorative dashboard fiction.

### Motion budget

- default transitions remain within the existing `160ms` to `220ms` shell budget;
- motion is limited to hover, focus, and small state changes;
- one homepage-only text scramble may run once on load;
- the scramble is disabled when `prefers-reduced-motion: reduce` is active;
- no looping animation or ambient motion is introduced.

### Client component budget

- existing client components remain navigation/theme utilities unless a documentation preview needs an explicit browser/runtime boundary;
- homepage-specific client islands are acceptable when they isolate public library previews or reduced-motion-safe micro-interactions;
- no broader client promotion of the route tree is allowed in this phase.

## 11. Documentation Server/Client Boundary Review

### Reproduced build behavior

- `src/app/page.tsx` as a Server Component passes when it renders only HTML.
- The same page fails during `next build` page-data collection when it renders public styled-components directly, including `Box`, `Surface`, `Card`, and `Button`.
- Rendering those same library components inside a small internal Client Component succeeds.
- Importing from the root public barrel inside a Server Component fails even earlier because the barrel also re-exports hook-based components such as `Input` and `Tabs`.

### Boundary decision

- Pages and layouts stay Server Components by default.
- Small documentation preview islands may be Client Components when they render the current styled-components-based public library directly.
- The root public barrel must not be imported into App Router Server Components in the current repository state.
- Server Components in `src/app` should prefer plain content, metadata, and typed registries, then hand off only the smallest necessary preview block to a Client Component.

### Why this decision was chosen

- It restores Server Components as the default without changing the public package API.
- It avoids claiming that styled-components generically requires client pages.
- It keeps documentation-specific boundaries inside `src/app` instead of pushing Next-specific requirements into the library.
- It establishes the same future pattern needed for component preview, copy button, modal, and other documentation-engine islands.

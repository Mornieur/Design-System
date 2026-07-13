# FeitozaUI Agent Instructions

## Project overview

FeitozaUI has three distinct surfaces:

1. Public React and TypeScript component library.
2. Storybook, which is the current primary documentation and exploration product.
3. Next.js App Router app, which is a future showcase and navigable documentation surface.

Do not mix these responsibilities. The library defines public APIs and behavior. Storybook documents and validates them. The Next app must not become the source of truth for reusable components.

## Source-of-truth order

Use sources in this order:

1. Real repository code and configuration.
2. Internal normative documentation.
3. Existing tests and stories.
4. Official documentation compatible with the installed version.
5. General model knowledge only as a last fallback.

Do not treat `README.md` alone as the source of truth.

## Mandatory reading

Before changing code, read:

- [README.md](README.md)
- [docs/README.md](docs/README.md)
- [docs/architecture/ARCHITECTURE.md](docs/architecture/ARCHITECTURE.md)
- [docs/architecture/API_CONVENTIONS.md](docs/architecture/API_CONVENTIONS.md)
- [docs/design-system/COMPONENT_GUIDELINES.md](docs/design-system/COMPONENT_GUIDELINES.md)
- [docs/design-system/COMPONENT_CHECKLIST.md](docs/design-system/COMPONENT_CHECKLIST.md)
- [docs/design-system/ACCESSIBILITY.md](docs/design-system/ACCESSIBILITY.md)
- [docs/STORYBOOK.md](docs/STORYBOOK.md)
- [docs/TESTING_STRATEGY.md](docs/TESTING_STRATEGY.md)
- [docs/ai/README.md](docs/ai/README.md)

## General rules

- Do not invent APIs, variants, or architectural patterns.
- Do not add dependencies without a concrete repository-level justification.
- Do not alter files outside the requested scope.
- Do not create abstractions before repetition proves the need.
- Do not promote showcase code to the public package without an explicit decision.
- Do not use features from different library versions without checking compatibility first.
- Do not declare validation as passed unless you executed the command.
- Do not commit unless the user explicitly asks for it.
- Do not change reference material unless the task explicitly includes it.

## Rules by surface

### Library

- Public behavior and exports live under `src/components`, `src/design-tokens`, and `src/index.ts`.
- Public components must remain consumable outside Next.js.
- Follow [component workflow](docs/ai/COMPONENT_WORKFLOW.md) and [API conventions](docs/architecture/API_CONVENTIONS.md).

### Storybook

- Storybook is the main documentation surface today.
- Stories must represent real public states, not showcase-only tricks.
- Prefer existing stories, Storybook config, and `docs/STORYBOOK.md` over generic online examples.

### Next.js

- The Next app is a future showcase/documentation surface, not the package source of truth.
- Keep App Router boundaries small and justified.
- Follow [Next.js guidelines](docs/ai/NEXTJS_GUIDELINES.md).

## Validation

Use these commands when applicable:

```bash
yarn.cmd type-check
yarn.cmd lint
yarn.cmd test --run
yarn.cmd build
yarn.cmd build-storybook
npm.cmd pack --dry-run
```

Validation rules:

- `type-check` and `lint` are required for every code or documentation change that can affect typed sources or linted files.
- `test --run` is required when component behavior, tests, or public APIs change.
- `build` is required when library code, exports, package surface, or build-related files change.
- `build-storybook` is required when stories, Storybook docs, or component documentation behavior changes.
- `pack --dry-run` is required when exports, package contents, or release surface changes.

Do not use `test:changed` as the default validation command.
Do not use `lint:fix` as an auto-fix command; it is not configured with `--fix`.

The Next showcase does not have a dedicated build script in the main validation flow. If a task touches `src/app`, report explicitly whether the Next production build was not validated.

## Completion report

End each task with:

- initial state
- diagnosis
- changes made
- decisions taken
- modified files
- validations executed
- failures or limitations
- final Git state
- public API impact

# Official Sources

Use official or primary sources first. When official docs and local code disagree, trust the installed version and the repository configuration.

## Source priority

For every tool:

1. local repository code and configuration;
2. official documentation compatible with the installed version;
3. broader official documentation for concepts;
4. general model knowledge only as fallback.

## Next.js

- Installed version: `15.5.4`
- Local config: [`../../next.config.ts`](../../next.config.ts), [`../../src/app`](../../src/app)
- Official docs:
  - https://nextjs.org/docs
  - AI agents guide: https://nextjs.org/docs/app/guides/ai-agents
- Agent-oriented resource:
  - the official AI agents guide is valid as conceptual guidance
- Compatibility note:
  - do **not** instruct agents to read `node_modules/next/dist/docs/`
  - that directory does not exist in this repository's installed `next@15.5.4`
  - the local bundled-docs flow is not configured here
- Working rule:
  - prefer local config and code first;
  - use official online docs second;
  - do not recommend Next.js 16-only behavior without checking compatibility.

## React

- Installed version: `19.1.0`
- Local usage: public components under [`../../src/components`](../../src/components)
- Official docs:
  - https://react.dev
- Agent-oriented resource:
  - https://react.dev/llms.txt
- Working rule:
  - prefer official React docs for purity, effects, refs, and composition rules;
  - validate public API decisions against current component patterns in the repository.

## Storybook

- Installed versions:
  - `storybook@10.1.0-alpha.14`
  - `@storybook/nextjs-vite@10.1.0-alpha.14`
  - `@storybook/nextjs@10.1.4`
- Local config:
  - [`.storybook/main.ts`](../../.storybook/main.ts)
  - [`.storybook/preview.ts`](../../.storybook/preview.ts)
  - [`.storybook/vitest.setup.ts`](../../.storybook/vitest.setup.ts)
- Official docs:
  - https://storybook.js.org/docs
- Agent-oriented resources:
  - https://storybook.js.org/llms.txt
  - https://storybook.js.org/llms-full.txt
  - many docs pages support `.md`
- Compatibility note:
  - this repository mixes alpha and stable Storybook packages
  - local config, existing stories, and current commands have priority over newer online examples
- Working rule:
  - do not configure MCP in this phase;
  - do not infer support from Storybook docs without checking the installed package mix.

## Vite

- Local config: [`../../vite.config.ts`](../../vite.config.ts)
- Official docs:
  - https://vite.dev
- Agent-oriented resource:
  - https://vite.dev/llms.txt
- Working rule:
  - use local Vite config as the source of truth for build and Vitest integration;
  - use official docs for config semantics and library build behavior.

## Vitest

- Installed version: `4.0.15`
- Local config: [`../../vite.config.ts`](../../vite.config.ts)
- Official docs:
  - https://vitest.dev/guide/
- Agent-oriented resource:
  - Vitest docs expose Markdown endpoints such as `/guide.md`
- Working rule:
  - prefer the installed config and current test suite first;
  - use official docs for CLI, environments, coverage, browser mode, and type tests.

## Testing Library

- Installed versions:
  - `@testing-library/react@16.3.0`
  - `@testing-library/user-event@14.6.1`
- Official docs:
  - https://testing-library.com/docs/
- Working rule:
  - rely on official guidance for role/name queries and user-event usage;
  - validate patterns against current repository tests before introducing new conventions.

## TypeScript

- Installed version: `5.9.3`
- Local config:
  - [`../../tsconfig.json`](../../tsconfig.json)
  - [`../../tsconfig.lib.json`](../../tsconfig.lib.json)
- Official docs:
  - https://www.typescriptlang.org/docs/
- Compatibility note:
  - no agent-specific local setup is configured in this repository
- Working rule:
  - use local tsconfig files as the source of truth;
  - use official docs for language and compiler option semantics.

## styled-components

- Installed version: `6.1.19`
- Local usage:
  - component `styles.ts` files under [`../../src/components`](../../src/components)
- Official docs:
  - https://styled-components.com/docs
- Agent-oriented resource:
  - https://styled-components.com/llms.txt
- Compatibility note:
  - online docs may include guidance for newer versions than `6.1.19`
- Working rule:
  - validate APIs against the installed version and existing repository usage;
  - treat local code as the contract before adopting newer doc patterns.

## ESLint

- Installed version: `9.39.1`
- Local config: [`../../eslint.config.js`](../../eslint.config.js)
- Official docs:
  - https://eslint.org/docs/latest/
- Working rule:
  - use local flat config as the authority;
  - use official docs for rule/config semantics and flat-config behavior.

## WAI-ARIA Authoring Practices Guide

- Official source:
  - https://www.w3.org/WAI/ARIA/apg/
- Role in this repository:
  - normative reference for composed widgets such as tabs and future advanced controls
- Working rule:
  - prefer semantic HTML before custom ARIA patterns;
  - use APG when a widget requires non-native keyboard and ARIA behavior.

## Internal documents that remain normative

Official vendor docs do not replace repository decisions. For FeitozaUI-specific work, keep these as normative:

- [Architecture](../architecture/ARCHITECTURE.md)
- [API Conventions](../architecture/API_CONVENTIONS.md)
- [Component Guidelines](../design-system/COMPONENT_GUIDELINES.md)
- [Component Checklist](../design-system/COMPONENT_CHECKLIST.md)
- [Accessibility](../design-system/ACCESSIBILITY.md)
- [Storybook](../STORYBOOK.md)
- [Testing Strategy](../TESTING_STRATEGY.md)

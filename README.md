# FeitozaUI

> A React and TypeScript UI Engineering Platform focused on foundations, primitives, component APIs, accessibility, testing, documentation, and future package distribution.

![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![React](https://img.shields.io/badge/React-19-61dafb)
![Storybook](https://img.shields.io/badge/Storybook-10-ff4785)
![Vitest](https://img.shields.io/badge/Vitest-4-6e9f18)
![License](https://img.shields.io/badge/License-TODO-lightgrey)
![npm](https://img.shields.io/badge/npm-planned-lightgrey)
![CI](https://img.shields.io/badge/CI-planned-lightgrey)

FeitozaUI is not just a set of isolated components. It is being built as a small but professional component platform that documents engineering decisions, public APIs, design foundations, accessibility rules, testing strategy, and package readiness.

## Features

- React and TypeScript-first component APIs.
- Public package surface with `Button`, `Box`, `Flex`, and design tokens.
- Storybook documentation for foundations, primitives, guidelines, accessibility, and roadmap.
- Vite library build with ESM, CJS, UMD, and bundled TypeScript declarations.
- Vitest and Testing Library coverage for public primitives.
- Architecture docs, ADRs, component guidelines, release planning, and maintenance docs.

## Current Status

FeitozaUI is a work in progress. The current package surface is intentionally small and focused on quality before breadth.

Current:

- Core primitives: `Button`, `Box`, `Flex`.
- Foundations: colors, typography, spacing, and radii.
- Package build validated locally.
- Storybook structured as the documentation surface.
- Basic API consistency and accessibility coverage.

Not current:

- Published npm package.
- Full theme system.
- Complete component catalog.
- BFF, micro-frontends, or production showcase.

## Architecture

FeitozaUI is organized around three surfaces:

- Core library: reusable primitives, tokens, types, and public exports.
- Storybook: documentation and component exploration.
- Next app: a future frontend-only showcase surface.

See [Architecture](docs/architecture/ARCHITECTURE.md) and [Architecture Decisions](docs/architecture/DECISIONS.md).

## Package Structure

The future package name is:

```txt
@feitoza-ui/core
```

Current public exports:

```ts
export { Button, Box, Flex } from '@feitoza-ui/core';
export type { ButtonProps, BoxProps, FlexProps } from '@feitoza-ui/core';
export { colors, space, radii, typography, fontSizes } from '@feitoza-ui/core';
```

## Installation

The package is not published yet. Installation is future work.

Future installation:

```bash
npm install @feitoza-ui/core
```

## Quick Start

Run the project locally:

```bash
yarn install
yarn.cmd type-check
yarn.cmd lint
yarn.cmd test --run
yarn.cmd storybook
```

Build the package locally:

```bash
yarn.cmd build
```

## Usage

Future package usage:

```tsx
import { Button, Box, Flex } from '@feitoza-ui/core';

export function Example() {
  return (
    <Flex align="center" gap={3}>
      <Box padding={4} radius="medium" bg="backgroundAlt">
        Account summary
      </Box>
      <Button variant="primary">Continue</Button>
    </Flex>
  );
}
```

## Design Tokens

FeitozaUI currently exposes a small token set:

- `colors`
- `space`
- `radii`
- `typography`
- `fontSizes`

The current token model is intentionally simple. Primitive, semantic, and component tokens are documented as future evolution in [Foundations](docs/design-system/FOUNDATIONS.md).

## Core Principles

- Accessibility by default.
- TypeScript-first APIs.
- Predictable component props.
- Composition over premature abstraction.
- Documentation as part of delivery.
- Tests describe behavior.
- Tokens before repeated hardcoded values.
- Performance should be measured.

See [Core Principles](docs/philosophy/CORE_PRINCIPLES.md).

## Project Structure

```txt
.
├── .storybook/              # Storybook configuration
├── docs/                    # Project documentation
├── public/                  # Static assets used by the app/docs
├── src/
│   ├── app/                 # Next.js app, future showcase surface
│   ├── components/          # Current components and internal examples
│   ├── design-tokens/       # Token definitions and token docs
│   ├── stories/             # Storybook MDX pages
│   ├── styles/              # Shared style helpers
│   └── tests/               # Test setup
├── vite.config.ts           # Library build and Vitest configuration
├── tsconfig.lib.json        # Type declaration build scope
└── package.json
```

## Testing

The project uses Vitest and Testing Library.

```bash
yarn.cmd test --run
```

Current tests cover rendering, interactions, disabled behavior, ref forwarding, native prop pass-through, layout props, and basic accessibility expectations for primitives.

See [Testing Strategy](docs/TESTING_STRATEGY.md).

## Storybook

Storybook is treated as the project documentation product.

```bash
yarn.cmd storybook
yarn.cmd build-storybook
```

It currently documents Overview, Getting Started, Foundations, Components, Guidelines, Accessibility, and Roadmap.

See [Storybook Strategy](docs/STORYBOOK.md).

## Roadmap

The roadmap is maintained in [docs/roadmap/ROADMAP.md](docs/roadmap/ROADMAP.md).

Short-term focus:

- Improve repository documentation.
- Refine foundations and token naming.
- Strengthen accessibility and behavior coverage.
- Prepare release/versioning workflow before publishing.

Future ideas such as BFF, micro-frontends, monorepo, CLI, and React Native are documented separately in [Future Roadmap](docs/roadmap/FUTURE.md).

## Documentation

Start with the [Documentation Index](docs/README.md).

Key documents:

- [Vision](docs/philosophy/VISION.md)
- [Architecture](docs/architecture/ARCHITECTURE.md)
- [Component Guidelines](docs/design-system/COMPONENT_GUIDELINES.md)
- [Accessibility](docs/design-system/ACCESSIBILITY.md)
- [Releases](docs/roadmap/RELEASES.md)
- [FAQ](docs/FAQ.md)

## Contributing

This is currently a portfolio project, but contribution standards are documented.

See [Contributing](docs/CONTRIBUTING.md), [Code Style](docs/CODE_STYLE.md), and [Component Checklist](docs/design-system/COMPONENT_CHECKLIST.md).

## License

No license file is currently provided. Add a `LICENSE` file before publishing or accepting external contributions.

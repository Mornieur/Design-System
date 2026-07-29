# FeitozaUI

> A compact React and TypeScript component library focused on foundations, accessible APIs, testing, documentation, and verified package distribution.

![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![React](https://img.shields.io/badge/React-19-61dafb)
![Storybook](https://img.shields.io/badge/Storybook-10-ff4785)
![Vitest](https://img.shields.io/badge/Vitest-4-6e9f18)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
![npm](https://img.shields.io/badge/npm-not%20published-lightgrey)

FeitozaUI is a deliberately small component platform for practical React interfaces. It documents public APIs, design foundations, accessibility rules, testing strategy, and package-readiness decisions rather than growing an unbounded component catalog.

## Features

- React and TypeScript-first component APIs.
- Public package surface with foundational atoms, core molecules, and design tokens.
- Storybook documentation for foundations, primitives, guidelines, accessibility, and roadmap.
- Vite library build with verified ESM, CJS, UMD, and bundled TypeScript declarations.
- Vitest and Testing Library coverage for public components.
- Architecture docs, ADRs, component guidelines, release planning, and maintenance docs.

## Current Status

FeitozaUI V1 is intentionally compact and focused on quality before breadth. The package is ready for a manual first release, but is not published to npm yet.

Current:

- Editorial V1 catalog: `Button`, `Checkbox`, `Radio`, `RadioGroup`, `Input`, `Textarea`, `Select`, `Tabs`, `Surface`, and `Card`.
- Supporting public primitives: `Badge`, `Box`, `Divider`, `EmptyState`, `Field`, `Flex`, `IconButton`, `Progress`, `Skeleton`, `Spinner`, and `VisuallyHidden`.
- Foundations: colors, typography, spacing, radii, motion, borders, focus, states, and semantic mappings.
- Package artifacts verified through local tarball consumers for React + Vite and Next.js App Router.
- Storybook structured as the documentation surface.
- Accessibility and behavior coverage across the active public surface.

Not current:

- Published npm package (manual publication is the remaining external release action).
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

The V1 editorial catalog is documented in [V1 Scope](docs/V1.md). Current public exports include:

```ts
export {
  Alert,
  Badge,
  Box,
  Button,
  Card,
  Checkbox,
  Divider,
  EmptyState,
  Field,
  Flex,
  IconButton,
  Input,
  Progress,
  Radio,
  RadioGroup,
  Select,
  Skeleton,
  Spinner,
  Surface,
  Tabs,
  Textarea,
  VisuallyHidden
} from '@feitoza-ui/core';
```

## Installation

The package is not published yet. After the first manual publish:

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
yarn.cmd test:consumers
```

## Usage

Future package usage:

```tsx
import { Button, Box, Flex } from '@feitoza-ui/core';

export function AccountSummaryPanel() {
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

- `semanticColors`
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
|-- .storybook/              # Storybook configuration
|-- docs/                    # Project documentation
|-- public/                  # Static assets used by the app/docs
|-- src/
|   |-- app/                 # Next.js app, future showcase surface
|   |-- components/          # Public components under active platform scope
|   |-- design-tokens/       # Token definitions and token docs
|   |-- showcase/            # Storybook-only showcase compositions
|   `-- stories/             # Storybook MDX pages
|-- vite.config.ts           # Library build and Vitest configuration
|-- tsconfig.lib.json        # Type declaration build scope
`-- package.json
```

## Testing

The project uses Vitest and Testing Library.

```bash
yarn.cmd test --run
```

Current tests cover rendering, interactions, keyboard behavior, disabled behavior, ref forwarding, native prop pass-through, controlled state, form semantics, and accessibility expectations for primitives.

See [Testing Strategy](docs/TESTING_STRATEGY.md).

## Storybook

Storybook is treated as the project documentation product.

```bash
yarn.cmd storybook
yarn.cmd build-storybook
```

It currently documents Overview, Getting Started, Foundations, Components, Guidelines, Accessibility, and Roadmap.

See [Storybook Strategy](docs/STORYBOOK.md).

## Release Validation

Run the complete local release-readiness set:

```bash
yarn.cmd lint
yarn.cmd type-check
yarn.cmd test --run
yarn.cmd build
yarn.cmd build-storybook
yarn.cmd test:a11y
yarn.cmd test:visual
yarn.cmd test:consumers
npm.cmd pack --dry-run
```

`test:consumers` packs the library, installs that exact tarball into the React + Vite and Next.js fixtures, and runs their type-check and production builds.

## Roadmap

The roadmap is maintained in [docs/roadmap/ROADMAP.md](docs/roadmap/ROADMAP.md).

Short-term focus:

- Surface primitives and Card 2.0.
- Documentation and repository polish.
- Continued accessibility and behavior coverage.
- Release/versioning workflow before publishing.

Future ideas such as BFF, micro-frontends, monorepo, CLI, and React Native are documented separately in [Future Roadmap](docs/roadmap/FUTURE.md).

## Documentation

Start with the [Documentation Index](docs/README.md).

Key documents:

- [Vision](docs/philosophy/VISION.md)
- [Architecture](docs/architecture/ARCHITECTURE.md)
- [Surface System](docs/design-system/SURFACE_SYSTEM.md)
- [Component Language](docs/design-system/COMPONENT_LANGUAGE.md)
- [Layout Principles](docs/design-system/LAYOUT_PRINCIPLES.md)
- [Component Guidelines](docs/design-system/COMPONENT_GUIDELINES.md)
- [Accessibility](docs/design-system/ACCESSIBILITY.md)
- [Releases](docs/roadmap/RELEASES.md)
- [FAQ](docs/FAQ.md)

## Contributing

This is currently a portfolio project, but contribution standards are documented.

See [Contributing](docs/CONTRIBUTING.md), [Code Style](docs/CODE_STYLE.md), and [Component Checklist](docs/design-system/COMPONENT_CHECKLIST.md).

## License

[MIT](LICENSE) (c) 2026 Maria Fernanda.

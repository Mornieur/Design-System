# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project intends to follow [Semantic Versioning](https://semver.org/) after package publication starts.

Update `[Unreleased]` during normal development. Before a release, move relevant entries into a versioned section with the release date.

## [Unreleased]

### Added

- Nothing yet.

### Changed

- Nothing yet.

### Deprecated

- Nothing yet.

### Removed

- Nothing yet.

### Fixed

- Nothing yet.

### Security

- Nothing yet.

## [0.3.0] - 2026-07-29

### Added

- `Field` composition for shared textual-control labels, help text, validation state, and native associations.
- `VisuallyHidden` public primitive and `IconButton`, an accessible icon-only action primitive with loading support.
- Internal foundations for composed refs, controllable state, stable callbacks, field slot IDs, and SSR-safe layout effects.
- V1 editorial catalog and release-readiness documentation.
- Playwright visual and axe scripts, plus tarball-based React + Vite and Next.js App Router consumer validation.

### Changed

- Checkbox, Radio, and RadioGroup now use the shared foundations and preserve their documented native semantics.
- Button now defaults to `type="button"`; Progress now has the default accessible name `Progress` when no contextual label is supplied.
- Surface, Card, and Tabs contracts and documentation were clarified for the V1 boundary.
- Styled-components imports use the v6 named `styled` export for ESM compatibility.

### Deprecated

- Nothing yet.

### Removed

- Nothing yet.

### Fixed

- ESM and CommonJS package artifacts now load styled-components correctly.
- CommonJS distribution now uses a `.cjs` file extension under the ESM package boundary.
- CI now installs Playwright-managed Chromium for portable accessibility checks and validates consumers, axe, and visual regression.

### Security

- Nothing yet.

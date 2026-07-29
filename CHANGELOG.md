# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project follows [Semantic Versioning](https://semver.org/).

Update `[Unreleased]` during normal development. Before a release, move relevant entries into a versioned section with the release date.

## [Unreleased]

## [0.3.0] - 2026-07-29

### Added

- V1 editorial catalog and release-readiness documentation.
- `IconButton`, an accessible icon-only action primitive with loading support.
- Playwright visual and axe scripts.
- Tarball-based React + Vite and Next.js App Router consumer validation.

### Changed

- Button now defaults to `type="button"`.
- Progress now has the default accessible name `Progress` when no contextual label is supplied.
- Styled-components imports use the v6 named `styled` export for ESM compatibility.

### Deprecated

- Nothing yet.

### Removed

- Nothing yet.

### Fixed

- ESM and CommonJS package artifacts now load styled-components correctly.
- CommonJS distribution now uses a `.cjs` file extension under the ESM package boundary.

### Security

- Nothing yet.

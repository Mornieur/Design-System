# Releases

FeitozaUI is not ready for publication yet. This document defines the intended release direction for future public npm releases.

## Semantic Versioning

Future releases should follow Semantic Versioning:

- Patch: bug fixes that do not change public API.
- Minor: new backwards-compatible APIs or components.
- Major: breaking changes.

## Conventional Commits

Commit messages should use Conventional Commits to make change history easier to understand.

Examples:

- `feat: add button size variants`
- `fix: improve button disabled state`
- `docs: update storybook guidelines`
- `chore: prepare package publishing`

## Changesets

Changesets may be introduced later when package publication becomes active. They are not required for the current documentation phase.

## Release Notes

Release notes should explain what changed, why it changed, and whether consumers need to do anything.

## Migration Guides

Breaking changes should include migration notes with before and after examples.

## Deprecations

Deprecated APIs should be documented before removal when possible.

## Breaking Changes

Breaking changes should be intentional, documented, and grouped into major releases after publication starts.

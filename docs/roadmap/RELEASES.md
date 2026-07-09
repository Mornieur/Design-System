# Releases

FeitozaUI is not published yet.

This document defines the intended release and versioning strategy for future public npm releases. It does not enable automated publishing.

## Current Status

- Package name: `@feitoza-ui/core`
- Current package version: `0.2.3`
- Intended registry: public npm
- Automated publishing: disabled
- Release automation: not configured
- Changesets: future option, not installed

## Semantic Versioning

Future releases should follow Semantic Versioning once the package is publicly consumed.

### Patch

Use a patch version for backwards-compatible fixes.

Examples:

- Fix a visual bug without changing props.
- Improve disabled state styling without changing behavior.
- Fix documentation typos.
- Improve tests or internal implementation without changing public API.

### Minor

Use a minor version for backwards-compatible additions.

Examples:

- Add a new component.
- Add a new non-breaking prop.
- Add a new token while keeping existing tokens.
- Add a new Storybook page or documentation guide.

### Major

Use a major version for breaking changes.

Examples:

- Rename or remove public exports.
- Remove a build format used by consumers.
- Change required peer dependency ranges in a breaking way.
- Change component behavior in a way consumers must migrate.
- Remove or rename tokens used by consumers.

## Conventional Commits

Commit messages should use Conventional Commits to keep release history readable.

Recommended types:

- `feat`: backwards-compatible user-facing addition.
- `fix`: backwards-compatible bug fix.
- `docs`: documentation-only change.
- `test`: test-only change.
- `refactor`: internal change without behavior change.
- `chore`: repository, tooling, or maintenance change.
- `ci`: CI workflow change.

Examples:

- `feat: add button size variants`
- `fix: improve button disabled state`
- `docs: update release strategy`
- `ci: harden quality checks`

Breaking changes should be called out explicitly in the commit body or release notes.

## Changelog

`CHANGELOG.md` should follow Keep a Changelog.

The `[Unreleased]` section should be updated during normal work. Before a release, move relevant entries into a versioned section with the release date.

Recommended sections:

- `Added`
- `Changed`
- `Deprecated`
- `Removed`
- `Fixed`
- `Security`

Do not use the changelog as a task list. It should describe changes that matter to users or maintainers.

## Changesets

Changesets may be introduced later when releases become frequent or when manual changelog management becomes error-prone.

Do not add Changesets yet. The project should first complete a manual release process and confirm:

- Package metadata is stable.
- Public API is intentional.
- Release notes format is clear.
- Publishing ownership is confirmed.
- Accidental publishing safeguards are understood.

## Manual Release Direction

The first real release should be manual.

At a high level:

1. Confirm release scope.
2. Run all validation commands.
3. Review package contents with `npm pack --dry-run`.
4. Update `CHANGELOG.md`.
5. Bump `package.json` version intentionally.
6. Create release notes.
7. Publish only from a clean working tree.

See `docs/RELEASE_CHECKLIST.md` for the detailed checklist.

## Avoiding Accidental Publication

Automated publishing should remain disabled until the manual process is proven.

Current guardrails:

- No workflow runs `npm publish`.
- Publish workflow is manual and informational only.
- No npm token should be committed.
- No release workflow should be added before a documented manual release.

Before adding automation, require an explicit project decision and document it with an ADR.

## Migration Guides

Breaking changes should include migration notes with before and after examples.

Migration guidance is required when a release:

- Renames public props.
- Removes public exports.
- Changes token names or token meaning.
- Changes component composition patterns.
- Changes package entrypoints or build outputs.

## Deprecations

When possible, deprecate before removal.

A deprecation should explain:

- What is deprecated.
- Why it is deprecated.
- What should be used instead.
- When removal may happen.

## Acceptance Criteria

Release strategy is healthy when:

- Version changes are intentional.
- Changelog entries are maintained.
- Manual release steps are documented.
- Automation is not added before the manual process is validated.
- Consumers can understand breaking changes before upgrading.

# Publishing

FeitozaUI is published on npm. This document describes the manual process for future releases. It does not enable automatic publishing.

## Target Package

```txt
@feitoza-ui/core
```

## Registry

The intended registry is public npm.

## Current Guardrails

- Automated publishing is disabled.
- No workflow should run `npm publish`.
- No npm token should be committed.
- The existing publish workflow is informational only.
- `npm pack --dry-run` should be used before any real publish.

## Versioning

Future releases should follow Semantic Versioning:

- Patch: backwards-compatible fixes.
- Minor: backwards-compatible features.
- Major: breaking changes.

See `docs/roadmap/RELEASES.md` for versioning rules and examples.

## Manual Release Process

Recommended flow:

1. Confirm the release scope.
2. Confirm package metadata and ownership.
3. Confirm the publication surface is minimal:
   - only true package runtime dependencies remain in `dependencies`;
   - `react`, `react-dom`, and `styled-components` remain classified intentionally;
   - site, Storybook, and build tooling stay out of the published runtime surface.
4. Run the validation commands.
5. Review package contents with `npm pack --dry-run`.
6. Update `CHANGELOG.md`.
7. Bump `package.json` version intentionally.
8. Create release notes.
9. Publish only from a clean working tree and an authenticated npm account.

Use `docs/RELEASE_CHECKLIST.md` before publishing.

## Changesets

Changesets may be introduced later when publishing becomes active.

Do not add Changesets yet. The project should first prove a manual release process and clarify whether future releases will be single-package or monorepo-based.

## Release Notes

Release notes should explain:

- What changed.
- Why it changed.
- Whether consumers need to do anything.
- Any migration steps for breaking changes.

## Accidental Publish Prevention

Before enabling automation, the project should have:

- A documented release owner.
- A verified npm organization or account.
- A stable public API.
- A reviewed dependency and peer dependency surface.
- A release checklist used at least once.
- A decision record approving automation.

Until then, publishing remains manual and disabled in CI.

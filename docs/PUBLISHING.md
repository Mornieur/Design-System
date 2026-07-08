# Publishing

FeitozaUI is not published yet.

This document describes the intended future publishing process. It does not enable automatic publishing.

## Target Package

```txt
@feitoza-ui/core
```

## Registry

The intended registry is public npm.

## Versioning

Future releases should follow Semantic Versioning:

- Patch: backwards-compatible fixes.
- Minor: backwards-compatible features.
- Major: breaking changes.

## Changesets

Changesets may be introduced later when publishing becomes active. Do not add release automation until the package metadata, license, and ownership are finalized.

## Manual Release Checklist

- [ ] Confirm `package.json` metadata.
- [ ] Confirm `LICENSE`.
- [ ] Run `yarn.cmd type-check`.
- [ ] Run `yarn.cmd lint`.
- [ ] Run `yarn.cmd test --run`.
- [ ] Run `yarn.cmd build`.
- [ ] Run `npm.cmd pack --dry-run`.
- [ ] Inspect tarball contents.
- [ ] Update `CHANGELOG.md`.
- [ ] Publish only from a clean working tree.

## Release Workflow

Automated publishing is intentionally disabled. Add automation only after the first manual release process is proven and documented.

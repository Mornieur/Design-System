# Release Checklist

FeitozaUI is not published yet. Use this checklist only when preparing a future manual release.

## Before Release

- [ ] Confirm the package should be released.
- [ ] Confirm the intended version bump: patch, minor, or major.
- [ ] Confirm `package.json` metadata is correct.
- [ ] Confirm `LICENSE` is present and accurate.
- [ ] Confirm there are no secrets in `.npmrc`, workflows, or config files.
- [ ] Confirm the working tree is clean.

## Validation

- [ ] Run `yarn.cmd type-check`.
- [ ] Run `yarn.cmd lint`.
- [ ] Run `yarn.cmd test --run`.
- [ ] Run `yarn.cmd build`.
- [ ] Run `yarn.cmd build-storybook`.
- [ ] Run `npm.cmd pack --dry-run`.
- [ ] Inspect the package contents.

## Changelog

- [ ] Move relevant entries from `[Unreleased]` into a versioned section.
- [ ] Include the release date.
- [ ] Document breaking changes clearly.
- [ ] Add migration notes when needed.

## Package Review

- [ ] Confirm `dist` contains expected build outputs.
- [ ] Confirm `exports` points to existing files.
- [ ] Confirm `types` points to the generated declaration file.
- [ ] Confirm peer dependencies are correct.
- [ ] Confirm `files` includes only intended package contents.

## Publish

- [ ] Confirm npm authentication outside the repository.
- [ ] Publish manually only after all checks pass.
- [ ] Do not publish from CI.
- [ ] Do not commit npm tokens.

## After Release

- [ ] Verify the package page on npm.
- [ ] Verify install instructions.
- [ ] Tag the release if appropriate.
- [ ] Update release notes.
- [ ] Open follow-up issues for deferred work.

# Quality Checklist

Use this checklist to keep changes scoped, reviewable, and aligned with FeitozaUI as a UI Engineering Platform.

## Definition Of Done

- The change has a clear purpose and limited scope.
- Documentation is updated when behavior, workflow, or public API changes.
- Tests are added or updated when behavior changes.
- Accessibility is considered for UI behavior.
- No secrets are committed.
- Generated artifacts are not committed unless the project explicitly requires them.

## Before Opening A Pull Request

- [ ] Run `yarn.cmd type-check`.
- [ ] Run `yarn.cmd lint`.
- [ ] Run `yarn.cmd test --run` when code or behavior changes.
- [ ] Run `yarn.cmd build` when package/build configuration changes.
- [ ] Review the diff for unrelated changes.
- [ ] Confirm docs reflect the current state, not future plans as shipped features.

## Before Release

- [ ] Confirm package metadata is complete.
- [ ] Confirm `LICENSE` exists.
- [ ] Run `npm.cmd pack --dry-run`.
- [ ] Review package contents.
- [ ] Confirm changelog entries are written.
- [ ] Confirm no TODO metadata remains in `package.json`.
- [ ] Confirm publishing credentials are configured outside the repository.

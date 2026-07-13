# Consumer Tests

These consumers validate FeitozaUI as an external package artifact instead of as source code inside the main repository.

Current consumers:

- `react-vite`
- `next-app-router`

Validation flow:

1. Run `yarn.cmd build` in the repository root.
2. Run `npm.cmd pack` in the repository root.
3. Install the generated `feitoza-ui-core-<version>.tgz` into each consumer.
4. Run each consumer's `type-check` and `build`.

The generated tarball is intentionally temporary and should not be committed.

Dependency expectations:

- Both consumers provide their own `react`, `react-dom`, and `styled-components`.
- Only the Next.js consumer should provide `next`.
- The FeitozaUI core tarball must not make the React + Vite consumer install `next`.

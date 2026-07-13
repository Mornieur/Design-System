# React + Vite Consumer

This consumer validates FeitozaUI as an external package installed from a local tarball.

Expected flow:

1. Run `yarn.cmd build` in the repository root.
2. Run `npm.cmd pack` in the repository root.
3. Install the generated tarball in this folder.
4. Run `npm run type-check` and `npm run build`.

This app intentionally imports only from `@feitoza-ui/core`.

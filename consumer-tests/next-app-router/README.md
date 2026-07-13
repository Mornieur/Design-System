# Next App Router Consumer

This consumer validates FeitozaUI as a tarball-installed package inside a Next.js App Router app.

Expected flow:

1. Run `yarn.cmd build` in the repository root.
2. Run `npm.cmd pack` in the repository root.
3. Install the generated tarball in this folder.
4. Run `npm run type-check` and `npm run build`.

The page shell stays a Server Component and the FeitozaUI preview lives in a client island.

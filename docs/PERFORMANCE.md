# Performance

Performance work in FeitozaUI should be measured before it becomes an optimization effort.

This document records the current package and Storybook baseline so future changes can be evaluated against real numbers instead of assumptions.

## Current Baseline

Measured after running `yarn build` and `npm pack --dry-run`.

| Output | Purpose | Approximate size |
| --- | --- | ---: |
| `dist/feitoza-ui.es.js` | ESM package entry | 11.7 kB |
| `dist/feitoza-ui.cjs.js` | CommonJS package entry | 8.5 kB |
| `dist/feitoza-ui.umd.js` | UMD package entry | 8.7 kB |
| `dist/index.d.ts` | Type declarations | 2.6 kB |

`npm pack --dry-run` currently reports:

- Package size: approximately 12.4 kB
- Unpacked size: approximately 43.1 kB
- Total files: 7
- Included files: `LICENSE`, `README.md`, `dist/*`, and `package.json`

These numbers are small enough for the current maturity level. The package does not need optimization work before the next documentation and showcase phases.

## Build Formats

The library currently generates:

- ESM for modern bundlers and tree shaking.
- CommonJS for compatibility with older tooling.
- UMD for browser/global compatibility.

UMD is intentionally kept for now because removing a format is a package contract decision. It may be removed before a stable public release if the project decides to target only modern package consumers.

## Tree Shaking

The package is prepared for tree shaking through:

- ESM output.
- A focused public entrypoint.
- External peer dependencies.
- `sideEffects: false` in `package.json`.

The current `sideEffects: false` setting is acceptable because the public entrypoint does not import global CSS or execute required module-level side effects. If global styles, CSS files, token injection, or runtime registration are added later, this setting must be reviewed before publishing.

## Peer Dependencies

The package externalizes and declares these runtime peers:

- `react`
- `react-dom`
- `styled-components`

This avoids bundling React or Styled Components into the published package and keeps the consumer responsible for runtime versions.

## Storybook Warnings

`yarn build-storybook` currently emits chunk-size warnings for large Storybook assets.

This is expected at this stage because Storybook includes documentation runtime, addons, accessibility tooling, docs blocks, and preview infrastructure. These chunks are not part of the npm package published through `files: ["dist"]`.

No Storybook chunk tuning should be done now unless the documentation app becomes slow to load or is prepared for public hosting.

## API Extractor Warning

The build may show a warning that API Extractor uses a bundled TypeScript version older than the project TypeScript version.

This is a tooling compatibility warning from declaration rollup generation. It does not currently fail the build or affect the generated package. Revisit it when upgrading `vite-plugin-dts`, TypeScript, or the declaration build strategy.

## What Will Not Be Optimized Now

The project should not add bundle analyzers, code splitting, manual chunks, custom Rollup tuning, or dependency replacement during this phase.

The current goal is to record a baseline and avoid premature optimization. Optimization should be tied to a measurable problem, such as:

- Package output growth after new components are added.
- Storybook becoming slow enough to affect documentation usage.
- Consumers importing more code than expected.
- CSS-in-JS runtime cost becoming a real constraint.

## Future Bundle Analysis Plan

Before publishing a stable package, run a dedicated bundle analysis phase:

1. Measure package output after the core component set is defined.
2. Verify tree shaking with a small consumer app.
3. Compare import cost for named imports.
4. Review whether UMD is still necessary.
5. Check whether component-level exports are needed.
6. Evaluate Styled Components runtime and SSR implications.
7. Add a bundle analyzer only if the baseline is no longer enough.

## Acceptance Criteria

Performance work is healthy when:

- Package outputs are measured after build.
- `npm pack --dry-run` includes only expected files.
- Peer dependencies are not bundled into the library.
- Storybook warnings are understood and separated from package size.
- Any optimization is justified by measured impact.

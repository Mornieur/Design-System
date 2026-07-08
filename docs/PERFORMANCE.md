# Performance

Performance work should be measured before it becomes a major optimization effort.

## Tree Shaking

The package should expose modules in a way that allows unused code to be removed by consumer bundlers.

## Bundle Size

Bundle size should be measured after the package build is aligned with public exports.

## Side Effects

The `sideEffects` package setting should be reviewed carefully, especially because styling libraries can introduce side effects.

## Bundle Analyzer

A bundle analyzer may be added later to understand output size and dependency impact.

## Import Cost

Public imports should avoid pulling unrelated components into consumer bundles.

## Memoization

Memoization should be used only when render cost or referential stability requires it. It should not be added by default.

## Build Outputs

The project should verify generated ESM, CJS, type declarations, and any other configured output formats.

## CSS-in-JS Impact

Styled Components provides a familiar styling model, but the package should document any runtime and SSR implications once publishing becomes a priority.

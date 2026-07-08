# Contributing

FeitozaUI is currently maintained as a portfolio project, but contributions should follow professional standards.

## Branches

Use focused branches with descriptive names:

```txt
docs/add-component-guidelines
feat/add-button-sizes
fix/button-disabled-state
```

## Commits

Use Conventional Commits:

```txt
docs: add accessibility guidelines
feat: add button size variants
fix: improve focus state
```

## Before Opening A PR

- Run type-check.
- Run lint.
- Run tests when code changes.
- Update Storybook when component behavior changes.
- Update docs when public API or project direction changes.
- Use the component checklist for public components.

## Required Validation

```txt
yarn.cmd type-check
yarn.cmd lint
yarn.cmd test --run
```

Use `yarn.cmd build` when package or build configuration changes.

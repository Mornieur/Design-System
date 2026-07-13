# Component Workflow

Use this workflow for any public component creation or evolution.

Normative references:

- [API Conventions](../architecture/API_CONVENTIONS.md)
- [Component Guidelines](../design-system/COMPONENT_GUIDELINES.md)
- [Component Checklist](../design-system/COMPONENT_CHECKLIST.md)
- [Accessibility](../design-system/ACCESSIBILITY.md)
- [Storybook](../STORYBOOK.md)
- [Testing Strategy](../TESTING_STRATEGY.md)

## 1. Inspect the nearest existing component

Before designing anything:

- find the most similar public component;
- inspect its folder structure;
- inspect its API;
- inspect its tests and stories;
- inspect how it is exported.

Do not invent a new local pattern when an existing repository pattern already solves the same class of problem.

## 2. Read the API conventions

Before implementation, confirm:

- naming consistency;
- native prop pass-through expectations;
- ref expectations;
- controlled/uncontrolled conventions;
- export expectations.

## 3. Define scope

State clearly:

- the problem being solved;
- what belongs in the component;
- what remains composition;
- what is out of scope.

Do not enlarge scope mid-task without explicit justification.

## 4. Define the public API

The API must be:

- minimal;
- typed;
- predictable;
- consistent with existing public components.

Avoid:

- vague props;
- one-off prop names;
- props that mirror arbitrary CSS knobs;
- APIs designed around imagined future variants.

## 5. Choose the semantic HTML element first

Start from the most appropriate native element.

Only move to custom widget behavior when native HTML is insufficient and the accessibility cost is understood.

## 6. Make explicit decisions

For every public component, decide consciously:

- which native props are preserved;
- whether `forwardRef` is required;
- whether the component is controlled, uncontrolled, or both;
- how IDs are generated or accepted;
- which ARIA attributes are required, optional, or unnecessary;
- whether slots are justified;
- whether variants are real semantic differences;
- whether sizes are real usage needs;
- which semantic tokens are used;
- which internal style props must be transient.

## 7. Implement

Implementation rules:

- no `any`;
- no Next.js dependency inside the public package surface;
- no showcase-specific styling in public components;
- no component tokens unless semantic tokens are demonstrably insufficient;
- no abstraction introduced only because it looks complete.

Prefer small, explicit duplication over premature shared infrastructure.

## 8. Export intentionally

When a component is public:

- export it from the correct local barrel;
- export its public types when useful;
- confirm the root entrypoint exposes it intentionally.

Do not export experimental or showcase-only code.

## 9. Add stories

Stories must document public states and usage.

Expect:

- meaningful default state;
- important state variations;
- accessibility-relevant states when applicable;
- realistic usage examples when useful.

Avoid:

- stories that exist only as visual filler;
- showcase composition masquerading as component API;
- naming like `Basic`, `Example`, or `Sample` when a stronger name exists.

## 10. Add tests

Test behavior and public contracts.

Priorities:

- role and accessible name queries when applicable;
- keyboard behavior;
- focus behavior;
- disabled and invalid states;
- native prop pass-through;
- ref forwarding;
- public composition behavior;
- absence of transient prop leakage.

Avoid:

- snapshots as the primary test strategy;
- CSS-detail tests that do not protect a public contract;
- tests that encode implementation structure unnecessarily.

Use `userEvent` for user interactions when possible. Use lower-level event helpers only when needed.

## 11. Update documentation when necessary

Update documentation only when:

- public API changed;
- behavior changed materially;
- a new repository-level rule was introduced;
- an existing document would otherwise become misleading.

Do not duplicate existing normative guidance.

## 12. Validate

Minimum validation by change type:

### Documentation-only changes

- `yarn.cmd type-check`
- `yarn.cmd lint`

### Component behavior, tests, or stories

- `yarn.cmd type-check`
- `yarn.cmd lint`
- `yarn.cmd test --run`
- `yarn.cmd build-storybook`

### Public package surface, exports, build, or package metadata

- `yarn.cmd type-check`
- `yarn.cmd lint`
- `yarn.cmd test --run`
- `yarn.cmd build`
- `yarn.cmd build-storybook`
- `npm.cmd pack --dry-run`

If a required command is not executed, report that explicitly.

## 13. Final report

The final task report must include:

- initial state;
- diagnosis;
- scope and decisions;
- modified files;
- API impact;
- validations executed;
- failures or limitations;
- final Git state.

## Anti-regression rules

Do not:

- use `any`;
- introduce vague props;
- create abstractions without repeated need;
- duplicate token layers;
- build custom widgets without full keyboard support;
- use ARIA to compensate for incorrect HTML choices;
- rely on snapshots as the main protection;
- move showcase-specific behavior into the public package;
- couple public components to Next.js;
- ship breaking changes silently.

# Roadmap

This roadmap is organized by platform maturity. It should guide implementation in small, reviewable phases.

## 0. Discovery

Objective: document the current project state and known gaps.
Deliverable: discovery notes and issue list.
Acceptance criteria: current risks, constraints, and scope are visible.
Risks: analysis without execution.
Validation: manual review.
Commits: `docs: add project discovery notes`.

## 1. Vision

Objective: define FeitozaUI as a UI Engineering Platform.
Deliverable: vision documentation.
Acceptance criteria: platform boundaries are clear.
Risks: overly aspirational language.
Validation: manual review.
Commits: `docs: define feitozaui engineering vision`.

## 2. Engineering Philosophy

Objective: define principles and engineering values.
Deliverable: principles and values docs.
Acceptance criteria: future work can be reviewed against explicit principles.
Risks: principles that are not enforced.
Validation: manual review.
Commits: `docs: define engineering principles`.

## 3. ADRs

Objective: record major architecture and scope decisions.
Deliverable: ADR index and initial ADRs.
Acceptance criteria: key decisions are documented with consequences.
Risks: ADRs become stale.
Validation: manual review.
Commits: `docs: add architecture decision records`.

## 4. Identity

Objective: align naming around FeitozaUI and `@feitoza-ui/core`.
Deliverable: consistent project identity.
Acceptance criteria: old active branding is removed and no secrets remain.
Risks: partial rename.
Validation: `yarn.cmd type-check`, `yarn.cmd lint`.
Commits: `chore: align project identity to feitozaui`.

## 5. Foundations

Objective: organize visual foundations and token strategy.
Deliverable: documented foundation categories and initial token direction.
Acceptance criteria: tokens have clear purpose and naming direction.
Risks: token overengineering.
Validation: `yarn.cmd type-check`, `yarn.cmd lint`.
Commits: `docs: document design foundations`.

## 6. Primitives

Objective: stabilize low-level primitives such as layout and basic controls.
Deliverable: reviewed primitives with stories and tests.
Acceptance criteria: primitives are reusable and intentionally exported.
Risks: exposing immature APIs.
Validation: `yarn.cmd type-check`, `yarn.cmd lint`, `yarn.cmd test --run`.
Commits: `feat: stabilize core primitives`.

## 7. Component Patterns

Objective: define repeatable patterns for components.
Deliverable: guidelines and examples for component structure.
Acceptance criteria: new components follow the checklist.
Risks: too much process for small changes.
Validation: manual review and tests for touched components.
Commits: `docs: add component guidelines`.

## 8. Developer Experience

Objective: improve imports, exports, autocomplete, naming, and examples.
Deliverable: clear public consumption model.
Acceptance criteria: consumers can import public APIs predictably.
Risks: exporting too much too early.
Validation: `yarn.cmd type-check`, `yarn.cmd lint`, `yarn.cmd build`.
Commits: `feat: define public exports`.

## 9. Public API

Objective: define the package contract.
Deliverable: root exports, public types, and documented API.
Acceptance criteria: package entrypoints match intended usage.
Risks: future breaking changes.
Validation: `yarn.cmd build`.
Commits: `feat: define public package api`.

## 10. Documentation

Objective: keep docs aligned with real project state.
Deliverable: README and docs updates.
Acceptance criteria: docs do not promise features that do not exist.
Risks: documentation drift.
Validation: manual review.
Commits: `docs: update project documentation`.

## 11. Storybook

Objective: treat Storybook as the documentation product.
Deliverable: structured Storybook sections and useful stories.
Acceptance criteria: Storybook explains foundations, components, accessibility, and usage.
Risks: visual polish before API stability.
Validation: `yarn.cmd build-storybook`.
Commits: `docs: structure storybook as product`.

## 12. Accessibility

Objective: make accessibility a component requirement.
Deliverable: accessibility standards applied to public components.
Acceptance criteria: semantic HTML, focus, keyboard, labels, and ARIA decisions are reviewed.
Risks: overusing ARIA.
Validation: `yarn.cmd test --run`, manual a11y review.
Commits: `fix: improve component accessibility`.

## 13. Testing

Objective: test behavior and public contracts.
Deliverable: behavior-focused test coverage.
Acceptance criteria: tests cover rendering, interaction, keyboard, disabled, and accessibility basics.
Risks: brittle tests.
Validation: `yarn.cmd test --run`.
Commits: `test: add behavior coverage`.

## 14. API Consistency

Objective: standardize shared props and composition patterns.
Deliverable: consistent component APIs.
Acceptance criteria: shared props behave consistently across public components.
Risks: unnecessary refactors.
Validation: `yarn.cmd type-check`, `yarn.cmd test --run`.
Commits: `refactor: standardize component api`.

## 15. Versioning

Objective: prepare package evolution rules.
Deliverable: SemVer and release strategy.
Acceptance criteria: breaking changes and releases have a documented process.
Risks: process too heavy for project size.
Validation: manual review.
Commits: `docs: define release strategy`.

## 16. Publishing

Objective: prepare package publication without publishing yet.
Deliverable: verified package metadata and dry-run package contents.
Acceptance criteria: package outputs and exports are correct, no secrets are present.
Risks: accidental publication or wrong registry.
Validation: `yarn.cmd build`, `npm pack --dry-run`.
Commits: `chore: prepare package publishing`.

## 17. Showcase

Objective: create a frontend-only real usage surface.
Deliverable: financial showcase using FeitozaUI.
Acceptance criteria: showcase includes realistic states without backend.
Risks: becoming a full app instead of a showcase.
Validation: `yarn.cmd type-check`, `yarn.cmd lint`, `yarn.cmd build`.
Commits: `feat: add financial showcase`.

## 18. Performance

Objective: measure package and runtime costs.
Deliverable: bundle and performance notes.
Acceptance criteria: tree shaking, side effects, and build outputs are understood.
Risks: premature optimization.
Validation: `yarn.cmd build`, package output inspection.
Commits: `docs: document performance strategy`.

## 19. Maintenance

Objective: define long-term maintenance practices.
Deliverable: maintenance and contribution docs.
Acceptance criteria: fixes, deprecations, reviews, and support expectations are documented.
Risks: process overhead.
Validation: manual review.
Commits: `docs: define maintenance process`.

## 20. Future Roadmap

Objective: document future ideas without adding scope.
Deliverable: future roadmap.
Acceptance criteria: future ideas are clearly out of current scope.
Risks: roadmap interpreted as existing feature set.
Validation: manual review.
Commits: `docs: add future roadmap`.

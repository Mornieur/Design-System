# Code Style

Code should be clear, typed, and consistent with the existing project patterns.

## Naming

- Use descriptive component names.
- Use consistent prop names across components.
- Avoid product-specific names in reusable components.

## Organization

Component folders should keep implementation, styles, stories, and tests close together when possible.

## Imports

Prefer existing path aliases and local patterns. Public exports should be explicit and intentional.

## Components

Components should be small, typed, and composable. Avoid adding product logic to the core library.

## Tests

Tests should focus on behavior and public contracts. Prefer Testing Library queries that reflect user behavior.

## Stories

Stories should show real states and document usage. Avoid stories that only render a component without context.

## Clean Code

Prefer simple control flow, explicit names, and small changes. Add comments only when they explain a non-obvious decision.

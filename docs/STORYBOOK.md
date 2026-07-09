# Storybook

Storybook is the primary documentation and exploration surface for FeitozaUI.

It should be treated as a product, not only as a development tool.

## Target Structure

- Overview: what FeitozaUI is and how to navigate the docs.
- Getting Started: how to install, import, and use the package once publishing is ready.
- Installation: package setup, peer dependencies, and styling requirements.
- Foundations: tokens and design language.
- Components: public component documentation.
- Patterns: reusable UI patterns made from components.
- Templates: future larger layout examples.
- Examples: realistic usage examples.
- Accessibility: standards and component-specific notes.
- Guidelines: how to use and contribute to the system.
- Do / Don't: practical usage guidance.
- Changelog: future release notes.
- Roadmap: current and future direction.

## Story Expectations

Stories should show meaningful states:

- default
- variants
- sizes
- disabled
- loading when applicable
- error when applicable
- keyboard and focus behavior when useful

## Documentation Expectations

Storybook docs should be honest. If a feature is planned but not implemented, it should be clearly marked as future work.

## Visual Quality

The Storybook UI should feel consistent with the FeitozaUI identity, but visual polish should not hide incomplete APIs or missing accessibility work.

## Visual Experience

Storybook is the first product surface for FeitozaUI. It should use the approved **Quiet Future / Neon Infrastructure** direction without becoming a showcase or landing page.

Rules:

- Dark mode is the default documentation and canvas background.
- Light background remains available for future validation.
- Manager, docs, and canvas should use blue-gray infrastructure surfaces.
- Cyan is used for selection, focus, links, and active technical signals.
- Coral is rare and reserved for expressive accent moments.
- Docs should rely on typography, hierarchy, borders, and surface lightness before decoration.
- Code, token names, package names, IDs, and metrics should use monospace.
- Controls and ArgsTable must remain readable and usable.
- Internal Storybook selectors may be used only for the documentation shell, not for component implementation.

The Storybook visual layer does not introduce a library ThemeProvider, runtime theme switching, component tokens, or public API.

## Fonts

Storybook loads Inter, Space Grotesk, JetBrains Mono, and Outfit through `manager-head.html` and `preview-head.html`.

Reason:

- The current repository does not include local font files.
- No font package dependency is installed.
- Manager and preview run outside the Next app layout, so `next/font` does not automatically cover them.

This is a Storybook product-surface decision. The library package still exports font-family tokens only and does not force consumers to download fonts.

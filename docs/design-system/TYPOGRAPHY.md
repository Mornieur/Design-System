# Typography

Typography is a brand foundation and an accessibility foundation. FeitozaUI uses type to communicate precision, hierarchy, and technical clarity before personality.

## Font Roles

| Family | Role | Use |
| --- | --- | --- |
| Inter | Interface and reading | Components, controls, labels, body copy, documentation, and long-form reading. |
| Space Grotesk | Display and brand | Product name, major headings, expressive titles, and identity moments. |
| JetBrains Mono | Technical data | Code, tokens, IDs, logs, metrics, timestamps, package names, and small operational labels. |
| Outfit | Compatibility heading | Existing heading compatibility only. Do not expand its use. |

## Loading Strategy

The library tokens export font-family names only. They do not download fonts for consumers.

FeitozaUI product surfaces load fonts separately:

- The Next app uses `next/font/google` for Inter, Space Grotesk, JetBrains Mono, and Outfit. This avoids runtime font requests for the app build and reduces layout shift through generated font variables.
- Storybook loads the same families through `manager-head.html` and `preview-head.html` because the current repository has no local font files or font package dependency.
- The npm package does not inject `@import`, `@font-face`, or external font loading into consumer applications.

## Fallbacks

Tokens include practical fallbacks:

- Interface: Inter, then system sans-serif.
- Display: Space Grotesk, then Inter/system sans-serif.
- Code/data: JetBrains Mono, then system monospace.
- Compatibility heading: Outfit, then system sans-serif.

## Outfit Decision

Outfit currently overlaps with Space Grotesk as a heading/display family. It remains as compatibility because existing internal components still consume `typography.heading`.

Decision:

- Preserve Outfit in tokens for now.
- Load Outfit in FeitozaUI product surfaces to avoid fallback regressions.
- Do not use Outfit for new identity work.
- Prefer Space Grotesk for new display and brand moments.
- Plan a future migration from `typography.heading` to semantic display/heading roles before removing Outfit.

## Accessibility Rules

- Body text should use Inter, not Space Grotesk or monospace.
- Monospace must be reserved for technical values and short labels.
- Avoid long uppercase strings.
- Do not use typography as the only state indicator.
- Maintain normal text contrast of at least 4.5:1.
- Keep small technical labels readable at 200% zoom.

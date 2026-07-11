# Iconography

Iconography supports recognition, scanning, and state clarity in FeitozaUI. It should make the system feel technical and controlled without becoming decorative.

## Decision

FeitozaUI uses `lucide-react` as the default icon source for FeitozaUI product surfaces and future component work.

Reasons:

- Consistent outline geometry and stroke.
- Strong legibility at 16px, 20px, and 24px.
- Direct React imports support tree shaking.
- The project already depends on `lucide-react`.
- The Figma Make reference also uses Lucide-style icons heavily.
- The visual language fits developer tools, observability, and infrastructure UI.

## Alternatives Considered

| Library | Strength | Tradeoff |
| --- | --- | --- |
| Lucide | Broad set, clean outline style, React package, tree-shakeable direct imports. | Large catalog can encourage overuse if rules are weak. |
| Phosphor Icons | Multiple weights and expressive range. | Multiple weights can reduce consistency unless tightly governed. |
| Radix Icons | Minimal and consistent. | Smaller set; less suitable for observability and infrastructure examples. |

## Sizes

| Size | Use |
| --- | --- |
| 16px | Compact controls, metadata, table cells, inline labels. |
| 20px | Default controls, menu items, status rows, documentation examples. |
| 24px | Navigation, prominent actions, empty states, high-emphasis moments. |

## Stroke

Use Lucide's default stroke or a nearby `1.75` optical weight. Avoid mixing filled, duotone, and outline icon styles in the same component family.

## Color

- Neutral icons use secondary or muted text color.
- Cyan indicates selection, focus, active state, primary action, or a technical signal.
- Coral is rare and expressive. It should not become a general icon color.
- Feedback icons must use semantic status color and supporting text.

## Accessibility

- Decorative icons must use `aria-hidden="true"`.
- Icon-only controls must have an accessible name on the interactive element.
- Informational icons need adjacent text or an accessible label.
- Do not use an icon as the only indicator of state.
- Touch target belongs to the component, not to the visual icon size.

## Usage Rules

- Import icons directly from `lucide-react`.
- Do not create a custom icon library in this phase.
- Do not use cyan on every icon.
- Do not add decorative icons to every heading.
- Do not mix multiple icon libraries without a design-system decision.
- Keep icon and label spacing consistent with the spacing scale.

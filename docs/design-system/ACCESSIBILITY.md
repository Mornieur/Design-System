# Accessibility

Accessibility is a core requirement for FeitozaUI components.

## Semantic HTML

Prefer native elements before custom behavior. Buttons should be buttons. Links should be links. Form controls should use real form elements.

## Focus Management

Interactive components need visible focus states. Components that open overlays or manage complex interactions must define how focus enters, moves, and returns.

## Keyboard Navigation

Interactive components should support keyboard behavior expected for their pattern. Native behavior should be preserved whenever possible.

## ARIA

Use ARIA only when semantic HTML is not enough. Incorrect ARIA can make a component less accessible.

## Labels

Inputs and controls need accessible names. Use visible labels when possible. Icon-only buttons need clear accessible labels.

## Disabled States

Disabled controls should communicate state visually and programmatically. Native `disabled` should be preferred when available.

## Presentational Primitives

Layout and surface primitives should not add landmarks or ARIA roles by default. Consumers may pass semantic props when the surrounding product context requires them.

## Contrast

Text, icons, focus indicators, and important UI states should meet reasonable contrast expectations.

### Minimum Contrast

Use WCAG AA as the baseline:

- Normal text: at least 4.5:1.
- Large text and large icons: at least 3:1.
- Focus indicators and meaningful graphical objects: at least 3:1 against adjacent colors.

Reason: FeitozaUI is intended for dense technical interfaces. Dense tables, dashboard metrics, documentation, and developer tools depend on text clarity under repeated use.

### Prohibited Color Usage

Do not use:

- Accent color as paragraph text unless contrast has been verified.
- White text on a saturated color unless the contrast ratio passes for the text size.
- Neon color as the only state indicator.
- Low-alpha borders as the only error, selected, or focused indicator.
- Status colors without a text label, icon, shape, or accessible state.

Reason: color perception varies by user, display, lighting, and color vision. State must survive beyond hue.

### Figma Make Contrast Notes

The Figma Make reference contains strong dark-mode contrast pairs:

- `#07090f` background with `#dde4f0` foreground.
- `#0d1220` card with `#dde4f0` foreground.
- `#00b4d8` primary with `#040c10` foreground.

The token mapping uses a darker light-mode action value to meet normal text contrast:

- `#0369a1` action with `#ffffff` foreground is approximately 5.93:1.

Reason: visual approval does not automatically mean every color pair is safe as a reusable component default.

## Neon, Glow, And Accent

Neon is allowed only when it communicates state or intent.

Allowed neon/accent usage:

- Keyboard focus ring.
- Active navigation item.
- Selected card edge.
- Primary action.
- Live status dot.
- Critical incident signal.
- Chart or metric category.

Prohibited neon/accent usage:

- Decorative page background.
- Large glow behind content.
- Every card border.
- Every icon in a panel.
- Paragraph text.
- Disabled state.
- Multiple saturated accents competing inside one local composition.

Reason: the FeitozaUI identity is 80% clean platform and 20% cyberpunk. Accent must clarify hierarchy, not create visual noise.

## Radius

Use radius to support the component role:

- Square or near-square corners for tables, grids, dividers, metric bars, and dense infrastructure surfaces.
- Small radius for buttons, inputs, cards, badges, menus, and panels.
- Full radius only for avatars, status dots, and true pills.

Reason: the visual language should feel precise and engineered. Large soft radius can make the platform feel consumer-oriented rather than technical.

## Shadows And Elevation

Dark mode should prefer:

- Surface lightness.
- Borders.
- Spatial layout.

Light mode may use:

- Soft shadows.
- Border plus subtle shadow for floating surfaces.

Avoid:

- Heavy shadows in dark mode.
- Neon shadow as default elevation.
- Glow as the only focus indicator.

Reason: the Figma Make reference expresses dark-mode depth through surface layers, not decorative shadow.

## Typography Accessibility

Readable body text takes priority over brand expression.

Rules:

- Body copy should use a highly readable sans-serif.
- Monospace should be reserved for code, data, metrics, IDs, endpoints, and technical labels.
- Uppercase labels should be short.
- Small text must have strong enough contrast.
- Letter spacing should not be used to compensate for poor hierarchy.

Reason: FeitozaUI needs to support documentation, tables, metrics, and repeated scanning.

## Interaction States

### Hover

Hover should communicate affordance with subtle changes in background, border, or text color.

Avoid hover effects that:

- Move layout.
- Add strong glow.
- Depend only on color.
- Make dense tables visually unstable.

Reason: hover is frequent in developer tools and should support scanning, not distract from it.

### Focus

Focus must be visible on every interactive component.

Focus may use:

- Border color.
- Ring.
- Outline.
- Subtle glow as a supporting effect.

Focus must not rely only on:

- Box shadow glow.
- Color change with insufficient contrast.
- Browser default removal without replacement.

Reason: keyboard users need a reliable navigation marker.

### Disabled

Disabled controls should:

- Use native `disabled` when available.
- Reduce emphasis without hiding the label.
- Preserve enough contrast to understand the control.
- Avoid hover and active treatment.

Reason: disabled state must be visually and programmatically clear.

### Error And Invalid

Error states should include:

- Color.
- Text explanation.
- Programmatic invalid state when applicable.
- Clear association between message and control.

Reason: a red border alone is not enough for accessibility or debugging.

## Motion Preferences

Motion should respect reduced motion preferences when animations become meaningful or potentially distracting.

Motion should be:

- Short.
- Functional.
- State-driven.
- Interruptible where applicable.

Avoid:

- Decorative looping animation.
- Large scale or parallax effects.
- Motion required to understand content.
- Motion that masks state changes.

Reason: FeitozaUI should feel responsive and professional, not theatrical.

## Landmarks

Landmarks should be used intentionally. Avoid adding `role="region"` or other landmarks to every visual container.

## Headless Libraries

For complex components such as Dialog, Tooltip, Popover, Tabs, and Select, future work may use headless libraries such as Radix UI when they provide stronger accessibility foundations.

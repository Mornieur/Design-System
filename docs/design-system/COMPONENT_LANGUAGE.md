# Component Language

## Purpose

This document defines the visual and behavioral language for FeitozaUI components before implementation.

It is not an API contract. It does not define final TypeScript props, exports, component tokens, or implementation details. It explains how components should feel, behave, and relate to the approved identity:

- Quiet Future.
- Neon Infrastructure.
- Infrastructure over Decoration.
- 80% Clean Platform, 20% Cyberpunk.

Use this document with:

- [Visual Identity](VISUAL_IDENTITY.md) for brand direction.
- [Foundations](FOUNDATIONS.md) for foundation categories.
- [Token Architecture](TOKENS.md) for token layers.
- [Accessibility](ACCESSIBILITY.md) for normative accessibility rules.
- [Component Guidelines](COMPONENT_GUIDELINES.md) for implementation guidance.
- [Component Checklist](COMPONENT_CHECKLIST.md) for Definition of Done.
- [API Conventions](../architecture/API_CONVENTIONS.md) for public API expectations.

## SPEC

### Expected Improvement

FeitozaUI needs a consistent component language before component implementation begins. The expected improvement is a shared standard for surfaces, controls, feedback, data display, density, state, and action hierarchy.

This prevents future components from becoming a random collection of styles. Components should look like they belong to the same infrastructure platform even when they solve different UI problems.

### Current Problem

The project currently exposes a small public atom set and includes a few internal or example components. The implementation is useful, but the visual language is still uneven:

- Some components use compatibility color aliases instead of semantic roles.
- Button is public but still reflects the older warm primary direction.
- Card is useful but still needs clearer surface/elevation language.
- Carousel and UserProfile are product/example-like and not aligned with the core platform language.
- Badge, Table, overlays, and several form controls are still pending or partial.

### Restrictions

- Do not create or change components in this phase.
- Do not change tokens, Storybook, public API, build, package, CI, or workflows.
- Do not introduce component tokens without demonstrated need.
- Do not copy the Figma Make shadcn/Radix/Tailwind code.
- Do not turn visual guidelines into final props.

### Acceptance Criteria

- Components have a shared visual signature.
- Existing components are classified by maturity.
- Core and future component families have visual and behavioral guidance.
- Shared states are defined consistently.
- Action hierarchy is defined without assuming every action needs cyan fill.
- Density strategy is intentionally small.
- Component token policy is explicit.
- Future implementation roadmap is documented.

### Out Of Scope

- Component implementation.
- Storybook updates.
- API design.
- ThemeProvider or runtime theme switching.
- Component tokens.
- Visual QA screenshots.

## Diagnosis

### Existing Component Classification

| Component | Responsibility | Current assessment | Classification |
| --- | --- | --- | --- |
| Button | Public action primitive. Preserves native button props and ref. | Useful API baseline, but visual variants still rely on compatibility aliases and the older warm primary direction. Needs semantic action mapping and sharper state language later. | Public but requires alignment |
| Box | Public presentational surface/layout primitive. Token props for padding, margin, background, and radius. | Small, composable, and useful. API exposes `colors` keys, so future migration must be careful. It should remain visually neutral. | Public and aligned |
| Flex | Public layout primitive. Token gap and native div pass-through. | Strong primitive. It should remain unstyled except for layout. | Public and aligned |
| Card | Internal molecule for grouped content. | Useful as a future surface pattern, but current API is narrow and elevation model should move toward surface hierarchy. | Internal and useful |
| Carousel | Molecule for image carousel behavior. | Product/demo-like and less central to UI Engineering Platform foundations. Visual language is not aligned with the new identity. | Experimental |
| UserProfile | Organism example composed with Button. | Product-specific example. Useful for tests/composition, not a platform component candidate right now. | Experimental |

### Current Gaps

- No Checkbox, Radio, or Switch yet.
- No Badge or status language component.
- No Table or data display component.
- No overlays: Dialog, Popover, Dropdown Menu, Tooltip.
- No feedback components: Toast, Alert, Progress, Skeleton, Empty State.
- No typography primitive.

These gaps are expected. They should be filled gradually after the language is stable.

## Visual Signature

A FeitozaUI component should be recognized by:

- Blue-gray or navy infrastructure surfaces.
- Cyan as the technical signal for action, focus, selection, links, and important interactive state.
- Coral as an expressive brand accent used sparingly.
- Hairline borders.
- Small, precise radius.
- Surface hierarchy through lightness before shadow.
- Clear typography with readable interface text and monospace roles for data.
- Predictable spacing.
- Visible focus.
- Discreet motion.
- Minimal glow.
- Controlled shadow.

### Recurring Characteristics

Use these often:

- Hairline border on surfaces and structured controls.
- Small radius on controls and panels.
- Muted secondary text.
- Clear label/value hierarchy.
- Cyan focus and selected state.
- Semantic status color plus text.
- Compact but readable spacing.

### Contextual Characteristics

Use these only when justified:

- Coral accent for brand moments, special callouts, or non-status visualization.
- Cyan glow for focus, active infrastructure state, or critical visibility.
- Shadow in light mode or floating surfaces.
- Monospace text for metrics, code, IDs, endpoints, status labels, and timestamps.
- Top accent edge on selected cards or dashboard metrics.

### Never Use

Avoid:

- Neon as a default background.
- Glow as elevation.
- Cyan on every icon or border.
- Coral as error unless explicitly mapped to danger.
- Long neon text.
- Decorative gradients on product surfaces.
- Large soft radius as the default style.
- Motion that feels theatrical.
- Color as the only state indicator.

## Component Anatomy

### Button

Responsibility: trigger actions.

Anatomy:

- Container.
- Label.
- Optional leading or trailing icon.
- Optional loading indicator.

Minimum variants:

- Primary.
- Secondary.
- Tertiary or ghost.
- Destructive.
- Link action.

Sizes:

- Start with `sm`, `md`, `lg` only when implementation proves need. Default should cover most product UI.

States:

- Default, hover, active, focus-visible, loading, disabled, destructive.

Visual hierarchy:

- Primary is the highest action in a local context.
- Secondary supports primary.
- Ghost/tertiary is low emphasis.
- Destructive must be clear and should not compete with primary.

Semantic tokens:

- Use action, text, border, focus, state, radius, transition, and opacity roles.

Cyan:

- Allowed for primary, focus, selected/active, and link action.

Coral:

- Avoid for default action. Use only for expressive brand action when the action is not semantic success/warning/danger.

Border:

- Secondary and tertiary actions may rely on border. Focus must not rely on border only.

Elevation:

- No default elevation. Avoid button shadow except for rare floating contexts.

Motion:

- Short color/border/opacity transition. Loading spinner may rotate.

Keyboard:

- Native button behavior. Enter/Space activation. Focus-visible required.

Accessibility:

- Preserve native `disabled`.
- Loading must prevent duplicate action when applicable.
- Icon-only buttons require accessible names.

Avoid:

- Multiple primary buttons in one local action group.
- Permanent glow.
- Cyan fill for every action.

Core:

- Button alignment is core and should happen early.

Future:

- Split buttons, icon buttons, and loading APIs need separate API review.

### Input

Responsibility: collect single-line text or values.

Anatomy:

- Label.
- Field container.
- Value.
- Placeholder.
- Optional leading/trailing icon.
- Helper text.
- Error text.

Minimum variants:

- Default.
- Invalid.
- Disabled.
- Read-only.

Sizes:

- Default first. Compact only when dense forms or tables require it.

States:

- Default, hover, focus-visible, disabled, read-only, invalid, success if useful.

Visual hierarchy:

- Quiet at rest, clear at focus, explicit when invalid.

Semantic tokens:

- Surface, input/background, border, text, focus, feedback, state opacity.

Cyan:

- Focus ring/border and selected text affordance.

Coral:

- Avoid in standard input state. Can appear only in branded form contexts, not validation.

Border:

- Required at rest or through clear input surface contrast.

Elevation:

- None.

Motion:

- Short border and shadow transition.

Keyboard:

- Native input behavior.

Accessibility:

- Visible label preferred.
- Error message must be associated with the control.
- Do not rely on red border only.

Avoid:

- Placeholder as label.
- Glow-heavy focus.
- Overly rounded fields.

Core:

- Input is a core next component.

Future:

- Masked input, OTP, combobox, and validation orchestration.

### Textarea

Responsibility: collect multi-line text.

Anatomy:

- Label.
- Field.
- Placeholder.
- Helper/error text.
- Optional character count.

Minimum variants:

- Default, invalid, disabled, read-only.

Sizes:

- Default min-height. Resize behavior must be intentional.

States:

- Same as Input.

Visual hierarchy:

- Should feel like Input, with more vertical space.

Semantic tokens:

- Same as Input.

Cyan:

- Focus only.

Coral:

- Avoid.

Border:

- Same as Input.

Elevation:

- None.

Motion:

- Same as Input.

Keyboard:

- Native textarea behavior.

Accessibility:

- Label and error association required.

Avoid:

- Auto-resize without constraints.

Core:

- Form primitive after Input.

Future:

- Rich text editor is out of scope.

### Select

Responsibility: choose one value from a known set.

Anatomy:

- Label.
- Trigger.
- Value/placeholder.
- Chevron.
- Menu/listbox.
- Option rows.

Minimum variants:

- Default, invalid, disabled.

Sizes:

- Default and compact later if tables need it.

States:

- Default, hover, open, focus-visible, selected, disabled, invalid.

Visual hierarchy:

- Trigger behaves like input; menu uses floating surface.

Semantic tokens:

- Input, surface floating, border, focus, selected, text, z-index.

Cyan:

- Focus, selected option indicator, active item.

Coral:

- Avoid.

Border:

- Trigger border and floating menu border.

Elevation:

- Floating or overlay surface, controlled shadow.

Motion:

- Short open/close opacity/position transition.

Keyboard:

- Arrow navigation, Enter/Space select, Escape close, typeahead if implemented.

Accessibility:

- Use established headless behavior when possible.

Avoid:

- Custom select without keyboard parity.

Core:

- Important, but after simpler form controls.

Future:

- Multi-select and combobox.

### Checkbox

Responsibility: toggle one or more independent boolean values.

Anatomy:

- Control box.
- Check indicator.
- Label.
- Optional description.

Minimum variants:

- Unchecked, checked, indeterminate, invalid, disabled.

Sizes:

- Default. Compact only for tables.

States:

- Hover, focus-visible, checked, indeterminate, disabled, invalid.

Visual hierarchy:

- Small, precise, high-contrast indicator.

Semantic tokens:

- Border, focus, action, feedback, text.

Cyan:

- Checked and focus.

Coral:

- Avoid.

Border:

- Required.

Elevation:

- None.

Motion:

- Minimal indicator transition.

Keyboard:

- Space toggles.

Accessibility:

- Native input or headless primitive with correct ARIA.

Avoid:

- Check state indicated only by color.

Core:

- Form controls phase.

Future:

- Checkbox group component.

### Radio

Responsibility: choose one option from a set.

Anatomy:

- Circular control.
- Selected dot.
- Label.
- Optional description.

Minimum variants:

- Unchecked, checked, invalid, disabled.

Sizes:

- Default.

States:

- Hover, focus-visible, checked, disabled, invalid.

Visual hierarchy:

- Similar to checkbox but mutually exclusive.

Semantic tokens:

- Border, focus, action, feedback, text.

Cyan:

- Selected and focus.

Coral:

- Avoid.

Border:

- Required.

Elevation:

- None.

Motion:

- Minimal.

Keyboard:

- Arrow navigation inside group, Space selection.

Accessibility:

- Group label required.

Avoid:

- Treating radios like independent toggles.

Core:

- Form controls phase.

Future:

- Card radio patterns.

### Switch

Responsibility: immediately toggle a setting.

Anatomy:

- Track.
- Thumb.
- Label.
- Optional description.

Minimum variants:

- Off, on, disabled.

Sizes:

- Default.

States:

- Hover, focus-visible, checked, disabled.

Visual hierarchy:

- More visual than checkbox but still restrained.

Semantic tokens:

- Surface, border, action, focus, state.

Cyan:

- On state and focus.

Coral:

- Avoid unless switch controls a branded visualization mode.

Border:

- Optional if track contrast is enough.

Elevation:

- Minimal thumb separation only.

Motion:

- Short thumb translation.

Keyboard:

- Space toggles.

Accessibility:

- Clear label; do not use for delayed form submission choices.

Avoid:

- Using switch where checkbox semantics are more appropriate.

Core:

- Form controls phase.

Future:

- Settings-specific compositions.

### Card

Responsibility: group related content or actions.

Anatomy:

- Container.
- Optional header.
- Title.
- Description/body.
- Optional metadata/action/footer.
- Optional accent edge for selected or metric state.

Minimum variants:

- Surface, raised, selected, interactive when needed.

Sizes:

- Not size-driven initially; content/layout should define dimensions.

States:

- Default, hover if interactive, selected, focus-visible if actionable, disabled only if truly interactive.

Visual hierarchy:

- Use surface lightness and borders first. Shadow is secondary.

Semantic tokens:

- Surface, border, text, elevation, radius, state, selection.

Cyan:

- Selected edge, active state, focus.

Coral:

- Brand callout or special highlight only.

Border:

- Default hairline.

Elevation:

- Surface hierarchy before shadow.

Motion:

- Subtle border/background transition when interactive.

Keyboard:

- Only focusable if the card itself is actionable.

Accessibility:

- Do not add landmark roles by default.

Avoid:

- Card inside card.
- Heavy shadow in dark mode.
- Making every card interactive.

Core:

- Core after Button/Typography/Input alignment.

Future:

- Dashboard metric card and selectable card patterns.

### Badge

Responsibility: label status, category, version, or small metadata.

Anatomy:

- Container.
- Label.
- Optional dot or icon.

Minimum variants:

- Neutral, success, warning, danger, info, accent.

Sizes:

- Default and compact; compact can be the default in dense UI.

States:

- Default, focus-visible only if interactive, disabled only if interactive.

Visual hierarchy:

- Low visual weight. Status badges should be readable but small.

Semantic tokens:

- Feedback, text, border, radius pill/dense, surface.

Cyan:

- Info, pending, selected metadata.

Coral:

- Brand/new/special label, not danger by default.

Border:

- Use alpha border with text; do not rely on fill alone.

Elevation:

- None.

Motion:

- Only if interactive.

Keyboard:

- Not focusable unless actionable.

Accessibility:

- Status must include text, not color alone.

Avoid:

- Badge as button without button semantics.
- Neon badge floods.

Core:

- Important for status/data platform language.

Future:

- Dismissible badge requires separate API.

### Typography

Responsibility: express hierarchy and reading rhythm.

Anatomy:

- Text role.
- Size.
- Weight.
- Line-height.

Minimum variants:

- Heading, body, caption, label, code/data.

Sizes:

- Start small. Avoid a marketing-scale type system inside product UI.

States:

- N/A, except links and interactive text.

Visual hierarchy:

- Use size, weight, color, and spacing before decoration.

Semantic tokens:

- Typography roles, text color, spacing.

Cyan:

- Links and active text.

Coral:

- Brand display moments only.

Border:

- N/A.

Elevation:

- N/A.

Motion:

- N/A.

Keyboard:

- N/A unless interactive.

Accessibility:

- Preserve semantic HTML headings.

Avoid:

- Uppercase long paragraphs.
- Negative letter spacing.
- Tiny low-contrast copy.

Core:

- High priority.

Future:

- Rich text and prose components.

### Link

Responsibility: navigate or reference another resource.

Anatomy:

- Text.
- Optional external icon.

Minimum variants:

- Inline, standalone, subtle.

Sizes:

- Inherit text size.

States:

- Default, hover, active, focus-visible, visited if relevant, disabled only when not an anchor.

Visual hierarchy:

- Clear without overpowering body text.

Semantic tokens:

- Action/link, focus, text.

Cyan:

- Primary link signal.

Coral:

- Avoid for standard links.

Border:

- Underline or text decoration may be preferable to border.

Elevation:

- None.

Motion:

- Color/underline transition only.

Keyboard:

- Native anchor behavior.

Accessibility:

- Link text must describe destination.

Avoid:

- Links that behave like buttons without clear semantics.

Core:

- Typography/action phase.

Future:

- Router integration is app-specific.

### Table

Responsibility: display structured data for scanning, comparison, and operation.

Anatomy:

- Table container.
- Header row.
- Body rows.
- Cells.
- Optional row actions.
- Optional status cell.
- Optional empty/loading state.

Minimum variants:

- Default data table, compact data table later.

Sizes:

- Default first. Compact after real data use.

States:

- Row hover, selected, loading, empty, disabled row if needed.

Visual hierarchy:

- Header low-emphasis uppercase or label style; data readable; status visible.

Semantic tokens:

- Surface, border, text, state, feedback, typography data roles.

Cyan:

- Selected row, active sort, focus.

Coral:

- Avoid except special data category.

Border:

- Hairline dividers are core.

Elevation:

- Container surface, not row shadow.

Motion:

- Minimal hover transition.

Keyboard:

- Row focus only if rows are interactive. Sorting controls keyboard accessible.

Accessibility:

- Use semantic table markup for real tabular data.

Avoid:

- Div grid for real table without need.
- Status by color only.

Core:

- Future data display phase.

Future:

- Column resizing, virtualization, pagination.

### Tabs

Responsibility: switch between related views.

Anatomy:

- Tab list.
- Tab trigger.
- Active indicator.
- Panel.

Minimum variants:

- Underline or contained tabs; choose one first.

Sizes:

- Default.

States:

- Hover, active, selected, focus-visible, disabled.

Visual hierarchy:

- Selected state must be obvious but restrained.

Semantic tokens:

- Surface, border, selection, focus, text.

Cyan:

- Active indicator and focus.

Coral:

- Avoid.

Border:

- Underline or container border.

Elevation:

- None unless tabs live in floating surface.

Motion:

- Optional indicator transition, short.

Keyboard:

- Arrow navigation, Home/End where applicable.

Accessibility:

- Use tabs pattern correctly.

Avoid:

- Tabs for unrelated navigation.

Core:

- Navigation phase.

Future:

- Vertical tabs.

### Tooltip

Responsibility: provide brief supporting information.

Anatomy:

- Trigger.
- Floating content.
- Optional arrow.

Minimum variants:

- Default.

Sizes:

- Content-driven with max width.

States:

- Open, closed.

Visual hierarchy:

- Floating surface with strong readability.

Semantic tokens:

- Surface floating, border, text, elevation, z-index.

Cyan:

- Avoid unless content describes selected/focus state.

Coral:

- Avoid.

Border:

- Hairline border.

Elevation:

- Floating surface; subtle shadow.

Motion:

- Short fade/scale or fade/slide.

Keyboard:

- Trigger focus should show tooltip when appropriate.

Accessibility:

- Tooltip cannot contain required interactive content.

Avoid:

- Long documentation in tooltip.

Core:

- Overlay phase.

Future:

- Rich hover card is separate.

### Popover

Responsibility: display contextual non-modal content.

Anatomy:

- Trigger.
- Floating surface.
- Header/content/actions if needed.

Minimum variants:

- Default.

Sizes:

- Content-driven.

States:

- Open, closed, focus management.

Visual hierarchy:

- Elevated over page but below modal.

Semantic tokens:

- Surface floating, border, elevation, z-index, focus.

Cyan:

- Focus and selected controls inside.

Coral:

- Rare callout only.

Border:

- Hairline border.

Elevation:

- Floating.

Motion:

- Short open/close.

Keyboard:

- Escape closes; focus behavior must be defined.

Accessibility:

- Use headless behavior when interaction is complex.

Avoid:

- Popover as modal.

Core:

- Overlay phase.

Future:

- Positioning abstraction.

### Dropdown Menu

Responsibility: expose contextual actions.

Anatomy:

- Trigger.
- Menu surface.
- Menu item.
- Optional icon/shortcut/separator.

Minimum variants:

- Default, destructive item.

Sizes:

- Default; compact naturally.

States:

- Hover/active item, focus, disabled, open.

Visual hierarchy:

- Menu is dense and utilitarian.

Semantic tokens:

- Surface floating, border, state, text, danger, z-index.

Cyan:

- Focus/active item if needed.

Coral:

- Avoid.

Border:

- Surface border and separators.

Elevation:

- Floating.

Motion:

- Short open/close.

Keyboard:

- Arrow navigation, typeahead, Escape close.

Accessibility:

- Use menu pattern only for actions, not general navigation.

Avoid:

- Too many nested menus.

Core:

- Overlay/action phase.

Future:

- Command menu is separate.

### Modal / Dialog

Responsibility: interrupt for focused task or decision.

Anatomy:

- Overlay.
- Dialog surface.
- Header.
- Title.
- Description/body.
- Footer actions.
- Close control.

Minimum variants:

- Default, destructive confirmation.

Sizes:

- Small and medium later; start content-driven max width.

States:

- Open, close, loading action, destructive action.

Visual hierarchy:

- Strongest surface layer. Clear action hierarchy.

Semantic tokens:

- Overlay, surface overlay, border, elevation, action, focus, z-index.

Cyan:

- Primary action and focus.

Coral:

- Rare brand moment; not destructive.

Border:

- Hairline border around dialog.

Elevation:

- Overlay elevation, controlled shadow.

Motion:

- Short fade/scale. Respect reduced motion.

Keyboard:

- Trap focus, Escape close when allowed, return focus.

Accessibility:

- Title required; description when useful.

Avoid:

- Dialog for low-importance content.
- Heavy glow.

Core:

- Overlay phase after form controls.

Future:

- AlertDialog variant.

### Toast

Responsibility: transient feedback after an action.

Anatomy:

- Container.
- Icon/status.
- Title/message.
- Optional action.
- Close control.

Minimum variants:

- Neutral, success, warning, danger, info.

Sizes:

- Default.

States:

- Enter, visible, exit, paused on hover/focus.

Visual hierarchy:

- Floating feedback, not a modal.

Semantic tokens:

- Surface floating, feedback, border, elevation, motion, z-index.

Cyan:

- Info or action.

Coral:

- Avoid except brand notice.

Border:

- Status edge or hairline border.

Elevation:

- Floating.

Motion:

- Short, non-disruptive.

Keyboard:

- Action and close reachable.

Accessibility:

- Announce politely or assertively depending severity.

Avoid:

- Toast for critical blocking errors.

Core:

- Feedback phase.

Future:

- Toast provider/runtime.

### Alert

Responsibility: persistent inline feedback.

Anatomy:

- Container.
- Icon.
- Title.
- Description.
- Optional action.

Minimum variants:

- Info, success, warning, danger.

Sizes:

- Default.

States:

- Static unless dismissible later.

Visual hierarchy:

- Stronger than helper text, less disruptive than modal.

Semantic tokens:

- Feedback, border, surface, text.

Cyan:

- Info.

Coral:

- Avoid except non-status brand callout.

Border:

- Status border or subtle container border.

Elevation:

- None.

Motion:

- None unless dismissible.

Keyboard:

- Only if actions/dismiss exist.

Accessibility:

- Use role only when alert timing requires announcement.

Avoid:

- Using alert for purely decorative callouts.

Core:

- Feedback phase.

Future:

- Dismissible alert.

### Empty State

Responsibility: explain absence of content and guide next step.

Anatomy:

- Icon or simple visual.
- Title.
- Description.
- Optional primary/secondary action.

Minimum variants:

- No data, no results, not configured.

Sizes:

- Content-driven.

States:

- Static.

Visual hierarchy:

- Calm, explanatory, not marketing-heavy.

Semantic tokens:

- Text, surface, border, action, accent sparingly.

Cyan:

- Primary action.

Coral:

- Optional expressive accent, very sparing.

Border:

- Optional container border.

Elevation:

- None.

Motion:

- None.

Keyboard:

- Actions must be reachable.

Accessibility:

- Avoid relying on illustration only.

Avoid:

- Large decorative hero treatment.

Core:

- Feedback/content phase.

Future:

- Product-specific illustrations.

### Skeleton

Responsibility: represent loading structure.

Anatomy:

- Placeholder blocks matching target layout.

Minimum variants:

- Text line, avatar/block, table row.

Sizes:

- Based on target content.

States:

- Loading only.

Visual hierarchy:

- Low contrast but visible.

Semantic tokens:

- Surface, state opacity, motion.

Cyan:

- Avoid.

Coral:

- Avoid.

Border:

- Usually none.

Elevation:

- None.

Motion:

- Subtle pulse only; respect reduced motion.

Keyboard:

- Not focusable.

Accessibility:

- Pair with loading semantics where relevant.

Avoid:

- High contrast shimmer.

Core:

- Feedback phase.

Future:

- Component-specific skeleton presets.

### Progress

Responsibility: show task completion or loading progress.

Anatomy:

- Track.
- Indicator.
- Optional label/value.

Minimum variants:

- Determinate, indeterminate later.

Sizes:

- Default and compact for data rows.

States:

- In progress, complete, error.

Visual hierarchy:

- Clear direction and value.

Semantic tokens:

- Surface, action, feedback, text.

Cyan:

- Default progress.

Coral:

- Avoid except brand visualization.

Border:

- Optional track border.

Elevation:

- None.

Motion:

- Indicator transition; indeterminate must respect reduced motion.

Keyboard:

- Not interactive.

Accessibility:

- Expose progress value when available.

Avoid:

- Glow-heavy bars.

Core:

- Feedback/data phase.

Future:

- Circular progress.

### Dashboard Metric Card

Responsibility: display one operational metric with trend/status context.

Anatomy:

- Container.
- Label.
- Value.
- Unit.
- Change indicator.
- Optional icon/sparkline/accent edge.

Minimum variants:

- Neutral, selected, warning/danger metric.

Sizes:

- Layout-driven.

States:

- Default, hover if interactive, selected, loading.

Visual hierarchy:

- Value is dominant; label and unit are secondary; status is clear.

Semantic tokens:

- Surface, border, text, data typography, feedback, selection.

Cyan:

- Selected/active or primary metric category.

Coral:

- Special brand or campaign metric only.

Border:

- Hairline border and optional top accent edge.

Elevation:

- Surface hierarchy before shadow.

Motion:

- Minimal chart/hover transitions.

Keyboard:

- Focusable only if actionable.

Accessibility:

- Metric meaning must be textual, not only visual.

Avoid:

- Sparkline as only status communication.

Core:

- Future data display.

Future:

- Charting and data viz integration.

### Data Visualization Container

Responsibility: frame charts and operational visualizations.

Anatomy:

- Header.
- Title.
- Description or metadata.
- Chart region.
- Legend.
- Controls.

Minimum variants:

- Default, loading, empty, error.

Sizes:

- Layout-driven.

States:

- Default, hover on interactive data, selected series, loading, empty, error.

Visual hierarchy:

- Chart is primary; controls and legends support interpretation.

Semantic tokens:

- Surface, border, chart/status colors, text, focus.

Cyan:

- Primary series, selected series, focus.

Coral:

- Expressive secondary series only when not semantically reserved.

Border:

- Container border and internal separators.

Elevation:

- Usually surface only.

Motion:

- Data transitions must be restrained and optional.

Keyboard:

- Controls keyboard accessible; chart data needs accessible summary.

Accessibility:

- Provide text summaries and avoid color-only legends.

Avoid:

- Too many saturated series.

Core:

- Future data visualization phase.

Future:

- Chart primitives and accessibility helpers.

## Shared States

| State | Visual difference | Semantic difference | Color/icon/text guidance |
| --- | --- | --- | --- |
| Default | Resting surface/control. | Available. | Use neutral surface/text. |
| Hover | Subtle background, border, or text shift. | Pointer affordance. | Do not rely on glow. |
| Active | Slightly stronger pressed or active treatment. | User is activating or state is active. | Cyan allowed when active is meaningful. |
| Focus-visible | Ring, outline, or border with enough contrast. | Keyboard focus. | Cyan allowed; never remove without replacement. |
| Selected | Background tint, border, or indicator. | Item is chosen. | Cyan plus text/shape indicator. |
| Checked | Check/dot/thumb state. | Boolean or option selected. | Cyan allowed; icon/shape required. |
| Loading | Spinner, skeleton, progress, or disabled-like action state. | Work is in progress. | Text should clarify if not obvious. |
| Disabled | Lower emphasis, no hover/active. | Not available. | Do not use color alone; preserve label readability. |
| Read-only | Normal readability, lower affordance. | Value can be read but not edited. | Avoid disabled styling if content remains important. |
| Invalid | Error border/text/icon. | Value has failed validation. | Use danger plus message. |
| Success | Success color plus label/icon. | Completed or healthy. | Do not rely on green alone. |
| Warning | Warning color plus label/icon. | Caution or degraded. | Amber plus text. |
| Danger | Danger color plus label/icon. | Destructive, critical, or failed. | Red/danger plus text. |
| Empty | Quiet explanation and optional action. | No content. | Avoid decorative empty visuals. |
| Skeleton | Placeholder structure. | Content loading. | Low-emphasis neutral; avoid neon. |

## Action Hierarchy

### Primary Action

Use for the main action in a local context.

- Usually one per local action group.
- Cyan may be filled or strongly outlined.
- Must pass contrast.
- Should have complete hover, active, focus, disabled, and loading states.

### Secondary Action

Use for supportive alternatives.

- Neutral surface or outline.
- May use border and text more than fill.
- Should not compete with primary.

### Tertiary Action

Use for low-emphasis actions.

- Text or subtle border/background.
- No strong fill.
- Good for repeated dense UI.

### Ghost Action

Use for utility actions where surrounding context provides structure.

- Resting state may be transparent.
- Hover/focus must reveal affordance.
- Avoid ghost for destructive actions unless paired with danger text/icon.

### Destructive Action

Use for irreversible or harmful actions.

- Danger semantic color.
- Requires clear label.
- Should not use coral simply because coral is expressive.
- In confirmation contexts, pair with explanation.

### Link Action

Use for navigation or resource references.

- Cyan by default.
- Underline or other affordance must be available where context is ambiguous.
- Should preserve native anchor behavior.

## Density

FeitozaUI should start with two practical density modes in language, not API:

- Default: primary target for components, docs, forms, and most product surfaces.
- Compact: reserved for dense tables, dashboards, metric rows, badges, and operational controls.

Comfortable density should remain a documentation/layout decision for pages and examples, not a component API requirement yet.

Reason:

- Three density APIs would be premature.
- Default and Compact cover current platform needs.
- Comfortable can be achieved through layout spacing until real component use proves otherwise.

## Component Tokens

Default decision: do not create component tokens yet.

| Possible case | Do semantic tokens solve it? | Repetition demonstrated? | Would component token reduce coupling? | Decision |
| --- | --- | --- | --- | --- |
| Button primary background/text | Yes, action tokens. | Not enough after semantic mapping. | Not yet. | Do not create. |
| Input focus border/ring | Yes, focus and border tokens. | Future likely. | Maybe later. | Defer. |
| Card background/border/elevation | Yes, surface/elevation tokens. | Some. | Not yet. | Defer. |
| Badge status colors | Yes, feedback tokens. | Future likely. | Maybe later. | Defer. |
| Table row hover/selected | Yes, state/selection tokens. | Not implemented. | No evidence yet. | Defer. |

Component tokens should be introduced only when semantic tokens cannot express a repeated component-specific decision without leaking implementation detail.

## Future Roadmap

| Order | Group | Dependencies | Value demonstrated | Risk | Portfolio impact | Criteria to start |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Button alignment | Semantic action/focus/radius tokens. | Public component already exists. | API/visual regression. | High. | Preserve current API and document visual migration. |
| 2 | Typography | Token roles and docs. | Needed by every component. | Font responsibility overlap. | High. | Decide long-term `Outfit` role. |
| 3 | Input | Focus, border, feedback rules. | Foundational for forms. | Accessibility and label/error association. | High. | Define field anatomy and tests. |
| 4 | Form controls | Input language, focus, feedback. | Enables real product workflows. | Keyboard/ARIA complexity. | High. | Choose native/headless strategy. |
| 5 | Badge | Feedback tokens and status language. | Observability/platform identity. | Color-only status. | Medium-high. | Define neutral/status variants. |
| 6 | Card | Surface hierarchy and elevation. | Current internal component exists. | Over-carded UI. | Medium-high. | Decide Card API scope. |
| 7 | Feedback | Badge, alert/accessibility rules. | Loading, error, empty states are platform essentials. | Announcement semantics. | Medium-high. | Define Alert/Skeleton/Progress boundaries. |
| 8 | Overlays | Focus/z-index/elevation rules. | Needed for complex workflows. | Keyboard/focus traps. | High. | Choose headless strategy. |
| 9 | Navigation | Tabs/menu/link language. | Product/platform navigation. | Pattern misuse. | Medium. | Define navigation vs action boundaries. |
| 10 | Table and data display | Typography data roles, badge, states. | Strong FeitozaUI differentiator. | Complexity and accessibility. | Very high. | Real data scenarios and sorting/empty/loading rules. |

## Review

### Professional Platform Check

The system can read as a professional platform if implementation stays restrained: cyan as signal, coral as accent, blue-gray surfaces, small radius, visible focus, and clear state language.

### Recognizable Without Logo

The visual identity can be recognized by the combination of infrastructure surfaces, cyan signal, coral accent moments, dense-but-readable data patterns, and low-glow cyberpunk restraint.

### Customization Potential

The identity remains useful for companies if semantic tokens stay dominant. Consumers can customize action, surface, and feedback roles without depending on raw color names.

### Differentiation

FeitozaUI should differentiate itself by combining component-platform rigor with an observability/developer-tool visual language. It is not just components; it is a system for engineering-grade interfaces.

### Decisions Needing Visual Validation

- How much cyan appears in a dense dashboard before it becomes noisy.
- Whether coral accent feels distinct without becoming decorative.
- Default versus compact density in tables and forms.
- Radius scale across controls and overlays.
- Card hierarchy without shadow in dark mode.
- Typography role overlap between Outfit and Space Grotesk.

### Risks To Watch

- Too many variants before usage proves need.
- Cyan overuse.
- Coral becoming a second primary.
- Component APIs created from visual examples instead of reusable behavior.
- Accessibility added after visual design instead of built into component anatomy.
- Component tokens introduced before semantic tokens fail.

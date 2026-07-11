# Layout Principles

## Purpose

This document defines the layout rules that support FeitozaUI's visual rhythm, low cognitive load, and platform identity.

The goal is not to prescribe one page template. The goal is to make dashboards, docs, forms, and product surfaces feel related.

## Principles

- Use a 4px-based spacing system.
- Prefer readable density over empty spectacle.
- Reading order must be obvious without decoration.
- Surface hierarchy and spacing define structure before color does.
- Layout decisions should reduce scanning effort.

## Grid

- Use simple responsive grids.
- Prefer predictable column spans over expressive asymmetry.
- In dashboard contexts, use grids to organize information density, not to create visual drama.

Recommended behavior:

- single-column stack on narrow screens
- two-column layouts only when both columns remain readable
- auto-fit metric grids for small summary panels

## Spacing

- spacing is structural, not decorative
- gaps should reflect relationship strength
- tighter gaps mean stronger grouping

General guidance:

- label to field: compact and predictable
- field to helper/error: compact and predictable
- section to section: visibly larger than intra-section gaps
- dashboard metrics: dense but not cramped

## Density

FeitozaUI works with two practical density modes in usage:

- default
- compact

Default is the baseline for docs, forms, and most product surfaces. Compact is for dense dashboards, lists, and technical controls.

Avoid pseudo-comfortable layouts that create large empty areas without improving comprehension.

## Reading Order

Users should understand page priority in this order:

1. page context
2. active status or risk
3. primary controls
4. primary data surface
5. secondary information

If navigation or local controls draw more attention than content, the layout hierarchy is wrong.

## Visual Rhythm

Visual rhythm is created by:

- consistent control heights
- consistent label/helper spacing
- repeated border and radius behavior
- predictable section spacing
- restrained typography hierarchy

Rhythm should be felt across forms, dashboard filters, tabs, panels, and documentation sections.

## Container Width

- documentation and showcase surfaces should avoid unconstrained line length
- operational layouts may go wider, but content blocks still need readable inner measure
- full-width should be intentional, not default

## White Space

White space is used to clarify grouping and pace scanning.

Avoid both extremes:

- over-compressed surfaces that feel noisy
- oversized empty gaps that make the interface feel like a landing page

## Dashboard Layout

Dashboard layouts should:

- establish context first
- group summary metrics together
- keep filters near the data they control
- separate primary and secondary surfaces clearly
- preserve meaning when stacked on smaller screens

## Toolbar Layout

Toolbars should:

- keep related controls clustered
- avoid mixing high-emphasis actions with passive metadata
- preserve keyboard reachability and label clarity

## Form Layout

Forms should:

- keep labels close to fields
- keep helper and error text predictable
- use width intentionally
- avoid artificial variation in control sizing

Textarea can be taller because of semantics, but it still belongs to the same spacing rhythm.

## Section Spacing

Use larger gaps between sections than within sections.

A section should feel like a grouped problem space:

- summary
- filters
- operations table
- secondary status
- form surface

## Stack

Use stack layouts for:

- forms
- vertical groups
- content blocks
- repeated narrative sections

Stacks are the default layout primitive when no horizontal relationship is primary.

## Inline

Use inline layouts for:

- short actions
- metadata pairs
- badges and compact status rows
- icon + label groupings

Inline layouts should wrap gracefully when space is constrained.

## Cluster

Use clusters when several small items are related but should not imply a strict reading sequence.

Examples:

- status badges
- filter actions
- compact action groups

## Sidebar

Sidebars should carry navigation or secondary tools, not compete with the main content surface.

If a sidebar becomes visually dominant, the layout is imbalanced.

## Content Area

The content area should own the primary task.

Controls, tabs, and side surfaces support the task. They should not visually overtake it.

## Why These Decisions Exist

These rules support the approved identity:

- Quiet Future
- Neon Infrastructure
- Infrastructure over Decoration
- Developer Experience
- Low Cognitive Load

The system should feel deliberate and technical. Layout is one of the primary ways that identity becomes visible.

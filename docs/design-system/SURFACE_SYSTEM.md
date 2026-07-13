# Surface System

## Purpose

This document defines the official surface hierarchy for FeitozaUI before Card 2.0 and other surface primitives are implemented.

It exists to keep depth, contrast, border treatment, and visual weight coherent across the system. Surface hierarchy must communicate structure first. Glow, large shadows, and decorative effects are not used to simulate depth.

## Core Principles

- Surface hierarchy comes before shadow.
- Contrast is controlled through background, border, and text, not spectacle.
- Interactive controls should feel embedded in the platform, not floating above it.
- Visual weight must match responsibility.
- Cyan indicates interaction, focus, or active technical state. It does not define depth.

## Surface Levels

### Level 0 — Application Background

Purpose:

- app shell
- documentation canvas
- page background

Characteristics:

- darkest and quietest foundation
- minimal texture
- no decorative glow
- very low visual weight

Use:

- application background
- story canvas background
- dashboard outer shell

Avoid:

- using Level 0 for interactive controls
- using shadows to lift content out of Level 0 by default

### Level 1 — Page Sections, Panels, Cards

Purpose:

- grouped content
- dashboard panels
- future Card 2.0
- section containers

Characteristics:

- separated from Level 0 primarily through surface lightness
- hairline border required in most cases
- technical radius, not soft marketing radius
- shadow optional and restrained

Use:

- page sections
- panels
- cards
- grouped metric surfaces

Avoid:

- heavy dark-mode shadow
- multiple nested panels without hierarchy

### Level 2 — Inputs, Toolbars, Tabs, Lists

Purpose:

- structured interactive zones inside Level 1
- form controls
- tabs list
- dense operational lists

Characteristics:

- more active than Level 1, but still restrained
- border and subtle background shifts define state
- focus must be explicit
- hover is present but quiet

Use:

- Input, Textarea, Select
- Tabs list and triggers
- toolbars
- list rows with interaction affordance

Avoid:

- making Level 2 surfaces visually heavier than Level 1 containers
- using persistent cyan fills for resting states

### Level 3 — Buttons, Badges, Interactive Controls

Purpose:

- direct actions
- small status/control elements
- selected inline controls

Characteristics:

- highest routine interaction weight inside the default interface
- state hierarchy must be clear
- badges stay compact and low-noise
- buttons may use stronger action contrast when justified

Use:

- buttons
- badges
- inline interactive controls

Avoid:

- multiple dominant elements in one local group
- badges competing with primary actions

### Level 4 — Dialogs, Dropdowns, Popovers, Tooltips, Toasts

Purpose:

- floating and overlay surfaces

Characteristics:

- strongest separation from page flow
- border-first, surface-second, shadow-third
- focus management required
- z-index expresses layering, not styling

Use:

- dialogs
- dropdowns
- popovers
- tooltips
- toasts

Avoid:

- using glow as depth
- using large soft shadow as the primary elevation signal

## Elevation Model

FeitozaUI does not use glow to represent depth.

Depth is expressed in this order:

1. surface lightness
2. border clarity
3. spacing and containment
4. restrained shadow only when needed

In dark mode, shadow should be rarer than in light mode. Most depth should come from surface hierarchy and containment.

## Border Model

- hairline borders are the default structural separator
- stronger borders are state-driven, not constant
- invalid, focus, and selected states may strengthen border treatment
- borders should not become decorative frames

## Contrast Model

- Level 0 to Level 1 contrast establishes layout structure
- Level 1 to Level 2 contrast establishes interaction zones
- Level 2 to Level 3 contrast establishes action hierarchy
- text contrast must remain readable at every level

Do not increase contrast indiscriminately. Contrast is a hierarchy tool.

## Visual Weight

- Level 0: lowest
- Level 1: low
- Level 2: low to medium
- Level 3: medium
- Level 4: medium to high, depending on interruption level

If a lower-level surface visually outweighs a higher-level one, the hierarchy is wrong.

## Applied Guidance

- `Surface` is the first public Level 1 containment primitive.
- `Surface` defines containment only. It does not define layout, spacing, interaction, or card composition.
- `Card` is a structured content composition built on top of `Surface`.
- `Card` adds predictable inner padding for related content, but it does not define heading structure, actions, variants, or interaction.
- `Surface` resolves containment. `Card` resolves content composition.
- `Box` remains a neutral utility primitive and should not replace `Surface` when the UI is expressing public surface hierarchy.
- Inputs, Textarea, Select, and Tabs belong to Level 2.
- Buttons and badges belong to Level 3.
- Alerts and Empty States usually live inside Level 1 containers while carrying local emphasis.
- Card 2.0 must be designed as a Level 1 primitive first, not as a generic boxed component.

## Card Mission

Use `Card` when:

- content has a meaningful internal relationship;
- a grouped title, description, status, fields, or actions belong to the same reading unit;
- consistent inner padding improves scanning and comprehension.

Avoid `Card` for:

- page wrappers;
- generic layout sections;
- grids and stacks;
- dashboard shell containers;
- overlays or dialogs;
- navigation;
- future metric tiles that belong to a dedicated Metric Card.

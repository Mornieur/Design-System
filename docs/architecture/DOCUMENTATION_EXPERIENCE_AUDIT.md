# FeitozaUI Documentation Experience Audit

Date: 2026-07-14
Scope: `src/app` documentation shell, Storybook documentation surface, repository-owned content model, documentation UX strategy, internationalization direction, and implementation sequencing.
Status: Analysis only. No implementation included in this document.

## Executive Summary

FeitozaUI already has a strong visual instinct in the current documentation shell: the palette, typography stack, border language, and restrained technical atmosphere are much closer to a differentiated identity than a generic template.

However, the current experience still reads more like a styled prototype of a docs product than a mature documentation product.

The main issue is not lack of polish. It is misallocated emphasis.

The interface currently spends too much visual and editorial energy describing itself as a system:

- "control plane"
- "runtime"
- "telemetry"
- "preview cluster"
- "docs shell synchronized"
- "tracked routes"
- "server component page"

Those signals are interesting once or twice, but they do not help the reader complete the core jobs of a design-system documentation site:

- understand what FeitozaUI is
- install it safely
- scan the component catalog
- compare components quickly
- inspect previews and code
- understand API and accessibility constraints
- navigate foundations confidently
- move between overview, usage, examples, and implementation details without friction

Today the shell identity is often stronger than the information architecture.

The recommendation is not to remove the cyberpunk direction. The recommendation is to discipline it.

FeitozaUI should move from "styled infra concept" to "editorial product for engineers."

The target feeling should remain:

- Quiet Future
- Neon Infrastructure
- Precision
- Systems
- Blueprint

But the operational translation should become:

- fewer status metaphors
- fewer decorative metrics
- fewer shell self-descriptions
- more direct task flows
- clearer docs hierarchy
- richer component information density
- more obvious progress paths for first-time users

The core strategic direction:

- Keep Storybook as the behavioral source of truth for the library.
- Make the Next.js docs app the editorial and navigational surface.
- Reduce dashboard signals by at least half.
- Increase documentation utility before adding more visual theatrics.
- Introduce internationalization with App Router-native patterns now, before content volume grows.

## Audit Method

This audit is based on:

- repository code and configuration
- current `src/app` routes and documentation shell
- Storybook theme and MDX docs
- internal design-system documentation
- the visual intent described in `docs/references/design-system/figma-make-reference.md`
- official documentation surfaces from Ant Design, MUI, Radix UI, shadcn/ui, Tailwind CSS, React, Next.js, Vercel, Chakra UI, Mantine, TanStack
- official i18n documentation for Next.js, `next-intl`, `next-international`, and `next-i18next`

## Phase 1: Current-State Audit

### Global Diagnosis

What works:

- The project has a distinct visual language instead of default SaaS docs styling.
- Dark mode has intentional color logic.
- Light mode has its own blueprint personality instead of a naive inversion.
- Typography choices are strong and role-based.
- Borders, corners, grids, and panels do create an engineering atmosphere.
- The current component page structure is directionally correct: overview, usage, preview, code, API, accessibility, best practices, do/don't, related.
- Reduced motion is already considered globally.
- The shell respects the repository rule that Storybook remains primary for behavior.

What does not work:

- The site over-describes its own shell mechanics.
- Much of the copy sounds like architecture commentary instead of product documentation.
- There is too much status language for a docs product.
- The visual system is often denser than the information being presented.
- Several routes are too thin to justify their visual weight.
- The current catalog is too shallow for the scale implied by the interface.
- The docs app communicates "system concept" more than "library you can adopt."

What is polluting:

- telemetry cards
- tracked routes counters
- preview-ready labels
- synchronized status pill
- route IDs and system IDs in excess
- repeated panel chrome on nearly every surface
- meta labels that repeat obvious facts

What feels improvised:

- Some pages are editorially rich while others are placeholders with only one short section.
- Foundations detail pages are materially too light for their navigational importance.
- Getting Started and Installation overlap too much.
- Showcase exists as architecture intent, but not yet as a compelling user destination.

What feels placeholder:

- `Showcase`
- `Architecture`
- `Accessibility`
- foundation detail pages
- component catalog breadth

What feels like a dashboard:

- Home hero telemetry rail
- header status
- sidebar route stats
- repeated "runtime" framing
- console and cluster metaphors

What does not yet communicate "Design System documentation":

- lack of installation clarity at first glance
- lack of visible decision paths for beginner versus advanced user
- limited API surface breadth in catalogs
- too little comparative guidance between components
- no strong docs search or command affordance
- no clear "copy-and-use" workflow cues at page level

What can be removed:

- most route counts
- most system IDs
- most live status metaphors
- at least one of the hero side panels
- repeated mentions that the page is static, typed, or server-rendered unless operationally relevant

What can be simplified:

- header
- sidebar intro
- hero content model
- page metadata rows
- foundations catalog metadata
- component card metadata

### Home

Current sources:

- `src/app/page.tsx`
- `src/app/_components/HomeHeroPanel.tsx`
- `src/app/_components/HomeEditorialPreviews.tsx`

What works:

- Large heading gives the home page presence.
- Visual language is memorable.
- CTA grouping is directionally correct.
- Home does try to differentiate foundations, components, and experience.

What does not work:

- The home page still centers the shell itself instead of the user journey.
- The hero says "the documentation layer now looks like the system it describes," which is internally satisfying but not user-centered.
- The right rail reads like telemetry theater rather than a documentation utility block.
- The "experience review" section talks about improvements to the shell instead of product value for the visitor.

What is polluting:

- "System telemetry"
- "Documentation runtime"
- "Preview cluster"
- "component://button.surface.card"
- counters like "03", "05", "Static"

What seems dashboard-like:

- metric tiles
- system telemetry framing
- console labeling

Recommendation:

- Redesign home around three core jobs:
- Start using FeitozaUI
- Explore the system
- Understand quality and principles

The hero should communicate:

- what the library is
- why it is credible
- where to start
- one strong visual preview of docs quality

The right side should become one editorial preview panel, not two telemetry panels.

### Sidebar

Current source:

- `src/app/_components/DocsSidebar.tsx`

What works:

- Sticky navigation is correct for long docs.
- Grouping is present.
- Active state exists.

What does not work:

- The sidebar intro is too self-referential.
- Route counts and "experience mode" add noise but little value.
- The navigation taxonomy is too small to need this much framing.
- Route IDs like `root.docs.getting-started` feel decorative rather than useful.

What is polluting:

- tracked routes
- primary behavior docs
- preview ready
- runtime boundary note

What feels placeholder:

- the navigation depth does not match the visual seriousness of the shell

Recommendation:

- Remove stats.
- Remove route IDs from standard navigation rows.
- Keep only section title and link label.
- Add a lightweight "On this page" secondary nav only on long pages.
- Add visual differentiation between overview pages and detail pages.

### Topbar

Current source:

- `src/app/_components/SiteHeader.tsx`

What works:

- Brand block has identity.
- Main sections are correctly exposed.
- Theme switch exists.

What does not work:

- The status pill is unnecessary and pushes the page toward dashboard semantics.
- "Docs node / quiet future runtime" is too insider-coded for a primary navigation surface.
- The navigation lacks a fast utility affordance such as search, quick jump, or GitHub/Storybook access.

Recommendation:

- Keep brand, primary nav, theme switch, mobile menu.
- Replace the status pill with one utility action:
- Search
- Storybook
- GitHub

### Hero

Current source:

- `src/app/_components/HomeHeroPanel.tsx`

What works:

- Strong type scale
- strong visual mass
- strong dark-mode presence

What does not work:

- It explains the docs shell instead of FeitozaUI.
- Three CTAs are fine, but the copy hierarchy is not.
- The supporting panels are more system-fiction than documentation utility.

Recommendation:

- Hero should be redesigned completely.
- Keep atmosphere.
- Remove telemetry.
- Introduce one visual preview of a real component docs page or component preview/code module.

### Component Pages

Current sources:

- `src/app/_components/component-docs/ComponentDocumentation.tsx`
- `src/app/_components/component-docs/ComponentExampleSection.tsx`
- `src/app/_components/component-docs/PropsTable.tsx`

What works:

- This is the strongest information architecture in the current docs app.
- The section ordering is close to real component documentation.
- Preview and code tabs are the right move.
- Related links are helpful.
- API table exists.

What does not work:

- There are only three documented components in the app content registry, so the system feels broader than the real data supports.
- Metadata like "Server component page" and "Preview islands only" is implementation commentary, not reader value.
- The section navigator risks becoming long and samey before the content density is high enough.
- The preview stage styling is attractive but can overpower the example itself.

What is polluting:

- route slugs and shell IDs in example headers
- repeated technical meta labels

Recommendation:

- Keep the page architecture.
- Reduce shell narration.
- Increase component-specific substance:
- anatomy
- variants matrix
- state table
- accessibility checklist
- compositional examples
- Storybook parity link

This area should become the model for the rest of the docs.

### Foundations

Current sources:

- `src/app/foundations/page.tsx`
- `src/app/foundations/[slug]/page.tsx`
- `src/app/_content/foundations.ts`

What works:

- Foundation topics are correct.
- Catalog exists.

What does not work:

- Detail pages are too light.
- Foundation content reads like summary cards, not deep documentation.
- The section needs diagrams, rationale, token relationships, usage guidance, and anti-patterns.

What feels placeholder:

- almost the entire detail page experience

Recommendation:

- Turn foundations into one of the most editorially rich areas.
- Each foundation page should include:
- intent
- principles
- token map
- dos and don'ts
- examples in context
- accessibility implications
- implementation references

### Getting Started

Current source:

- `src/app/docs/getting-started/page.tsx`

What works:

- It is honest about package maturity.
- It documents validation boundaries.

What does not work:

- It is not optimized for a first-time adopter.
- It mixes end-user guidance with internal verification detail too early.
- It is more repository-status-oriented than success-oriented.

Recommendation:

- Split by user intent:
- install now
- understand prerequisites
- first import
- framework notes
- package maturity note

Internal tarball verification should move lower on the page or into an implementation note.

### Installation

Current source:

- `src/app/docs/installation/page.tsx`

What works:

- Peer dependency expectations are explicit.
- Framework-specific notes are useful.

What does not work:

- It overlaps too much with Getting Started.
- It is still shaped around unpublished-package disclaimers rather than frictionless setup guidance.

Recommendation:

- Getting Started should be narrative and fast.
- Installation should be operational and framework-specific.

### Architecture

Current source:

- `src/app/architecture/page.tsx`

What works:

- Boundaries are aligned with repo strategy.

What does not work:

- The page is too short.
- It reads like an ADR summary, not a useful architecture page for consumers or contributors.

Recommendation:

- Split into:
- platform surfaces
- source of truth
- package boundaries
- docs vs Storybook responsibilities
- why static-first
- future scope and non-goals

### Accessibility

Current source:

- `src/app/accessibility/page.tsx`

What works:

- Direction is correct.

What does not work:

- The page is too light for such an important topic.
- It says the right things, but does not teach or prove anything.

Recommendation:

- Add sections for:
- keyboard
- focus
- contrast
- motion
- semantic HTML
- ARIA policy
- screen reader expectations
- testing approach

### Showcase

Current source:

- `src/app/showcase/page.tsx`

What works:

- It preserves the architectural boundary that showcase is future work.

What does not work:

- In navigation, it promises more than it delivers.

Recommendation:

- Either hide it until there is real content, or relabel it as "Patterns" or "Examples" and give it immediate utility.

### Examples

Current sources:

- component example sections
- `/examples/[slug]`

What works:

- The preview/code duality is correct.

What does not work:

- Examples are still too few to create a convincing examples culture.

Recommendation:

- Build examples as a separate editorial layer:
- quick snippets
- realistic compositions
- accessibility-sensitive patterns

### Code Blocks

Current source:

- `src/app/_components/CodeBlock.tsx`

What works:

- Copy action exists.
- Label and note model is fine.

What does not work:

- Code blocks lack syntax richness and stronger editorial context.
- The chrome is good, but code hierarchy can be better.

Recommendation:

- Keep the framing.
- Add richer language handling, line emphasis, optional filename, and better visual rhythm around examples.

### Navigation

Global diagnosis:

- The current nav works technically but not yet experientially.
- There is no strong guided path for a new user.
- There is no search.
- There is no explicit relationship between Storybook and the docs app at navigation level.

Recommendation:

- Introduce a primary flow:
- Overview
- Get Started
- Foundations
- Components
- Patterns
- Accessibility
- Architecture

### Dark Theme

What works:

- Dark mode is the strongest expression of the identity.

What does not work:

- In some places, the shell chrome competes with content.

Recommendation:

- Keep dark as the default.
- Reduce decorative intensity in secondary surfaces.

### Light Theme

What works:

- It has intentional color logic.

What does not work:

- The shell still uses heavy chrome even when the content is light.

Recommendation:

- Make light mode slightly calmer and more editorial than dark.
- Let the blueprint cues breathe more.

### Responsiveness

What works:

- Core layout collapses correctly.
- Mobile menu exists.

What does not work:

- The shell padding and chrome remain quite dense on smaller screens.
- Long section-nav clusters may become noisy on mobile.

Recommendation:

- simplify mobile section nav
- reduce duplicated chrome
- prioritize content over shell framing

### Visual Hierarchy

Current state:

- Strong macro hierarchy
- inconsistent micro hierarchy

Diagnosis:

- H1/H2 scale is good.
- Supporting metadata is overused.
- Surface differentiation is too frequent.

Recommendation:

- Fewer panel types.
- Stronger distinction between page framing and content framing.

### Spacing

Current state:

- Good macro spacing
- too many mid-level framed clusters

Recommendation:

- more negative space between narrative sections
- fewer nested bordered regions

### Typography

Current state:

- Strong font selection.
- Good role separation.

Main issue:

- Monospace is sometimes used for flavor rather than function.

Recommendation:

- Reserve mono more strictly for code, labels, tokens, commands, IDs that matter.

### Grid

Current state:

- Background grid is effective.

Risk:

- It can become ambient noise if combined with too many panel borders and labels.

Recommendation:

- Keep the grid.
- Reduce other competing shell motifs.

### Animations and Microinteractions

Current state:

- restrained overall
- reduced motion handled

Risk:

- further additions could easily tip the system into "gamer UI"

Recommendation:

- only add motion where it improves comprehension or tactility

## Phase 2: Benchmarking

### Cross-Library Patterns That Recur

Across Ant Design, MUI, Radix, shadcn/ui, Tailwind, React, Next.js, Vercel, Chakra, Mantine, and TanStack, the following patterns appear repeatedly:

- search is central
- home clearly communicates what the product is and where to start
- getting started is fast and decision-oriented
- component pages prioritize preview, usage, code, and API
- examples are separated from API reference
- navigation is deep but low-noise
- dark/light toggles are utility features, not thematic centerpieces
- playgrounds are purposeful and close to the component
- code samples are copyable and contextual
- API references are structured tables, not prose-only
- internationalization is handled explicitly when the product is global

### Ant Design

Observed patterns:

- home is broad, branded, and ecosystem-oriented
- strong design-language framing
- visible theme emphasis
- multilingual support is prominent
- large ecosystem links are surfaced early

What to borrow:

- ecosystem confidence
- clear entry into getting started
- visible internationalization support

What not to borrow:

- broad product sprawl
- enterprise marketing heaviness

### MUI

Observed patterns:

- clear product segmentation
- docs credibility is part of the value proposition
- high information density without collapsing clarity
- mature system navigation

What to borrow:

- segmentation between products and docs layers
- strong docs credibility messaging
- scalable navigation discipline

What not to borrow:

- product-family complexity beyond current FeitozaUI scope

### Radix UI

Observed patterns:

- minimal, precise, engineering-first tone
- strong focus on accessibility and composability
- excellent balance between code and concept
- playground is explicit

What to borrow:

- precision
- restraint
- component-page seriousness
- playground adjacency

What not to borrow:

- overly sparse emotional range

### shadcn/ui

Observed patterns:

- docs home is highly navigable
- installation and theming are top-level
- component inventory is immediately visible
- dark mode is part of utility, not the whole story
- component docs feel copy-and-ship ready

What to borrow:

- installation clarity
- strong component index
- code-first examples
- low-friction navigation

What not to borrow:

- open-code framing as primary identity, because FeitozaUI is a package-oriented system

### Tailwind CSS

Observed patterns:

- docs are optimized for lookup speed
- search, navigation, and conceptual chunking are excellent
- dark mode and customization are utility topics

What to borrow:

- scan speed
- wayfinding
- concise conceptual breakdown

What not to borrow:

- utility-class pedagogy structure

### React.dev

Observed patterns:

- split between learning and reference
- clear onboarding path
- very calm interface

What to borrow:

- separation between learning and reference
- editorial calm

What not to borrow:

- tutorial-centric pedagogy as the main model

### Next.js

Observed patterns:

- docs explicitly explain how to use the docs
- split into getting started, guides, and API reference
- clear route and sidebar discipline

What to borrow:

- docs taxonomy
- guided progression
- sidebar clarity

What not to borrow:

- framework-scale breadth before FeitozaUI has the content to support it

### Vercel

Observed patterns:

- premium editorial polish
- strong use of negative space
- quiet confidence
- navigation and search remain highly functional

What to borrow:

- restraint
- polished spatial rhythm
- premium feel without noise

What not to borrow:

- marketing-product crossover patterns that do not help component documentation

### Chakra UI

Observed patterns:

- docs center usability
- component pages emphasize composability and examples

What to borrow:

- practical examples
- approachable page flow

### Mantine

Observed patterns:

- strong install paths by framework
- broad docs with clear structure
- pragmatic framework support communication

What to borrow:

- framework-specific onboarding
- strong utility orientation

### TanStack

Observed patterns:

- ecosystem-first architecture
- strong technical branding
- emphasis on docs and APIs across multiple products

What to borrow:

- engineering confidence
- technical credibility

What not to borrow:

- multi-product architecture complexity

### Decisions That Appear To Be Consensus

- search matters
- getting started must be short
- code must be copyable
- API needs tabular structure
- examples should be separated from raw API
- dark/light is a utility, not the core thesis
- navigation should be quiet
- component pages need repeatable structure
- docs should help both scanning and depth

### Decisions Worth Incorporating

- split "learn" from "reference"
- strengthen search and quick-jump
- add stronger component taxonomy
- add clearer framework-specific setup paths
- add richer API tables and example framing
- use a calmer, more content-first hero

### Decisions That Do Not Fit FeitozaUI

- dashboard-like landing pages
- product suite expansion patterns
- overly playful showcase-first home pages
- ecosystem complexity beyond current maturity

## Phase 3: Proposed Visual Architecture

### Core Principle

The documentation should feel like a precision instrument, not a control center.

### Home

Objective:

- explain FeitozaUI fast
- establish quality
- offer next steps

Layout:

- hero
- three-path action grid
- featured component docs preview
- foundations preview
- quality pillars

Hierarchy:

- proposition
- action
- evidence
- system values

Components:

- hero
- CTA group
- featured docs panel
- preview cards

Responsibility:

- orientation and trust

### Sidebar

Objective:

- provide stable wayfinding

Layout:

- product sections only
- optional secondary page-local nav below

Hierarchy:

- section
- page

Components:

- nav groups
- active state
- optional page anchors

Responsibility:

- navigation, not storytelling

### Topbar

Objective:

- global access and utility

Layout:

- brand
- main sections
- utility actions
- theme

Components:

- brand block
- nav
- search trigger
- Storybook/GitHub shortcut
- theme toggle

Responsibility:

- orientation and quick actions

### Footer

Objective:

- low-noise closing navigation

Layout:

- brief product statement
- utility links

Responsibility:

- secondary navigation only

### Hero

Objective:

- communicate value immediately

Layout:

- left: proposition, description, actions
- right: one curated preview frame

Responsibility:

- first impression and conversion into reading

### Component Page

Objective:

- serve as the canonical editorial guide to one component

Layout:

- header
- quick facts
- preview and code
- examples
- API
- accessibility
- guidance
- related

Responsibility:

- understanding, adoption, safe usage

### Foundation Page

Objective:

- explain one design-system pillar deeply

Layout:

- concept
- principles
- token map
- examples
- accessibility notes
- references

Responsibility:

- teach the system logic

### Getting Started

Objective:

- get a new user from zero to first successful render

Layout:

- what it is
- install path
- first import
- first example
- framework notes

Responsibility:

- fastest successful start

### Installation

Objective:

- provide framework-specific operational setup

Layout:

- package info
- peer deps
- React + Vite
- Next App Router
- troubleshooting

Responsibility:

- reduce setup friction

### Architecture

Objective:

- explain boundaries and source of truth

Layout:

- surfaces
- content model
- rendering model
- non-goals
- future evolution

Responsibility:

- prevent architectural confusion

### Accessibility

Objective:

- state the accessibility contract of the system

Layout:

- principles
- keyboard
- focus
- contrast
- motion
- ARIA
- testing

Responsibility:

- trust and implementation guardrails

### Playground

Objective:

- let users inspect component states without leaving the docs flow

Layout:

- compact controls
- live preview
- code

Responsibility:

- experimentation

### Examples

Objective:

- show realistic usage patterns

Layout:

- filterable gallery by intent
- each example with preview, explanation, code

Responsibility:

- move from primitives to applied patterns

### Showcase

Objective:

- present higher-level compositions only after examples are mature

Responsibility:

- aspiration, not primary onboarding

## Textual Wireframes

### Home

```txt
---------------------------------------------------------
Topbar: Brand | Get Started | Foundations | Components | Accessibility | Search | Theme
---------------------------------------------------------
Hero
[FeitozaUI]
Engineering-grade React UI library for precise, accessible interfaces.
[Get Started] [Browse Components] [View Foundations]
                                  [Preview frame: real component docs module]
---------------------------------------------------------
Three Paths
[Install] [Learn the system] [Inspect components]
---------------------------------------------------------
Featured Components
[Button] [Card] [Surface]
---------------------------------------------------------
Foundations
[Color] [Typography] [Spacing] [Surface]
---------------------------------------------------------
Quality Pillars
Accessibility | Typed APIs | Testing | Documentation
---------------------------------------------------------
Footer
```

### Component Page

```txt
---------------------------------------------------------
Sidebar | Page
---------------------------------------------------------
Breadcrumb
Button
Short description
[Install note] [Storybook] [Source]
---------------------------------------------------------
Preview / Code
---------------------------------------------------------
When to use | When not to use
---------------------------------------------------------
Variants / States / Sizes
---------------------------------------------------------
API Table
---------------------------------------------------------
Accessibility
---------------------------------------------------------
Best Practices
---------------------------------------------------------
Related Components
---------------------------------------------------------
```

## Phase 4: Specific Improvements

- Redesign the hero completely around proposition, evidence, and action.
- Remove telemetry and runtime metaphors from the home rail.
- Simplify sidebar to actual documentation navigation.
- Replace header status with search or utility access.
- Make component pages the primary visual reference model for all other docs pages.
- Deepen foundations pages substantially.
- Merge repeated setup messaging so Getting Started and Installation stop competing.
- Add stronger preview/code/API rhythm with calmer surrounding chrome.
- Reframe examples as practical, not decorative.
- Hide or repurpose Showcase until it has meaningful content.
- Reduce monospace usage where it is ornamental rather than functional.
- Lower the density of borders, pills, IDs, and metadata on overview pages.

## Phase 5: Internationalization

### Requirement Fit

The chosen solution must support:

- `pt-BR`
- `en`
- App Router
- Server Components
- Client Components
- SEO
- locale routing
- lazy loading
- TypeScript
- accessibility
- scalability

### Candidate: `next-intl`

Advantages:

- App Router-first documentation and mental model
- explicit support for Server and Client Components
- locale routing support
- request-scoped configuration
- strong TypeScript story
- good ecosystem guidance for metadata, routing, and Storybook
- supports lazy loading of message files via dynamic import
- mature docs quality

Disadvantages:

- slightly more framework-specific setup than ultra-minimal libraries
- another conceptual layer via plugin and request config

### Candidate: `next-international`

Advantages:

- lightweight
- elegant setup
- lazy locale loading pattern is straightforward
- clear server/client split helpers

Disadvantages:

- smaller ecosystem surface
- less documentation depth than `next-intl`
- less battle-tested mindshare for a long-lived docs platform

### Candidate: `next-i18next`

Advantages:

- powerful
- strong i18next ecosystem
- supports App Router, middleware, and mixed-router cases
- good for advanced backends and translation management workflows

Disadvantages:

- heavier mental model
- extra complexity FeitozaUI does not currently need
- better suited when i18next-specific ecosystem power is required

### Decision

Choose `next-intl`.

Why:

- best fit for the current App Router architecture
- strongest balance between maturity and clarity
- excellent support for Server and Client Components
- good locale-routing story
- good TypeScript ergonomics
- scales cleanly as content grows
- documentation quality is high enough to reduce integration risk

### Recommended Routing Model

- `app/[locale]/...`
- locales: `en`, `pt-BR`
- locale switcher in header utility area
- localized metadata and canonical/alternate links

### Content Strategy

- shared content model structure
- per-locale dictionaries for UI chrome
- route content either localized directly in typed content modules or moved gradually into message-backed content objects

## Phase 6: Microinteractions

### Worth keeping or adding

- subtle hover elevation on actionable cards
- precise focus ring transitions
- theme transition without theatrical crossfades
- copy-to-clipboard feedback
- tab-switch transitions under 160ms
- very light section reveal on first load
- subtle active-nav movement
- restrained background sweep in dark mode, optional

### Optional, use sparingly

- lightweight grid shimmer in hero only
- very subtle line animation on one hero accent
- minimal scramble text on one brand moment, not as a repeated pattern

### Not worth it

- blinking cursor as repeated motif
- persistent online/status signals
- particles
- large parallax
- heavy glow
- animated stats
- moving background lines across many sections
- frequent scanning effects

### Why

FeitozaUI needs trust, clarity, and repeatable readability. Repeated decorative motion would push the experience toward gamer UI and reduce editorial seriousness.

## Phase 7: Accessibility

Every design decision should pass these constraints:

- WCAG AA contrast minimum
- visible focus for every interactive control
- keyboard-complete navigation
- `prefers-reduced-motion`
- 200% zoom without layout loss
- screen-reader-meaningful labels
- no meaning conveyed by color alone
- no shell animation required to understand content

Specific implications:

- section nav chips must remain keyboard friendly
- code copy buttons need accessible feedback
- theme switch and future locale switcher need clear labels
- component preview tabs need strong selected state beyond color
- any future playground controls must be fully keyboard reachable

## Recommended Implementation Plan

### Order

1. Information architecture cleanup
2. Header and sidebar simplification
3. Home redesign
4. Foundations page deepening
5. Component page refinement
6. Examples and patterns layer
7. Internationalization foundation
8. Search and quick-jump
9. Showcase only after examples mature

### Why this order

- IA fixes create clarity before visual iteration.
- Home and nav establish trust for the whole product.
- Foundations and component pages are the core of a docs product.
- i18n should land before the content model becomes too large.
- Search should arrive after taxonomy is stable.

## Technical Guidance For Implementation

- Preserve Storybook as the behavior source of truth.
- Keep the docs app as editorial shell, navigation, and curated examples.
- Avoid duplicating content manually between Storybook and Next app.
- Prefer typed local content over premature MDX/CMS expansion.
- Introduce i18n at the route and content layer, not as a string-replace afterthought.
- Do not add complex runtime effects for visual identity.
- Keep the default experience dark, but ensure light mode is intentionally designed.

## Final Recommendation

FeitozaUI should not become a dashboard.

It already has enough visual identity to become memorable.

What it needs now is discipline:

- less shell self-narration
- more user-task clarity
- richer content depth
- calmer navigation
- stronger onboarding
- better foundations coverage
- a component-docs experience that feels immediately useful

The best version of this documentation is not louder.

It is quieter, sharper, and more useful.

## External References

- Ant Design: https://ant.design/
- MUI: https://mui.com/
- Radix UI: https://www.radix-ui.com/
- Radix Primitives docs: https://www.radix-ui.com/primitives/docs/overview/introduction
- shadcn/ui docs: https://ui.shadcn.com/docs
- Tailwind CSS docs: https://tailwindcss.com/docs/installation/using-vite
- React docs: https://react.dev/
- Next.js docs: https://nextjs.org/docs
- Next.js i18n guide: https://nextjs.org/docs/app/guides/internationalization
- Vercel docs: https://vercel.com/docs
- Chakra UI docs: https://chakra-ui.com/docs/components/concepts/overview
- Mantine: https://mantine.dev/
- TanStack: https://tanstack.com/
- next-intl docs: https://next-intl.dev/docs/getting-started/app-router
- next-intl server/client docs: https://next-intl.dev/docs/environments/server-client-components
- next-international docs: https://next-international.vercel.app/docs/app-setup
- next-i18next repository: https://github.com/i18next/next-i18next

# Reference Map

## Approved Figma

- Source: `https://www.figma.com/make/UMwZHkUGnd0qOPluFyECTx/FeitozaUI-Visual-Identity-Design`
- Access: confirmed via Figma MCP on `2026-07-14`.
- Limitation: because this is a Figma Make file, `get_metadata` and `get_screenshot` are not supported. The audit relied on `get_design_context` and direct resource reads.

## Figma Findings

Use the approved Figma for:

- overall atmosphere
- sidebar proportion
- sticky top bar behavior
- dark and light palette direction
- typography role separation
- whitespace rhythm
- preview framing
- cyan/coral restraint

Do not copy from the Figma Make literally:

- fake infrastructure datasets
- placeholder service tables
- prototype-only state examples
- generated UI code structure
- any JSX that exists only to make the mock feel busy

## Current vs Approved vs Best Docs

| Area | FeitozaUI current | Figma approved | Best docs consensus | Problem | Direction recommended | Priority |
| --- | --- | --- | --- | --- | --- | --- |
| Home | Strong brand mood, but still framed like a system dashboard | Editorial shell with controlled chrome and stronger composition | Home explains product quickly, then routes into docs | Too much telemetry language and secondary chrome | Keep atmosphere, remove operational framing, elevate real docs paths | High |
| Sidebar | Heavy, includes tracked routes, route IDs, runtime notes | Narrower, calmer, content-led | Sidebar exists to navigate, not to narrate system status | Navigation competes with content | Reduce to real groups and active states only | High |
| Topbar | Includes shell synchronization/status flavor | Sticky but light | Topbars stay quiet and utility-led | Decorative status competes with page meaning | Keep sticky utility bar, remove fake system presence | High |
| Mobile menu | Works structurally, but the page still feels over-framed | Not explicitly defined in Make | Mobile docs use simple drawer navigation | Content density collapses poorly on small screens | Simplify navigation chrome and stack fewer surfaces | High |
| Getting Started | Real information, but wrapped in dashboard-ish scaffolding | Figma suggests cleaner content composition | Mature docs are task-first | Navigation chrome is louder than task flow | Reframe as task-oriented guide with calmer sidebar | High |
| Installation | Useful content, still visually over-boxed | Figma supports quiet technical framing | Installation pages privilege commands and caveats | Too much frame around supporting content | Keep code near explanatory copy, reduce chrome | Medium |
| Foundations index | Real entries, but presentation feels incomplete | Figma foundations are more atmospheric and deliberate | Foundations explain principle, token, usage, accessibility | Current cards feel like registry listings | Make each foundation teach, not just list | High |
| Component index | Clear enough, but still boxed and operational in tone | Figma emphasizes hierarchy and spacing | Mature docs use clear cards with concise metadata | Surface density is high | Reduce card chrome, keep concise scanning metadata | Medium |
| Component page | Strongest current route; preview/code relationship exists | Figma favors prominent preview and technical polish | Preview near code, API table, related links, predictable order | Sidebar and supporting chrome still distract | Use this route as the model after chrome cleanup | High |
| Preview | Real and useful | Figma preview wells are cleaner and more intentional | Example is the star | Preview gets visually buried by surrounding sections | Enlarge preview role and remove competing labels | High |
| Code | Copy and tabs work | Figma code presentation is quieter | Code stays adjacent to example | Multiple layers of framing add noise | Keep functionality, reduce visual stacking | Medium |
| Props/API | Present and useful | Figma does not define actual API content | Mature docs make API dense but readable | Needs calmer hierarchy, not more decoration | Preserve structure and simplify surface treatment | Medium |
| Accessibility notes | Present, valuable | Figma gives direction, not full IA | Mature docs keep a clear accessibility section | Sometimes visually low-priority | Keep dedicated section with consistent weight | Medium |
| Footer | Functional | Figma is not explicit | Footers stay quiet and lightweight | Fine structurally, slightly detached visually | Keep minimal and subordinate | Low |
| Dark theme | Brand-appropriate but over-dependent on faux-system framing | Strong dark-first atmosphere | Dark docs still prioritize content | Theme quality is undermined by dashboard language | Keep palette, simplify IA and chrome | High |
| Light theme | Currently appears visually stuck in dark mode during audit | Figma defines a lighter palette | Light docs feel deliberate, lower-noise, highly readable | Theme switching baseline is broken or incomplete | Fix theme behavior before aesthetic refinement | High |

## Documentation References

### Ant Design

- Use as reference for: large-scale navigation systems, framework-specific getting-started structure, and broad documentation taxonomy.
- Do not copy: enterprise-product density, feature sprawl, or mega-ecosystem framing.
- Adaptation: keep the clarity of route grouping without reproducing the portal-like complexity.
- Source: https://ant.design/docs/react/introduce/

### Material UI

- Use as reference for: predictable onboarding, strong installation/usage/API segmentation, and clear discoverability.
- Do not copy: Material branding or their ecosystem/commercial emphasis.
- Adaptation: borrow the clarity of the learning path, not the look.
- Source: https://mui.com/material-ui/getting-started/

### Radix UI

- Use as reference for: sparse navigation, strong focus on accessibility, and quiet documentation framing.
- Do not copy: total headless/minimalist neutrality.
- Adaptation: preserve quiet structure while keeping FeitozaUI's stronger brand identity.
- Source: https://www.radix-ui.com/primitives/docs/overview/introduction

### shadcn/ui

- Use as reference for: searchable docs, preview/code proximity, and component catalog scanning.
- Do not copy: the exact visual grammar or registry-centric personality.
- Adaptation: keep the practical preview-first flow with a more editorial, brand-owned shell.
- Source: https://ui.shadcn.com/docs

### Chakra UI

- Use as reference for: explicit design-system positioning and accessibility-forward messaging.
- Do not copy: marketing-heavy homepage framing or current sponsor-heavy noise.
- Adaptation: keep the clarity of value proposition, not the front-page clutter.
- Source: https://chakra-ui.com/

### Mantine

- Use as reference for: framework guides, template pathways, and practical setup decision trees.
- Do not copy: template sprawl or utilitarian brand neutrality.
- Adaptation: use the task-first setup structure for installation and getting started.
- Source: https://mantine.dev/getting-started/

### Tailwind CSS

- Use as reference for: concise setup flow, practical examples, and highly scannable technical structure.
- Do not copy: utility-first brand or plain tutorial tone.
- Adaptation: keep installation pages concise and operationally clear.
- Source: https://tailwindcss.com/docs/installation/using-vite

### React

- Use as reference for: progressive learning flow, minimal chrome, and content-first hierarchy.
- Do not copy: general-education/tutorial style for every page.
- Adaptation: keep component explanations readable and example-led.
- Source: https://react.dev/learn

### Next.js Docs

- Use as reference for: high-density sidebar, search-first workflow, and route predictability.
- Do not copy: framework-scale taxonomy or product/platform nav layers.
- Adaptation: use the consistency of route grouping and docs utilities in a smaller footprint.
- Source: https://nextjs.org/docs

### Vercel Docs

- Use as reference for: concise route hubs, getting-started entry points, and clean search utility placement.
- Do not copy: platform-product segmentation or AI/product marketing categories.
- Adaptation: keep utility separation clear and avoid mixing navigation with status framing.
- Source: https://vercel.com/docs

### Stripe Docs

- Use as reference for: use-case entry points, product grouping, and pragmatic quickstart orientation.
- Do not copy: financial product taxonomy or enterprise breadth.
- Adaptation: keep getting-started and installation pages explicitly task-driven.
- Source: https://docs.stripe.com/

### TanStack

- Use as reference for: ecosystem navigation clarity and strong product family separation.
- Do not copy: homepage product-grid complexity.
- Adaptation: apply only the principle of crisp categorization between docs surfaces.
- Source: https://tanstack.com/

## Common Documentation Patterns

- Sidebar focused on navigation, not status.
- Search or quick-jump separated from structural navigation.
- Content is the main actor.
- Clear page headings and short page intros.
- Large examples placed near code.
- Real API tables with calm typography.
- Predictable mobile navigation.
- Metadata that stays subordinate to content.
- Strong dark/light support without theme theatrics.

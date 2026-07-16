# FeitozaUI Visual Manifesto

## Essence

FeitozaUI documentation is the editorial surface of a React library, not a fictional infrastructure dashboard.

- It should feel developer-first, precise, calm, dark-first, and quietly memorable.
- It should communicate engineering quality through hierarchy, spacing, contrast, and restraint.
- It should preserve the approved brand direction: Quiet Future, Neon Infrastructure, elegant cyberpunk, blue-gray infrastructure surfaces, cyan as a technical signal, and coral as a rare accent.

## FeitozaUI Is

- Documentation for a React library.
- Technical without becoming noisy.
- Sophisticated through proportion and detail.
- Accessible in dark and light themes.
- Memorable because of disciplined visual signatures, not because of gimmicks.

## FeitozaUI Is Not

- A fictional observability console.
- A hacker terminal interface.
- A gaming UI.
- A stack of decorative cards.
- A place to expose route IDs, runtime labels, or fake telemetry.

## Approved Tone

- Primary mood: quiet, capable, infrastructural.
- Visual pacing: dense enough for serious documentation, but never crowded.
- Interaction tone: subtle, crisp, and reduced-motion-safe.
- Copy tone: direct, concrete, and useful in under three seconds.

## Allowed Cyberpunk

- Cyan edge accents for active, selected, or actionable states.
- Very subtle technical grid texture in large dark surfaces.
- Sharp corners or low-radius surfaces that suggest precision.
- Controlled blue-gray contrast with rare coral interruption.

## Forbidden Cyberpunk

- Decorative runtime/status chrome without user value.
- Persistent glow everywhere.
- Terminal cosplay, hacker cliches, or fake telemetry.
- Excessive monospaced labels competing with the main content.
- Product-dashboard information architecture inside library docs.

## Mandatory Removals

- Remove decorative runtime labels.
- Remove tracked-routes counters from navigation.
- Remove visible route IDs.
- Remove fictional status indicators.
- Remove boxes with no editorial or navigational purpose.
- Do not use telemetry framing as navigation.

## Visual Signatures

### 1. Quiet Technical Grid

- Objective: create atmosphere without competing with content.
- Use on: large backgrounds, hero regions, preview wells.
- Do not use on: dense reading surfaces, code blocks, or every card.
- Light mode: either remove it or reduce it to almost imperceptible structure.
- Mobile: simplify further to avoid texture noise.
- Accessibility: contrast must not impair text legibility.
- Reduced motion: static only.

### 2. Cyan As Intent Signal

- Objective: mark action, selection, focus, or active hierarchy.
- Use on: links, key CTA, active nav, selection borders, preview states.
- Do not use on: every badge, every heading, or decorative counters.
- Light mode: use a darker cyan/blue with enough contrast.
- Mobile: keep signal but reduce competing accent density.
- Accessibility: all cyan usages must meet contrast expectations or pair with non-color cues.
- Reduced motion: no pulsing or animated glows by default.

### 3. Monospace For Real Metadata

- Objective: distinguish code, imports, tokens, and real technical metadata.
- Use on: code, import lines, token names, terse secondary metadata, labels inside previews when the data is real.
- Do not use on: navigation IDs, decorative route labels, or filler telemetry.
- Light mode: reduce weight and contrast so it stays secondary.
- Mobile: keep short and sparse.
- Accessibility: never use tiny monospace text for essential content.
- Reduced motion: not applicable.

### 4. Precision Surfaces

- Objective: communicate structure with restrained borders, not card overload.
- Use on: hero frames, code panels, preview wells, major content sections.
- Do not use on: every paragraph or every sidebar cluster.
- Light mode: rely more on spacing and subtle border treatment than on heavy fills.
- Mobile: collapse nested surfaces aggressively.
- Accessibility: preserve readable contrast and clear focus outlines.
- Reduced motion: use state change through color/border, not animated flourish.

## Anti-Patterns

- Dashboard-first layouts.
- Decorative counters and system health framing.
- Repeated boxed sections without editorial prioritization.
- Heavy sidebars that compete with page content.
- Light theme that behaves like dark mode with colors inverted.
- Placeholder or fake technical content presented as product truth.

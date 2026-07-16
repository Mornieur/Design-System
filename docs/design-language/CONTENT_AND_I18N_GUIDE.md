# Content And I18N Guide

## Scope

This document defines content and localization direction for the documentation website.

- It does not implement i18n in this phase.
- It prepares the site for a future `next-intl` rollout.

## Recommended Solution

- Recommended library: `next-intl`
- Reason:
  - works naturally with the Next.js App Router
  - supports locale routing cleanly
  - keeps message formatting structured
  - fits future SEO and metadata needs
  - avoids a one-off custom localization layer

## Language Strategy

- Supported locales planned:
  - `pt-BR`
  - `en`
- Default editorial source language should be chosen deliberately per page family, not mixed sentence-by-sentence.
- Component names, import paths, and code identifiers remain in English.

## Tone Of Voice

- Developer-first.
- Precise.
- Calm.
- Direct.
- Useful before clever.

## Vocabulary Rules

Keep in English:

- component
- props
- API
- preview
- code
- accessibility
- Storybook
- source
- design tokens
- dark mode
- light mode

Prefer localized explanatory copy around those terms instead of forcing awkward translations.

## Button And UI Copy

- Buttons should use clear verbs.
- Avoid vague labels such as `Review`, `Open`, or `Status` without context.
- Nav labels should mirror information architecture, not internal implementation language.

## Accessible Labels

- `aria-label` and visible labels must describe the actual action or destination.
- Theme and locale switches should expose explicit labels.
- Do not use decorative technical jargon in accessible names.

## Error Messages

- State what failed.
- State what the user can do next.
- Avoid fake operational detail unless it is real and actionable.

## Headings

- Headings should describe tasks or concepts directly.
- Prefer short, concrete headings over atmospheric slogans on interior docs pages.

## Code

- Code samples remain in English.
- Inline comments inside code samples should stay short and technical.
- Do not localize package names, component names, imports, or token identifiers.

## SEO And Metadata

- Locale-specific titles and descriptions should be owned by the route, not inferred from UI text.
- Future locale routing should expose stable canonical URLs.
- Avoid duplicate translated pages with identical metadata.

## Locale Switcher

- Recommended future position: header utility area.
- It should be visually secondary to documentation navigation.
- It must be keyboard accessible and clearly named.

## Translation Guidance

- Do not translate brand terms inconsistently.
- Keep terminology stable across foundations, components, and architecture pages.
- Prefer glossary-backed consistency over overly literal translation.

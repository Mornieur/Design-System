# Review Checklist

Use this checklist before concluding work done by an agent.

## Scope

- Is the change still within the requested scope?
- Were unrelated files avoided?
- Was future work kept separate from current implementation?

## Architecture

- Does the change respect the separation between library, Storybook, and Next.js?
- Was showcase-only code kept out of the public package?
- Was an abstraction added only when repetition proved the need?

## Public API

- Is the API minimal and intentional?
- Were existing naming conventions preserved?
- Did the public API change?
- If the public API changed, was that change documented and validated intentionally?

## React

- Does the component use the most appropriate native element?
- Are effects used only when external synchronization is required?
- Is state avoided when it can be derived directly?
- Are controlled/uncontrolled patterns explicit and coherent?
- Is `forwardRef` used when the DOM node is part of the contract?

## TypeScript

- Is `any` avoided?
- Are public types clear and exported when useful?
- Are native props preserved without breaking type safety?
- Do generated IDs, ARIA props, and variants have explicit types?

## styled-components

- Are internal style props transient?
- Do style props avoid leaking to the DOM?
- Is styling based on tokens instead of arbitrary values when a token exists?
- Was styled-components usage kept compatible with current repository patterns?

## Tokens

- Are semantic tokens used before raw values?
- Were new component-specific token layers avoided unless justified?
- Are hardcoded values rare and explained when necessary?

## Accessibility

- Is semantic HTML doing the primary accessibility work?
- Are accessible names correct?
- Is keyboard behavior correct for the pattern?
- Are focus and focus-visible states considered?
- Are invalid and error states communicated beyond color alone?
- If ARIA was added, is it necessary and correct?

## Tests

- Do tests verify public behavior rather than implementation details?
- Are role and accessible-name queries used where appropriate?
- Is keyboard behavior covered when interactive?
- Are disabled, invalid, and pass-through behaviors covered when relevant?
- Was a validation reported as passed only after the command actually ran?

## Storybook

- Does each story represent a real public state or usage?
- Are story names specific and useful?
- Are docs descriptions honest about what is implemented versus future work?
- Was Storybook kept separate from the Next showcase role?

## Next.js

- If `src/app` changed, is the role of the Next app still limited to showcase/documentation?
- Was `"use client"` added only at the smallest necessary boundary?
- Do SSR, ISR, dynamic routes, or loading/error files have concrete justification?
- Was a Next-specific build limitation reported if no production build was executed?

## Package and build

- Is there any accidental dependency on Next.js inside the public package?
- Were exports reviewed when package surface changed?
- Was `npm.cmd pack --dry-run` executed when package contents changed?
- Were build-related claims validated by actual commands?

## Documentation

- Were only the necessary docs updated?
- Was duplication with architecture/design-system docs avoided?
- Are links relative and correct for internal documents?
- Are version-sensitive claims aligned with installed versions?

## Git

- Was the starting Git state inspected?
- Were generated files avoided unless explicitly required?
- Does the final diff stay focused?
- Were no commits created without explicit instruction?

## Final report

- Does the report include initial state?
- Does it include diagnosis and decisions?
- Does it list modified files?
- Does it state validations executed and results?
- Does it state failures or limitations?
- Does it include final Git status?
- Does it state public API impact explicitly?

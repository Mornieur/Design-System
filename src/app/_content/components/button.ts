import {
  createImportCode,
  createSourceLink,
  createStorybookLink
} from './shared';
import type { ComponentEntry } from './types';

export const buttonEntry: ComponentEntry = {
  slug: 'button',
  title: 'Button',
  kind: 'Atom',
  status: 'Stable public API',
  description:
    'Core action primitive for primary, secondary, and accent actions with native button semantics.',
  importPath: createImportCode('Button'),
  overview:
    'Button is FeitozaUI’s core action primitive. It preserves the native button contract, keeps its API intentionally small, and distinguishes visual intent through a real public variant prop.',
  useWhen: [
    'You need a native button for a real action in the current task flow.',
    'The action hierarchy is clear and one primary action needs stronger emphasis.',
    'You want a public FeitozaUI action surface without inventing product-specific behavior.'
  ],
  avoidWhen: [
    'The interaction is actually navigation and should be a link instead of a button.',
    'You need loading, icon-only, or split-button behavior that is not part of the current public API.',
    'You are trying to create multiple competing primary actions in the same local group.'
  ],
  examples: [
    {
      id: 'button-primary-action',
      routeSlug: 'button-primary-action',
      title: 'Primary action hierarchy',
      description:
        'Primary and secondary actions can sit together as long as one action owns the local emphasis.',
      previewKey: 'button-primary-action',
      code: `<div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
  <Button>Deploy service</Button>
  <Button variant="secondary">Review diff</Button>
</div>`,
      accessibilityNotes: [
        'Both controls remain native buttons, so Enter and Space activation come from the platform.',
        'The visual hierarchy does not replace the need for a clear action label.'
      ]
    },
    {
      id: 'button-variant-matrix',
      routeSlug: 'button-variant-matrix',
      title: 'Current public variants',
      description:
        'The current API supports only the three real variants: primary, secondary, and accent.',
      previewKey: 'button-variant-matrix',
      code: `<div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
  <Button variant="primary">Primary action</Button>
  <Button variant="secondary">Secondary action</Button>
  <Button variant="accent">Accent moment</Button>
</div>`,
      accessibilityNotes: [
        'Accent is still a real button, not a decorative tag.',
        'Disabled and focus behavior should still be validated in Storybook for broader state coverage.'
      ]
    }
  ],
  propsDefinition: {
    refType: 'HTMLButtonElement',
    inheritedFrom: 'ButtonHTMLAttributes<HTMLButtonElement>',
    notes: [
      'Button preserves the native button contract and forwards its ref to the underlying button element.',
      'Native attributes such as type, disabled, aria-*, data-*, className, and style are supported.'
    ],
    props: [
      {
        name: 'variant',
        type: "'primary' | 'secondary' | 'accent'",
        required: false,
        defaultValue: "'primary'",
        description: 'Controls the visual action hierarchy using the current public variants only.'
      }
    ]
  },
  accessibility: [
    'Uses a native button element, so keyboard activation follows platform expectations.',
    'Focus-visible styling is part of the public component contract and should stay visible in dense UI.',
    'Disabled behavior should use the native disabled attribute instead of decorative simulation.'
  ],
  storybook: createStorybookLink(
    '/docs/components-button--docs',
    'Storybook docs route'
  ),
  source: createSourceLink(
    'src/components/atoms/Button/index.tsx',
    'Component source'
  )
};

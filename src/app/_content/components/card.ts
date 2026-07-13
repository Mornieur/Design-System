import {
  createImportCode,
  createSourceLink,
  createStorybookLink
} from './shared';
import type { ComponentEntry } from './types';

export const cardEntry: ComponentEntry = {
  slug: 'card',
  title: 'Card',
  kind: 'Molecule',
  status: 'Stable public API',
  description:
    'Structured content composition built on top of Surface, adding predictable inner padding for related content.',
  importPath: createImportCode('Card'),
  overview:
    'Card builds on Surface to create a coherent reading unit for related content. It owns predictable inner padding, but it does not introduce variants, implicit interaction, or product-specific layout behavior.',
  useWhen: [
    'The content has a meaningful internal relationship and should read as one grouped unit.',
    'A section needs predictable inner padding without inventing a product-specific wrapper.',
    'Related title, description, metadata, and contextual actions belong together.'
  ],
  avoidWhen: [
    'You only need outer containment and Surface already solves the problem.',
    'You want the whole container to behave like a button or link without a real interaction contract.',
    'You are trying to create metric tiles, page shells, or navigation wrappers.'
  ],
  examples: [
    {
      id: 'card-related-content',
      routeSlug: 'card-related-content',
      title: 'Related content grouping',
      description:
        'Card is appropriate when related operational data benefits from a stable internal rhythm.',
      previewKey: 'card-related-content',
      code: `<Card>
  <Flex direction="column" gap={3}>
    <div>
      <h3 style={{ margin: 0 }}>Queue health</h3>
      <p style={{ margin: '8px 0 0' }}>
        Related operational status and supporting metrics belong together.
      </p>
    </div>
    <Divider />
    <Flex justify="space-between" align="center">
      <span>Mean acknowledgment</span>
      <span>04m 12s</span>
    </Flex>
  </Flex>
</Card>`,
      accessibilityNotes: [
        'Card itself is not focusable or interactive by default.',
        'Structured headings and inner controls remain the consumer’s responsibility.'
      ]
    },
    {
      id: 'card-contextual-actions',
      routeSlug: 'card-contextual-actions',
      title: 'Contextual actions inside a Card',
      description:
        'Actions can live inside a Card when they belong to the same content group, without turning the Card itself into a button.',
      previewKey: 'card-contextual-actions',
      code: `<Card>
  <Flex direction="column" gap={3}>
    <Flex justify="space-between" align="center" style={{ gap: '12px', flexWrap: 'wrap' }}>
      <div>
        <h3 style={{ margin: 0 }}>Runbook review</h3>
        <p style={{ margin: '4px 0 0' }}>
          Contextual actions can live inside a Card when they belong to the same content group.
        </p>
      </div>
      <Flex align="center" gap={2} style={{ flexWrap: 'wrap' }}>
        <Button variant="secondary">Dismiss</Button>
        <Button>Open runbook</Button>
      </Flex>
    </Flex>
  </Flex>
</Card>`,
      accessibilityNotes: [
        'Interactive descendants remain fully responsible for keyboard interaction and naming.',
        'The Card container still stays non-interactive by default.'
      ]
    }
  ],
  propsDefinition: {
    refType: 'HTMLDivElement',
    inheritedFrom: 'HTMLAttributes<HTMLDivElement>',
    notes: [
      'Card does not define its own public props in the current API.',
      'It forwards its ref to the underlying div element and preserves native div attributes.'
    ],
    props: []
  },
  accessibility: [
    'Card does not add role, tabIndex, or click semantics by default.',
    'Interactive descendants stay interactive without requiring the Card to own keyboard behavior.',
    'Use headings, descriptive text, and explicit controls inside the Card when the content needs structure.'
  ],
  storybook: createStorybookLink(
    '/docs/components-card--docs',
    'Storybook docs route'
  ),
  source: createSourceLink(
    'src/components/molecules/Card/index.tsx',
    'Component source'
  )
};

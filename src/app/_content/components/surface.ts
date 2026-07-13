import {
  createImportCode,
  createSourceLink,
  createStorybookLink
} from './shared';
import type { ComponentEntry } from './types';

export const surfaceEntry: ComponentEntry = {
  slug: 'surface',
  title: 'Surface',
  kind: 'Atom',
  status: 'Stable public API',
  description:
    'Containment primitive for Level 1 hierarchy, using background, border, and radius without owning layout.',
  importPath: createImportCode('Surface'),
  overview:
    'Surface establishes public containment and hierarchy without becoming a layout abstraction. It is the right primitive when the UI needs visible grouping, but inner composition should remain explicit.',
  useWhen: [
    'You need a clear Level 1 container with border-first hierarchy.',
    'A section, panel, or wrapper should express containment without becoming a full Card.',
    'You want grouping without inventing extra layout or interaction behavior.'
  ],
  avoidWhen: [
    'You only need a neutral utility wrapper and Box would be enough.',
    'You need structured inner padding and a grouped reading rhythm, which is a Card concern.',
    'You are nesting surfaces without a clear hierarchy change.'
  ],
  examples: [
    {
      id: 'surface-containment',
      routeSlug: 'surface-containment',
      title: 'Containment without layout abstraction',
      description:
        'Surface can group related information while leaving spacing and arrangement to composition primitives.',
      previewKey: 'surface-containment',
      code: `<Surface style={{ padding: '16px' }}>
  <Flex direction="column" gap={3}>
    <strong>Operational grouping</strong>
    <p style={{ margin: 0 }}>
      Surface provides containment only. Inner layout still belongs to composition.
    </p>
  </Flex>
</Surface>`,
      accessibilityNotes: [
        'Surface does not add region semantics or keyboard behavior by default.',
        'Consumers can still pass semantic HTML props when the surrounding context needs them.'
      ]
    },
    {
      id: 'surface-hierarchy',
      routeSlug: 'surface-hierarchy',
      title: 'Nested hierarchy control',
      description:
        'Default and secondary surfaces can be nested when the hierarchy shift is explicit and supports reading order.',
      previewKey: 'surface-hierarchy',
      code: `<Surface style={{ padding: '16px' }}>
  <Flex direction="column" gap={3}>
    <strong>Primary section</strong>
    <Surface variant="secondary" style={{ padding: '12px' }}>
      <Flex direction="column" gap={2}>
        <strong>Secondary grouping</strong>
        <p style={{ margin: 0 }}>
          Nest surfaces only when hierarchy is explicit.
        </p>
      </Flex>
    </Surface>
  </Flex>
</Surface>`,
      accessibilityNotes: [
        'Hierarchy is visual and structural, not interactive.',
        'The inner surface should not become visually heavier than the outer grouping.'
      ]
    }
  ],
  propsDefinition: {
    refType: 'HTMLDivElement',
    inheritedFrom: 'HTMLAttributes<HTMLDivElement>',
    notes: [
      'Surface forwards its ref to the underlying div element.',
      'It preserves native HTML div attributes such as aria-*, data-*, className, and style.'
    ],
    props: [
      {
        name: 'variant',
        type: "'default' | 'secondary'",
        required: false,
        defaultValue: "'default'",
        description: 'Adjusts the surface hierarchy without changing layout or interactivity.'
      }
    ]
  },
  accessibility: [
    'Surface is not interactive and does not add focusability by default.',
    'Landmarks or region roles should be added only by consumers with real semantic need.',
    'Hierarchy should remain readable in both dark and light themes without relying on glow or shadow.'
  ],
  storybook: createStorybookLink(
    '/docs/components-surface--docs',
    'Storybook docs route'
  ),
  source: createSourceLink(
    'src/components/atoms/Surface/index.tsx',
    'Component source'
  )
};

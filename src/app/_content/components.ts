export type ComponentEntry = {
  slug: string;
  title: string;
  kind: 'Atom' | 'Molecule';
  summary: string;
  storybookStatus: string;
  apiNotes: string[];
  documentationNotes: string[];
};

export const componentEntries: ComponentEntry[] = [
  {
    slug: 'button',
    title: 'Button',
    kind: 'Atom',
    summary: 'Primary, secondary, and accent actions with a predictable native button contract.',
    storybookStatus: 'Documented in Storybook',
    apiNotes: [
      'Exports ButtonProps and supports native button attributes.',
      'Variant expresses visual intent rather than one-off styling.',
      'The documentation shell uses the real component without extending its API.'
    ],
    documentationNotes: [
      'Next route acts as a catalog stub and navigation endpoint.',
      'Behavioral examples remain a Storybook responsibility.'
    ]
  },
  {
    slug: 'surface',
    title: 'Surface',
    kind: 'Atom',
    summary: 'Foundational container for visual layers, borders, and surface hierarchy.',
    storybookStatus: 'Documented in Storybook',
    apiNotes: [
      'Current variants are default and secondary.',
      'Surface stays intentionally minimal so composition remains explicit.',
      'The docs shell uses Surface for internal layout blocks without promoting new variants.'
    ],
    documentationNotes: [
      'This is a key bridge between the package and the documentation shell.',
      'Future component docs can explain how it differs from Box and Card.'
    ]
  },
  {
    slug: 'input',
    title: 'Input',
    kind: 'Atom',
    summary: 'Typed text input with consistent sizing, state support, and native prop pass-through.',
    storybookStatus: 'Documented in Storybook',
    apiNotes: [
      'Accessible naming and native semantics remain central.',
      'This route exists to preserve catalog continuity in the documentation site.'
    ],
    documentationNotes: [
      'Interactive validation examples should continue to live in Storybook.'
    ]
  },
  {
    slug: 'card',
    title: 'Card',
    kind: 'Molecule',
    summary: 'A simple padded composition surface built on top of Surface.',
    storybookStatus: 'Documented in Storybook',
    apiNotes: [
      'Card currently forwards native div attributes and ref.',
      'It does not introduce product-specific layout behavior.',
      'The home hero uses the real Card to anchor the shell in the existing package.'
    ],
    documentationNotes: [
      'A future richer page can compare Card and Surface responsibilities.'
    ]
  },
  {
    slug: 'tabs',
    title: 'Tabs',
    kind: 'Molecule',
    summary: 'Composable tab primitives covering root, list, trigger, and content areas.',
    storybookStatus: 'Documented in Storybook',
    apiNotes: [
      'Tabs should preserve real interaction behavior and keyboard expectations.',
      'The documentation route is currently informational rather than interactive.'
    ],
    documentationNotes: [
      'Complex interactive documentation still belongs primarily in Storybook.'
    ]
  },
  {
    slug: 'alert',
    title: 'Alert',
    kind: 'Molecule',
    summary: 'Contextual feedback surface for status, warning, success, and informational messaging.',
    storybookStatus: 'Documented in Storybook',
    apiNotes: [
      'Alert maps tone and status into a reusable message container.',
      'The Next site documents positioning in the catalog without becoming the testing surface.'
    ],
    documentationNotes: [
      'Future narrative docs can reference accessibility guidance for status communication.'
    ]
  }
];

export const featuredComponents = ['button', 'surface', 'card', 'tabs'] as const;

export function getComponentEntry(slug: string) {
  return componentEntries.find((entry) => entry.slug === slug);
}

export type FoundationEntry = {
  slug: string;
  title: string;
  summary: string;
  status: 'Implemented' | 'Documented' | 'Planned';
  principles: string[];
  references: string[];
};

export const foundationEntries: FoundationEntry[] = [
  {
    slug: 'colors',
    title: 'Color System',
    summary: 'Blue-gray infrastructure surfaces, cyan action signals, and a controlled coral accent layer.',
    status: 'Implemented',
    principles: [
      'Dark mode is the primary documentation expression, with light mode supported locally.',
      'Action, focus, and selection colors come from semantic roles instead of one-off page values.',
      'Accent is used sparingly so hierarchy remains technical and readable.'
    ],
    references: ['docs/design-system/FOUNDATIONS.md', 'docs/design-system/ACCESSIBILITY.md']
  },
  {
    slug: 'typography',
    title: 'Typography Roles',
    summary: 'Inter for reading, Outfit and Space Grotesk for hierarchy, JetBrains Mono for code and metrics.',
    status: 'Implemented',
    principles: [
      'Readable body copy takes priority over brand flourish.',
      'Monospace is reserved for IDs, metrics, package names, and code-adjacent labels.',
      'Documentation hierarchy uses heading and display roles without forcing those choices into the package API.'
    ],
    references: ['docs/design-system/TYPOGRAPHY.md', 'docs/design-system/ACCESSIBILITY.md']
  },
  {
    slug: 'spacing',
    title: 'Spacing Scale',
    summary: 'A compact token scale supports dense product layouts and a calm documentation rhythm.',
    status: 'Implemented',
    principles: [
      'Use token steps before introducing arbitrary spacing values.',
      'Reading layouts need larger vertical rhythm than component clusters.',
      'Spacing should clarify hierarchy rather than decorate empty space.'
    ],
    references: ['docs/design-system/LAYOUT_PRINCIPLES.md', 'src/design-tokens/spacing.ts']
  },
  {
    slug: 'surface-system',
    title: 'Surface System',
    summary: 'Background, surface, raised, floating, and overlay layers define visual weight.',
    status: 'Implemented',
    principles: [
      'Depth is conveyed primarily through surface lightness and borders.',
      'Dark mode avoids heavy decorative shadow as the default elevation cue.',
      'Documentation shell reuses the same layer logic without exporting new surface primitives.'
    ],
    references: ['docs/design-system/SURFACE_SYSTEM.md', 'src/design-tokens/elevation.ts']
  },
  {
    slug: 'motion',
    title: 'Motion Budget',
    summary: 'Short, functional transitions only, with reduced-motion compliance baked into the shell.',
    status: 'Documented',
    principles: [
      'Base page interactions stay within a 160ms to 220ms transition budget.',
      'No looping decorative motion is introduced in the documentation shell.',
      'Reduced motion disables transitions and animation timing globally for the site shell.'
    ],
    references: ['docs/design-system/ACCESSIBILITY.md', 'src/design-tokens/motion.ts']
  }
];

export function getFoundationEntry(slug: string) {
  return foundationEntries.find((entry) => entry.slug === slug);
}

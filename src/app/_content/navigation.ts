export type NavItem = {
  label: string;
  href: string;
};

export type NavGroup = {
  title: string;
  items: NavItem[];
};

export const mainNavigation: NavItem[] = [
  { label: 'Getting Started', href: '/docs/getting-started' },
  { label: 'Foundations', href: '/foundations' },
  { label: 'Components', href: '/components' },
  { label: 'Architecture', href: '/architecture' },
  { label: 'Accessibility', href: '/accessibility' },
  { label: 'Showcase', href: '/showcase' }
];

export const docsNavigation: NavGroup[] = [
  {
    title: 'Core runtime',
    items: [
      { label: 'Getting Started', href: '/docs/getting-started' },
      { label: 'Installation', href: '/docs/installation' }
    ]
  },
  {
    title: 'System indexes',
    items: [
      { label: 'Foundations', href: '/foundations' },
      { label: 'Components', href: '/components' },
      { label: 'Architecture', href: '/architecture' },
      { label: 'Accessibility', href: '/accessibility' },
      { label: 'Showcase', href: '/showcase' }
    ]
  }
];

export const footerNavigation: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Getting Started', href: '/docs/getting-started' },
  { label: 'Components', href: '/components' },
  { label: 'Architecture', href: '/architecture' }
];

export type ExampleKey =
  | 'button-primary-action'
  | 'button-variant-matrix'
  | 'checkbox-notification-preferences'
  | 'checkbox-indeterminate-selection'
  | 'radio-release-channel-selection'
  | 'radio-notification-priority'
  | 'radio-group-account-plan-selection'
  | 'radio-group-notification-priority'
  | 'radio-group-usage-guidance'
  | 'surface-containment'
  | 'surface-hierarchy'
  | 'card-related-content'
  | 'card-contextual-actions';

export type ComponentKind = 'Atom' | 'Molecule';

export type ComponentStatus = 'Stable public API';

export type ComponentExampleDefinition = {
  id: string;
  routeSlug: string;
  title: string;
  description: string;
  code: string;
  previewKey: ExampleKey;
  category: 'composition' | 'interactive';
  accessibilityNotes?: string[];
};

export type ComponentPropDefinition = {
  name: string;
  type: string;
  required: boolean;
  defaultValue?: string;
  description: string;
  notes?: string;
};

export type ComponentPropsDefinition = {
  refType: string;
  inheritedFrom: string;
  notes: string[];
  props: ComponentPropDefinition[];
};

export type ComponentLinkDefinition = {
  label: string;
  path: string;
  url: string;
};

export type ComponentEntry = {
  slug: string;
  title: string;
  kind: ComponentKind;
  status: ComponentStatus;
  description: string;
  importPath: string;
  overview: string;
  usageSummary: string;
  useWhen: string[];
  avoidWhen: string[];
  bestPractices: string[];
  doItems: string[];
  dontItems: string[];
  featuredExampleId: string;
  examples: ComponentExampleDefinition[];
  propsDefinition: ComponentPropsDefinition;
  accessibility: string[];
  relatedComponentSlugs: string[];
  storybook?: ComponentLinkDefinition;
  source: ComponentLinkDefinition;
};

export type ComponentExampleEntry = {
  component: ComponentEntry;
  example: ComponentExampleDefinition;
};

export type ExampleKey =
  | 'button-primary-action'
  | 'button-variant-matrix'
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
  useWhen: string[];
  avoidWhen: string[];
  examples: ComponentExampleDefinition[];
  propsDefinition: ComponentPropsDefinition;
  accessibility: string[];
  storybook: ComponentLinkDefinition;
  source: ComponentLinkDefinition;
};

export type ComponentExampleEntry = {
  component: ComponentEntry;
  example: ComponentExampleDefinition;
};

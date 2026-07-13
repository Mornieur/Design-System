import { buttonEntry } from './button';
import { cardEntry } from './card';
import { surfaceEntry } from './surface';
import type {
  ComponentEntry,
  ComponentExampleEntry
} from './types';

export type {
  ComponentEntry,
  ComponentExampleDefinition,
  ComponentExampleEntry,
  ComponentLinkDefinition,
  ComponentPropDefinition,
  ComponentPropsDefinition,
  ExampleKey
} from './types';

export const componentEntries: ComponentEntry[] = [
  buttonEntry,
  surfaceEntry,
  cardEntry
];

export const featuredComponents = componentEntries.map((entry) => entry.slug);

export function getComponentEntry(slug: string) {
  return componentEntries.find((entry) => entry.slug === slug);
}

export const componentExampleEntries: ComponentExampleEntry[] = componentEntries.flatMap(
  (component) => component.examples.map((example) => ({ component, example }))
);

export function getComponentExampleEntry(routeSlug: string) {
  return componentExampleEntries.find((entry) => entry.example.routeSlug === routeSlug);
}

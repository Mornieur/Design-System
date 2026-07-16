import type {AppLocale} from '@/i18n/routing';
import {createButtonEntry} from './button';
import {createCardEntry} from './card';
import {createSurfaceEntry} from './surface';
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

export function getComponentEntries(locale: AppLocale): ComponentEntry[] {
  return [
    createButtonEntry(locale),
    createSurfaceEntry(locale),
    createCardEntry(locale)
  ];
}

export function getFeaturedComponents(locale: AppLocale) {
  return getComponentEntries(locale).map((entry) => entry.slug);
}

export function getComponentEntry(locale: AppLocale, slug: string) {
  return getComponentEntries(locale).find((entry) => entry.slug === slug);
}

export function getComponentExampleEntries(locale: AppLocale): ComponentExampleEntry[] {
  return getComponentEntries(locale).flatMap((component) =>
    component.examples.map((example) => ({component, example}))
  );
}

export function getComponentExampleEntry(locale: AppLocale, routeSlug: string) {
  return getComponentExampleEntries(locale).find(
    (entry) => entry.example.routeSlug === routeSlug
  );
}

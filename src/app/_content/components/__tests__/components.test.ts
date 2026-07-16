import { describe, expect, it } from 'vitest';
import {
  getComponentEntries,
  getComponentExampleEntries,
  getComponentEntry,
  getComponentExampleEntry
} from '..';

describe('component documentation registry', () => {
  it('tracks the initial documented components only', () => {
    expect(getComponentEntries('en').map((entry) => entry.slug)).toEqual([
      'button',
      'surface',
      'card'
    ]);
  });

  it('looks up component entries by slug', () => {
    const entry = getComponentEntry('en', 'button');

    expect(entry?.title).toBe('Button');
    expect(entry?.storybook.path).toBe('/docs/components-button--docs');
    expect(entry?.source.path).toBe('src/components/atoms/Button/index.tsx');
  });

  it('flattens examples into route entries', () => {
    expect(
      getComponentExampleEntries('en').map((entry) => entry.example.routeSlug)
    ).toEqual([
      'button-primary-action',
      'button-variant-matrix',
      'surface-containment',
      'surface-hierarchy',
      'card-related-content',
      'card-contextual-actions'
    ]);
  });

  it('looks up isolated examples by route slug', () => {
    const entry = getComponentExampleEntry('en', 'card-contextual-actions');

    expect(entry?.component.slug).toBe('card');
    expect(entry?.example.previewKey).toBe('card-contextual-actions');
  });

  it('returns undefined for unknown example slugs', () => {
    expect(getComponentExampleEntry('en', 'unknown-example')).toBeUndefined();
  });

  it('documents Card without inventing component-specific props', () => {
    const entry = getComponentEntry('en', 'card');

    expect(entry?.propsDefinition.props).toEqual([]);
    expect(entry?.propsDefinition.inheritedFrom).toBe('HTMLAttributes<HTMLDivElement>');
    expect(entry?.propsDefinition.refType).toBe('HTMLDivElement');
  });
});

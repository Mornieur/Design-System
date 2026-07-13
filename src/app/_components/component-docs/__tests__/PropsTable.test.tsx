import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import PropsTable from '../PropsTable';
import { getComponentEntry } from '@/app/_content/components';

describe('PropsTable', () => {
  it('renders real Button prop data', () => {
    const entry = getComponentEntry('button');

    if (!entry) {
      throw new Error('button entry missing');
    }

    render(
      <PropsTable componentTitle={entry.title} definition={entry.propsDefinition} />
    );

    expect(screen.getByRole('table', { name: 'Button public props' })).toBeVisible();
    expect(screen.getByText('variant')).toBeVisible();
    expect(screen.getByText("'primary'")).toBeVisible();
  });

  it('states that Card has no component-specific props', () => {
    const entry = getComponentEntry('card');

    if (!entry) {
      throw new Error('card entry missing');
    }

    render(
      <PropsTable componentTitle={entry.title} definition={entry.propsDefinition} />
    );

    expect(screen.getByText('No component-specific props')).toBeVisible();
    expect(
      screen.getByText(/Card does not define custom public props in the current API/i)
    ).toBeVisible();
  });
});

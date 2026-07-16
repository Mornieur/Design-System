import {createElement} from 'react';
import type {AnchorHTMLAttributes} from 'react';
import { describe, expect, it, vi } from 'vitest';

vi.mock('@/i18n/navigation', () => ({
  Link: ({
    href,
    children,
    ...props
  }: AnchorHTMLAttributes<HTMLAnchorElement> & {href: string}) =>
    createElement('a', {href, ...props}, children)
}));

import { generateStaticParams } from '../page';

describe('example route params', () => {
  it('generates static params for the documented examples', async () => {
    expect(await generateStaticParams()).toEqual([
      { slug: 'button-primary-action' },
      { slug: 'button-variant-matrix' },
      { slug: 'checkbox-notification-preferences' },
      { slug: 'checkbox-indeterminate-selection' },
      { slug: 'radio-release-channel-selection' },
      { slug: 'radio-notification-priority' },
      { slug: 'surface-containment' },
      { slug: 'surface-hierarchy' },
      { slug: 'card-related-content' },
      { slug: 'card-contextual-actions' }
    ]);
  });
});

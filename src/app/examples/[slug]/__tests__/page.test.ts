import { describe, expect, it } from 'vitest';
import { generateStaticParams } from '../page';

describe('example route params', () => {
  it('generates static params for the documented examples', () => {
    expect(generateStaticParams()).toEqual([
      { slug: 'button-primary-action' },
      { slug: 'button-variant-matrix' },
      { slug: 'surface-containment' },
      { slug: 'surface-hierarchy' },
      { slug: 'card-related-content' },
      { slug: 'card-contextual-actions' }
    ]);
  });
});

import { describe, expect, it } from 'vitest';
import { composeAriaDescribedBy, createFieldSlotIds, resolveFieldControlId } from './fieldSlotIds';

describe('fieldSlotIds', () => {
  it('derives slot ids from a provided control id', () => {
    expect(createFieldSlotIds('service-name')).toEqual({
      baseId: 'service-name',
      controlId: 'service-name',
      labelId: 'service-name-label',
      helperTextId: 'service-name-helper',
      errorTextId: 'service-name-error'
    });
  });

  it('prefers consumer provided ids', () => {
    expect(
      resolveFieldControlId({
        id: 'custom-id',
        generatedId: 'generated',
        prefix: 'feitoza-input'
      })
    ).toBe('custom-id');
  });

  it('generates ids when the consumer did not provide one', () => {
    expect(
      resolveFieldControlId({
        generatedId: ':r0:',
        prefix: 'feitoza-input'
      })
    ).toBe('feitoza-input-:r0:');
  });

  it('composes aria-describedby without invalid spaces or missing slots', () => {
    expect(
      composeAriaDescribedBy('external-description', '', undefined, 'helper-id', null, 'error-id')
    ).toBe('external-description helper-id error-id');
  });

  it('returns undefined when no described-by ids are present', () => {
    expect(composeAriaDescribedBy('', undefined, null)).toBeUndefined();
  });
});

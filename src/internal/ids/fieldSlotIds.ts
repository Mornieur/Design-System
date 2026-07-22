export type FieldSlotIds = {
  baseId: string;
  controlId: string;
  labelId: string;
  helperTextId: string;
  errorTextId: string;
};

type ResolveFieldControlIdOptions = {
  id?: string;
  generatedId?: string;
  prefix: string;
};

export function resolveFieldControlId({
  id,
  generatedId,
  prefix
}: ResolveFieldControlIdOptions) {
  if (id) {
    return id;
  }

  if (!generatedId) {
    throw new Error('generatedId is required when an explicit id is not provided.');
  }

  return `${prefix}-${generatedId}`;
}

export function createFieldSlotIds(controlId: string): FieldSlotIds {
  return {
    baseId: controlId,
    controlId,
    labelId: `${controlId}-label`,
    helperTextId: `${controlId}-helper`,
    errorTextId: `${controlId}-error`
  };
}

export function composeAriaDescribedBy(...ids: Array<string | null | undefined>) {
  const value = ids
    .filter((id): id is string => typeof id === 'string' && id.trim().length > 0)
    .join(' ');

  return value || undefined;
}

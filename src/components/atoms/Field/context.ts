import { createContext, useContext } from 'react';
import type { ReactNode } from 'react';

export type FieldContextValue = {
  controlId: string;
  labelId: string;
  helperTextId: string;
  errorTextId: string;
  disabled: boolean;
  invalid: boolean;
  required: boolean;
  fullWidth: boolean;
  optionalLabel?: ReactNode;
  hasHelperText: boolean;
  hasErrorText: boolean;
};

export const FieldContext = createContext<FieldContextValue | null>(null);

export function useOptionalFieldContext() {
  return useContext(FieldContext);
}

export function useFieldContext() {
  const context = useOptionalFieldContext();

  if (!context) {
    throw new Error('Field subcomponents must be used within <Field.Root>.');
  }

  return context;
}

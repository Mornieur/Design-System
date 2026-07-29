import { useCallback, useEffect, useRef, useState } from 'react';
import { useStableCallback } from '@/internal/callbacks/useStableCallback';

type SetStateAction<T> = T | ((previousState: T) => T);

type UseControllableStateParams<T> = {
  value?: T;
  defaultValue?: T;
  onChange?: (value: T) => void;
};

function resolveNextValue<T>(nextValue: SetStateAction<T>, currentValue: T) {
  return typeof nextValue === 'function'
    ? (nextValue as (previousState: T) => T)(currentValue)
    : nextValue;
}

export function useControllableState<T>({
  value,
  defaultValue,
  onChange
}: UseControllableStateParams<T>) {
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue as T);
  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : uncontrolledValue;
  const initialModeRef = useRef(isControlled);
  const handleChange = useStableCallback(onChange);

  useEffect(() => {
    if (
      process.env.NODE_ENV !== 'production' &&
      initialModeRef.current !== isControlled
    ) {
      console.error(
        'A component changed from %s to %s. This is unsupported. Decide between controlled or uncontrolled usage for the lifetime of the component.',
        initialModeRef.current ? 'controlled' : 'uncontrolled',
        isControlled ? 'controlled' : 'uncontrolled'
      );
    }
  }, [isControlled]);

  const setValue = useCallback(
    (nextValue: SetStateAction<T>) => {
      if (isControlled) {
        const resolvedValue = resolveNextValue(nextValue, currentValue as T);

        if (!Object.is(resolvedValue, currentValue)) {
          handleChange?.(resolvedValue);
        }

        return;
      }

      setUncontrolledValue((previousValue) => {
        const resolvedValue = resolveNextValue(nextValue, previousValue);

        if (!Object.is(resolvedValue, previousValue)) {
          handleChange?.(resolvedValue);
          return resolvedValue;
        }

        return previousValue;
      });
    },
    [currentValue, handleChange, isControlled]
  );

  return [currentValue as T, setValue] as const;
}

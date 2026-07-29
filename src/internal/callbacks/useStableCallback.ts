import { useCallback, useRef, type MutableRefObject } from 'react';
import { useIsomorphicLayoutEffect } from '@/internal/effects/useIsomorphicLayoutEffect';

export function useStableCallback<TArgs extends unknown[], TResult>(
  callback: ((...args: TArgs) => TResult) | undefined
) {
  const callbackRef = useRef(callback) as MutableRefObject<((...args: TArgs) => TResult) | undefined>;

  useIsomorphicLayoutEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  return useCallback((...args: TArgs) => {
    return callbackRef.current?.(...args);
  }, []);
}

import { useCallback, useRef, type Ref, type RefCallback } from 'react';
import { useIsomorphicLayoutEffect } from '@/internal/effects/useIsomorphicLayoutEffect';
import { composeRefs } from './composeRefs';

export function useComposedRefs<T>(...refs: Array<Ref<T> | undefined>): RefCallback<T> {
  const refsRef = useRef(refs);

  useIsomorphicLayoutEffect(() => {
    refsRef.current = refs;
  }, [refs]);

  return useCallback((node: T | null) => {
    return composeRefs(...refsRef.current)(node);
  }, []);
}

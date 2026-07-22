import type { MutableRefObject, Ref, RefCallback } from 'react';

type PossibleCleanup = void | (() => void);

type CallbackRef<T> = (value: T | null) => PossibleCleanup;

function setRef<T>(ref: Ref<T> | undefined, value: T | null): PossibleCleanup {
  if (typeof ref === 'function') {
    return (ref as CallbackRef<T>)(value);
  }

  if (ref) {
    (ref as MutableRefObject<T | null>).current = value;
  }
}

export function composeRefs<T>(...refs: Array<Ref<T> | undefined>): RefCallback<T> {
  return (node) => {
    const cleanups = refs.map((ref) => {
      const cleanup = setRef(ref, node);

      return { cleanup, ref };
    });

    if (!cleanups.some(({ cleanup }) => typeof cleanup === 'function')) {
      return;
    }

    return () => {
      for (const { cleanup, ref } of cleanups) {
        if (typeof cleanup === 'function') {
          cleanup();
          continue;
        }

        setRef(ref, null);
      }
    };
  };
}

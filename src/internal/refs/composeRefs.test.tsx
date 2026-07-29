import { render } from '@testing-library/react';
import { createRef, useEffect, useRef } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { composeRefs } from './composeRefs';
import { useComposedRefs } from './useComposedRefs';

describe('composeRefs', () => {
  it('updates callback refs', () => {
    const callbackRef = vi.fn();
    const composedRef = composeRefs<HTMLInputElement>(callbackRef);
    const node = document.createElement('input');

    composedRef(node);

    expect(callbackRef).toHaveBeenCalledWith(node);
  });

  it('updates object refs', () => {
    const objectRef = createRef<HTMLInputElement>();
    const composedRef = composeRefs(objectRef);
    const node = document.createElement('input');

    composedRef(node);

    expect(objectRef.current).toBe(node);
  });

  it('updates multiple refs and ignores null refs', () => {
    const callbackRef = vi.fn();
    const objectRef = createRef<HTMLInputElement>();
    const composedRef = composeRefs<HTMLInputElement>(callbackRef, undefined, objectRef, null);
    const node = document.createElement('input');

    composedRef(node);

    expect(callbackRef).toHaveBeenCalledWith(node);
    expect(objectRef.current).toBe(node);
  });

  it('clears refs on unmount when no explicit cleanup exists', () => {
    const callbackRef = vi.fn();
    const objectRef = createRef<HTMLInputElement>();
    const composedRef = composeRefs<HTMLInputElement>(callbackRef, objectRef);
    const node = document.createElement('input');

    composedRef(node);
    composedRef(null);

    expect(callbackRef).toHaveBeenLastCalledWith(null);
    expect(objectRef.current).toBeNull();
  });

  it('returns cleanup support for callback refs that provide cleanup functions', () => {
    const cleanup = vi.fn();
    const callbackRef = vi.fn(() => cleanup);
    const objectRef = createRef<HTMLInputElement>();
    const composedRef = composeRefs<HTMLInputElement>(callbackRef, objectRef);
    const node = document.createElement('input');

    const composedCleanup = composedRef(node);

    expect(typeof composedCleanup).toBe('function');

    composedCleanup?.();

    expect(cleanup).toHaveBeenCalledOnce();
    expect(objectRef.current).toBeNull();
  });
});

describe('useComposedRefs', () => {
  it('keeps callback identity stable while refs stay the same', () => {
    const identities: Array<(node: HTMLInputElement | null) => void> = [];
    const externalRef = createRef<HTMLInputElement>();

    function Example() {
      const localRef = useRef<HTMLInputElement | null>(null);
      const composedRef = useComposedRefs(localRef, externalRef);

      useEffect(() => {
        identities.push(composedRef);
      }, [composedRef]);

      return <input ref={composedRef} />;
    }

    const { rerender } = render(<Example />);

    rerender(<Example />);

    expect(identities).toHaveLength(1);
  });
});

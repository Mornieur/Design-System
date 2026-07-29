import { renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { useStableCallback } from './useStableCallback';

describe('useStableCallback', () => {
  it('keeps the same function identity between rerenders', () => {
    const { result, rerender } = renderHook(({ value }: { value: number }) => useStableCallback(() => value), {
      initialProps: { value: 1 }
    });

    const firstCallback = result.current;

    rerender({ value: 2 });

    expect(result.current).toBe(firstCallback);
  });

  it('always calls the latest implementation', () => {
    const { result, rerender } = renderHook(({ value }: { value: string }) => useStableCallback(() => value), {
      initialProps: { value: 'initial' }
    });

    expect(result.current()).toBe('initial');

    rerender({ value: 'updated' });

    expect(result.current()).toBe('updated');
  });

  it('preserves arguments and return values', () => {
    const spy = vi.fn((left: number, right: number) => left + right);
    const { result } = renderHook(() => useStableCallback(spy));

    expect(result.current(2, 3)).toBe(5);
    expect(spy).toHaveBeenCalledWith(2, 3);
  });
});

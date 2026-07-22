import { renderHook } from '@testing-library/react';
import { renderToString } from 'react-dom/server';
import { describe, expect, it, vi } from 'vitest';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

describe('useIsomorphicLayoutEffect', () => {
  it('runs in a DOM environment without throwing', () => {
    const effectSpy = vi.fn();

    renderHook(() => {
      useIsomorphicLayoutEffect(effectSpy, []);
    });

    expect(effectSpy).toHaveBeenCalledOnce();
  });

  it('renders in SSR mode without layout effect warnings', async () => {
    const originalWindow = globalThis.window;
    const originalDocument = globalThis.document;
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => undefined);

    vi.resetModules();
    vi.stubGlobal('window', undefined);
    vi.stubGlobal('document', undefined);

    const { useIsomorphicLayoutEffect: ssrSafeEffect } = await import('./useIsomorphicLayoutEffect');

    function Example() {
      ssrSafeEffect(() => undefined, []);

      return <div>SSR safe</div>;
    }

    expect(() => renderToString(<Example />)).not.toThrow();
    expect(errorSpy).not.toHaveBeenCalled();

    vi.unstubAllGlobals();
    vi.resetModules();
    errorSpy.mockRestore();

    vi.stubGlobal('window', originalWindow);
    vi.stubGlobal('document', originalDocument);
  });
});

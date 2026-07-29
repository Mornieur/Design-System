import { renderHook, act } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { useControllableState } from './useControllableState';

describe('useControllableState', () => {
  it('supports uncontrolled state with defaultValue', () => {
    const { result } = renderHook(() =>
      useControllableState({
        defaultValue: 'overview'
      })
    );

    expect(result.current[0]).toBe('overview');

    act(() => {
      result.current[1]('metrics');
    });

    expect(result.current[0]).toBe('metrics');
  });

  it('supports controlled state', () => {
    const onChange = vi.fn();
    const { result, rerender } = renderHook(
      ({ value }: { value: string }) =>
        useControllableState({
          value,
          defaultValue: 'overview',
          onChange
        }),
      {
        initialProps: { value: 'overview' }
      }
    );

    act(() => {
      result.current[1]('metrics');
    });

    expect(result.current[0]).toBe('overview');
    expect(onChange).toHaveBeenCalledWith('metrics');

    rerender({ value: 'metrics' });

    expect(result.current[0]).toBe('metrics');
  });

  it('supports functional updates', () => {
    const { result } = renderHook(() =>
      useControllableState({
        defaultValue: 1
      })
    );

    act(() => {
      result.current[1]((previousValue) => previousValue + 1);
    });

    expect(result.current[0]).toBe(2);
  });

  it('uses the latest callback implementation', () => {
    const firstCallback = vi.fn();
    const secondCallback = vi.fn();
    const { result, rerender } = renderHook(
      ({ onChange }: { onChange: (value: string) => void }) =>
        useControllableState({
          defaultValue: 'overview',
          onChange
        }),
      {
        initialProps: { onChange: firstCallback }
      }
    );

    rerender({ onChange: secondCallback });

    act(() => {
      result.current[1]('metrics');
    });

    expect(firstCallback).not.toHaveBeenCalled();
    expect(secondCallback).toHaveBeenCalledWith('metrics');
  });

  it('avoids duplicate callback notifications for equal values', () => {
    const onChange = vi.fn();
    const { result } = renderHook(() =>
      useControllableState({
        defaultValue: 'overview',
        onChange
      })
    );

    act(() => {
      result.current[1]('overview');
    });

    expect(onChange).not.toHaveBeenCalled();
  });

  it('does not mutate controlled state internally', () => {
    const { result } = renderHook(() =>
      useControllableState({
        value: 'overview',
        onChange: () => undefined
      })
    );

    act(() => {
      result.current[1]('metrics');
    });

    expect(result.current[0]).toBe('overview');
  });

  it('warns when usage switches between uncontrolled and controlled', () => {
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => undefined);
    const { rerender } = renderHook(
      ({ value }: { value: string | undefined }) =>
        useControllableState({
          value,
          defaultValue: 'overview'
        }),
      {
        initialProps: { value: undefined } as { value: string | undefined }
      }
    );

    rerender({ value: 'metrics' });

    expect(errorSpy).toHaveBeenCalledOnce();

    errorSpy.mockRestore();
  });
});

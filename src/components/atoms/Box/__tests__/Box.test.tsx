import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Box from '..';
import { colors, space, radii } from '@/design-tokens';

describe('Box', () => {
  it('renderiza o componente', () => {
    render(<Box data-testid="box" />);
    expect(screen.getByTestId('box')).toBeInTheDocument();
  });

  it('aplica padding corretamente', () => {
    render(<Box padding={4} data-testid="box" />);
    const box = screen.getByTestId('box');
    expect(box).toHaveStyle(`padding: ${space[4]}`);
  });

  it('aplica background corretamente', () => {
    render(<Box bg="primary" data-testid="box" />);
    const box = screen.getByTestId('box');
    expect(box).toHaveStyle(`background-color: ${colors.primary}`);
  });

  it('aplica radius corretamente', () => {
    render(<Box radius="medium" data-testid="box" />);
    const box = screen.getByTestId('box');
    expect(box).toHaveStyle(`border-radius: ${radii.medium}`);
  });
});

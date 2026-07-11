import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { describe, it, expect } from 'vitest';
import Flex from '..';
import { space } from '@/design-tokens';

describe('Flex', () => {
  it('renders children', () => {
    render(<Flex>Item</Flex>);
    expect(screen.getByText('Item')).toBeInTheDocument();
  });

  it('passes className and style to the native div', () => {
    render(
      <Flex className="custom-flex" style={{ width: 200 }}>
        Content
      </Flex>
    );

    const flex = screen.getByText('Content');

    expect(flex).toHaveClass('custom-flex');
    expect(flex).toHaveStyle({ width: '200px' });
  });

  it('forwards ref to the native div', () => {
    const ref = createRef<HTMLDivElement>();

    render(<Flex ref={ref}>Ref flex</Flex>);

    expect(ref.current).toBe(screen.getByText('Ref flex'));
  });

  it('does not add unnecessary landmark roles', () => {
    render(<Flex>Plain flex</Flex>);
    expect(screen.queryByRole('region')).not.toBeInTheDocument();
  });

  it('does not leak layout props to the DOM', () => {
    render(
      <Flex direction="column" align="center" gap={4} data-testid="flex">
        Flex
      </Flex>
    );

    const flex = screen.getByTestId('flex');

    expect(flex).not.toHaveAttribute('direction');
    expect(flex).not.toHaveAttribute('align');
    expect(flex).not.toHaveAttribute('gap');
  });

  it('applies flex-direction correctly', () => {
    const { container } = render(<Flex direction="column" />);
    expect(container.firstChild).toHaveStyle({ flexDirection: 'column' });
  });

  it('applies align-items correctly', () => {
    const { container } = render(<Flex align="center" />);
    expect(container.firstChild).toHaveStyle({ alignItems: 'center' });
  });

  it('applies gap correctly from tokens', () => {
    const { container } = render(<Flex gap={4} />);
    expect(container.firstChild).toHaveStyle({ gap: space[4] });
  });

  it('applies justify-content correctly', () => {
    const { container } = render(<Flex justify="space-between" />);
    expect(container.firstChild).toHaveStyle({
      justifyContent: 'space-between'
    });
  });
});

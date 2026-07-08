import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { describe, it, expect } from 'vitest';
import Box from '..';
import { colors, space, radii } from '@/design-tokens';

describe('Box', () => {
  it('renders children', () => {
    render(<Box>Content</Box>);
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('passes className and style to the native div', () => {
    render(
      <Box className="custom-box" style={{ width: 160 }}>
        Content
      </Box>
    );

    const box = screen.getByText('Content');

    expect(box).toHaveClass('custom-box');
    expect(box).toHaveStyle({ width: '160px' });
  });

  it('forwards ref to the native div', () => {
    const ref = createRef<HTMLDivElement>();

    render(<Box ref={ref}>Ref box</Box>);

    expect(ref.current).toBe(screen.getByText('Ref box'));
  });

  it('does not add unnecessary landmark roles', () => {
    render(<Box>Plain box</Box>);
    expect(screen.queryByRole('region')).not.toBeInTheDocument();
  });

  it('does not leak style props to the DOM', () => {
    render(
      <Box padding={4} bg="primary" radius="medium" data-testid="box">
        Box
      </Box>
    );

    const box = screen.getByTestId('box');

    expect(box).not.toHaveAttribute('padding');
    expect(box).not.toHaveAttribute('bg');
    expect(box).not.toHaveAttribute('radius');
  });

  it('applies padding correctly', () => {
    render(<Box padding={4} data-testid="box" />);
    const box = screen.getByTestId('box');
    expect(box).toHaveStyle(`padding: ${space[4]}`);
  });

  it('applies background correctly', () => {
    render(<Box bg="primary" data-testid="box" />);
    const box = screen.getByTestId('box');
    expect(box).toHaveStyle(`background-color: ${colors.primary}`);
  });

  it('applies radius correctly', () => {
    render(<Box radius="medium" data-testid="box" />);
    const box = screen.getByTestId('box');
    expect(box).toHaveStyle(`border-radius: ${radii.medium}`);
  });
});

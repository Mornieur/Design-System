import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Flex from '..';
import { space } from '@/design-tokens';

describe('Flex', () => {
  it('renderiza com filhos', () => {
    const { container } = render(
      <Flex>
        <div>Item</div>
      </Flex>
    );
    expect(container.firstChild).toBeTruthy();
  });

  it('aplica flex-direction corretamente', () => {
    const { container } = render(<Flex direction="column" />);
    expect(container.firstChild).toHaveStyle({ flexDirection: 'column' });
  });

  it('aplica align-items corretamente', () => {
    const { container } = render(<Flex align="center" />);
    expect(container.firstChild).toHaveStyle({ alignItems: 'center' });
  });

  it('aplica gap corretamente via tokens', () => {
    const { container } = render(<Flex gap={4} />);
    expect(container.firstChild).toHaveStyle({ gap: space[4] });
  });

  it('aplica justify-content corretamente', () => {
    const { container } = render(<Flex justify="space-between" />);
    expect(container.firstChild).toHaveStyle({
      justifyContent: 'space-between'
    });
  });
});

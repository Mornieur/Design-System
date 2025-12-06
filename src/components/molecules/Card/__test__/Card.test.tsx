import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Card } from '..';

describe('Card component', () => {
  it('should render the title correctly', () => {
    render(<Card title="My Card">Content</Card>);
    expect(screen.getByText('My Card')).toBeInTheDocument();
  });

  it('should render children correctly', () => {
    render(
      <Card title="Test">
        <p>Inner content</p>
      </Card>
    );
    expect(screen.getByText('Inner content')).toBeInTheDocument();
  });

  it('should apply the aria-label with the title', () => {
    render(<Card title="Accessible Card">Test</Card>);
    const region = screen.getByRole('region');
    expect(region).toHaveAttribute('aria-label', 'Accessible Card');
  });

  it('should apply the default elevation (md)', () => {
    render(<Card title="Title">Test</Card>);
    const region = screen.getByRole('region');
    expect(region).toHaveAttribute('data-elevation', 'md');
  });

  it('should apply the elevation passed via props', () => {
    render(
      <Card title="Title" elevation="lg">
        Test
      </Card>
    );
    const region = screen.getByRole('region');
    expect(region).toHaveAttribute('data-elevation', 'lg');
  });
});

import type { Meta, StoryObj } from '@storybook/nextjs';
import { expect } from 'storybook/test';

import { Card } from '..';

const meta = {
  title: 'Molecules/Card',
  component: Card,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    children: { control: 'text' },
    elevation: {
      control: 'radio',
      options: ['none', 'sm', 'md', 'lg']
    }
  }
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Card Title',
    children: 'This is some content inside the card.',
    elevation: 'md'
  },

  play: async ({ canvas }) => {
    const region = canvas.getByRole('region', { name: /card title/i });
    await expect(region).toBeVisible();
  }
};

export const AllElevations: Story = {
  args: {
    title: 'Default Title',
    children: 'Default content',
    elevation: 'md'
  },
  render: () => (
    <div style={{ display: 'flex', gap: 20 }}>
      <Card title="No Shadow" elevation="none">
        Elevation none
      </Card>
      <Card title="Small Shadow" elevation="sm">
        Elevation sm
      </Card>
      <Card title="Medium Shadow" elevation="md">
        Elevation md
      </Card>
      <Card title="Large Shadow" elevation="lg">
        Elevation lg
      </Card>
    </div>
  )
};

export const Interactive: Story = {
  args: {
    title: 'Interactive Card',
    children: 'Click inside to simulate interaction.',
    elevation: 'md'
  },

  play: async ({ canvas, userEvent }) => {
    const region = canvas.getByRole('region');

    await expect(region).toBeVisible();
    await userEvent.click(region);
  }
};

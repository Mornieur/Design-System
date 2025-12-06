import Button  from '..';
import type { Meta, StoryObj } from '@storybook/nextjs';
import { expect } from 'storybook/test';

const meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
    variant: { control: 'radio', options: ['primary', 'secondary', 'accent'] },
    disabled: { control: 'boolean' }
  }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { children: 'Clique Aqui', variant: 'primary' },

  play: async ({ canvas }) => {
    const button = canvas.getByRole('button', { name: /clique aqui/i });

    await expect(button).toBeVisible();
    await expect(button).not.toBeDisabled();
  }
};

export const Secondary: Story = {
  args: { children: 'Cancelar', variant: 'secondary' }
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12 }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="accent">Accent</Button>
      <Button variant="primary" disabled>
        Disabled
      </Button>
    </div>
  )
};

export const Interactive: Story = {
  args: { children: 'Clique Aqui', variant: 'primary', disabled: false },

  play: async ({ canvas, userEvent }) => {
    const btn = canvas.getByRole('button');

    await expect(btn).toBeVisible();
    await userEvent.click(btn);
  }
};

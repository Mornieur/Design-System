import Button from '..';
import type { Meta, StoryObj } from '@storybook/nextjs';
import { expect } from 'storybook/test';
import { space } from '@/design-tokens';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Button is the core action primitive. It renders a native button, preserves native button props, forwards refs, and supports visible focus and native disabled behavior.'
      }
    }
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
  args: { children: 'Create account', variant: 'primary' },

  play: async ({ canvas }) => {
    const button = canvas.getByRole('button', { name: /create account/i });

    await expect(button).toBeVisible();
    await expect(button).not.toBeDisabled();
  }
};

export const Secondary: Story = {
  args: { children: 'Cancel', variant: 'secondary' }
};

export const Disabled: Story = {
  args: { children: 'Unavailable action', variant: 'primary', disabled: true },

  play: async ({ canvas }) => {
    const button = canvas.getByRole('button', { name: /unavailable action/i });

    await expect(button).toBeDisabled();
  }
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: space[3], flexWrap: 'wrap' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="accent">Accent</Button>
      <Button variant="primary" disabled>
        Disabled
      </Button>
    </div>
  )
};

export const RealisticUsage: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: space[3],
        alignItems: 'center'
      }}
    >
      <Button variant="primary">Save changes</Button>
      <Button variant="secondary">Review later</Button>
    </div>
  )
};

export const Interactive: Story = {
  args: { children: 'Submit', variant: 'primary', disabled: false },

  play: async ({ canvas, userEvent }) => {
    const btn = canvas.getByRole('button');

    await expect(btn).toBeVisible();
    await userEvent.click(btn);
  }
};

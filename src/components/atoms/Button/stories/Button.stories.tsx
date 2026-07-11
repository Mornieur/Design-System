import Button from '..';
import type { Meta, StoryObj } from '@storybook/nextjs';
import { expect } from 'storybook/test';
import { colorRoles, semanticColors, space, typography } from '@/design-tokens';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Button is the core action primitive. Primary uses the cyan action signal, secondary uses surface and border hierarchy, and accent remains a controlled coral brand accent. It renders a native button, preserves native button props, forwards refs, and supports visible focus and native disabled behavior.'
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
    <div
      style={{
        display: 'grid',
        gap: space[3],
        color: semanticColors.dark.text,
        fontFamily: typography.roles.interface
      }}
    >
      <div style={{ display: 'flex', gap: space[3], flexWrap: 'wrap' }}>
        <Button variant="primary">Primary action</Button>
        <Button variant="secondary">Secondary action</Button>
        <Button variant="accent">Accent moment</Button>
      </div>
      <p style={{ margin: 0, color: semanticColors.dark.textMuted, fontSize: '0.875rem' }}>
        Cyan represents the main action signal. Coral is available for expressive moments, not as
        the default primary action.
      </p>
    </div>
  )
};

export const RealisticUsage: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: space[3],
        alignItems: 'center',
        flexWrap: 'wrap'
      }}
    >
      <Button variant="primary">Deploy service</Button>
      <Button variant="secondary">Review diff</Button>
    </div>
  )
};

export const States: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gap: space[4],
        minWidth: 360,
        fontFamily: typography.roles.interface
      }}
    >
      <div style={{ display: 'flex', gap: space[3], flexWrap: 'wrap' }}>
        <Button variant="primary">Enabled</Button>
        <Button variant="primary" disabled>
          Disabled
        </Button>
      </div>
      <div style={{ display: 'flex', gap: space[3], flexWrap: 'wrap' }}>
        <Button variant="secondary">Secondary</Button>
        <Button variant="secondary" disabled>
          Disabled
        </Button>
      </div>
      <div style={{ display: 'flex', gap: space[3], flexWrap: 'wrap' }}>
        <Button variant="accent">Accent</Button>
        <Button variant="accent" disabled>
          Disabled
        </Button>
      </div>
    </div>
  )
};

export const KeyboardFocus: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: space[3] }}>
      <Button variant="primary">Focusable primary</Button>
      <Button variant="secondary">Focusable secondary</Button>
    </div>
  ),

  play: async ({ canvas, userEvent }) => {
    await userEvent.tab();

    const button = canvas.getByRole('button', { name: /focusable primary/i });

    await expect(button).toHaveFocus();
  }
};

export const UsageGuidance: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gap: space[4],
        maxWidth: 520,
        color: semanticColors.dark.text,
        fontFamily: typography.roles.interface
      }}
    >
      <div style={{ display: 'grid', gap: space[2] }}>
        <strong style={{ color: semanticColors.dark.text }}>Recommended hierarchy</strong>
        <div style={{ display: 'flex', gap: space[3], flexWrap: 'wrap' }}>
          <Button variant="primary">Run check</Button>
          <Button variant="secondary">Open logs</Button>
        </div>
      </div>

      <div style={{ display: 'grid', gap: space[2] }}>
        <strong style={{ color: semanticColors.dark.text }}>Use accent sparingly</strong>
        <div style={{ display: 'flex', gap: space[3], flexWrap: 'wrap' }}>
          <Button variant="accent">Highlight release</Button>
          <span
            style={{
              alignSelf: 'center',
              color: colorRoles.dark.accent.brand,
              fontSize: '0.875rem'
            }}
          >
            Brand accent, not the default action color.
          </span>
        </div>
      </div>
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

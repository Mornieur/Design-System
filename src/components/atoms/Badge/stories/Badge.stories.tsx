import Badge, { type BadgeVariant } from '..';
import type { Meta, StoryObj } from '@storybook/nextjs';
import { expect } from 'storybook/test';
import { semanticColors, space, typography } from '@/design-tokens';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Badge is a compact visual label translated from the Figma Make status and metadata reference. It communicates state, category, version, or small operational information without interactive behavior.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
    variant: {
      control: 'radio',
      options: ['neutral', 'primary', 'success', 'warning', 'danger', 'info']
    },
    size: { control: 'radio', options: ['sm', 'md'] },
    outlined: { control: 'boolean' }
  }
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

const variants: Array<{ label: string; variant: BadgeVariant }> = [
  { label: 'Unknown', variant: 'neutral' },
  { label: 'Pending', variant: 'primary' },
  { label: 'Operational', variant: 'success' },
  { label: 'Degraded', variant: 'warning' },
  { label: 'Incident', variant: 'danger' },
  { label: 'Maintenance', variant: 'info' }
];

const Row = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: space[2],
      color: semanticColors.dark.text,
      fontFamily: typography.roles.interface
    }}
  >
    {children}
  </div>
);

export const Default: Story = {
  args: {
    children: 'v2.4.1'
  },

  play: async ({ canvas }) => {
    await expect(canvas.getByText('v2.4.1').tagName).toBe('SPAN');
  }
};

export const Neutral: Story = {
  args: {
    variant: 'neutral',
    children: 'production'
  }
};

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Pending'
  }
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Operational'
  }
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Degraded'
  }
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Incident'
  }
};

export const Info: Story = {
  args: {
    variant: 'info',
    children: 'Maintenance'
  }
};

export const Outlined: Story = {
  render: () => (
    <Row>
      {variants.map(({ label, variant }) => (
        <Badge key={variant} variant={variant} outlined>
          {label}
        </Badge>
      ))}
    </Row>
  )
};

export const Sizes: Story = {
  render: () => (
    <Row>
      <Badge size="sm">compact</Badge>
      <Badge size="md">default</Badge>
      <Badge size="sm" variant="success">
        live
      </Badge>
      <Badge size="md" variant="primary">
        selected
      </Badge>
    </Row>
  )
};

export const LongContent: Story = {
  render: () => (
    <div style={{ width: 220 }}>
      <Badge variant="info">
        Regional maintenance window scheduled
      </Badge>
    </div>
  )
};

export const InlineUsage: Story = {
  render: () => (
    <p
      style={{
        color: semanticColors.dark.text,
        fontFamily: typography.roles.interface,
        lineHeight: 1.6,
        margin: 0,
        maxWidth: 460
      }}
    >
      Deploying <Badge variant="neutral">api-gateway</Badge> to{' '}
      <Badge variant="primary">staging</Badge> after the current{' '}
      <Badge variant="warning">degraded</Badge> status clears.
    </p>
  )
};

export const AllVariants: Story = {
  render: () => (
    <Row>
      {variants.map(({ label, variant }) => (
        <Badge key={variant} variant={variant}>
          {label}
        </Badge>
      ))}
    </Row>
  )
};

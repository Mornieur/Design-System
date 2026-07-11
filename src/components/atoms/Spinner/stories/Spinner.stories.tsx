import Spinner from '..';
import type { Meta, StoryObj } from '@storybook/nextjs';
import { expect } from 'storybook/test';
import { semanticColors, space, typography } from '@/design-tokens';

const meta = {
  title: 'Components/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Spinner is a compact loading indicator for short indeterminate work. It uses cyan by default and remains quiet unless loading is the primary state.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    tone: {
      control: 'radio',
      options: ['primary', 'neutral', 'success', 'warning', 'danger', 'info', 'inherit']
    },
    label: { control: 'text' },
    decorative: { control: 'boolean' }
  }
} satisfies Meta<typeof Spinner>;

export default meta;

type Story = StoryObj<typeof meta>;

const Row = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: space[4],
      color: semanticColors.dark.text,
      fontFamily: typography.roles.interface
    }}
  >
    {children}
  </div>
);

export const Default: Story = {
  args: { label: 'Loading' },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('status', { name: 'Loading' })).toBeInTheDocument();
  }
};

export const Sizes: Story = {
  render: () => (
    <Row>
      <Spinner size="sm" label="Small loading" />
      <Spinner size="md" label="Medium loading" />
      <Spinner size="lg" label="Large loading" />
    </Row>
  )
};

export const Tones: Story = {
  render: () => (
    <Row>
      <Spinner tone="primary" label="Primary loading" />
      <Spinner tone="neutral" label="Neutral loading" />
      <Spinner tone="success" label="Success loading" />
      <Spinner tone="warning" label="Warning loading" />
      <Spinner tone="danger" label="Danger loading" />
      <Spinner tone="info" label="Info loading" />
    </Row>
  )
};

export const InlineUsage: Story = {
  render: () => (
    <Row>
      <Spinner size="sm" label="Deploying service" />
      <span>Deploying api-gateway</span>
    </Row>
  )
};

import Progress from '..';
import type { Meta, StoryObj } from '@storybook/nextjs';
import { expect } from 'storybook/test';
import { semanticColors, space, typography } from '@/design-tokens';

const meta = {
  title: 'Components/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Progress shows determinate or indeterminate operation progress with compact infrastructure styling.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'number' },
    max: { control: 'number' },
    tone: { control: 'radio', options: ['primary', 'success', 'warning', 'danger', 'info'] },
    size: { control: 'radio', options: ['sm', 'md'] },
    label: { control: 'text' }
  }
} satisfies Meta<typeof Progress>;

export default meta;

type Story = StoryObj<typeof meta>;

const Surface = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      width: 360,
      color: semanticColors.dark.text,
      fontFamily: typography.roles.interface
    }}
  >
    {children}
  </div>
);

export const Default: Story = {
  args: {
    label: 'Deployment progress',
    value: 64
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('progressbar', { name: 'Deployment progress' })).toHaveAttribute(
      'aria-valuenow',
      '64'
    );
  }
};

export const Tones: Story = {
  render: () => (
    <Surface>
      <div style={{ display: 'grid', gap: space[3] }}>
        <Progress label="Primary progress" value={52} />
        <Progress label="Success progress" tone="success" value={88} />
        <Progress label="Warning progress" tone="warning" value={68} />
        <Progress label="Danger progress" tone="danger" value={28} />
        <Progress label="Info progress" tone="info" value={42} />
      </div>
    </Surface>
  )
};

export const Sizes: Story = {
  render: () => (
    <Surface>
      <div style={{ display: 'grid', gap: space[3] }}>
        <Progress label="Small progress" size="sm" value={40} />
        <Progress label="Medium progress" size="md" value={40} />
      </div>
    </Surface>
  )
};

export const Indeterminate: Story = {
  args: {
    label: 'Syncing'
  }
};

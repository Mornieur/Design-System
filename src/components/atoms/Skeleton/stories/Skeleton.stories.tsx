import Skeleton from '..';
import type { Meta, StoryObj } from '@storybook/nextjs';
import { semanticColors, space, typography } from '@/design-tokens';

const meta = {
  title: 'Components/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Skeleton is a quiet loading placeholder for surfaces, rows, and text blocks. It is decorative and hidden from assistive technology.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    width: { control: 'text' },
    height: { control: 'text' },
    radius: { control: 'radio', options: ['none', 'sm', 'md', 'pill'] },
    animated: { control: 'boolean' }
  }
} satisfies Meta<typeof Skeleton>;

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
    width: 220,
    height: 16
  }
};

export const TextBlock: Story = {
  render: () => (
    <Surface>
      <div style={{ display: 'grid', gap: space[2] }}>
        <Skeleton height={18} width="72%" />
        <Skeleton height={14} width="100%" />
        <Skeleton height={14} width="88%" />
      </div>
    </Surface>
  )
};

export const CardLoading: Story = {
  render: () => (
    <Surface>
      <div
        style={{
          border: `1px solid ${semanticColors.dark.border}`,
          borderRadius: 4,
          background: semanticColors.dark.surface,
          display: 'grid',
          gap: space[3],
          padding: space[4]
        }}
      >
        <Skeleton height={24} width="46%" />
        <Skeleton height={72} width="100%" />
        <Skeleton height={14} width="80%" />
      </div>
    </Surface>
  )
};

export const AvatarRow: Story = {
  render: () => (
    <Surface>
      <div style={{ display: 'flex', alignItems: 'center', gap: space[3] }}>
        <Skeleton width={40} height={40} radius="pill" />
        <div style={{ display: 'grid', gap: space[2], flex: 1 }}>
          <Skeleton height={14} width="38%" />
          <Skeleton height={12} width="62%" />
        </div>
      </div>
    </Surface>
  )
};

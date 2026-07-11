import Divider from '..';
import type { Meta, StoryObj } from '@storybook/nextjs';
import { expect } from 'storybook/test';
import { semanticColors, space, typography } from '@/design-tokens';

const meta = {
  title: 'Components/Divider',
  component: Divider,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Divider is a non-interactive hairline separator translated from the Figma Make border and separator language. It uses a native hr element and semantic border tokens.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: { control: 'radio', options: ['horizontal', 'vertical'] },
    inset: { control: 'boolean' }
  }
} satisfies Meta<typeof Divider>;

export default meta;

type Story = StoryObj<typeof meta>;

const Surface = ({ children, width = 420 }: { children: React.ReactNode; width?: number }) => (
  <div
    style={{
      width,
      color: semanticColors.dark.text,
      fontFamily: typography.roles.interface
    }}
  >
    {children}
  </div>
);

const Panel = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      border: `1px solid ${semanticColors.dark.border}`,
      borderRadius: 4,
      background: semanticColors.dark.surface,
      padding: space[4]
    }}
  >
    {children}
  </div>
);

export const Default: Story = {
  render: () => (
    <Surface>
      <Divider />
    </Surface>
  ),

  play: async ({ canvas }) => {
    await expect(canvas.getByRole('separator').tagName).toBe('HR');
  }
};

export const Horizontal: Story = {
  render: () => (
    <Surface>
      <div style={{ display: 'grid', gap: space[3] }}>
        <span style={{ color: semanticColors.dark.textSecondary }}>Deployment summary</span>
        <Divider />
        <span style={{ color: semanticColors.dark.textMuted }}>Updated 12 minutes ago</span>
      </div>
    </Surface>
  )
};

export const Vertical: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        alignItems: 'stretch',
        gap: space[3],
        height: 44,
        color: semanticColors.dark.text,
        fontFamily: typography.roles.interface
      }}
    >
      <span>api-gateway</span>
      <Divider orientation="vertical" />
      <span style={{ color: semanticColors.dark.textMuted }}>prod</span>
      <Divider orientation="vertical" />
      <span style={{ color: semanticColors.dark.success }}>operational</span>
    </div>
  )
};

export const Inset: Story = {
  render: () => (
    <Surface>
      <Panel>
        <div style={{ display: 'grid', gap: space[3] }}>
          <span>Release pipeline</span>
          <Divider inset />
          <span style={{ color: semanticColors.dark.textMuted }}>
            Internal divider respects the content rhythm without touching the panel edge.
          </span>
        </div>
      </Panel>
    </Surface>
  )
};

export const BetweenCards: Story = {
  render: () => (
    <Surface>
      <div style={{ display: 'grid', gap: space[4] }}>
        <Panel>
          <strong>Primary region</strong>
          <p style={{ color: semanticColors.dark.textMuted, marginBlockEnd: 0 }}>us-east-1</p>
        </Panel>
        <Divider />
        <Panel>
          <strong>Failover region</strong>
          <p style={{ color: semanticColors.dark.textMuted, marginBlockEnd: 0 }}>us-west-2</p>
        </Panel>
      </div>
    </Surface>
  )
};

export const InLists: Story = {
  render: () => (
    <Surface>
      <Panel>
        {['Build queued', 'Security scan passed', 'Deploy approved'].map((item, index, items) => (
          <div key={item}>
            <div style={{ paddingBlock: space[2] }}>{item}</div>
            {index < items.length - 1 ? <Divider /> : null}
          </div>
        ))}
      </Panel>
    </Surface>
  )
};

export const InVerticalLayouts: Story = {
  render: () => (
    <Surface width={520}>
      <div style={{ display: 'flex', alignItems: 'stretch', gap: space[4], height: 96 }}>
        <Panel>
          <strong>Requests</strong>
          <div style={{ color: semanticColors.dark.textMuted }}>24,847/min</div>
        </Panel>
        <Divider orientation="vertical" inset />
        <Panel>
          <strong>Error rate</strong>
          <div style={{ color: semanticColors.dark.success }}>0.03%</div>
        </Panel>
      </div>
    </Surface>
  )
};

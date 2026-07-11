import Tabs from '..';
import type { Meta, StoryObj } from '@storybook/nextjs';
import { expect, userEvent, within } from 'storybook/test';
import { semanticColors, space, typography } from '@/design-tokens';

const meta = {
  title: 'Components/Tabs',
  component: Tabs.Root,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Tabs organize related operational views with native buttons, ARIA tab semantics, and keyboard navigation.'
      }
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof Tabs.Root>;

export default meta;

type Story = StoryObj<typeof meta>;

const Panel = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      width: 520,
      color: semanticColors.dark.text,
      fontFamily: typography.roles.interface
    }}
  >
    {children}
  </div>
);

export const Default: Story = {
  render: () => (
    <Panel>
      <Tabs.Root defaultValue="overview">
        <Tabs.List aria-label="Service sections">
          <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
          <Tabs.Trigger value="metrics">Metrics</Tabs.Trigger>
          <Tabs.Trigger value="logs">Logs</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="overview">api-gateway is operational in production.</Tabs.Content>
        <Tabs.Content value="metrics">24,847 requests per minute with 47ms P99.</Tabs.Content>
        <Tabs.Content value="logs">No critical log events in the last 15 minutes.</Tabs.Content>
      </Tabs.Root>
    </Panel>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByRole('tab', { name: 'Metrics' }));
    await expect(canvas.getByRole('tab', { name: 'Metrics' })).toHaveAttribute(
      'aria-selected',
      'true'
    );
  }
};

export const KeyboardNavigation: Story = {
  render: () => (
    <Panel>
      <Tabs.Root defaultValue="overview">
        <Tabs.List aria-label="Keyboard sections">
          <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
          <Tabs.Trigger value="metrics">Metrics</Tabs.Trigger>
          <Tabs.Trigger value="logs">Logs</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="overview">Use Arrow keys, Home, and End to move between tabs.</Tabs.Content>
        <Tabs.Content value="metrics">Keyboard navigation should feel predictable in dense interfaces.</Tabs.Content>
        <Tabs.Content value="logs">Focus-visible remains separate from the selected state.</Tabs.Content>
      </Tabs.Root>
    </Panel>
  )
};

export const Disabled: Story = {
  render: () => (
    <Panel>
      <Tabs.Root defaultValue="summary">
        <Tabs.List aria-label="Report sections">
          <Tabs.Trigger value="summary">Summary</Tabs.Trigger>
          <Tabs.Trigger value="audit" disabled>
            Audit
          </Tabs.Trigger>
          <Tabs.Trigger value="events">Events</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="summary">The summary is available.</Tabs.Content>
        <Tabs.Content value="audit">Audit data is locked.</Tabs.Content>
        <Tabs.Content value="events">Event stream is healthy.</Tabs.Content>
      </Tabs.Root>
    </Panel>
  )
};

export const LongLabelsOverflow: Story = {
  render: () => (
    <Panel>
      <Tabs.Root defaultValue="deployments">
        <Tabs.List aria-label="Long operational sections">
          <Tabs.Trigger value="deployments">Deployment readiness and rollout gates</Tabs.Trigger>
          <Tabs.Trigger value="incidents">Open incidents and degraded service paths</Tabs.Trigger>
          <Tabs.Trigger value="compliance">Audit trails and operational compliance</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="deployments">Long labels should remain readable without collapsing the tab structure.</Tabs.Content>
        <Tabs.Content value="incidents">Overflow should stay predictable inside dashboard surfaces.</Tabs.Content>
        <Tabs.Content value="compliance">Dense product copy should not force a redesign of the component.</Tabs.Content>
      </Tabs.Root>
    </Panel>
  )
};

export const DashboardContext: Story = {
  render: () => (
    <Panel>
      <Tabs.Root defaultValue="deployments">
        <Tabs.List aria-label="Environment details">
          <Tabs.Trigger value="deployments">Deployments</Tabs.Trigger>
          <Tabs.Trigger value="incidents">Incidents</Tabs.Trigger>
          <Tabs.Trigger value="access">Access</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="deployments">
          <div style={{ display: 'grid', gap: space[2] }}>
            <span>v2.4.1 deployed to production 2h ago.</span>
            <span style={{ color: semanticColors.dark.textMuted }}>Rollback window closes in 22h.</span>
          </div>
        </Tabs.Content>
        <Tabs.Content value="incidents">No active incidents.</Tabs.Content>
        <Tabs.Content value="access">3 maintainers can approve production changes.</Tabs.Content>
      </Tabs.Root>
    </Panel>
  )
};

export const Accessibility: Story = {
  render: () => (
    <Panel>
      <Tabs.Root defaultValue="summary">
        <Tabs.List aria-label="Accessible sections">
          <Tabs.Trigger value="summary">Summary</Tabs.Trigger>
          <Tabs.Trigger value="details">Details</Tabs.Trigger>
          <Tabs.Trigger value="history">History</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="summary">
          Tabs keep semantic roles, keyboard navigation, and explicit panel ownership.
        </Tabs.Content>
        <Tabs.Content value="details">
          Selected state, hover, and focus-visible must remain visually distinct.
        </Tabs.Content>
        <Tabs.Content value="history">
          Long-lived dashboard usage depends on low cognitive load and clear focus recovery.
        </Tabs.Content>
      </Tabs.Root>
    </Panel>
  )
};

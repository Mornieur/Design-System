import {
  Alert,
  Badge,
  Button,
  Divider,
  EmptyState,
  Progress,
  Select,
  Skeleton,
  Spinner,
  Tabs
} from '@/index';
import type { Meta, StoryObj } from '@storybook/nextjs';
import { Activity, ServerOff } from 'lucide-react';
import { semanticColors, space, typography } from '@/design-tokens';

const meta = {
  title: 'Showcase/FeitozaUI',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A compact FeitozaUI composition using public components to review the Quiet Future and Neon Infrastructure direction in context.'
      }
    }
  }
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

const panelStyle = {
  border: `1px solid ${semanticColors.dark.border}`,
  borderRadius: 4,
  background: semanticColors.dark.surface,
  padding: space[4]
} satisfies React.CSSProperties;

export const OperationsConsole: Story = {
  render: () => (
    <div
      style={{
        minHeight: '100vh',
        background: semanticColors.dark.background,
        color: semanticColors.dark.text,
        fontFamily: typography.roles.interface,
        padding: space[6]
      }}
    >
      <main style={{ display: 'grid', gap: space[5], maxWidth: 1040, margin: '0 auto' }}>
        <section style={{ display: 'flex', justifyContent: 'space-between', gap: space[4] }}>
          <div>
            <Badge variant="primary">production</Badge>
            <h1 style={{ margin: `${space[3]} 0 ${space[1]}`, fontFamily: typography.roles.heading }}>
              FeitozaUI Operations
            </h1>
            <p style={{ margin: 0, color: semanticColors.dark.textSecondary }}>
              Quiet infrastructure controls with semantic feedback and compact density.
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: space[2] }}>
            <Button variant="secondary">View logs</Button>
            <Button>Deploy</Button>
          </div>
        </section>

        <Alert variant="warning" title="Latency elevated">
          P99 response time is trending above the warning threshold in one region.
        </Alert>

        <section style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: space[4] }}>
          <div style={panelStyle}>
            <Tabs.Root defaultValue="overview">
              <Tabs.List aria-label="Service details">
                <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
                <Tabs.Trigger value="deployments">Deployments</Tabs.Trigger>
                <Tabs.Trigger value="signals">Signals</Tabs.Trigger>
              </Tabs.List>
              <Tabs.Content value="overview">
                <div style={{ display: 'grid', gap: space[3] }}>
                  <div style={{ display: 'flex', gap: space[2], alignItems: 'center' }}>
                    <Activity size={18} color={semanticColors.dark.actionPrimary} />
                    <strong>api-gateway</strong>
                    <Badge variant="success">operational</Badge>
                  </div>
                  <Progress label="Traffic handled" value={72} />
                  <Divider />
                  <Select label="Region" defaultValue="us-east-1" fullWidth>
                    <option value="us-east-1">US East 1</option>
                    <option value="us-west-2">US West 2</option>
                  </Select>
                </div>
              </Tabs.Content>
              <Tabs.Content value="deployments">
                <div style={{ display: 'grid', gap: space[2] }}>
                  <Badge>v2.4.1</Badge>
                  <span style={{ color: semanticColors.dark.textSecondary }}>
                    Deployed 2h ago with zero rollback events.
                  </span>
                </div>
              </Tabs.Content>
              <Tabs.Content value="signals">
                <div style={{ display: 'grid', gap: space[2] }}>
                  <Skeleton height={14} width="70%" />
                  <Skeleton height={14} width="92%" />
                  <Skeleton height={14} width="55%" />
                </div>
              </Tabs.Content>
            </Tabs.Root>
          </div>

          <EmptyState
            title="No active incidents"
            description="New incidents, degraded services, and maintenance windows will appear here."
            icon={<ServerOff />}
            tone="info"
            action={<Button variant="secondary">Open runbooks</Button>}
          />
        </section>

        <section style={{ ...panelStyle, display: 'flex', alignItems: 'center', gap: space[3] }}>
          <Spinner size="sm" label="Synchronizing environment state" />
          <span style={{ color: semanticColors.dark.textSecondary }}>
            Synchronizing environment state
          </span>
        </section>
      </main>
    </div>
  )
};

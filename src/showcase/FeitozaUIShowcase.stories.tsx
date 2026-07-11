import {
  Alert,
  Badge,
  Button,
  Divider,
  EmptyState,
  Flex,
  Input,
  Progress,
  Select,
  Skeleton,
  Spinner,
  Tabs,
  Textarea
} from '@/index';
import type { Meta, StoryObj } from '@storybook/nextjs';
import {
  Activity,
  AlertTriangle,
  CheckCircle2,
  Clock3,
  Database,
  RefreshCw,
  Search,
  Server,
  ShieldCheck
} from 'lucide-react';
import {
  radii,
  semanticColors,
  space,
  typography
} from '@/design-tokens';
import type { CSSProperties, ReactNode } from 'react';

const meta = {
  title: 'Showcase/Infrastructure Dashboard',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Infrastructure Dashboard is a Storybook-only composition that validates the FeitozaUI component language in context. It uses public components and tokens already available in the system, without adding new API, new components, or product-specific runtime behavior.'
      }
    }
  }
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

const pagePadding = space[6];
const mono = typography.roles.code;
const heading = typography.roles.heading;

const pageStyle: CSSProperties = {
  minHeight: '100vh',
  background: semanticColors.dark.background,
  color: semanticColors.dark.text,
  fontFamily: typography.roles.interface,
  padding: pagePadding
};

const shellStyle: CSSProperties = {
  maxWidth: 1280,
  margin: '0 auto',
  display: 'grid',
  gap: space[5]
};

const sectionTitleStyle: CSSProperties = {
  margin: 0,
  fontFamily: heading,
  fontSize: '1rem',
  fontWeight: 600,
  color: semanticColors.dark.text
};

const sectionMetaStyle: CSSProperties = {
  margin: 0,
  color: semanticColors.dark.textMuted,
  fontSize: '0.875rem',
  lineHeight: 1.5
};

const panelStyle: CSSProperties = {
  border: `1px solid ${semanticColors.dark.border}`,
  borderRadius: radii.small,
  background: semanticColors.dark.surface,
  padding: space[4]
};

const subtlePanelStyle: CSSProperties = {
  ...panelStyle,
  background: semanticColors.dark.backgroundAlt
};

const metricGridStyle: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
  gap: space[3]
};

const contentGridStyle: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1.65fr) minmax(320px, 0.95fr)',
  gap: space[4],
  alignItems: 'start'
};

const metricPanelStyle: CSSProperties = {
  ...subtlePanelStyle,
  display: 'grid',
  gap: space[2],
  minHeight: 132
};

const tableStyle: CSSProperties = {
  width: '100%',
  borderCollapse: 'collapse',
  fontSize: '0.875rem'
};

const thStyle: CSSProperties = {
  textAlign: 'left',
  padding: `${space[2]} ${space[2]}`,
  color: semanticColors.dark.textMuted,
  fontSize: '0.75rem',
  fontWeight: 600,
  fontFamily: mono,
  borderBottom: `1px solid ${semanticColors.dark.border}`
};

const tdStyle: CSSProperties = {
  padding: `${space[3]} ${space[2]}`,
  borderBottom: `1px solid ${semanticColors.dark.border}`
};

const srOnlyStyle: CSSProperties = {
  position: 'absolute',
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
  border: 0
};

const Surface = ({
  title,
  description,
  children,
  style
}: {
  title: string;
  description?: string;
  children: ReactNode;
  style?: CSSProperties;
}) => (
  <section style={{ ...panelStyle, ...style }}>
    <Flex direction="column" gap={3}>
      <div>
        <h2 style={sectionTitleStyle}>{title}</h2>
        {description ? <p style={sectionMetaStyle}>{description}</p> : null}
      </div>
      {children}
    </Flex>
  </section>
);

const Metric = ({
  label,
  value,
  meta,
  tone = 'neutral'
}: {
  label: string;
  value: string;
  meta: string;
  tone?: 'neutral' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
}) => (
  <div style={metricPanelStyle}>
    <Flex justify="space-between" align="center">
      <span
        style={{
          color: semanticColors.dark.textMuted,
          fontSize: '0.75rem',
          fontFamily: mono
        }}
      >
        {label}
      </span>
      <Badge size="sm" variant={tone}>
        {meta}
      </Badge>
    </Flex>
    <strong
      style={{
        fontSize: '1.625rem',
        lineHeight: 1,
        fontWeight: 600,
        color: semanticColors.dark.text
      }}
    >
      {value}
    </strong>
    <span style={{ color: semanticColors.dark.textSecondary, fontSize: '0.875rem' }}>{meta}</span>
  </div>
);

const OperationsTable = () => (
  <div style={{ overflowX: 'auto' }}>
    <table style={tableStyle}>
      <caption style={srOnlyStyle}>Service operations overview</caption>
      <thead>
        <tr>
          <th style={thStyle}>Service</th>
          <th style={thStyle}>Health</th>
          <th style={thStyle}>Latency</th>
          <th style={thStyle}>Deploy</th>
          <th style={thStyle}>Region</th>
        </tr>
      </thead>
      <tbody>
        {[
          {
            name: 'api-gateway',
            health: 'operational',
            badge: 'success' as const,
            latency: '118ms',
            deploy: 'v2.4.1',
            region: 'us-east-1'
          },
          {
            name: 'payments-core',
            health: 'degraded',
            badge: 'warning' as const,
            latency: '248ms',
            deploy: 'rollback queued',
            region: 'sa-east-1'
          },
          {
            name: 'auth-service',
            health: 'syncing',
            badge: 'primary' as const,
            latency: '94ms',
            deploy: 'v2.8.0-rc2',
            region: 'eu-west-1'
          }
        ].map((row) => (
          <tr key={row.name}>
            <td style={tdStyle}>
              <Flex align="center" gap={2}>
                <Server aria-hidden="true" size={16} color={semanticColors.dark.textMuted} />
                <div>
                  <div style={{ fontWeight: 600 }}>{row.name}</div>
                  <div
                    style={{
                      color: semanticColors.dark.textMuted,
                      fontFamily: mono,
                      fontSize: '0.75rem'
                    }}
                  >
                    svc/{row.name}
                  </div>
                </div>
              </Flex>
            </td>
            <td style={tdStyle}>
              <Badge variant={row.badge}>{row.health}</Badge>
            </td>
            <td style={tdStyle}>
              <span style={{ fontFamily: mono }}>{row.latency}</span>
            </td>
            <td style={tdStyle}>
              <span style={{ fontFamily: mono, color: semanticColors.dark.textSecondary }}>
                {row.deploy}
              </span>
            </td>
            <td style={tdStyle}>
              <span style={{ fontFamily: mono }}>{row.region}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Filters = () => (
  <Surface
    title="Operational controls"
    description="Native inputs and selection components establish a consistent form language for dense technical surfaces."
  >
    <Flex direction="column" gap={3}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.3fr) minmax(220px, 0.7fr) auto',
          gap: space[3]
        }}
      >
        <Input
          label="Search services"
          placeholder="status:error OR region:us-east-1"
          startIcon={<Search />}
          helperText="Use service name, region, status, or deployment identifier."
          fullWidth
        />
        <Select label="Environment" defaultValue="production" fullWidth>
          <option value="production">Production</option>
          <option value="staging">Staging</option>
          <option value="preview">Preview</option>
        </Select>
        <div style={{ alignSelf: 'end', display: 'flex', gap: space[2], flexWrap: 'wrap' }}>
          <Button variant="secondary">Reset</Button>
          <Button>Run query</Button>
        </div>
      </div>

      <Tabs.Root defaultValue="overview">
        <Tabs.List aria-label="Dashboard context">
          <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
          <Tabs.Trigger value="deployments">Deployments</Tabs.Trigger>
          <Tabs.Trigger value="incidents">Incidents</Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="overview">
          <p style={{ ...sectionMetaStyle, marginTop: space[3] }}>
            Primary health, latency, deployment cadence, and service readiness for the active
            environment.
          </p>
        </Tabs.Content>

        <Tabs.Content value="deployments">
          <p style={{ ...sectionMetaStyle, marginTop: space[3] }}>
            Release flow, rollout progress, and queued promotions across infrastructure surfaces.
          </p>
        </Tabs.Content>

        <Tabs.Content value="incidents">
          <p style={{ ...sectionMetaStyle, marginTop: space[3] }}>
            Open incidents, degraded paths, and runbook escalation context.
          </p>
        </Tabs.Content>
      </Tabs.Root>
    </Flex>
  </Surface>
);

const ChangeRequestForm = () => (
  <Surface
    title="Change request"
    description="A compact form surface validates Input, Textarea, Select, helper text, and action hierarchy inside the same visual system."
  >
    <div style={{ display: 'grid', gap: space[3] }}>
      <Input
        label="Service alias"
        defaultValue="payments-core"
        helperText="Used in deploy logs, alerts, and audit routing."
        fullWidth
      />
      <Select label="Change type" defaultValue="release" fullWidth>
        <option value="release">Release</option>
        <option value="hotfix">Hotfix</option>
        <option value="maintenance">Maintenance</option>
      </Select>
      <Textarea
        label="Operator note"
        defaultValue="Drain low-priority traffic before promoting the new replica set."
        helperText="Keep notes short and operational. This field exists to validate the multiline form language in context."
        fullWidth
      />
      <Flex justify="space-between" align="center" style={{ flexWrap: 'wrap', gap: space[3] }}>
        <Badge variant="info">audit enabled</Badge>
        <div style={{ display: 'flex', gap: space[2], flexWrap: 'wrap' }}>
          <Button variant="secondary">Save draft</Button>
          <Button>Submit change</Button>
        </div>
      </Flex>
    </div>
  </Surface>
);

const DashboardLayout = ({
  loading = false,
  empty = false
}: {
  loading?: boolean;
  empty?: boolean;
}) => (
  <div style={pageStyle}>
    <main style={shellStyle}>
      <header
        style={{
          ...panelStyle,
          background: semanticColors.dark.backgroundAlt
        }}
      >
        <Flex justify="space-between" align="center" style={{ gap: space[4], flexWrap: 'wrap' }}>
          <div style={{ display: 'grid', gap: space[2] }}>
            <Flex align="center" gap={2} style={{ flexWrap: 'wrap' }}>
              <Badge variant="primary">production</Badge>
              <Badge variant="success">all zones reachable</Badge>
              <Badge variant="neutral">updated 41s ago</Badge>
            </Flex>

            <div>
              <h1
                style={{
                  margin: 0,
                  fontFamily: heading,
                  fontSize: '1.875rem',
                  lineHeight: 1.1,
                  color: semanticColors.dark.text
                }}
              >
                Infrastructure control plane
              </h1>
              <p
                style={{
                  margin: `${space[2]} 0 0`,
                  color: semanticColors.dark.textSecondary,
                  maxWidth: 760
                }}
              >
                Quiet technical surfaces, restrained signal color, and dense operational context
                combined through public FeitozaUI components only.
              </p>
            </div>
          </div>

          <Flex align="center" gap={2} style={{ flexWrap: 'wrap' }}>
            <Badge
              variant="info"
              outlined
              style={{ color: semanticColors.dark.accent, borderColor: semanticColors.dark.accent }}
            >
              release candidate
            </Badge>
            <Button variant="secondary">Open logs</Button>
            <Button>
              <RefreshCw aria-hidden="true" size={16} />
              Refresh
            </Button>
          </Flex>
        </Flex>
      </header>

      <Alert
        variant="warning"
        title="Latency elevated in sa-east-1"
        icon={<AlertTriangle />}
      >
        Request p99 is above the warning threshold for one payment path. Status remains readable
        without relying on color alone.
      </Alert>

      <section aria-labelledby="dashboard-summary">
        <Flex direction="column" gap={3}>
          <div>
            <h2 id="dashboard-summary" style={sectionTitleStyle}>
              Operational summary
            </h2>
            <p style={sectionMetaStyle}>
              Metrics are expressed through typography, borders, semantic badges, and restrained
              signal color rather than decorative effects.
            </p>
          </div>

          <div style={metricGridStyle}>
            <Metric label="uptime_30d" value="99.982%" meta="healthy" tone="success" />
            <Metric label="p99_latency" value="118ms" meta="watching" tone="warning" />
            <Metric label="active_deploys" value="03" meta="queued" tone="primary" />
            <Metric label="request_volume" value="14.8M" meta="24h" tone="info" />
          </div>
        </Flex>
      </section>

      <Filters />

      <div style={contentGridStyle}>
        <Surface
          title="Service operations"
          description="A semantic data surface built only for this story. It validates whether public components still feel coherent when embedded inside a denser operational layout."
        >
          <Flex direction="column" gap={3}>
            <OperationsTable />
            <Divider />
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: space[3]
              }}
            >
              <div style={subtlePanelStyle}>
                <Flex direction="column" gap={2}>
                  <Flex justify="space-between" align="center">
                    <span style={{ fontFamily: mono, fontSize: '0.75rem', color: semanticColors.dark.textMuted }}>
                      deploy_progress
                    </span>
                    <span style={{ fontFamily: mono, fontSize: '0.75rem' }}>67%</span>
                  </Flex>
                  <Progress label="Deployment progress" value={67} />
                  <span style={{ color: semanticColors.dark.textSecondary, fontSize: '0.875rem' }}>
                    Rolling out `auth-service` v2.8.0-rc2 across three availability zones.
                  </span>
                </Flex>
              </div>

              <div style={subtlePanelStyle}>
                <Flex direction="column" gap={2}>
                  <Flex align="center" gap={2}>
                    <Database aria-hidden="true" size={16} color={semanticColors.dark.textMuted} />
                    <strong>Runbook sync</strong>
                  </Flex>
                  <Flex align="center" gap={2}>
                    <Spinner size="sm" label="Synchronizing runbooks" />
                    <span style={{ color: semanticColors.dark.textSecondary, fontSize: '0.875rem' }}>
                      Synchronizing annotations and rollback checkpoints.
                    </span>
                  </Flex>
                </Flex>
              </div>
            </div>
          </Flex>
        </Surface>

        <aside style={{ display: 'grid', gap: space[4] }}>
          {empty ? (
            <EmptyState
              title="No active incidents"
              description="When incidents appear, they should coexist with the same component language used by forms, filters, and metrics."
              icon={<ShieldCheck />}
              tone="info"
              action={<Button variant="secondary">Open runbooks</Button>}
            />
          ) : (
            <Surface
              title="Queue health"
              description="Secondary surfaces should remain useful without competing with the primary operational view."
            >
              <div style={{ display: 'grid', gap: space[3] }}>
                <Flex justify="space-between" align="center">
                  <div>
                    <strong>Incident routing</strong>
                    <div style={{ color: semanticColors.dark.textMuted, fontSize: '0.875rem' }}>
                      Pager queue is synchronized
                    </div>
                  </div>
                  <Badge variant="success">stable</Badge>
                </Flex>

                <Divider />

                <div style={{ display: 'grid', gap: space[3] }}>
                  <Flex justify="space-between" align="center">
                    <Flex align="center" gap={2}>
                      <Clock3 aria-hidden="true" size={16} color={semanticColors.dark.textMuted} />
                      <span>Mean acknowledgment</span>
                    </Flex>
                    <span style={{ fontFamily: mono }}>04m 12s</span>
                  </Flex>
                  <Flex justify="space-between" align="center">
                    <Flex align="center" gap={2}>
                      <Activity aria-hidden="true" size={16} color={semanticColors.dark.textMuted} />
                      <span>Error budget remaining</span>
                    </Flex>
                    <span style={{ fontFamily: mono }}>91.4%</span>
                  </Flex>
                  <Flex justify="space-between" align="center">
                    <Flex align="center" gap={2}>
                      <CheckCircle2 aria-hidden="true" size={16} color={semanticColors.dark.textMuted} />
                      <span>Healthy rollout checks</span>
                    </Flex>
                    <span style={{ fontFamily: mono }}>26 / 28</span>
                  </Flex>
                </div>
              </div>
            </Surface>
          )}

          <ChangeRequestForm />
        </aside>
      </div>

      {loading ? (
        <Surface
          title="Loading surfaces"
          description="A loading composition checks whether skeleton, progress, and inline status remain quiet and legible on dark infrastructure backgrounds."
        >
          <div style={{ display: 'grid', gap: space[3] }}>
            <Skeleton height={16} width="42%" />
            <Skeleton height={14} width="100%" />
            <Skeleton height={14} width="88%" />
            <Progress label="Environment sync" />
          </div>
        </Surface>
      ) : null}
    </main>
  </div>
);

export const InfrastructureDashboard: Story = {
  render: () => <DashboardLayout />
};

export const LoadingState: Story = {
  render: () => <DashboardLayout loading />
};

export const EmptyStateView: Story = {
  render: () => <DashboardLayout empty />
};

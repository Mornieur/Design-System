import type { Meta, StoryObj } from '@storybook/nextjs';
import { Activity, CheckCircle2, Clock3, ExternalLink } from 'lucide-react';
import Card from '..';
import Badge from '@/components/atoms/Badge';
import Button from '@/components/atoms/Button';
import Divider from '@/components/atoms/Divider';
import Flex from '@/components/atoms/Flex';
import Input from '@/components/atoms/Input';
import Surface from '@/components/atoms/Surface';
import Textarea from '@/components/atoms/Textarea';
import { semanticColors, space, typography } from '@/design-tokens';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Card is a structured content composition built on top of Surface. It adds consistent inner padding for related content, but it does not define layout, interaction, heading structure, or variants.'
      }
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

const frameStyle = {
  width: 440,
  color: semanticColors.dark.text,
  fontFamily: typography.roles.interface
} as const;

export const ContentCard: Story = {
  render: () => (
    <div style={frameStyle}>
      <Card>
        <Flex direction="column" gap={3}>
          <div>
            <h3 style={{ margin: 0, fontFamily: typography.roles.heading, fontSize: '1rem' }}>
              Queue health
            </h3>
            <p style={{ margin: `${space[2]} 0 0`, color: semanticColors.dark.textSecondary }}>
              Related operational status and supporting metrics belong together in a predictable
              reading rhythm.
            </p>
          </div>

          <Divider />

          <div style={{ display: 'grid', gap: space[3] }}>
            <Flex justify="space-between" align="center">
              <Flex align="center" gap={2}>
                <Clock3 aria-hidden="true" size={16} color={semanticColors.dark.textMuted} />
                <span>Mean acknowledgment</span>
              </Flex>
              <span style={{ fontFamily: typography.roles.code }}>04m 12s</span>
            </Flex>
            <Flex justify="space-between" align="center">
              <Flex align="center" gap={2}>
                <Activity aria-hidden="true" size={16} color={semanticColors.dark.textMuted} />
                <span>Error budget remaining</span>
              </Flex>
              <span style={{ fontFamily: typography.roles.code }}>91.4%</span>
            </Flex>
          </div>
        </Flex>
      </Card>
    </div>
  )
};

export const OperationalStatus: Story = {
  render: () => (
    <div style={frameStyle}>
      <Card>
        <Flex direction="column" gap={3}>
          <Flex justify="space-between" align="center">
            <div>
              <h3 style={{ margin: 0, fontFamily: typography.roles.heading, fontSize: '1rem' }}>
                Incident routing
              </h3>
              <p style={{ margin: `${space[1]} 0 0`, color: semanticColors.dark.textMuted }}>
                Pager queue is synchronized and healthy across the active environment.
              </p>
            </div>
            <Badge variant="success">stable</Badge>
          </Flex>

          <Divider />

          <Flex justify="space-between" align="center">
            <Flex align="center" gap={2}>
              <CheckCircle2 aria-hidden="true" size={16} color={semanticColors.dark.success} />
              <span>Healthy rollout checks</span>
            </Flex>
            <span style={{ fontFamily: typography.roles.code }}>26 / 28</span>
          </Flex>
        </Flex>
      </Card>
    </div>
  )
};

export const CardWithContextualActions: Story = {
  render: () => (
    <div style={frameStyle}>
      <Card>
        <Flex direction="column" gap={3}>
          <Flex justify="space-between" align="center" style={{ gap: space[3], flexWrap: 'wrap' }}>
            <div>
              <h3 style={{ margin: 0, fontFamily: typography.roles.heading, fontSize: '1rem' }}>
                Runbook review
              </h3>
              <p style={{ margin: `${space[1]} 0 0`, color: semanticColors.dark.textSecondary }}>
                Contextual actions can live inside a Card when they belong to the same content
                group.
              </p>
            </div>

            <Flex align="center" gap={2} style={{ flexWrap: 'wrap' }}>
              <Button variant="secondary">Dismiss</Button>
              <Button>
                Open runbook
                <ExternalLink aria-hidden="true" size={14} />
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Card>
    </div>
  )
};

export const FormSection: Story = {
  render: () => (
    <div style={frameStyle}>
      <Card>
        <Flex direction="column" gap={3}>
          <div>
            <h3 style={{ margin: 0, fontFamily: typography.roles.heading, fontSize: '1rem' }}>
              Change request
            </h3>
            <p style={{ margin: `${space[2]} 0 0`, color: semanticColors.dark.textSecondary }}>
              Use Card when related controls, explanation, and actions form one coherent content
              section.
            </p>
          </div>

          <Input
            label="Service alias"
            defaultValue="payments-core"
            helperText="Used in deploy logs, alerts, and audit routing."
            fullWidth
          />

          <Textarea
            label="Operator note"
            defaultValue="Drain low-priority traffic before promoting the new replica set."
            helperText="Keep notes short and operational."
            fullWidth
          />

          <Flex justify="space-between" align="center" style={{ gap: space[2], flexWrap: 'wrap' }}>
            <Badge variant="info">audit enabled</Badge>
            <Flex align="center" gap={2} style={{ flexWrap: 'wrap' }}>
              <Button variant="secondary">Save draft</Button>
              <Button>Submit change</Button>
            </Flex>
          </Flex>
        </Flex>
      </Card>
    </div>
  )
};

export const UsageGuidance: Story = {
  render: () => (
    <div style={{ ...frameStyle, display: 'grid', gap: space[4] }}>
      <Card>
        <Flex direction="column" gap={2}>
          <strong>Use Card when</strong>
          <p style={{ margin: 0, color: semanticColors.dark.textSecondary }}>
            The content has an internal relationship and benefits from a predictable reading rhythm
            inside a contained surface.
          </p>
        </Flex>
      </Card>

      <Surface style={{ padding: space[4] }}>
        <Flex direction="column" gap={2}>
          <strong>Use Surface when</strong>
          <p style={{ margin: 0, color: semanticColors.dark.textSecondary }}>
            You need containment only, such as page sections, wrappers, outer panels, layout
            zones, or future metric shells.
          </p>
        </Flex>
      </Surface>
    </div>
  )
};

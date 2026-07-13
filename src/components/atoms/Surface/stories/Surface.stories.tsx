import Surface from '..';
import type { Meta, StoryObj } from '@storybook/nextjs';
import { semanticColors, space, typography } from '@/design-tokens';
import Flex from '@/components/atoms/Flex';
import Divider from '@/components/atoms/Divider';
import Input from '@/components/atoms/Input';
import Textarea from '@/components/atoms/Textarea';
import Button from '@/components/atoms/Button';

const meta = {
  title: 'Components/Surface',
  component: Surface,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Surface is the first public Level 1 containment primitive in FeitozaUI. It establishes grouping and hierarchy through background, border, and radius only. It does not define layout, interaction, or internal composition.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'radio', options: ['default', 'secondary'] }
  }
} satisfies Meta<typeof Surface>;

export default meta;

type Story = StoryObj<typeof meta>;

const frameStyle = {
  width: 420,
  color: semanticColors.dark.text,
  fontFamily: typography.roles.interface
};

export const DefaultSurface: Story = {
  render: () => (
    <div style={frameStyle}>
      <Surface style={{ padding: space[4] }}>
        <Flex direction="column" gap={3}>
          <strong>Operational grouping</strong>
          <p style={{ margin: 0, color: semanticColors.dark.textSecondary }}>
            Surface provides containment only. Inner layout still belongs to composition.
          </p>
        </Flex>
      </Surface>
    </div>
  )
};

export const SecondarySurface: Story = {
  render: () => (
    <div style={frameStyle}>
      <Surface variant="secondary" style={{ padding: space[4] }}>
        <Flex direction="column" gap={3}>
          <strong>Secondary containment</strong>
          <p style={{ margin: 0, color: semanticColors.dark.textSecondary }}>
            Use the secondary variant for quieter nested or supporting surfaces inside a primary
            panel.
          </p>
        </Flex>
      </Surface>
    </div>
  )
};

export const DashboardGrouping: Story = {
  render: () => (
    <div style={frameStyle}>
      <Surface style={{ padding: space[4] }}>
        <Flex direction="column" gap={3}>
          <Flex justify="space-between" align="center">
            <strong>Service operations</strong>
            <span style={{ fontFamily: typography.roles.code, color: semanticColors.dark.textMuted }}>
              svc/payments-core
            </span>
          </Flex>
          <Divider />
          <Surface variant="secondary" style={{ padding: space[3] }}>
            <Flex direction="column" gap={2}>
              <span style={{ color: semanticColors.dark.textMuted, fontSize: '0.75rem' }}>
                deploy_progress
              </span>
              <strong>67%</strong>
            </Flex>
          </Surface>
        </Flex>
      </Surface>
    </div>
  )
};

export const FormGrouping: Story = {
  render: () => (
    <div style={frameStyle}>
      <Surface style={{ padding: space[4] }}>
        <Flex direction="column" gap={3}>
          <Input label="Service alias" defaultValue="payments-core" fullWidth />
          <Textarea
            label="Operator note"
            defaultValue="Drain low-priority traffic before rollout."
            fullWidth
          />
          <Flex justify="space-between" align="center" style={{ gap: space[2], flexWrap: 'wrap' }}>
            <span style={{ color: semanticColors.dark.textMuted, fontSize: '0.875rem' }}>
              containment without layout abstraction
            </span>
            <Button>Submit change</Button>
          </Flex>
        </Flex>
      </Surface>
    </div>
  )
};

export const NestedHierarchy: Story = {
  render: () => (
    <div style={frameStyle}>
      <Surface style={{ padding: space[4] }}>
        <Flex direction="column" gap={3}>
          <strong>Primary section</strong>
          <Surface variant="secondary" style={{ padding: space[3] }}>
            <Flex direction="column" gap={2}>
              <strong>Secondary grouping</strong>
              <p style={{ margin: 0, color: semanticColors.dark.textSecondary }}>
                Nest surfaces only when hierarchy is explicit and the inner group supports the
                reading order.
              </p>
            </Flex>
          </Surface>
        </Flex>
      </Surface>
    </div>
  )
};

export const SemanticUsageGuidance: Story = {
  render: () => (
    <div style={{ ...frameStyle, display: 'grid', gap: space[4] }}>
      <Surface style={{ padding: space[4] }}>
        <Flex direction="column" gap={2}>
          <strong>Use Surface when</strong>
          <p style={{ margin: 0, color: semanticColors.dark.textSecondary }}>
            You need visible containment, border-first grouping, and Level 1 hierarchy.
          </p>
        </Flex>
      </Surface>

      <div>
        <strong style={{ display: 'block', marginBottom: space[2] }}>Use Box when</strong>
        <p style={{ margin: 0, color: semanticColors.dark.textSecondary }}>
          You need a neutral utility wrapper for spacing or background, without declaring a public
          surface pattern.
        </p>
      </div>
    </div>
  )
};

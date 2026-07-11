import Alert from '..';
import type { Meta, StoryObj } from '@storybook/nextjs';
import { expect } from 'storybook/test';
import { space } from '@/design-tokens';

const meta = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Alert communicates operational feedback with semantic color, supporting text, and accessible announcement behavior. Danger alerts use assertive alert semantics by default.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'radio', options: ['neutral', 'info', 'success', 'warning', 'danger'] },
    title: { control: 'text' }
  }
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Deployment queued',
    children: 'The release is waiting for the next available worker.'
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('status')).toHaveAccessibleName('');
  }
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: space[3], width: 460 }}>
      <Alert variant="neutral" title="Maintenance scheduled">
        Some services may be read-only for a short window.
      </Alert>
      <Alert variant="info" title="Scale-up triggered">
        Additional workers are being provisioned for this queue.
      </Alert>
      <Alert variant="success" title="Deployment healthy">
        Error rate and latency are within the expected range.
      </Alert>
      <Alert variant="warning" title="Latency elevated">
        P99 response time is trending above the warning threshold.
      </Alert>
      <Alert variant="danger" title="Incident active">
        The edge service is returning elevated 5xx responses.
      </Alert>
    </div>
  )
};

export const LongContent: Story = {
  args: {
    variant: 'warning',
    title: 'Manual approval required',
    children:
      'This deployment modifies production networking rules. Review the generated plan and attach an approval record before continuing.'
  }
};

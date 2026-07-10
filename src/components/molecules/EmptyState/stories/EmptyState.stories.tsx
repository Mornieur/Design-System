import Button from '@/components/atoms/Button';
import EmptyState from '..';
import type { Meta, StoryObj } from '@storybook/nextjs';
import { ServerOff, ShieldAlert } from 'lucide-react';

const meta = {
  title: 'Components/EmptyState',
  component: EmptyState,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'EmptyState explains an absent data or workflow state and offers the next useful action without turning the page into marketing.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    tone: { control: 'radio', options: ['neutral', 'info', 'danger'] }
  }
} satisfies Meta<typeof EmptyState>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'No deployments found',
    description: 'Deployments matching the current filters will appear here.'
  }
};

export const WithActions: Story = {
  args: {
    title: 'No services connected'
  },
  render: () => (
    <EmptyState
      title="No services connected"
      description="Connect a service to start collecting deployment and runtime signals."
      tone="info"
      icon={<ServerOff />}
      action={<Button>Connect service</Button>}
      secondaryAction={<Button variant="secondary">View docs</Button>}
    />
  )
};

export const Danger: Story = {
  args: {
    title: 'Access unavailable'
  },
  render: () => (
    <EmptyState
      title="Access unavailable"
      description="The current token cannot read this environment. Check workspace permissions before retrying."
      tone="danger"
      icon={<ShieldAlert />}
      action={<Button variant="accent">Review access</Button>}
    />
  )
};

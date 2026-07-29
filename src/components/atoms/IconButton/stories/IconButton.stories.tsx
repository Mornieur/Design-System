import type { Meta, StoryObj } from '@storybook/nextjs';
import type { ReactNode } from 'react';
import { Check, RefreshCw, X } from 'lucide-react';
import { expect } from 'storybook/test';
import IconButton from '..';
import { semanticColors, space, typography } from '@/design-tokens';

const meta = {
  title: 'Components/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'IconButton is the icon-only action primitive. It requires an explicit accessible name, keeps a square target, reuses the Button action hierarchy, and supports loading without exposing raw icon-only buttons to consumers.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'radio', options: ['primary', 'secondary', 'accent'] },
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    'aria-label': { control: 'text' }
  }
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

const Surface = ({ children }: { children: ReactNode }) => (
  <div
    style={{
      display: 'grid',
      gap: space[4],
      color: semanticColors.dark.text,
      fontFamily: typography.roles.interface
    }}
  >
    {children}
  </div>
);

export const Default: Story = {
  args: {
    'aria-label': 'Close panel',
    icon: <X aria-hidden="true" />
  },

  play: async ({ canvas }) => {
    await expect(canvas.getByRole('button', { name: 'Close panel' })).toBeVisible();
  }
};

export const Variants: Story = {
  args: {
    'aria-label': 'Example icon button',
    icon: <Check aria-hidden="true" />
  },
  render: () => (
    <Surface>
      <div style={{ display: 'flex', gap: space[3], flexWrap: 'wrap' }}>
        <IconButton aria-label="Confirm action" icon={<Check aria-hidden="true" />} />
        <IconButton
          aria-label="Refresh data"
          icon={<RefreshCw aria-hidden="true" />}
          variant="secondary"
        />
        <IconButton aria-label="Close panel" icon={<X aria-hidden="true" />} variant="accent" />
      </div>
    </Surface>
  )
};

export const Sizes: Story = {
  args: {
    'aria-label': 'Example icon button',
    icon: <RefreshCw aria-hidden="true" />
  },
  render: () => (
    <Surface>
      <div style={{ display: 'flex', gap: space[3], alignItems: 'center', flexWrap: 'wrap' }}>
        <IconButton aria-label="Small refresh" icon={<RefreshCw aria-hidden="true" />} size="sm" />
        <IconButton aria-label="Medium refresh" icon={<RefreshCw aria-hidden="true" />} size="md" />
        <IconButton aria-label="Large refresh" icon={<RefreshCw aria-hidden="true" />} size="lg" />
      </div>
    </Surface>
  )
};

export const Loading: Story = {
  args: {
    'aria-label': 'Sync environments',
    icon: <RefreshCw aria-hidden="true" />,
    loading: true,
    loadingLabel: 'Sync in progress'
  },

  play: async ({ canvas }) => {
    const button = canvas.getByRole('button', { name: 'Sync environments' });

    await expect(button).toBeDisabled();
    await expect(button).toHaveAttribute('aria-busy', 'true');
    await expect(button).toHaveAccessibleDescription('Sync in progress');
  }
};

export const Disabled: Story = {
  args: {
    'aria-label': 'Close panel',
    icon: <X aria-hidden="true" />,
    disabled: true,
    variant: 'secondary'
  }
};

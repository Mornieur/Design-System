import Radio from '..';
import type { Meta, StoryObj } from '@storybook/nextjs';
import { expect } from 'storybook/test';
import { useState, type ReactNode } from 'react';
import { semanticColors, space, typography } from '@/design-tokens';

const meta = {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Radio is the native single-selection control for FeitozaUI. It preserves real radio semantics, supports visible labels with helper or error text, and works both alone and in manually composed exclusive groups.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    helperText: { control: 'text' },
    errorMessage: { control: 'text' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    invalid: { control: 'boolean' },
    fullWidth: { control: 'boolean' }
  }
} satisfies Meta<typeof Radio>;

export default meta;

type Story = StoryObj<typeof meta>;

const Surface = ({ children, width = 420 }: { children: ReactNode; width?: number }) => (
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

export const Default: Story = {
  args: {
    label: 'Email summary'
  },

  play: async ({ canvas }) => {
    await expect(canvas.getByLabelText('Email summary')).not.toBeChecked();
  }
};

export const Checked: Story = {
  args: {
    label: 'Weekly digest',
    defaultChecked: true
  },

  play: async ({ canvas }) => {
    await expect(canvas.getByLabelText('Weekly digest')).toBeChecked();
  }
};

export const HelperText: Story = {
  args: {
    label: 'Email updates',
    helperText: 'Use email for release recaps and routine communication.'
  }
};

export const Error: Story = {
  args: {
    label: 'Production approval',
    errorMessage: 'Select the approval path before continuing.'
  },

  play: async ({ canvas }) => {
    const radio = canvas.getByLabelText('Production approval');

    await expect(radio).toHaveAttribute('aria-invalid', 'true');
    await expect(radio).toHaveAccessibleDescription(
      'Select the approval path before continuing.'
    );
  }
};

export const InvalidWithoutErrorMessage: Story = {
  args: {
    label: 'External reviewer',
    invalid: true,
    helperText: 'This path is blocked until compliance verification is complete.'
  }
};

export const Disabled: Story = {
  args: {
    label: 'Legacy SMS route',
    defaultChecked: true,
    disabled: true
  }
};

export const Required: Story = {
  args: {
    label: 'I choose the deployment channel',
    required: true
  }
};

export const FullWidth: Story = {
  render: () => (
    <Surface width={560}>
      <Radio
        label="Notify the primary release owner"
        helperText="The radio stretches with the surrounding form layout."
        fullWidth
      />
    </Surface>
  )
};

export const ControlledState: Story = {
  render: () => {
    const [value, setValue] = useState<'email' | 'slack'>('email');

    return (
      <Surface>
        <div style={{ display: 'grid', gap: space[3] }}>
          <Radio
            name="controlled-channel"
            value="email"
            label="Email"
            checked={value === 'email'}
            onChange={() => setValue('email')}
            helperText="Recommended for weekly summaries."
            fullWidth
          />
          <Radio
            name="controlled-channel"
            value="slack"
            label="Slack"
            checked={value === 'slack'}
            onChange={() => setValue('slack')}
            helperText="Useful for immediate team coordination."
            fullWidth
          />
        </div>
      </Surface>
    );
  }
};

export const GroupExample: Story = {
  render: () => (
    <Surface width={520}>
      <div style={{ display: 'grid', gap: space[3] }}>
        <Radio
          name="contact-channel"
          value="email"
          label="Email"
          defaultChecked
          helperText="Best for release recaps and migration notes."
          fullWidth
        />
        <Radio
          name="contact-channel"
          value="slack"
          label="Slack"
          helperText="Best for rapid team coordination during rollout windows."
          fullWidth
        />
        <Radio
          name="contact-channel"
          value="pager"
          label="Pager"
          helperText="Reserve for urgent incidents and operational escalation."
          fullWidth
        />
      </div>
    </Surface>
  )
};

export const AccessibilityExample: Story = {
  render: () => (
    <Surface>
      <Radio
        id="accessibility-release-channel"
        name="releaseChannel"
        value="email"
        label="Email release channel"
        helperText="The label, helper text, and native radio semantics stay connected."
      />
    </Surface>
  ),

  play: async ({ canvas, userEvent }) => {
    await userEvent.tab();

    const radio = canvas.getByLabelText('Email release channel');

    await expect(radio).toHaveFocus();
    await expect(radio).toHaveAccessibleDescription(
      'The label, helper text, and native radio semantics stay connected.'
    );
  }
};

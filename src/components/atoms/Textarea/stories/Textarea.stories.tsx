import Textarea from '..';
import type { Meta, StoryObj } from '@storybook/nextjs';
import { expect } from 'storybook/test';
import { useState, type ReactNode } from 'react';
import { semanticColors, space, typography } from '@/design-tokens';

const meta = {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Textarea is the foundational multi-line form control for FeitozaUI. It translates the Figma Make textarea reference into a native textarea with the same field anatomy, accessible label and message association, restrained focus treatment, and explicit resize behavior.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    helperText: { control: 'text' },
    errorMessage: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    readOnly: { control: 'boolean' },
    required: { control: 'boolean' },
    invalid: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    resize: { control: 'radio', options: ['none', 'vertical', 'horizontal', 'both'] },
    size: { control: 'radio', options: ['sm', 'md', 'lg'] }
  }
} satisfies Meta<typeof Textarea>;

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
    placeholder: 'Describe the deployment context...'
  },

  play: async ({ canvas }) => {
    await expect(canvas.getByPlaceholderText('Describe the deployment context...')).toBeVisible();
  }
};

export const WithLabel: Story = {
  args: {
    label: 'Incident summary',
    placeholder: 'What changed before the incident started?'
  }
};

export const Placeholder: Story = {
  args: {
    placeholder: 'Add notes for the operations timeline...'
  }
};

export const HelperText: Story = {
  args: {
    label: 'Release notes',
    placeholder: 'Document the user-visible changes.',
    helperText: 'Keep the note concise and link to detailed logs elsewhere.'
  }
};

export const Error: Story = {
  args: {
    label: 'Rollback reason',
    defaultValue: 'bad',
    errorMessage: 'Provide enough context for audit review.'
  },

  play: async ({ canvas }) => {
    const textarea = canvas.getByLabelText('Rollback reason');

    await expect(textarea).toHaveAttribute('aria-invalid', 'true');
    await expect(textarea).toHaveAccessibleDescription(
      'Provide enough context for audit review.'
    );
  }
};

export const InvalidWithoutErrorMessage: Story = {
  args: {
    label: 'Change request',
    defaultValue: 'Needs review',
    invalid: true,
    helperText: 'The field can be marked invalid before a final message is available.'
  }
};

export const Disabled: Story = {
  args: {
    label: 'Archived note',
    defaultValue: 'This incident note is locked.',
    disabled: true
  },

  play: async ({ canvas }) => {
    await expect(canvas.getByLabelText('Archived note')).toBeDisabled();
  }
};

export const Required: Story = {
  args: {
    label: 'Postmortem summary',
    placeholder: 'Summarize impact, cause, and resolution.',
    required: true
  }
};

export const ReadOnly: Story = {
  args: {
    label: 'Generated context',
    defaultValue: 'Service: api-gateway\nRegion: us-east-1\nSeverity: degraded',
    readOnly: true
  }
};

export const Sizes: Story = {
  render: () => (
    <Surface>
      <div style={{ display: 'grid', gap: space[3] }}>
        <Textarea label="Small" placeholder="Compact operational note" size="sm" fullWidth />
        <Textarea label="Medium" placeholder="Default multi-line field" size="md" fullWidth />
        <Textarea label="Large" placeholder="Longer planning or review text" size="lg" fullWidth />
      </div>
    </Surface>
  )
};

export const FullWidth: Story = {
  render: () => (
    <Surface width={560}>
      <Textarea
        label="Migration plan"
        placeholder="Document the rollout sequence..."
        helperText="The textarea expands to the width of its parent."
        fullWidth
      />
    </Surface>
  )
};

export const FilledState: Story = {
  args: {
    label: 'Deployment notes',
    defaultValue:
      'Canary rollout completed for api-gateway. Error budget remains within threshold.',
    helperText: 'Filled text remains readable without changing the resting surface.'
  }
};

export const ControlledValue: Story = {
  render: () => {
    const [value, setValue] = useState('Investigating elevated latency in checkout flow.');

    return (
      <Surface>
        <Textarea
          label="Live incident note"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          helperText={`Characters: ${value.length}`}
          fullWidth
        />
      </Surface>
    );
  }
};

export const ResizeNone: Story = {
  args: {
    label: 'Fixed field',
    placeholder: 'Resize is disabled for fixed layouts.',
    resize: 'none'
  }
};

export const ResizeVertical: Story = {
  args: {
    label: 'Resizable note',
    placeholder: 'Resize vertically when more context is needed.',
    resize: 'vertical'
  }
};

export const WithRows: Story = {
  args: {
    label: 'Runbook excerpt',
    placeholder: 'Paste the relevant runbook section.',
    rows: 6
  }
};

export const HelperAndError: Story = {
  args: {
    label: 'Audit evidence',
    helperText: 'Include ticket IDs, commands, or links that support the change.',
    errorMessage: 'Evidence is required before the change can be approved.',
    defaultValue: ''
  },

  play: async ({ canvas }) => {
    await expect(canvas.getByLabelText('Audit evidence')).toHaveAccessibleDescription(
      'Include ticket IDs, commands, or links that support the change. Evidence is required before the change can be approved.'
    );
  }
};

export const RealisticCombination: Story = {
  render: () => (
    <Surface width={560}>
      <div style={{ display: 'grid', gap: space[4] }}>
        <Textarea
          label="Incident summary"
          name="incidentSummary"
          placeholder="Summarize the issue and customer impact."
          helperText="Use plain language. Detailed metrics can stay in the linked dashboard."
          required
          fullWidth
        />
        <Textarea
          label="Mitigation notes"
          name="mitigationNotes"
          defaultValue="Traffic shifted from us-east-1 to us-west-2 while the database pool recovered."
          rows={5}
          fullWidth
        />
        <Textarea
          label="Approval rationale"
          name="approvalRationale"
          invalid
          errorMessage="Approval rationale is required for production changes."
          fullWidth
        />
      </div>
    </Surface>
  )
};

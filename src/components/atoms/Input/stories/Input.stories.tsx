import Input from '..';
import type { Meta, StoryObj } from '@storybook/nextjs';
import { expect } from 'storybook/test';
import { AlertCircle, CheckCircle, Mail, Search, User } from 'lucide-react';
import { useState, type ReactNode } from 'react';
import { semanticColors, space, typography } from '@/design-tokens';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Input is the foundational single-line form control for FeitozaUI. It uses a native input, forwards refs to the input element, supports visible labels and associated helper or error text, and keeps icon slots decorative by default.'
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
    size: { control: 'radio', options: ['sm', 'md', 'lg'] }
  }
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

const Surface = ({ children, width = 360 }: { children: ReactNode; width?: number }) => (
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
    placeholder: 'service-api'
  },

  play: async ({ canvas }) => {
    await expect(canvas.getByPlaceholderText('service-api')).toBeVisible();
  }
};

export const Disabled: Story = {
  args: {
    label: 'Endpoint',
    defaultValue: 'api.feitoza.local',
    disabled: true
  },

  play: async ({ canvas }) => {
    await expect(canvas.getByLabelText('Endpoint')).toBeDisabled();
  }
};

export const ReadOnly: Story = {
  args: {
    label: 'Environment',
    defaultValue: 'Production',
    readOnly: true
  }
};

export const Invalid: Story = {
  args: {
    label: 'Workspace slug',
    defaultValue: 'feitoza ui',
    invalid: true,
    errorMessage: 'Use lowercase letters, numbers, and hyphens only.',
    endIcon: <AlertCircle />
  },

  play: async ({ canvas }) => {
    const input = canvas.getByLabelText('Workspace slug');

    await expect(input).toHaveAttribute('aria-invalid', 'true');
    await expect(input).toHaveAccessibleDescription(
      'Use lowercase letters, numbers, and hyphens only.'
    );
  }
};

export const InvalidWithoutErrorMessage: Story = {
  args: {
    label: 'Provisioning key',
    defaultValue: 'expired-key',
    invalid: true,
    helperText: 'The invalid state can be shown before a final error message is available.'
  },

  play: async ({ canvas }) => {
    await expect(canvas.getByLabelText('Provisioning key')).toHaveAttribute(
      'aria-invalid',
      'true'
    );
  }
};

export const Required: Story = {
  args: {
    label: 'Project name',
    placeholder: 'Atlas Control',
    required: true
  }
};

export const HelperText: Story = {
  args: {
    label: 'Deployment region',
    placeholder: 'us-east-1',
    helperText: 'Use the provider region code for routing and logs.'
  }
};

export const WithLabel: Story = {
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'maria@feitoza.dev',
    autoComplete: 'email'
  }
};

export const WithStartIcon: Story = {
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'maria@feitoza.dev',
    startIcon: <Mail />
  }
};

export const WithEndIcon: Story = {
  args: {
    label: 'Alias',
    defaultValue: 'maria-feitoza',
    endIcon: <CheckCircle />
  }
};

export const Sizes: Story = {
  render: () => (
    <Surface>
      <div style={{ display: 'grid', gap: space[3] }}>
        <Input label="Small" placeholder="Dense table filter" size="sm" fullWidth />
        <Input label="Medium" placeholder="Default form field" size="md" fullWidth />
        <Input label="Large" placeholder="Higher emphasis field" size="lg" fullWidth />
      </div>
    </Surface>
  )
};

export const FullWidth: Story = {
  render: () => (
    <Surface width={520}>
      <Input
        label="Service endpoint"
        placeholder="https://api.feitoza.io/v1/services"
        helperText="The field expands to the width of its parent."
        fullWidth
      />
    </Surface>
  )
};

export const FilledState: Story = {
  args: {
    label: 'Service name',
    defaultValue: 'api-gateway-prod',
    helperText: 'A filled field keeps the same quiet surface and readable value.'
  }
};

export const ControlledValue: Story = {
  render: () => {
    const [value, setValue] = useState('status:error');

    return (
      <Surface>
        <Input
          label="Log query"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          startIcon={<Search />}
          helperText={`Current query: ${value || 'empty'}`}
          fullWidth
        />
      </Surface>
    );
  }
};

export const AllStates: Story = {
  render: () => (
    <Surface width={760}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
          gap: space[4]
        }}
      >
        <Input label="Default" placeholder="Enter value" fullWidth />
        <Input label="Hover target" placeholder="Move pointer here" fullWidth />
        <Input label="Focused by keyboard" placeholder="Tab into this field" fullWidth />
        <Input label="Required" required placeholder="Required value" fullWidth />
        <Input label="Filled" defaultValue="api-gateway-prod" fullWidth />
        <Input label="With helper" helperText="Helper text stays quiet and readable." fullWidth />
        <Input
          label="Invalid"
          defaultValue="wrong format"
          errorMessage="This value does not match the expected format."
          fullWidth
        />
        <Input label="Read only" defaultValue="Audit mode" readOnly fullWidth />
        <Input label="Disabled" defaultValue="Unavailable" disabled fullWidth />
      </div>
    </Surface>
  )
};

export const RealisticFormExample: Story = {
  render: () => (
    <Surface width={520}>
      <div style={{ display: 'grid', gap: space[4] }}>
        <Input
          label="Service name"
          name="serviceName"
          placeholder="payments-edge"
          helperText="This name appears in deploy logs and incident reports."
          startIcon={<User />}
          fullWidth
        />
        <Input
          label="Owner email"
          name="ownerEmail"
          type="email"
          placeholder="team@feitoza.dev"
          autoComplete="email"
          startIcon={<Mail />}
          fullWidth
        />
        <Input
          label="Search logs"
          name="logQuery"
          type="search"
          inputMode="search"
          placeholder="status:error"
          startIcon={<Search />}
          fullWidth
        />
      </div>
    </Surface>
  )
};

export const AccessibilityExample: Story = {
  render: () => (
    <Surface>
      <Input
        id="accessibility-api-key"
        label="API key alias"
        name="apiKeyAlias"
        placeholder="billing-readonly"
        required
        helperText="The visible label, required state, and helper text are associated with the native input."
        fullWidth
      />
    </Surface>
  ),

  play: async ({ canvas, userEvent }) => {
    await userEvent.tab();

    const input = canvas.getByLabelText('API key alias');

    await expect(input).toHaveFocus();
    await expect(input).toBeRequired();
    await expect(input).toHaveAccessibleDescription(
      'The visible label, required state, and helper text are associated with the native input.'
    );
  }
};

export const UsageGuidelines: Story = {
  render: () => (
    <Surface width={560}>
      <div style={{ display: 'grid', gap: space[4] }}>
        <Input
          label="Use a visible label"
          placeholder="Placeholder supports examples, not naming."
          helperText="Prefer a label for accessible naming. Placeholder text can disappear while typing."
          fullWidth
        />
        <Input
          label="Use error text with invalid state"
          defaultValue="prod east"
          errorMessage="Describe what failed and how to fix it."
          fullWidth
        />
        <Input
          label="Keep icon usage intentional"
          placeholder="Icons are slots for recognition, not decoration."
          startIcon={<Search />}
          fullWidth
        />
      </div>
    </Surface>
  )
};

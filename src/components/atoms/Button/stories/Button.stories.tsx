import { Button } from '..';
import type { StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs', 'stable'],
  argTypes: {
    children: { control: 'text' },
    variant: { control: 'radio', options: ['primary', 'secondary', 'accent'] },
    disabled: { control: 'boolean' }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { children: 'Clique Aqui', variant: 'primary' },
  play: async ({ canvasElement }) => {
    const button = canvasElement.querySelector('button');
    if (!button) throw new Error('Botão não encontrado');
    expect(button).toHaveTextContent('Clique Aqui');
    expect(button).not.toBeDisabled();
  }
};

export const Secondary: Story = {
  args: { children: 'Cancelar', variant: 'secondary' }
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12 }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="accent">Accent</Button>
      <Button variant="primary" disabled>
        Disabled
      </Button>
    </div>
  )
};

export const Interactive: Story = {
  args: { children: 'Clique Aqui', variant: 'primary', disabled: false },
  argTypes: {
    children: { control: 'text' },
    variant: { control: 'radio', options: ['primary', 'secondary', 'accent'] },
    disabled: { control: 'boolean' }
  }
};

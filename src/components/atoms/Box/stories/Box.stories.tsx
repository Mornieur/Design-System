import type { Meta, StoryObj } from '@storybook/nextjs';
import { expect } from 'storybook/test';
import Box from '..';
import { colors, space, radii } from '@/design-tokens';

const meta = {
  title: 'Atoms/Box',
  component: Box,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    padding: { control: 'select', options: Object.keys(space).map(Number) },
    margin: { control: 'select', options: Object.keys(space).map(Number) },
    bg: { control: 'select', options: Object.keys(colors) },
    radius: { control: 'select', options: Object.keys(radii) }
  }
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    padding: 4,
    bg: 'background',
    radius: 'medium',
    children: 'Surface primitive'
  },
  play: async ({ canvas }) => {
    const box = canvas.getByText('Surface primitive');
    await expect(box).toBeVisible();
  }
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <Box padding={4} bg="primary" radius="large">
        Primary
      </Box>
      <Box padding={4} bg="secondary" radius="large">
        Secondary
      </Box>
      <Box padding={4} bg="accent" radius="large">
        Accent
      </Box>
    </div>
  )
};

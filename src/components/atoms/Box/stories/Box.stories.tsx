import type { Meta, StoryObj } from '@storybook/nextjs';
import { expect } from 'storybook/test';
import Box from '..';
import { colors, space, radii } from '@/design-tokens';

const meta = {
  title: 'Components/Box',
  component: Box,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Box is a presentational surface primitive. It supports token-based spacing, background, and radius props without adding semantic roles by default.'
      }
    }
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

export const SurfacePrimitive: Story = {
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

export const TokenBackgrounds: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: space[4], alignItems: 'center' }}>
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

export const RealisticSurface: Story = {
  render: () => (
    <Box padding={5} bg="backgroundAlt" radius="large" style={{ width: 320 }}>
      <strong>Account activity</strong>
      <p style={{ margin: `${space[2]} 0 0`, color: colors.textSecondary }}>
        A token-based surface for grouping related interface content.
      </p>
    </Box>
  )
};

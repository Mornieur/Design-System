import Flex from '..';
import type { Meta, StoryObj } from '@storybook/nextjs';
import Box from '../../Box';

const meta = {
  title: 'Atoms/Flex',
  component: Flex,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'radio',
      options: ['row', 'column']
    },
    justify: {
      control: 'select',
      options: [
        'flex-start',
        'center',
        'flex-end',
        'space-between',
        'space-around',
        'space-evenly'
      ]
    },
    align: {
      control: 'select',
      options: ['flex-start', 'center', 'flex-end', 'stretch', 'baseline']
    },
    gap: { control: 'select', options: [1, 2, 3, 4, 5, 6, 7, 8] },
    wrap: {
      control: 'radio',
      options: ['nowrap', 'wrap', 'wrap-reverse']
    }
  }
} satisfies Meta<typeof Flex>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    direction: 'row',
    justify: 'center',
    align: 'center',
    gap: 3,
    children: (
      <>
        <Box padding={3} bg="backgroundAlt" radius="medium">
          Foundations
        </Box>
        <Box padding={3} bg="primary" radius="medium">
          Primitives
        </Box>
        <Box padding={3} bg="secondary" radius="medium">
          Accessibility
        </Box>
      </>
    )
  }
};

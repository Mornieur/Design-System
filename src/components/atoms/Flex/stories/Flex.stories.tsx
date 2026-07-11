import Flex from '..';
import type { Meta, StoryObj } from '@storybook/nextjs';
import Box from '../../Box';
import { colors, space } from '@/design-tokens';

const meta = {
  title: 'Components/Flex',
  component: Flex,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Flex is a presentational layout primitive for simple flexbox composition. It supports token-based gaps and does not add semantic roles by default.'
      }
    }
  },
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

export const Column: Story = {
  args: {
    direction: 'column',
    align: 'stretch',
    gap: 3,
    children: (
      <>
        <Box padding={3} bg="backgroundAlt" radius="medium">
          Summary
        </Box>
        <Box padding={3} bg="backgroundAlt" radius="medium">
          Transactions
        </Box>
        <Box padding={3} bg="backgroundAlt" radius="medium">
          Settings
        </Box>
      </>
    )
  }
};

export const RealisticToolbar: Story = {
  render: () => (
    <Flex
      align="center"
      justify="space-between"
      gap={4}
      style={{
        width: 420,
        padding: space[4],
        border: `1px solid ${colors.backgroundAlt}`,
        borderRadius: 8
      }}
    >
      <strong>Statement</strong>
      <Flex gap={2}>
        <Box padding={2} bg="backgroundAlt" radius="small">
          Export
        </Box>
        <Box padding={2} bg="primary" radius="small">
          Filter
        </Box>
      </Flex>
    </Flex>
  )
};

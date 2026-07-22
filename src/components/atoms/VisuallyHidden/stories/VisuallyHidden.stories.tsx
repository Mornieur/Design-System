import type { Meta, StoryObj } from '@storybook/nextjs';
import VisuallyHidden from '..';
import { semanticColors, space, typography } from '@/design-tokens';

const meta = {
  title: 'Components/VisuallyHidden',
  component: VisuallyHidden,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'VisuallyHidden hides content visually while preserving it for assistive technologies. It is intended for icon-only controls, invisible helper text, and accessible names that should not appear in the visual layout.'
      }
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof VisuallyHidden>;

export default meta;

type Story = StoryObj<typeof meta>;

const Surface = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      display: 'grid',
      gap: space[3],
      color: semanticColors.dark.text,
      fontFamily: typography.roles.interface
    }}
  >
    {children}
  </div>
);

export const IconOnlyControl: Story = {
  render: () => (
    <Surface>
      <p>Inspect the button name with accessibility tools or Storybook interactions.</p>
      <button
        type="button"
        style={{
          display: 'inline-flex',
          width: 44,
          height: 44,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18">
          <path
            d="M4 4l10 10M14 4 4 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        <VisuallyHidden>Close panel</VisuallyHidden>
      </button>
    </Surface>
  )
};

import { Meta, StoryFn } from '@storybook/nextjs';
import { UserProfile } from '..';

export default {
  title: 'Internal/UserProfile',
  component: UserProfile,
  parameters: {
    docs: {
      description: {
        component:
          'UserProfile is a product-like example and is not part of the public package API.'
      }
    }
  }
} as Meta<typeof UserProfile>;

const Template: StoryFn<typeof UserProfile> = (args) => (
  <UserProfile {...args} />
);

export const Default = Template.bind({});
Default.args = {
  name: 'FeitozaUI',
  role: 'Frontend Engineer'
};

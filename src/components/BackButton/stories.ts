import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import { BackButton } from '.';

const meta = {
  args: { onClick: action('button clicked') },
  component: BackButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/BackButton',
} satisfies Meta<typeof BackButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: 'primary',
  },
};
export const Secondary: Story = {
  args: {
    color: 'secondary',
  },
};

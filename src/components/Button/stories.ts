import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '.';

const meta = {
  args: { onClick: action('button clicked') },
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Button',
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Button',
    color: 'primary',
  },
};
export const Secondary: Story = {
  args: {
    children: 'Button',
    color: 'secondary',
  },
};

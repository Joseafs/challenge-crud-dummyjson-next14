import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import { FaAddressBook } from 'react-icons/fa';

import { ButtonIcon } from '.';

const meta = {
  args: { onClick: action('button clicked') },
  component: ButtonIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/ButtonIcon',
} satisfies Meta<typeof ButtonIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: 'primary',
    icon: FaAddressBook,
  },
};
export const Secondary: Story = {
  args: {
    color: 'secondary',
    icon: FaAddressBook,
  },
};

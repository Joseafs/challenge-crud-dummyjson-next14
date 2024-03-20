import { faker } from '@faker-js/faker';
import type { Meta, StoryObj } from '@storybook/react';

import { PageTitle } from '.';

const meta = {
  component: PageTitle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Example/PageTitle',
} satisfies Meta<typeof PageTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: faker.word.words(3),
    color: 'primary',
  },
};

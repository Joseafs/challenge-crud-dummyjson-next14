import { faker } from '@faker-js/faker';
import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import { InputText } from '.';

const meta = {
  args: { onChange: (e) => action('OnChange')(e) },
  component: InputText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/InputText',
} satisfies Meta<typeof InputText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    name: 'input-faker',
    value: faker.word.words(3).toString(),
  },
};

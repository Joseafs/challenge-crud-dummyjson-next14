import { faker } from '@faker-js/faker';
import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import { generateArray } from '~/utils/generateArray';

import { SelectOptions } from './types';

import { Select } from '.';

const meta = {
  args: { onChange: (e) => action('onChange')(e) },
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Select',
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = generateArray<SelectOptions>(8, () => ({
  label: faker.lorem.words(1),
  value: faker.lorem.words(1),
}));

export const Primary: Story = {
  args: {
    options: options,
    value: faker.word.words(3).toString(),
  },
};

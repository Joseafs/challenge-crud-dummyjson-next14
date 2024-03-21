import { faker } from '@faker-js/faker';
import { fireEvent, render } from '@testing-library/react';

import { withThemeProvider } from '~/theme/utils';
import { generateArray } from '~/utils/generateArray';
import { snapshotSelectValues } from '~/utils/mocks/snapshotMockValues';

import { SelectOptions } from './types';

import { Select } from '.';

describe('Select', () => {
  test('Should match snapshot', () => {
    const mockFn = jest.fn();

    const { container } = render(
      withThemeProvider(<Select label="select-field" name="faker" onChange={mockFn} options={snapshotSelectValues} />),
    );

    expect(container).toMatchSnapshot();
  });

  test('Should change select to new value', () => {
    const options = generateArray<SelectOptions>(4, () => ({
      label: faker.lorem.words(1),
      value: faker.lorem.words(1),
    }));

    const mockFn = jest.fn();
    const { getByTestId } = render(
      withThemeProvider(<Select label="select-field" name="faker" onChange={mockFn} options={options} />),
    );

    const newSelecteValue = options[2].value;

    const input = getByTestId('select-faker') as HTMLInputElement;
    fireEvent.change(input, { target: { value: newSelecteValue } });
    expect(input.value).toBe(newSelecteValue);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});

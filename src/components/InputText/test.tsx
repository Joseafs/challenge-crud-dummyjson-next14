import { fireEvent, render } from '@testing-library/react';

import { withThemeProvider } from '~/theme/utils';
import { snapshotYamamotoName } from '~/utils/mocks/snapshotMockValues';

import { InputText } from '.';

describe('InputText', () => {
  test('Should check input change', () => {
    const mockFn = jest.fn();
    const { getByTestId } = render(
      withThemeProvider(<InputText label="Input test" name="test" onChange={mockFn}></InputText>),
    );

    const input = getByTestId('input-test') as HTMLInputElement;
    fireEvent.change(input, { target: { value: snapshotYamamotoName } });
    expect(input.value).toBe(snapshotYamamotoName);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});

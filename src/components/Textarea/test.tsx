import { fireEvent, render } from '@testing-library/react';

import { withThemeProvider } from '~/theme/utils';
import { snapshotYamamotoName } from '~/utils/mocks/snapshotMockValues';

import { Textarea } from '.';

describe('Textarea', () => {
  test('Should check input change', () => {
    const mockFn = jest.fn();
    const { getByTestId } = render(
      withThemeProvider(<Textarea label="Text test" name="test" onChange={mockFn}></Textarea>),
    );

    const input = getByTestId('textarea-test') as HTMLInputElement;
    fireEvent.change(input, { target: { value: snapshotYamamotoName } });
    expect(input.value).toBe(snapshotYamamotoName);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});

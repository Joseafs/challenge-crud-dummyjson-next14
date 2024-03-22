import { render } from '@testing-library/react';

import theme from '~/theme/config';
import { withThemeProvider } from '~/theme/utils/withThemeProvider';
import { snapshotYamamotoName } from '~/utils/mocks/snapshotMockValues';

import { Button } from '.';

describe('Button', () => {
  test('Should match snapshot', () => {
    const { container } = render(withThemeProvider(<Button />));
    expect(container).toMatchSnapshot();
  });

  test('Should button render disabled', () => {
    const { getByText } = render(withThemeProvider(<Button disabled>{snapshotYamamotoName}</Button>));
    const button = getByText(snapshotYamamotoName);

    expect(button).toBeDisabled();
  });

  test('Should background color of button be equal a primary.main', () => {
    const { getByText } = render(withThemeProvider(<Button color="primary">{snapshotYamamotoName}</Button>));
    const button = getByText(snapshotYamamotoName);

    expect(button).toHaveStyle(`background-color: ${theme.palette.primary.main}`);
  });
});

import { render } from '@testing-library/react';

import theme from '~/theme/config';
import { withThemeProvider } from '~/theme/utils/withThemeProvider';
import { snapshotYamamotoName } from '~/utils/mocks/snapshotMockValues';

import { PageTitle } from '.';

describe('PageTitle', () => {
  test('Should match snapshot', () => {
    const { container } = render(withThemeProvider(<PageTitle>{snapshotYamamotoName}</PageTitle>));
    expect(container).toMatchSnapshot();
  });

  test('Should apply the provided color', () => {
    const expectedColor = theme.palette.primary.main;

    const { getByText } = render(withThemeProvider(<PageTitle color={'primary'}>{snapshotYamamotoName}</PageTitle>));
    const pageTitle = getByText(snapshotYamamotoName);
    expect(pageTitle).toHaveStyle(`color: ${expectedColor}`);
  });

  test('Should apply the provided size', () => {
    const expectedSize = theme.fontSizes.extraLarge;

    const { getByText } = render(withThemeProvider(<PageTitle size={'extraLarge'}>{snapshotYamamotoName}</PageTitle>));
    const pageTitle = getByText(snapshotYamamotoName);
    expect(pageTitle).toHaveStyle(`font-size: ${expectedSize}`);
  });
});

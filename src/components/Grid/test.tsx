import { render } from '@testing-library/react';

import { withThemeProvider } from '~/theme/utils';
import { snapshotYamamotoName } from '~/utils/mocks/snapshotMockValues';

import { Grid } from '.';

describe('Grid', () => {
  test('Should match snapshot', () => {
    const { container } = render(withThemeProvider(<Grid>{snapshotYamamotoName}</Grid>));
    expect(container).toMatchSnapshot();
  });

  test('Should have the content', () => {
    const { queryByText } = render(withThemeProvider(<Grid>Text test</Grid>));
    expect(queryByText('Text test')).toBeTruthy();
  });

  // TODO: test margin
  // TODO: test padding
  // TODO: test backgroundColor of theme
  // TODO: should render with display flex with flex 1
  // TODO: should render with display grid
});

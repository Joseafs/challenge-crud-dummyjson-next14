import { render } from '@testing-library/react';

import { withThemeProvider } from '~/theme/utils/withThemeProvider';
import { snapshotYamamotoName } from '~/utils/mocks/snapshotMockValues';

import { PageTitle } from '.';

describe('PageTitle', () => {
  test('Should match snapshot', () => {
    const { container } = render(withThemeProvider(<PageTitle>{snapshotYamamotoName}</PageTitle>));
    expect(container).toMatchSnapshot();
  });

  // TODO: test of color
  // TODO: test of size
});

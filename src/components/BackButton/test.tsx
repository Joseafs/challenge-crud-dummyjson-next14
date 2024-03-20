import { render } from '@testing-library/react';

import { withThemeProvider } from '~/theme/utils/withThemeProvider';

import { BackButton } from '.';

describe('BackButton', () => {
  test('Should match snapshot', () => {
    const { container } = render(withThemeProvider(<BackButton />));
    expect(container).toMatchSnapshot();
  });

  // TODO: should click and back router/navigation;
});

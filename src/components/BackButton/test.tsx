import { render } from '@testing-library/react';

import { withThemeProvider } from '~/theme/utils/withThemeProvider';

import { BackButton } from '.';

// TODO: improve test
// - validate router back;

describe('BackButton', () => {
  test('Should match snapshot', () => {
    const { container } = render(withThemeProvider(<BackButton />));
    expect(container).toMatchSnapshot();
  });
});

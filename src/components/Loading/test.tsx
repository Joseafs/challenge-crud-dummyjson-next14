import { render, screen } from '@testing-library/react';

import theme from '~/theme/config';
import { withThemeProvider } from '~/theme/utils';

import { Loading } from '.';

describe('Loading', () => {
  test('Should match snapshot', () => {
    const { container } = render(withThemeProvider(<Loading />));
    expect(container).toMatchSnapshot();
  });

  test('applies custom size to spinner', () => {
    const size = 8;
    const expectedSize = theme.space * size;
    render(withThemeProvider(<Loading size={size} />));

    const spinner = screen.getByTestId('loading-spinner');

    expect(spinner).toHaveStyle(`width: ${expectedSize}px`);
    expect(spinner).toHaveStyle(`height: ${expectedSize}px`);
  });
});

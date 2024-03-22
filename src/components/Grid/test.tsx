import { render } from '@testing-library/react';

import theme from '~/theme/config';
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

  test('Should have margin applied', () => {
    const expectedMargin = `margin: ${theme.space}px`;
    const { container } = render(withThemeProvider(<Grid margin={[1]}>{snapshotYamamotoName}</Grid>));

    expect(container.firstChild).toHaveStyle(expectedMargin);
  });

  test('Should have padding applied', () => {
    const expectedPadding = `padding: ${theme.space}px`;
    const { container } = render(withThemeProvider(<Grid padding={[1]}>{snapshotYamamotoName}</Grid>));

    expect(container.firstChild).toHaveStyle(expectedPadding);
  });

  test('Should have background color from theme applied', () => {
    const expectedColor = theme.palette.primary.main;

    const { container } = render(withThemeProvider(<Grid backgroundColor="primary">{snapshotYamamotoName}</Grid>));
    expect(container.firstChild).toHaveStyle(`background-color: ${expectedColor};`);
  });

  test('Should render with display flex with flex 1', () => {
    const { container } = render(withThemeProvider(<Grid displayType="flex">{snapshotYamamotoName}</Grid>));
    expect(container.firstChild).toHaveStyle('display: flex;');
    expect(container.firstChild).toHaveStyle('flex: 1;');
  });

  test('Should render with display grid', () => {
    const { container } = render(withThemeProvider(<Grid displayType="grid">{snapshotYamamotoName}</Grid>));
    expect(container.firstChild).toHaveStyle('display: grid;');
  });
});

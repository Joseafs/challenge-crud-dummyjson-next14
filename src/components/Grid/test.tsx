import { render } from '@testing-library/react';

import { ThemeProvider } from '~/theme/provider';

import { Grid } from '.';

const component = (
  <ThemeProvider>
    <Grid>Text test</Grid>
  </ThemeProvider>
);

// TODO: improve test

describe('Grid', () => {
  it('Should have the content', () => {
    const { queryByText } = render(component);
    expect(queryByText('Text test')).toBeTruthy();
  });
});

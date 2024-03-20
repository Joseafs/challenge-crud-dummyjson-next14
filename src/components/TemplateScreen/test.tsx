import { render } from '@testing-library/react';

import { withThemeProvider } from '~/theme/utils';
import { snapshotYamamotoDescription } from '~/utils/mocks/snapshotMockValues';

import { TemplateScreen } from '.';

// TODO: improve test

describe('TemplateScreen', () => {
  test('Should match snapshot', () => {
    const { container } = render(withThemeProvider(<TemplateScreen>{snapshotYamamotoDescription}</TemplateScreen>));
    expect(container).toMatchSnapshot();
  });
});

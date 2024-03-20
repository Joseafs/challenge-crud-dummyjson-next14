import { render } from '@testing-library/react';

import { withThemeProvider } from '~/theme/utils';
import { snapshotYamamotoDescription } from '~/utils/mocks/snapshotMockValues';

import { TemplateScreen } from '.';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn().mockReturnValue({
    back: jest.fn(),
  }),
}));

describe('TemplateScreen', () => {
  test('Should match snapshot', () => {
    const { container } = render(withThemeProvider(<TemplateScreen>{snapshotYamamotoDescription}</TemplateScreen>));
    expect(container).toMatchSnapshot();
  });

  // TODO: after add header -> test header only
  // TODO: test body only
  // TODO: after add footer -> test footer only
});

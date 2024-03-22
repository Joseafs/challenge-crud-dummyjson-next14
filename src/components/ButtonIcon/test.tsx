import { render } from '@testing-library/react';
import { FaAddressBook } from 'react-icons/fa';

import { withThemeProvider } from '~/theme/utils/withThemeProvider';

import { ButtonIcon } from '.';

describe('ButtonIcon', () => {
  test('Should match snapshot', () => {
    const { container } = render(withThemeProvider(<ButtonIcon icon={FaAddressBook} />));
    expect(container).toMatchSnapshot();
  });
});

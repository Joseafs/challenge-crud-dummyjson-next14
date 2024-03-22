import { faker } from '@faker-js/faker';
import { render } from '@testing-library/react';

import { withThemeProvider } from '~/theme/utils';

import { Container } from '.';

describe('Container', () => {
  it('Should have text', () => {
    const text = faker.word.words(3);

    const { queryByText } = render(withThemeProvider(<Container fixed>{text}</Container>));
    expect(queryByText(text)).toBeTruthy();
  });
});

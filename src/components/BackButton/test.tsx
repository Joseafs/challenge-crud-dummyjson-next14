import { fireEvent, render, screen } from '@testing-library/react';

import { withThemeProvider } from '~/theme/utils/withThemeProvider';

import { BackButton } from '.';

describe('BackButton', () => {
  test('Should match snapshot', () => {
    const { container } = render(withThemeProvider(<BackButton />));
    expect(container).toMatchSnapshot();
  });

  test('Should call onClick handler when clicked', () => {
    const onClickMock = jest.fn();
    render(withThemeProvider(<BackButton onClick={onClickMock} />));

    const backButton = screen.getByText('Voltar');
    fireEvent.click(backButton);

    expect(onClickMock).toHaveBeenCalled();
  });
});

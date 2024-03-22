import { fireEvent, render } from '@testing-library/react';

import { withThemeProvider } from '~/theme/utils';

import { Pagination } from '.';

const nextButtonText = 'Próximo';
const prevButtonText = 'Anterior';

describe('Pagination', () => {
  test('should call onPageChange function correctly when clicking page buttons', () => {
    const onPageChangeMock = jest.fn();
    const totalPages = 5;
    const currentPage = 3;

    const { getByText } = render(
      withThemeProvider(
        <Pagination currentPage={currentPage} onPageChange={onPageChangeMock} totalPages={totalPages} />,
      ),
    );

    fireEvent.click(getByText(prevButtonText));
    expect(onPageChangeMock).toHaveBeenCalledWith(currentPage - 1);

    fireEvent.click(getByText(nextButtonText));
    expect(onPageChangeMock).toHaveBeenCalledWith(currentPage + 1);
  });

  test('should disable the "Previous" button when currentPage is 1', () => {
    const onPageChangeMock = jest.fn();
    const totalPages = 5;
    const currentPage = 1;

    const { getByText } = render(
      withThemeProvider(
        <Pagination currentPage={currentPage} onPageChange={onPageChangeMock} totalPages={totalPages} />,
      ),
    );

    const previousButton = getByText(prevButtonText);
    expect(previousButton).toBeDisabled();
  });

  test('should disable the "Next" button when currentPage is equal to totalPages', () => {
    const onPageChangeMock = jest.fn();
    const totalPages = 5;
    const currentPage = totalPages;

    const { getByText } = render(
      withThemeProvider(
        <Pagination currentPage={currentPage} onPageChange={onPageChangeMock} totalPages={totalPages} />,
      ),
    );

    const nextButton = getByText(nextButtonText);
    expect(nextButton).toBeDisabled();
  });
});

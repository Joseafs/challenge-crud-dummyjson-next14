import { fireEvent, render } from '@testing-library/react';

import { mockProductResponse } from '~/services/products/getProduct/mock';
import { withThemeProvider } from '~/theme/utils';

import { CardProduct } from '.';

describe('CardProduct', () => {
  const onDeleteMock = jest.fn();
  const onEditMock = jest.fn();

  test('Should match snapshot', () => {
    const { container } = render(
      withThemeProvider(<CardProduct onDelete={onDeleteMock} onEdit={onEditMock} product={mockProductResponse} />),
    );
    expect(container).toMatchSnapshot();
  });

  test('renders correctly with product details', () => {
    const { getByText, getByAltText } = render(
      withThemeProvider(<CardProduct onDelete={onDeleteMock} onEdit={onEditMock} product={mockProductResponse} />),
    );

    expect(getByText(mockProductResponse.title)).toBeInTheDocument();
    expect(getByAltText(mockProductResponse.description)).toBeInTheDocument();
    expect(getByText(mockProductResponse.brand)).toBeInTheDocument();
    expect(getByText(mockProductResponse.category)).toBeInTheDocument();
    expect(getByText(mockProductResponse.description)).toBeInTheDocument();
    expect(getByText(mockProductResponse.stock.toString())).toBeInTheDocument();
    expect(getByText(mockProductResponse.rating.toString())).toBeInTheDocument();
  });

  test('calls onDelete and onEdit handlers correctly', () => {
    const { getByTestId } = render(
      withThemeProvider(<CardProduct onDelete={onDeleteMock} onEdit={onEditMock} product={mockProductResponse} />),
    );

    const deleteButton = getByTestId('card-product-delete');
    const editButton = getByTestId('card-product-edit');

    fireEvent.click(deleteButton);
    fireEvent.click(editButton);

    expect(onDeleteMock).toHaveBeenCalledTimes(1);
    expect(onEditMock).toHaveBeenCalledTimes(1);
  });
});

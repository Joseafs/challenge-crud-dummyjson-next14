import { act, fireEvent, render, screen } from '@testing-library/react';

import { mockProductsResponse } from '~/services/products/getProducts/mock';
import { withThemeProvider } from '~/theme/utils';

import { ProductsListContext } from './context/useProducts';
import { ProductsListContextProps } from './context/useProducts/types';

import { ProductsList, ProductsListWithProvider } from '.';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn().mockReturnValue({
    back: jest.fn(),
  }),
}));

const mockProductsListContextValues = (props: Partial<ProductsListContextProps> = {}): ProductsListContextProps => {
  return {
    getProductsList: jest.fn(),
    loading: false,
    onDelete: jest.fn(),
    onEdit: jest.fn(),
    productsData: mockProductsResponse,
    productsList: mockProductsResponse.products,
    productsSearch: '',
    productsSortOption: 'title',
    setProductsSearch: jest.fn(),
    setSortOption: jest.fn(),
    totalEnabledProducts: 0,

    ...props,
  };
};

describe('ProductsList', () => {
  test('Should renders page title and add button', () => {
    render(withThemeProvider(<ProductsList />));

    const titleElement = screen.getByText('Produtos');
    expect(titleElement).toBeInTheDocument();

    const addButtonElement = screen.getByRole('button', { name: 'Adicionar' });
    expect(addButtonElement).toBeInTheDocument();
  });

  test('Should call setProductsSearch when click button search', async () => {
    const productsList = mockProductsListContextValues();

    render(
      withThemeProvider(
        <ProductsListContext.Provider value={productsList}>
          <ProductsListWithProvider />
        </ProductsListContext.Provider>,
      ),
    );

    const button = screen.getByRole('button', { name: 'Buscar' });

    await act(async () => {
      fireEvent.click(button);
    });

    expect(productsList.setProductsSearch).toHaveBeenCalledTimes(1);
  });

  test('Should renders itens of products list', async () => {
    const productsList = mockProductsListContextValues();

    render(
      withThemeProvider(
        <ProductsListContext.Provider value={productsList}>
          <ProductsListWithProvider />
        </ProductsListContext.Provider>,
      ),
    );

    const firstProductTitle = screen.getByText(mockProductsResponse.products[0].title);
    const secondProductTitle = screen.getByText(mockProductsResponse.products[1].title);
    const thirdProductTitle = screen.getByText(mockProductsResponse.products[2].title);

    expect(firstProductTitle).toBeInTheDocument();
    expect(secondProductTitle).toBeInTheDocument();
    expect(thirdProductTitle).toBeInTheDocument();
  });
});

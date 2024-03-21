import { ProductData } from '~/services/products/getProduct/types';
import { escapeRegExp } from '~/utils/escapeRegExp';

export const filterProductsBySearch = (products: ProductData[], searchText: string): ProductData[] => {
  if (!searchText) {
    return products;
  }

  const escapedSearchText = escapeRegExp(searchText);
  const regex = new RegExp(escapedSearchText, 'i');

  return products.filter((product) => {
    return regex.test(product.title) || regex.test(product.brand);
  });
};

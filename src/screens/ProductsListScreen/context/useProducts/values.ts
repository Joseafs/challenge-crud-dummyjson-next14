import { ProductsSortOptionsList } from './types';

export const initialProductsDataState = {
  limit: 0,
  products: [],
  skip: 0,
  total: 0,
};

export const sortOptionsList: ProductsSortOptionsList[] = [
  { label: 'Título', value: 'title' },
  { label: 'Marca', value: 'brand' },
];

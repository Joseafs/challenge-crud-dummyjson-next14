import { Dispatch, SetStateAction } from 'react';

import { FetchProductsParams, Product, ProductsData } from '~/services/products/getProducts/types';

export type OnAction = (id: number) => void;
export type OnChange = () => void;

export interface ProductsContext {
  getProductsList: (params?: FetchProductsParams) => Promise<void>;
  loading: boolean;
  onDelete: OnAction;
  onEdit: OnAction;
  productsData: ProductsData;
  productsList: Product[];
  productsSearch: string;
  setProductsSearch: Dispatch<SetStateAction<string>>;
  totalEnabledProducts: number;
}

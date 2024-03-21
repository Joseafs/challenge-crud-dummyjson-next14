import { Dispatch, SetStateAction } from 'react';

import { SelectOptions } from '~/components/Select/types';
import { ProductData } from '~/services/products/getProduct/types';
import { FetchProductsParams, ProductsData } from '~/services/products/getProducts/types';

export type OnActionId = (id: number) => void;
export type OnAction = () => void;

export type ProductsSortOptionsKeys = 'title' | 'brand';

export interface ProductsSortOptionsList extends SelectOptions<ProductsSortOptionsKeys> {}

export interface ProductsContext {
  getProductsList: (params?: FetchProductsParams) => Promise<void>;
  loading: boolean;
  onDelete: OnActionId;
  onEdit: OnActionId;
  productsData: ProductsData;
  productsList: ProductData[];
  productsSearch: string;
  productsSortOption: ProductsSortOptionsKeys;
  setProductsSearch: Dispatch<SetStateAction<string>>;
  setSortOption: Dispatch<SetStateAction<ProductsSortOptionsKeys>>;
  totalEnabledProducts: number;
}

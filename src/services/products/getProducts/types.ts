// NOTES:
// - Order by Params not exist's in dummyjson, only to be doing in front;

import { ProductData } from '~/services/products/getProduct/types';

export interface FetchProductsQueryParams {
  limit?: number;
  select?: string;
  skip?: number;
}

export interface FetchProductsParams {
  id?: number;
  query?: Partial<FetchProductsQueryParams>;
  search?: string;
}

export type SearchProcutsParams = 'title' | 'brand';

export interface ProductsData {
  limit: number;
  products: ProductData[];
  skip: number;
  total: number;
}

// NOTES:
// - Order by Params not exist's in dummyjson, only to be doing in front;

import { DeletedProductAttibutes } from '~/services/products/deleteProduct/types';

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

export interface Product extends Partial<DeletedProductAttibutes> {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
}
export interface ProductsData {
  limit: number;
  products: Product[];
  skip: number;
  total: number;
}

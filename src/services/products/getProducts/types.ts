export interface FetchProductsQueryParams {
  search?: string;
  limit?: number;
  skip?: number;
  select?: string;
}

export interface FetchProductsParams {
  id?: number;
  query?: Partial<FetchProductsQueryParams>;
}

export interface ProductsResponse {
  products: [];
}

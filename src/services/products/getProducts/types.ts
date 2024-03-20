export interface FetchProductsQueryParams {
  limit?: number;
  search?: string;
  select?: string;
  skip?: number;
}

export interface FetchProductsParams {
  id?: number;
  query?: Partial<FetchProductsQueryParams>;
}

export interface Product {
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
export interface ProductsResponse {
  limit: number;
  products: Product[];
  skip: number;
  total: number;
}

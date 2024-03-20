import { FetchProductsParams, Product, ProductsData } from '~/services/products/getProducts/types';

export type OnAction = (id: number) => void;

export interface ProductsContext {
  getProductsList: (params?: FetchProductsParams) => Promise<void>;
  loading: boolean;
  onDelete: OnAction;
  onEdit: OnAction;
  productsData: ProductsData;
  productsList: Product[];
  searchActualProductsList: (searchText: string, orderBy?: string) => void;
}

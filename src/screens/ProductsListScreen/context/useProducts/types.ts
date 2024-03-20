import { ProductsData } from '~/services/products/getProducts/types';

export type PromisedAction = () => Promise<void>;
export type OnAction = (id: number) => void;

export interface ProductsContext {
  getProductsList: PromisedAction;
  loading: boolean;
  onDelete: OnAction;
  onEdit: OnAction;
  productsData: ProductsData;
}

import { SelectOptions } from '~/components/Select/types';
import { ProductData } from '~/services/products/getProduct/types';

export type OnActionId = (id: number) => void;
export type OnAction = () => void;

export type ProductsSortOptionsKeys = 'title' | 'brand';

export interface ProductsSortOptionsList extends SelectOptions<ProductsSortOptionsKeys> {}

export interface ProductsContext {
  getProductById: (id: number) => Promise<void>;
  loading: boolean;
  productData: ProductData;
}

// export interface ProductDataNew extends Omit<ProductData, 'id'> {
//   id?: number;
// }

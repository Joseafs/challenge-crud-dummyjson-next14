import { ProductData } from '~/services/products/getProduct/types';
import { ProductsCategoriesData } from '~/services/products/getProductsCategories/types';

export interface ProductContext {
  getProductById: (id: number) => Promise<void>;
  loading: boolean;
  product: ProductData;
  productsCategories: ProductsCategoriesData;
  saveProductById: (values: ProductData) => Promise<void>;
}

// export interface ProductDataNew extends Omit<ProductData, 'id'> {
//   id?: number;
// }

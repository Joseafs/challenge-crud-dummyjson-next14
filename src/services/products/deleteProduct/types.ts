import { Product } from '~/services/products/getProducts/types';

export interface DeletedProductAttibutes {
  deletedOn: string;
  isDeleted: boolean;
}
export interface DeletedProductResponse extends Product {}

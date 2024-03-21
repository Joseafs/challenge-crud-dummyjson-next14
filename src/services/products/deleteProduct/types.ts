import { ProductData } from '~/services/products/getProduct/types';

export interface DeletedProductAttibutes {
  deletedOn: string;
  isDeleted: boolean;
}
export interface DeletedProductResponse extends ProductData {}

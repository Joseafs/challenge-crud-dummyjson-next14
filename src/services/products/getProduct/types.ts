// NOTES:
// - Order by Params not exist's in dummyjson, only to be doing in front;

import { DeletedProductAttibutes } from '~/services/products/deleteProduct/types';

export interface ProductData extends Partial<DeletedProductAttibutes> {
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

import { ProductData } from '~/services/products/getProduct/types';

export const initialProductDataState: ProductData = {
  brand: '',
  category: '',
  description: '',
  discountPercentage: 0,
  id: 0,
  images: [],
  price: 0,
  rating: 0,
  stock: 0,
  thumbnail: '',
  title: '',
};

/* eslint-disable sort-keys */
import { DeletedProductResponse } from './types';

export const mockProductDeleteResponse: DeletedProductResponse = {
  id: 2,
  title: 'iPhone X',
  description: 'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
  price: 899,
  discountPercentage: 17.94,
  rating: 4.44,
  stock: 34,
  brand: 'Apple',
  category: 'smartphones',
  thumbnail: 'https://cdn.dummyjson.com/product-images/2/thumbnail.jpg',
  images: [
    'https://cdn.dummyjson.com/product-images/2/1.jpg',
    'https://cdn.dummyjson.com/product-images/2/2.jpg',
    'https://cdn.dummyjson.com/product-images/2/3.jpg',
    'https://cdn.dummyjson.com/product-images/2/thumbnail.jpg',
  ],
  isDeleted: true,
  deletedOn: '2024-03-20T15:47:38.965Z',
};

import { mockProductResponse } from '~/services/products/getProduct/mock';

import { SaveProductData } from './types';

export const mockSaveProductResponse: SaveProductData = {
  ...mockProductResponse,
  title: 'iPhone 9 Extremum',
};

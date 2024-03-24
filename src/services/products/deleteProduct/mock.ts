/* eslint-disable sort-keys */
import { mockProductResponse } from '~/services/products/getProduct/mock';

import { DeletedProductResponse } from './types';

export const mockDeleteProductResponse: DeletedProductResponse = {
  ...mockProductResponse,
  isDeleted: true,
  deletedOn: '2024-03-20T15:47:38.965Z',
};

import { apiDelete } from '~/services/api/methods/apiDelete';
import { apiRouteExample } from '~/services/products';

import { DeletedProductResponse } from './types';

export const deleteProduct = (id: number) => {
  return apiDelete<DeletedProductResponse>(`${apiRouteExample}/${id}`);
};

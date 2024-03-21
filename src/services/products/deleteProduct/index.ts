import { apiDelete } from '~/services/api/methods/apiDelete';
import { apiRouteProducts } from '~/services/products';

import { DeletedProductResponse } from './types';

export const deleteProduct = (id: number) => {
  return apiDelete<DeletedProductResponse>(`${apiRouteProducts}/${id}`);
};

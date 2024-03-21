import { apiPut } from '~/services/api/methods/apiPut';
import { apiRouteProducts } from '~/services/products';

import { ProductData } from './types';

export const saveProduct = (id: number, body: string) =>
  apiPut<ProductData, string>(`${apiRouteProducts}/${id}`, body, {
    headers: { 'Content-Type': 'application/json' },
  });

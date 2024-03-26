import { apiPut } from '~/services/api/methods/apiPut';
import { apiRouteProducts } from '~/services/products';

import { SaveProductData } from './types';

export const saveProduct = (id: number, body: string) =>
  apiPut<SaveProductData, string>(`${apiRouteProducts}/${id}`, body, {
    headers: { 'Content-Type': 'application/json' },
  });

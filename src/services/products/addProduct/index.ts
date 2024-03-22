import { apiPost } from '~/services/api/methods/apiPost';
import { apiRouteProductAdd } from '~/services/products';

import { ProductData } from './types';

export const addProduct = (body: string) =>
  apiPost<ProductData, string>(apiRouteProductAdd, body, {
    headers: { 'Content-Type': 'application/json' },
  });

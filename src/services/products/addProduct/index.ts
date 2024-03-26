import { apiPost } from '~/services/api/methods/apiPost';
import { apiRouteProductAdd } from '~/services/products';

import { AddProductData } from './types';

export const addProduct = (body: string) =>
  apiPost<AddProductData, string>(apiRouteProductAdd, body, {
    headers: { 'Content-Type': 'application/json' },
  });

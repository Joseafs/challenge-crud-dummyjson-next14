import { apiGet } from '~/services/api/methods';
import { apiRouteExample } from '~/services/products';

import { ProductData } from './types';

export const getProduct = (id: number) => apiGet<ProductData>(`${apiRouteExample}/${id}`);

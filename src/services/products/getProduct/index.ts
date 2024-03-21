import { apiGet } from '~/services/api/methods';
import { apiRouteProducts } from '~/services/products';

import { ProductData } from './types';

export const getProduct = (id: number) => apiGet<ProductData>(`${apiRouteProducts}/${id}`);

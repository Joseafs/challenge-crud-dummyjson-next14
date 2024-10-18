import { apiGet } from '~/services/api/methods';
import { apiRouteProductsCategories } from '~/services/products';

import { ProductsCategoriesData } from './types';

export const getProductsCategories = () => apiGet<ProductsCategoriesData[]>(apiRouteProductsCategories);

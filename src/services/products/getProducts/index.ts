import { apiGet } from '~/services/api/methods';
import { apiRouteExample } from '~/services/products';
import { encodeParamsToString } from '~/utils/encodeParamsToString';

import { FetchProductsParams, ProductsData } from './types';

export const getProducts = (params?: FetchProductsParams) => {
  const id = params?.id ? `/${params.id}` : '';

  const queryParams = encodeParamsToString(params?.query);

  return apiGet<ProductsData>(`${apiRouteExample}${id}${queryParams}`);
};

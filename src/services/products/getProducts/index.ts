import { apiGet } from '~/services/api/methods';
import { apiRouteExample } from '~/services/products';
import { encodeParamsToString } from '~/utils/encodeParamsToString';

import { FetchProductsParams, ProductsData } from './types';

export const getProducts = (params?: FetchProductsParams) => {
  let path = '';
  if (params?.id) {
    path = `/${params.id}`;
  } else if (params?.search) {
    const queryParams = encodeParamsToString(params.query);
    path = `/search?q=${params.search}${queryParams ? `&${queryParams}` : ''}`;
  } else {
    const queryParams = encodeParamsToString(params?.query);
    path = `${queryParams ? `?${queryParams}` : ''}`;
  }

  return apiGet<ProductsData>(`${apiRouteExample}${path}`);
};

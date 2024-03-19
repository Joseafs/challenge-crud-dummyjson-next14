import { apiGet } from '~/services/api/methods';
import { apiRouteExample } from '~/services/examples';

import { ExampleResponse, FetchExampleParams } from './types';

// export const fetchExamples = () => apiGet<ExampleResponse[]>(apiRouteExample); // to return without params
export const fetchExamples = (params?: FetchExampleParams) =>
  apiGet<ExampleResponse>(`${apiRouteExample}${params?.id ? `/${params.id}` : ''}`); // with params

import { faker } from '@faker-js/faker';
import { HttpStatusCode } from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { api } from '~/services/api';
import { AxiosErrorResponse } from '~/services/api/error/types';
import { apiRouteExample } from '~/services/products';
import { encodeParamsToString } from '~/utils/encodeParamsToString';

import { mockProductResponse, mockProductsResponse } from './mock';
import { FetchProductsParams } from './types';

import { getProducts } from '.';

describe('getProducts', () => {
  test('should match data', async () => {
    const mock = new MockAdapter(api);
    mock.onGet(apiRouteExample).reply(HttpStatusCode.Ok, mockProductsResponse);

    const data = await getProducts();

    expect(data).toMatchObject(mockProductsResponse);

    mock.restore();
  });

  test('should match data with query params', async () => {
    const mock = new MockAdapter(api);
    const queryParams: FetchProductsParams['query'] = {
      limit: 12,
      skip: 58,
    };

    const getRouteWithParams = `${apiRouteExample}?${encodeParamsToString(queryParams)}`;

    mock.onGet(getRouteWithParams).reply(HttpStatusCode.Ok, mockProductResponse);

    const data = await getProducts({ query: queryParams });

    expect(data).toMatchObject(mockProductResponse);

    mock.restore();
  });

  test('should throw RequestError', async () => {
    const errorText = faker.lorem.paragraph();

    const mock = new MockAdapter(api);
    mock.onGet(apiRouteExample).reply(HttpStatusCode.BadRequest, { error: errorText });

    try {
      await getProducts();
    } catch (e) {
      expect((e as AxiosErrorResponse).status).toStrictEqual(HttpStatusCode.BadRequest);
      expect((e as AxiosErrorResponse).data.error).toStrictEqual(errorText);
    }

    mock.restore();
  });
});

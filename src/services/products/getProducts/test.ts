import { faker } from '@faker-js/faker';
import { HttpStatusCode } from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { api } from '~/services/api';
import { AxiosErrorResponse } from '~/services/api/error/types';
import { apiRouteExample } from '~/services/products';

import { mockProductsResponse } from './mock';

import { getProducts } from '.';

describe('getProducts', () => {
  test('should match data', async () => {
    const mock = new MockAdapter(api);
    mock.onGet(apiRouteExample).reply(HttpStatusCode.Ok, mockProductsResponse);

    const data = await getProducts();

    expect(data).toMatchObject(mockProductsResponse);

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

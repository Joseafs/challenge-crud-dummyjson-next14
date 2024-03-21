import { faker } from '@faker-js/faker';
import { HttpStatusCode } from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { api } from '~/services/api';
import { AxiosErrorResponse } from '~/services/api/error/types';
import { apiRouteProductsCategories } from '~/services/products';

import { mockProductCategoriesResponse } from './mock';

import { getProductsCategories } from '.';

describe('getProductsCategories', () => {
  test('should match data when get by id', async () => {
    const mock = new MockAdapter(api);

    mock.onGet(apiRouteProductsCategories).reply(HttpStatusCode.Ok, mockProductCategoriesResponse);

    const data = await getProductsCategories();

    expect(data).toMatchObject(mockProductCategoriesResponse);

    mock.restore();
  });

  test('should throw RequestError', async () => {
    const errorText = faker.lorem.paragraph();

    const mock = new MockAdapter(api);
    mock.onGet(apiRouteProductsCategories).reply(HttpStatusCode.BadRequest, { error: errorText });

    try {
      await getProductsCategories();
    } catch (e) {
      expect((e as AxiosErrorResponse).status).toStrictEqual(HttpStatusCode.BadRequest);
      expect((e as AxiosErrorResponse).data.error).toStrictEqual(errorText);
    }

    mock.restore();
  });
});

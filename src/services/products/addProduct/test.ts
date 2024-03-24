import { faker } from '@faker-js/faker';
import { HttpStatusCode } from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { api } from '~/services/api';
import { AxiosErrorResponse } from '~/services/api/error/types';
import { apiRouteProductAdd } from '~/services/products';

import { mockProductResponse } from './mock';

import { addProduct } from '.';

describe('addProduct', () => {
  test('should match data on success', async () => {
    const mock = new MockAdapter(api);
    const body = faker.word.words(5);

    mock.onPost(apiRouteProductAdd).reply(HttpStatusCode.Ok, mockProductResponse);

    const data = await addProduct(body);

    expect(data).toMatchObject(mockProductResponse);

    mock.restore();
  });

  test('should throw error', async () => {
    const errorText = faker.lorem.paragraph();
    const body = faker.word.words(5);

    const mock = new MockAdapter(api);
    mock.onPost(apiRouteProductAdd).reply(HttpStatusCode.BadRequest, { error: errorText });

    try {
      await addProduct(body);
    } catch (e) {
      expect((e as AxiosErrorResponse).status).toStrictEqual(HttpStatusCode.BadRequest);
      expect((e as AxiosErrorResponse).data.error).toStrictEqual(errorText);
    }

    mock.restore();
  });
});

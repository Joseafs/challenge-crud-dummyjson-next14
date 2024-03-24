import { faker } from '@faker-js/faker';
import { HttpStatusCode } from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { api } from '~/services/api';
import { AxiosErrorResponse } from '~/services/api/error/types';
import { apiRouteProducts } from '~/services/products';

import { mockSaveProductResponse } from './mock';

import { saveProduct } from '.';

describe('saveProduct', () => {
  test('should match data on success', async () => {
    const mock = new MockAdapter(api);
    const id = faker.number.int(100);
    const body = faker.word.words(5);

    const routeWithId = `${apiRouteProducts}/${id}`;

    mock.onPut(routeWithId).reply(HttpStatusCode.Ok, mockSaveProductResponse);

    const data = await saveProduct(id, body);

    expect(data).toMatchObject(mockSaveProductResponse);

    mock.restore();
  });

  test('should throw error', async () => {
    const errorText = faker.lorem.paragraph();
    const id = faker.number.int(100);
    const body = faker.word.words(5);

    const routeWithId = `${apiRouteProducts}/${id}`;

    const mock = new MockAdapter(api);
    mock.onPut(routeWithId).reply(HttpStatusCode.BadRequest, { error: errorText });

    try {
      await saveProduct(id, body);
    } catch (e) {
      expect((e as AxiosErrorResponse).status).toStrictEqual(HttpStatusCode.BadRequest);
      expect((e as AxiosErrorResponse).data.error).toStrictEqual(errorText);
    }

    mock.restore();
  });
});

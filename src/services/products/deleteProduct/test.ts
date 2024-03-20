import { faker } from '@faker-js/faker';
import { HttpStatusCode } from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { api } from '~/services/api';
import { AxiosErrorResponse } from '~/services/api/error/types';
import { apiRouteExample } from '~/services/products';

import { mockProductsResponse } from './mock';

import { deleteProduct } from '.';

describe('deleteProduct', () => {
  test('should match data', async () => {
    const deletedId = faker.number.int(100);
    const deleteRoute = `${apiRouteExample}/${deletedId}`;

    const mock = new MockAdapter(api);
    mock.onDelete(deleteRoute).reply(HttpStatusCode.Ok, mockProductsResponse);

    const data = await deleteProduct(deletedId);

    expect(data).toMatchObject(mockProductsResponse);

    mock.restore();
  });

  test('should throw RequestError', async () => {
    const errorText = faker.lorem.paragraph();
    const deletedId = faker.number.int(100);
    const deleteRoute = `${apiRouteExample}/${deletedId}`;

    const mock = new MockAdapter(api);
    mock.onDelete(deleteRoute).reply(HttpStatusCode.BadRequest, { error: errorText });

    try {
      await deleteProduct(deletedId);
    } catch (e) {
      expect((e as AxiosErrorResponse).status).toStrictEqual(HttpStatusCode.BadRequest);
      expect((e as AxiosErrorResponse).data.error).toStrictEqual(errorText);
    }

    mock.restore();
  });
});

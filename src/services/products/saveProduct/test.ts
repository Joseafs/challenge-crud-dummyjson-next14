import { faker } from '@faker-js/faker';
import { HttpStatusCode } from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { api } from '~/services/api';
import { AxiosErrorResponse } from '~/services/api/error/types';
import { apiRouteProducts } from '~/services/products';

import { mockProductSaveResponse } from './mock';

import { saveProduct } from '.';

describe('saveProduct', () => {
  test('should match data when get by id', async () => {
    const mock = new MockAdapter(api);
    const id = faker.number.int(100);
    const body = faker.word.words(5);

    const getRouteWithId = `${apiRouteProducts}/${id}`;

    mock.onPut(getRouteWithId).reply(HttpStatusCode.Ok, mockProductSaveResponse);

    const data = await saveProduct(id, body);

    expect(data).toMatchObject(mockProductSaveResponse);

    mock.restore();
  });

  test('should throw RequestError', async () => {
    const errorText = faker.lorem.paragraph();
    const id = faker.number.int(100);
    const body = faker.word.words(5);

    const getRouteWithId = `${apiRouteProducts}/${id}`;

    const mock = new MockAdapter(api);
    mock.onPut(getRouteWithId).reply(HttpStatusCode.BadRequest, { error: errorText });

    try {
      await saveProduct(id, body);
    } catch (e) {
      expect((e as AxiosErrorResponse).status).toStrictEqual(HttpStatusCode.BadRequest);
      expect((e as AxiosErrorResponse).data.error).toStrictEqual(errorText);
    }

    mock.restore();
  });
});

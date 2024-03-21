import { faker } from '@faker-js/faker';
import { HttpStatusCode } from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { api } from '~/services/api';
import { AxiosErrorResponse } from '~/services/api/error/types';

import { apiPut } from '.';

const mockValues = () => ({
  badRequest: { error: faker.lorem.words(3) },
  objData: { ipsum: faker.lorem.words(2), lorem: faker.lorem.words(3) },
  response: { data: faker.lorem.words(4) },
  route: faker.lorem.word(1),
});

describe('apiPut', () => {
  test('should match data', async () => {
    const mock = new MockAdapter(api);

    const { objData, response, route } = mockValues();

    mock.onPut(route).reply(HttpStatusCode.Ok, response);

    const data = await apiPut(route, objData);

    expect(data).toMatchObject(response);

    mock.restore();
  });

  test('should throw RequestError', async () => {
    const { badRequest, objData, route } = mockValues();

    const mock = new MockAdapter(api);

    mock.onPut(route).reply(HttpStatusCode.BadRequest, badRequest);

    try {
      await apiPut(route, objData);
    } catch (e) {
      expect((e as AxiosErrorResponse).status).toStrictEqual(HttpStatusCode.BadRequest);
      expect((e as AxiosErrorResponse).data.error).toStrictEqual(badRequest.error);
    }

    mock.restore();
  });
});

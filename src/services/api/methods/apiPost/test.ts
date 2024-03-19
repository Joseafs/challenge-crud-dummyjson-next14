import { faker } from '@faker-js/faker';
import { HttpStatusCode } from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { api } from '~/services/api';
import { AxiosErrorResponse } from '~/services/api/error/types';

import { apiPost } from '.';

const mockValues = () => ({
  badRequest: { error: faker.lorem.words(3) },
  objData: { ipsum: faker.lorem.words(2), lorem: faker.lorem.words(3) },
  response: { data: faker.lorem.words(4) },
  route: faker.lorem.word(1),
});

describe('apiPost', () => {
  test('should match data', async () => {
    const mock = new MockAdapter(api);

    const { objData, response, route } = mockValues();

    mock.onPost(route).reply(HttpStatusCode.Ok, response);

    const data = await apiPost(route, objData);

    expect(data).toMatchObject(response);

    mock.restore();
  });

  test('should throw RequestError', async () => {
    const { badRequest, objData, route } = mockValues();

    const mock = new MockAdapter(api);

    mock.onPost(route).reply(HttpStatusCode.BadRequest, badRequest);

    try {
      await apiPost(route, objData);
    } catch (e) {
      expect((e as AxiosErrorResponse).status).toStrictEqual(HttpStatusCode.BadRequest);
      expect((e as AxiosErrorResponse).data.error).toStrictEqual(badRequest.error);
    }

    mock.restore();
  });
});

import { faker } from '@faker-js/faker';
import { HttpStatusCode } from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { api } from '~/services/api';
import { AxiosErrorResponse } from '~/services/api/error/types';

import { apiGet } from '.';

const mockValues = () => ({
  badRequest: { error: faker.lorem.words(3) },
  response: { data: faker.lorem.words(4) },
  route: faker.lorem.word(1),
});

describe('apiGet', () => {
  test('should match data', async () => {
    const mock = new MockAdapter(api);

    const { response, route } = mockValues();

    mock.onGet(route).reply(HttpStatusCode.Ok, response);

    const data = await apiGet(route);

    expect(data).toMatchObject(response);

    mock.restore();
  });

  test('should throw RequestError', async () => {
    const { badRequest, route } = mockValues();

    const mock = new MockAdapter(api);

    mock.onGet(route).reply(HttpStatusCode.BadRequest, badRequest);

    try {
      await apiGet(route);
    } catch (e) {
      expect((e as AxiosErrorResponse).status).toStrictEqual(HttpStatusCode.BadRequest);
      expect((e as AxiosErrorResponse).data.error).toStrictEqual(badRequest.error);
    }

    mock.restore();
  });
});

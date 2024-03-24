import { faker } from '@faker-js/faker';
import { HttpStatusCode } from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { api } from '~/services/api';
import { AxiosErrorResponse } from '~/services/api/error/types';
import { apiAuthMeRoute } from '~/services/auth';

import { mockUserResponse } from './mock';

import { getMe } from '.';

describe('getMe', () => {
  test('should match data on success', async () => {
    const mock = new MockAdapter(api);

    mock.onGet(apiAuthMeRoute).reply(HttpStatusCode.Ok, mockUserResponse);

    const data = await getMe();

    expect(data).toMatchObject(mockUserResponse);

    mock.restore();
  });

  test('should throw error', async () => {
    const errorText = faker.lorem.paragraph();

    const mock = new MockAdapter(api);
    mock.onGet(apiAuthMeRoute).reply(HttpStatusCode.BadRequest, { error: errorText });

    try {
      await getMe();
    } catch (e) {
      expect((e as AxiosErrorResponse).status).toStrictEqual(HttpStatusCode.BadRequest);
      expect((e as AxiosErrorResponse).data.error).toStrictEqual(errorText);
    }

    mock.restore();
  });
});

import { faker } from '@faker-js/faker';
import { HttpStatusCode } from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { api } from '~/services/api';
import { AxiosErrorResponse } from '~/services/api/error/types';
import { apiAuthLoginRoute } from '~/services/auth';

import { mockAuthResponse } from './mock';

import { postLogin } from '.';

describe('postLogin', () => {
  test('should match data on success', async () => {
    const mock = new MockAdapter(api);
    const body = faker.word.words(5);

    mock.onPost(apiAuthLoginRoute).reply(HttpStatusCode.Ok, mockAuthResponse);

    const data = await postLogin(body);

    expect(data).toMatchObject(mockAuthResponse);

    mock.restore();
  });

  test('should throw error', async () => {
    const errorText = faker.lorem.paragraph();
    const body = faker.word.words(5);

    const mock = new MockAdapter(api);
    mock.onPost(apiAuthLoginRoute).reply(HttpStatusCode.BadRequest, { error: errorText });

    try {
      await postLogin(body);
    } catch (e) {
      expect((e as AxiosErrorResponse).status).toStrictEqual(HttpStatusCode.BadRequest);
      expect((e as AxiosErrorResponse).data.error).toStrictEqual(errorText);
    }

    mock.restore();
  });
});

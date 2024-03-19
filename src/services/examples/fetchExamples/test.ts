import { faker } from '@faker-js/faker';
import { HttpStatusCode } from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { api } from '~/services/api';
import { AxiosErrorResponse } from '~/services/api/error/types';
import { apiRouteExample } from '~/services/examples';

import { exampleResponse } from './mock';

import { fetchExamples } from '.';

describe('fetchExamples', () => {
  test('should match data', async () => {
    const mock = new MockAdapter(api);
    mock.onGet(apiRouteExample).reply(HttpStatusCode.Ok, exampleResponse);

    const data = await fetchExamples();

    expect(data).toMatchObject(exampleResponse);

    mock.restore();
  });

  test('should throw RequestError', async () => {
    const errorText = faker.lorem.paragraph();

    const mock = new MockAdapter(api);
    mock.onGet(apiRouteExample).reply(HttpStatusCode.BadRequest, { error: errorText });

    try {
      await fetchExamples();
    } catch (e) {
      expect((e as AxiosErrorResponse).status).toStrictEqual(HttpStatusCode.BadRequest);
      expect((e as AxiosErrorResponse).data.error).toStrictEqual(errorText);
    }

    mock.restore();
  });
});

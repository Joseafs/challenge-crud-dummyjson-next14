import { apiPost } from '~/services/api/methods/apiPost';
import { apiAuthLoginRoute } from '~/services/auth';

import { AuthDataResponse } from './types';

export const postLogin = (body: string) =>
  apiPost<AuthDataResponse, string>(apiAuthLoginRoute, body, {
    headers: { 'Content-Type': 'application/json' },
  });

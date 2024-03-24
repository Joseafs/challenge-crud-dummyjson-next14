import { apiPost } from '~/services/api/methods/apiPost';
import { apiAuthLoginRoute } from '~/services/auth';

import { AuthData } from './types';

export const postLogin = (body: string) =>
  apiPost<AuthData, string>(apiAuthLoginRoute, body, {
    headers: { 'Content-Type': 'application/json' },
  });

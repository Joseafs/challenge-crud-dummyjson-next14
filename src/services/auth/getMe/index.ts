import { apiGet } from '~/services/api/methods';
import { apiAuthRoute } from '~/services/auth';

import { User } from './types';

export const getMe = () => apiGet<User>(`${apiAuthRoute}/me`);

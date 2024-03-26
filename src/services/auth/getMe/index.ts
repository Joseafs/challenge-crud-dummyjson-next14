import { apiGet } from '~/services/api/methods';
import { apiAuthRoute } from '~/services/auth';

import { UserData } from './types';

export const getMe = () => apiGet<UserData>(`${apiAuthRoute}/me`);

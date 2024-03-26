import { FetchAuthDataParams } from '~/services/auth/postLogin/types';

export interface UserAuthContextProps {
  getMeData: () => Promise<void>;
  getUserAuthentication: (values: FetchAuthDataParams) => Promise<void>;
  loading: boolean;
}

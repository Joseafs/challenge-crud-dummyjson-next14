import { AuthDataResponse, FetchAuthDataParams } from '~/services/auth/postLogin/types';

export interface UserAuthContextProps {
  getUserAuthentication: (values: FetchAuthDataParams) => Promise<void>;
  isTokenValid: () => Promise<void>;
  loading: boolean;
  userData: AuthDataResponse | any;
}

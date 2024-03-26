import { useRouter } from 'next/navigation';
import { createContext, FC, PropsWithChildren, useCallback, useContext, useState } from 'react';

import { setAxiosBearerToken } from '~/services/api';
import { getMe, postLogin } from '~/services/auth';
import { AuthDataResponse, FetchAuthDataParams } from '~/services/auth/postLogin/types';
import { getSessionStore } from '~/utils/stores/session';

import { UserAuthContextProps } from './types';

export const UserAuthContext = createContext({} as UserAuthContextProps);

export const UserAuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();

  // TODO: initial state user
  const [userData, setUserData] = useState<AuthDataResponse>();
  const [loading, setLoading] = useState(false);

  const getUserAuthentication = useCallback(
    async (values: FetchAuthDataParams) => {
      setLoading(true);

      const jsonFormatValues = JSON.stringify(values);

      try {
        const data = await postLogin(jsonFormatValues);
        setUserData(data);

        alert(`Login efetuado com sucesso, seja bem vindo ${data.username}!`);
        router.push('/products/');
      } catch (e) {
        alert('Parece que o usuário/senha não conferem, tente novamente !');
      } finally {
        setLoading(false);
      }
    },
    [router],
  );

  const isTokenValid = useCallback(async () => {
    setLoading(true);

    const tokenCode = await getSessionStore<string>('token');

    try {
      if (tokenCode) {
        setAxiosBearerToken(tokenCode);
        await getMe();
      }
    } catch (e) {
      router.push('/login/');
    } finally {
      setLoading(false);
    }
  }, [router]);

  return (
    <UserAuthContext.Provider
      value={{
        getUserAuthentication,
        isTokenValid,
        loading,
        userData,
      }}
    >
      {children}
    </UserAuthContext.Provider>
  );
};

export const useUserAuth = () => useContext(UserAuthContext);

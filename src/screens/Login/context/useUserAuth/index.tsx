import { useRouter } from 'next/navigation';
import { createContext, FC, PropsWithChildren, useCallback, useContext, useState } from 'react';

import { setAxiosBearerToken } from '~/services/api';
import { getMe, postLogin } from '~/services/auth';
import { UserData } from '~/services/auth/getMe/types';
import { FetchAuthDataParams } from '~/services/auth/postLogin/types';

import { UserAuthContextProps } from './types';

export const UserAuthContext = createContext({} as UserAuthContextProps);

export const UserAuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();

  const [userData, setUserData] = useState<UserData>();
  const [loading, setLoading] = useState(false);

  const getUserAuthentication = useCallback(async (values: FetchAuthDataParams) => {
    setLoading(true);

    const jsonFormatValues = JSON.stringify(values);

    try {
      const { token } = await postLogin(jsonFormatValues);

      setAxiosBearerToken(`Bearer ${token}`);

      // TODO: need store token value to avoid refresh problems

      alert('Login efetuado com sucesso, seja bem vindo !');
      // router.push('/products/');
    } catch (e) {
      alert('Parece que o usuário/senha não conferem, tente novamente !');
    } finally {
      setLoading(false);
    }
  }, []);

  const getMeData = useCallback(async () => {
    setLoading(true);

    try {
      const data = await getMe();

      alert('Token valido!');

      setUserData(data);
      // router.push('/products/');
    } catch (e) {
      alert('Token invalido!');
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <UserAuthContext.Provider
      value={{
        getMeData,
        getUserAuthentication,
        loading,
      }}
    >
      {children}
    </UserAuthContext.Provider>
  );
};

export const useUserAuth = () => useContext(UserAuthContext);

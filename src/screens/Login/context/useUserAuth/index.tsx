import { createContext, FC, PropsWithChildren, useContext, useState } from 'react';

import { UserAuthContextProps } from './types';

export const UserAuthContext = createContext({} as UserAuthContextProps);

export const UserAuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [loading, setLoading] = useState(true);

  // TODO: getUserAuthentication

  // TODO: checkTokenValidation

  return (
    <UserAuthContext.Provider
      value={{
        loading,
      }}
    >
      {children}
    </UserAuthContext.Provider>
  );
};

export const useUserAuth = () => useContext(UserAuthContext);

import { createContext } from 'react';
import { IAuthContext } from 'types';

const AuthContext = createContext<IAuthContext>({
  isAuthenticated: false,
  userInfo: null,
  setAuthWhenLogin: () => null,
  setAuthWhenLogout: () => null,
});

export default AuthContext;

import { useReducer } from 'react';

import { IAuthState, IAuthAction, IAuthContext, IUserInfo } from 'types';

import { EAuthAction } from '../../utils/enums';

const authReducer = (state: IAuthState, action: IAuthAction) => {
  const { type, payload } = action;

  switch (type) {
    case EAuthAction.LOGIN:
      return {
        isAuthenticated: true,
        userInfo: payload?.userInfo,
      };
    case EAuthAction.LOGOUT:
      return {
        isAuthenticated: false,
        userInfo: null,
      };
    default:
      return state;
  }
};

const useAuthContextProvider = (): IAuthContext => {
  const [authState, dispatch] = useReducer(authReducer, {
    isAuthenticated: false,
    userInfo: null,
  });

  const setAuthWhenLogin = (userInfo: IUserInfo) => {
    dispatch({ type: EAuthAction.LOGIN, payload: { userInfo } });
  };

  const setAuthWhenLogout = () => {
    dispatch({ type: EAuthAction.LOGOUT });
  };

  return {
    isAuthenticated: authState.isAuthenticated,
    userInfo: authState.userInfo,
    setAuthWhenLogin,
    setAuthWhenLogout,
  };
};

export default useAuthContextProvider;

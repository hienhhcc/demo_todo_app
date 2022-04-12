import { EAuthAction } from '../utils/enums';
import IUserInfo from './userInfo.interface';

export interface IAuthState {
  // isLoading: boolean;
  // error: Error | unknown;
  isAuthenticated: boolean;
  userInfo: IUserInfo;
}

export interface IAuthAction {
  type: EAuthAction;
  payload?: {
    userInfo: IUserInfo | any;
  };
}

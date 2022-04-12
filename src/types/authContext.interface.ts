import IUserInfo from './userInfo.interface';

export default interface IAuthContext {
  isAuthenticated: boolean;
  userInfo: IUserInfo | null;
  setAuthWhenLogin: (userInfo: IUserInfo) => void;
  setAuthWhenLogout: () => void;
}

import { useSelector } from 'react-redux';
import {
  selectAuthenticationError,
  selectAuthenticationStatus,
  selectAuthenticationUserInfo,
} from './selectors';
import { actions } from './slice';

const useHooks = () => {
  const status = useSelector(selectAuthenticationStatus);
  const error = useSelector(selectAuthenticationError);
  const isAuthenticated = useSelector(selectAuthenticationStatus);
  const userInfo = useSelector(selectAuthenticationUserInfo);

  const onSubmitLogin = (data: any) => {
    actions.login(data);
  };

  return {
    handlers: { onSubmitLogin },
    selectors: { isAuthenticated, userInfo, status, error },
  };
};

export default useHooks;

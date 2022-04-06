import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ACTION_STATUS } from '../../constants';
import {
  selectAuthenticationError,
  selectAuthenticationStatus,
  selectAuthenticationUserInfo,
} from './selectors';
import { actions } from './slice';

const useHooks = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const status = useSelector(selectAuthenticationStatus);
  const error = useSelector(selectAuthenticationError);
  const isAuthenticated = useSelector(selectAuthenticationStatus);
  const userInfo = useSelector(selectAuthenticationUserInfo);

  const onSubmitLogin = (data: any) => {
    dispatch(actions.login(data));
  };

  //! Reset state khi mount
  useEffect(() => {
    dispatch(actions.reset({}));
  }, [dispatch]);

  //! Chuyển hướng người dùng về home khi đăng nhập thành công
  useEffect(() => {
    if (status === ACTION_STATUS.SUCCESS) {
      navigate('/');
    }
  }, [navigate, status]);

  return {
    handlers: { onSubmitLogin },
    selectors: { isAuthenticated, userInfo, status, error },
  };
};

export default useHooks;

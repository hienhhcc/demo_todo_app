import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { ACTION_STATUS } from '../../../constants';
import {
  selectAuthenticationStatus,
  selectAuthenticationError,
} from 'features/LoginFeature/selectors';
import { actions } from 'features/LoginFeature/slice';
import { SubmitHandler } from 'react-hook-form';

type RegisterFormType = {
  username: string;
  password: string;
};

const useLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const status = useSelector(selectAuthenticationStatus);
  const error = useSelector(selectAuthenticationError);

  const onSubmitLogin: SubmitHandler<RegisterFormType> = useCallback(
    (data) => {
      dispatch(actions.login(data));
    },
    [dispatch]
  );

  //TODO Reset state khi mount
  useEffect(() => {
    dispatch(actions.reset({}));
  }, [dispatch]);

  //TODO Chuyển hướng người dùng về home khi đăng nhập thành công
  useEffect(() => {
    if (status === ACTION_STATUS.SUCCESS) {
      navigate('/');
    }
  }, [navigate, status]);

  return { selectors: { status, error }, handlers: { onSubmitLogin } };
};

export default useLogin;

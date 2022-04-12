import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler } from 'react-hook-form';

import { ACTION_STATUS } from '../../../constants';
import {
  selectAuthenticationStatus,
  selectAuthenticationError,
} from 'features/LoginFeature/selectors';
import { actions } from 'features/LoginFeature/slice';
import useAuth from 'contexts/Auth/useAuth';
import { loginAPI, loginAPI2 } from '../../../services';

type RegisterFormType = {
  username: string;
  password: string;
};

const useLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { setAuthWhenLogin } = useAuth();

  // const status = useSelector(selectAuthenticationStatus);
  // const error = useSelector(selectAuthenticationError);

  const onSubmitLogin: SubmitHandler<RegisterFormType> = useCallback(
    (values) => {
      const a = async () => {
        try {
          setIsLoading(true);
          const { data } = await loginAPI2(values);
          setAuthWhenLogin(data[0]);
          navigate('/');
        } catch (err: any) {
          setError(err);
          setIsLoading(false);
        }
      };
      a();
    },
    [navigate, setAuthWhenLogin]
  );

  //TODO Reset state khi mount
  useEffect(() => {
    setIsLoading(false);
    setError(null);
    dispatch(actions.reset({}));
  }, [dispatch]);

  //TODO Chuyển hướng người dùng về home khi đăng nhập thành công
  // useEffect(() => {
  //   if (status === ACTION_STATUS.SUCCESS) {
  //     navigate('/');
  //   }
  // }, [navigate, status]);

  return { selectors: { error, isLoading }, handlers: { onSubmitLogin } };
};

export default useLogin;

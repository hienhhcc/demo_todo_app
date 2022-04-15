import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { ACTION_STATUS } from '../../../constants';
import {
  selectRegisterError,
  selectRegisterStatus,
} from 'features/RegisterFeature/selectors';
import { actions } from 'features/RegisterFeature/slice';
import { SubmitHandler } from 'react-hook-form';

type RegisterFormType = {
  username: string;
  password: string;
};

const useRegister = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const status = useSelector(selectRegisterStatus);
  const error = useSelector(selectRegisterError);

  const onSubmitRegister: SubmitHandler<RegisterFormType> = useCallback(
    (data) => {
      console.log('hello');
      dispatch(actions.register(data));
    },
    [dispatch]
  );

  //TODO Chuyển hướng người dùng về trang login nếu đăng ký thành công
  useEffect(() => {
    if (status === ACTION_STATUS.SUCCESS) {
      dispatch(actions.reset({}));
      navigate('/login', { state: { from: 'register' } });
    }
  }, [status, navigate, dispatch]);

  return { selectors: { status, error }, handlers: { onSubmitRegister } };
};

export default useRegister;

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ACTION_STATUS } from '../../constants';
import { selectRegisterError, selectRegisterStatus } from './selectors';
import { actions } from './slice';

const useHooks = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const status = useSelector(selectRegisterStatus);
  const error = useSelector(selectRegisterError);

  const onSubmitRegister = (data: any) => {
    dispatch(actions.register(data));
  };

  //TODO Chuyển hướng người dùng về trang login nếu đăng ký thành công
  useEffect(() => {
    if (status === ACTION_STATUS.SUCCESS) {
      dispatch(actions.reset({}));
      navigate('/login', { state: { from: 'register' } });
    }
  }, [status, navigate, dispatch]);

  return { handlers: { onSubmitRegister }, selectors: { status, error } };
};

export default useHooks;

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ACTION_STATUS } from '../../../constants';
import { selectAuthenticationUserInfo } from '../../LoginFeature/selectors';
import { selectAddStatus } from '../selectors';
import { actions } from '../slice';

const useHooks = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userId = useSelector(selectAuthenticationUserInfo).id;
  const addStatus = useSelector(selectAddStatus);

  const onSubmitAddTodo = (data: any) => {
    dispatch(actions.addTodo({ ...data, userId }));
  };

  useEffect(() => {
    if (addStatus === ACTION_STATUS.SUCCESS) {
      navigate('/todos', { state: { from: 'add' } });
      dispatch(actions.resetAddStatus({}));
    }
  }, [addStatus, navigate, dispatch]);

  return {
    handlers: { onSubmitAddTodo },
    selectors: {},
  };
};

export default useHooks;

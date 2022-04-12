import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ACTION_STATUS } from '../../../constants';
import useAuth from '../../../contexts/Auth/useAuth';
// import { selectAuthenticationUserInfo } from '../../LoginFeature/selectors';
import { selectAddStatus, selectSearchField } from '../selectors';
import { actions } from '../slice';

const useHooks = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const userId = useSelector(selectAuthenticationUserInfo).id;
  const { userInfo } = useAuth();
  const addStatus = useSelector(selectAddStatus);
  const searchField = useSelector(selectSearchField);

  const onSubmitAddTodo = (data: any) => {
    dispatch(actions.addTodo({ ...data, userId: userInfo?.id }));
  };

  useEffect(() => {
    if (addStatus === ACTION_STATUS.SUCCESS) {
      navigate(`/todos?search=${searchField}`, { state: { from: 'add' } });
      dispatch(actions.resetAddStatus({}));
    }
  }, [addStatus, navigate, dispatch, searchField]);

  return {
    handlers: { onSubmitAddTodo },
    selectors: {},
  };
};

export default useHooks;

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { ACTION_STATUS } from '../../../constants';
import { selectAuthenticationUserInfo } from '../../LoginFeature/selectors';
import { selectEditStatus, selectSingleTodoItem } from '../selectors';
import { actions } from '../slice';

const useHooks = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { todoId } = useParams();
  const editStatus = useSelector(selectEditStatus);
  const singleTodo = useSelector(selectSingleTodoItem);
  const userId = useSelector(selectAuthenticationUserInfo).id;

  const onSubmitEditTodo = (data: any) => {
    dispatch(actions.editTodo({ ...data, todoId, userId }));
  };

  //! Fetch single todo
  useEffect(() => {
    dispatch(actions.fetchSingleTodo({ todoId }));
  }, [todoId, dispatch]);

  useEffect(() => {
    if (editStatus === ACTION_STATUS.SUCCESS) {
      navigate('/todos', { state: { from: 'edit' } });
      dispatch(actions.resetEditStatus({}));
    }
  }, [editStatus, navigate, dispatch]);

  return {
    handlers: { onSubmitEditTodo },
    selectors: { singleTodo },
  };
};

export default useHooks;

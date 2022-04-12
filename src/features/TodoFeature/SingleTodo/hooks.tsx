import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { ACTION_STATUS } from '../../../constants';
import useAuth from '../../../contexts/Auth/useAuth';
// import { selectAuthenticationUserInfo } from '../../LoginFeature/selectors';
import {
  selectEditStatus,
  selectSearchField,
  selectSingleTodoItem,
} from '../selectors';
import { actions } from '../slice';

const useHooks = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { todoId } = useParams();
  const editStatus = useSelector(selectEditStatus);
  const singleTodo = useSelector(selectSingleTodoItem);
  // const userId = useSelector(selectAuthenticationUserInfo).id;
  const { userInfo } = useAuth();
  const searchField = useSelector(selectSearchField);

  const onSubmitEditTodo = (data: any) => {
    dispatch(actions.editTodo({ ...data, todoId, userId: userInfo?.id }));
  };

  //! Fetch single todo
  useEffect(() => {
    dispatch(actions.fetchSingleTodo({ todoId }));
  }, [todoId, dispatch]);

  useEffect(() => {
    if (editStatus === ACTION_STATUS.SUCCESS) {
      navigate(`/todos?searchField=${searchField}`, {
        state: { from: 'edit' },
      });
      dispatch(actions.resetEditStatus({}));
    }
  }, [editStatus, navigate, dispatch, searchField]);

  return {
    handlers: { onSubmitEditTodo },
    selectors: { singleTodo },
  };
};

export default useHooks;

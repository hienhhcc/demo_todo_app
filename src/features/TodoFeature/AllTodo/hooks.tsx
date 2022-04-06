import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthenticationUserInfo } from '../../LoginFeature/selectors';
import { selectTodoItems } from '../selectors';
import { actions } from '../slice';

const useHooks = () => {
  const dispatch = useDispatch();

  const items = useSelector(selectTodoItems);
  const userInfo = useSelector(selectAuthenticationUserInfo);

  useEffect(() => {
    dispatch(actions.fetchTodo({ userId: userInfo.id }));
  }, [dispatch, userInfo.id]);

  const handleDeleteItem = (id: any) => {
    dispatch(actions.deleteTodo({ todoId: id }));
  };

  return { handlers: { handleDeleteItem }, selectors: { items } };
};

export default useHooks;

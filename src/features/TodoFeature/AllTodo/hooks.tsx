import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthenticationUserInfo } from '../../LoginFeature/selectors';
import { selectPageNumber, selectTodoItems } from '../selectors';
import { actions } from '../slice';

const useHooks = () => {
  const dispatch = useDispatch();

  const items = useSelector(selectTodoItems);
  const userInfo = useSelector(selectAuthenticationUserInfo);
  const page = useSelector(selectPageNumber);

  const PER_PAGE = 7;
  const count = Math.ceil(items.length / PER_PAGE);

  console.log(items.length);
  const handlePageChange = (e: any, p: any) => {
    dispatch(actions.setPage({ page: p }));
  };

  // useEffect(() => {
  //   dispatch(actions.fetchTodo({ userId: userInfo.id, _page: page }));
  // }, [dispatch, userInfo.id, page]);

  const handleDeleteItem = (id: any) => {
    dispatch(actions.deleteTodo({ todoId: id }));
  };

  return {
    handlers: { handleDeleteItem, handlePageChange },
    selectors: { items, count, page },
  };
};

export default useHooks;

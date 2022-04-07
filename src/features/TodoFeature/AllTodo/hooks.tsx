import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import { selectAuthenticationUserInfo } from '../../LoginFeature/selectors';
import {
  selectPageNumber,
  selectSearchField,
  selectTodoItems,
} from '../selectors';
import { actions } from '../slice';

const useHooks = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const items = useSelector(selectTodoItems);
  const userInfo = useSelector(selectAuthenticationUserInfo);
  const page = useSelector(selectPageNumber);
  const searchField = useSelector(selectSearchField);

  const PER_PAGE = 7;
  const count = Math.ceil(items.length / PER_PAGE);

  const handlePageChange = (e: any, p: any) => {
    setSearchParams({ search: searchField, page: p });
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

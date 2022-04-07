import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { AllTodoFeature } from '../../features';
import { reducer, sliceKey } from 'features/TodoFeature/slice';
import saga from 'features/TodoFeature/saga';
import { useCallback, useEffect, useState } from 'react';
import { useDebounce } from 'usehooks-ts';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from 'features/TodoFeature/slice';
import {} from 'react-router-dom';
import {
  selectPageNumber,
  selectSearchField,
} from '../../features/TodoFeature/selectors';
import { selectAuthenticationUserInfo } from '../../features/LoginFeature/selectors';

const TodosPage = () => {
  useInjectSaga({ key: sliceKey, saga });
  useInjectReducer({ key: sliceKey, reducer });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = useSelector(selectPageNumber);
  const userInfo = useSelector(selectAuthenticationUserInfo);
  const searchField = useSelector(selectSearchField);
  // const isMounted = useRef(false);

  // const [searchField, setSearchField] = useState('');

  const debounceSearchField = useDebounce(searchField);

  useEffect(() => {
    dispatch(
      actions.searchTodos({
        name: debounceSearchField,
        _page: page,
        userId: userInfo.id,
      })
    );
  }, [debounceSearchField, dispatch, page, userInfo.id]);

  useEffect(() => {
    setSearchParams({ search: searchField, page: page });
  }, [searchField, setSearchParams, page]);

  const handleChange = useCallback(
    (e) => {
      dispatch(actions.setSearchField(e.target.value));
    },
    [dispatch]
  );

  return (
    <Box sx={{ margin: 'auto', textAlign: 'center', mt: 3 }}>
      <Typography variant="h3" component="h2">
        All todo
      </Typography>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap="1rem"
      >
        <TextField
          type="text"
          placeholder="Search todo"
          label="Search todo"
          autoComplete="off"
          value={searchField}
          onChange={handleChange}
        />
        <Button
          variant="contained"
          startIcon={<AddCircleOutlinedIcon />}
          onClick={() => navigate(`/todos/new?search=${searchField}`)}
        >
          Add a todo
        </Button>
      </Stack>
      <AllTodoFeature />
    </Box>
  );
};

export default TodosPage;

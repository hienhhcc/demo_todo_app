import {
  Box,
  Button,
  Input,
  Pagination,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { memo, useRef } from 'react';
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
import { selectPageNumber } from '../../features/TodoFeature/selectors';

const TodosPage = () => {
  useInjectSaga({ key: sliceKey, saga });
  useInjectReducer({ key: sliceKey, reducer });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = useSelector(selectPageNumber);
  const isMounted = useRef(false);

  const [searchField, setSearchField] = useState('');
  const debounceSearchField = useDebounce(searchField);

  useEffect(() => {
    if (isMounted.current) {
      dispatch(actions.searchTodos({ name: debounceSearchField, _page: page }));
    } else {
      isMounted.current = true;
    }
  }, [debounceSearchField, dispatch, page]);

  useEffect(() => {
    setSearchParams(`search=${searchField}`);
  }, [searchField, setSearchParams]);

  const handleChange = useCallback((e) => {
    setSearchField(e.target.value);
  }, []);

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
          onChange={handleChange}
        />
        <Button
          variant="contained"
          startIcon={<AddCircleOutlinedIcon />}
          onClick={() => navigate('/todos/new')}
        >
          Add a todo
        </Button>
      </Stack>
      <AllTodoFeature />
    </Box>
  );
};

export default memo(TodosPage);

import { Box, Button, Typography } from '@mui/material';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { useNavigate } from 'react-router-dom';
import { AllTodoFeature } from '../../features';
import { reducer, sliceKey } from 'features/TodoFeature/slice';
import saga from 'features/TodoFeature/saga';

const TodosPage = () => {
  const navigate = useNavigate();
  useInjectSaga({ key: sliceKey, saga });
  useInjectReducer({ key: sliceKey, reducer });

  return (
    <Box sx={{ margin: 'auto', textAlign: 'center', mt: 3 }}>
      <Typography variant="h3" component="h2">
        All todo
      </Typography>

      <Button
        variant="contained"
        startIcon={<AddCircleOutlinedIcon />}
        onClick={() => navigate('/todos/new')}
      >
        Add a todo
      </Button>

      <AllTodoFeature />
    </Box>
  );
};

export default TodosPage;

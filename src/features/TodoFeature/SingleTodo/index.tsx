import { Box, Button, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { StyledForm } from '../../LoginFeature/styles';
import useHooks from './hooks';
import { DisplayErrorMessage } from '../../../components';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect } from 'react';

const SingleTodoFeature = () => {
  const {
    register: registerForm,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm({
    criteriaMode: 'all',
    mode: 'all',
  });

  const { ref: inputRef1, ...inputProps1 } = registerForm('name', {
    required: 'Todo name is required!',
  });
  const { ref: inputRef2, ...inputProps2 } = registerForm('description', {
    required: 'Todo description is required!',
  });

  const { handlers, selectors } = useHooks();
  const { onSubmitEditTodo } = handlers;
  const { singleTodo } = selectors;

  useEffect(() => {
    setValue('name', singleTodo?.name);
    setValue('description', singleTodo?.description);
  }, [setValue, singleTodo]);

  if (!singleTodo) {
    return <CircularProgress />;
  }

  return (
    <Box
      sx={{
        width: '700px',
        background: 'white',
        boxShadow: '4px 4px 4px rgba(0,0,0,0.1)',
        margin: 'auto',
        mt: 4,
        borderRadius: '15px',
        padding: '1rem',
      }}
    >
      <Typography variant="h4" component="h2" sx={{ textAlign: 'center' }}>
        View and edit todo
      </Typography>

      <StyledForm onSubmit={handleSubmit(onSubmitEditTodo)}>
        <TextField
          label="TodoName"
          autoComplete="off"
          sx={{ width: '100%', mt: 2 }}
          // value={singleTodo.name}
          inputRef={inputRef1}
          {...inputProps1}
        />
        <DisplayErrorMessage errors={errors} fieldName="name" />

        <TextField
          label="TodoDescription"
          autoComplete="off"
          sx={{ width: '100%', mt: 1.5 }}
          // value={singleTodo.description}
          rows={3}
          multiline
          inputRef={inputRef2}
          {...inputProps2}
        />
        <DisplayErrorMessage errors={errors} fieldName="description" />
        <Button
          startIcon={<SaveAsIcon />}
          variant="contained"
          type="submit"
          sx={{ width: '100%', mt: 1 }}
        >
          Save
        </Button>
      </StyledForm>
    </Box>
  );
};

export default SingleTodoFeature;

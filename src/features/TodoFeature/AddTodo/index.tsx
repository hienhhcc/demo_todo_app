import { Box, Button, TextField, Typography } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { StyledForm } from '../../LoginFeature/styles';
import useHooks from './hooks';
import { DisplayErrorMessage } from '../../../components';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';

const AddToDoFeature = () => {
  const {
    register: registerForm,
    formState: { errors },
    handleSubmit,
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

  const { handlers } = useHooks();
  const { onSubmitAddTodo } = handlers;

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
        Add a todo
      </Typography>

      <StyledForm onSubmit={handleSubmit(onSubmitAddTodo)}>
        <TextField
          label="TodoName"
          autoComplete="off"
          sx={{ width: '100%', mt: 2 }}
          inputRef={inputRef1}
          {...inputProps1}
        />
        <DisplayErrorMessage errors={errors} fieldName="name" />

        <TextField
          label="TodoDescription"
          autoComplete="off"
          sx={{ width: '100%', mt: 1.5 }}
          rows={3}
          multiline
          inputRef={inputRef2}
          {...inputProps2}
        />
        <DisplayErrorMessage errors={errors} fieldName="description" />
        <Button
          startIcon={<AddCircleOutlinedIcon />}
          variant="contained"
          type="submit"
          sx={{ width: '100%', mt: 1 }}
        >
          Add
        </Button>
      </StyledForm>
    </Box>
  );
};

export default AddToDoFeature;

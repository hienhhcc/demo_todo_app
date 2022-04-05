import { Button, TextField, Typography } from '@mui/material';
import { PersonAdd } from '@mui/icons-material';
import { useForm } from 'react-hook-form';
import { StyledForm } from '../LoginFeature/styles';

import useHooks from './hooks';
import { StyledRegister } from './styles';
import { Link } from 'react-router-dom';

const RegisterFeature = () => {
  const { register: registerForm, handleSubmit } = useForm();
  const { handlers, selectors } = useHooks();

  const { onSubmitRegister } = handlers;
  const {} = selectors;

  return (
    <StyledRegister>
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        sx={{ textAlign: 'center' }}
      >
        Register
      </Typography>
      <StyledForm onSubmit={handleSubmit(onSubmitRegister)}>
        <TextField
          type="text"
          label="Username"
          placeholder="Your username"
          sx={{ width: '100%' }}
          {...registerForm('username')}
        />
        <TextField
          type="password"
          placeholder="Your password"
          label="Password"
          sx={{ width: '100%', mt: 1.5 }}
          {...registerForm('password')}
        />
        <TextField
          type="password"
          placeholder="Your password"
          label="Confirm password"
          sx={{ width: '100%', mt: 1.5 }}
          {...registerForm('confirmPassword')}
        />

        <Button
          startIcon={<PersonAdd />}
          variant="contained"
          type="submit"
          sx={{ width: '100%', mt: 1 }}
        >
          Register
        </Button>

        <Typography
          variant="caption"
          gutterBottom
          component="div"
          sx={{ margin: 'auto', textAlign: 'center', mt: '0.5rem' }}
        >
          Already have an account? Login <Link to="/login">now!</Link>
        </Typography>
      </StyledForm>
    </StyledRegister>
  );
};

export default RegisterFeature;

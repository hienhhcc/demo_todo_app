import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Login } from '@mui/icons-material';
import { useForm } from 'react-hook-form';

import useHooks from './hooks';

import {
  StyledControlInput,
  StyledForm,
  StyledInput,
  StyledLogin,
} from './styles';

const LoginFeature = () => {
  const {
    register: registerForm,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'all',
    criteriaMode: 'all',
  });

  const { handlers } = useHooks();
  const { onSubmitLogin } = handlers;

  return (
    <StyledLogin>
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        sx={{ textAlign: 'center' }}
      >
        Login
      </Typography>
      <StyledForm onSubmit={handleSubmit(onSubmitLogin)}>
        <StyledControlInput>
          <StyledInput
            type="text"
            placeholder="Username"
            {...registerForm('username')}
          />
        </StyledControlInput>

        <StyledControlInput>
          <StyledInput
            type="password"
            placeholder="Password"
            {...registerForm('password')}
          />
        </StyledControlInput>

        <Button
          startIcon={<Login />}
          variant="contained"
          type="submit"
          sx={{ width: '100%', mt: 1 }}
        >
          Login
        </Button>

        <Typography
          variant="caption"
          gutterBottom
          component="div"
          sx={{ margin: 'auto', textAlign: 'center', mt: '0.5rem' }}
        >
          Don't have an account? Register <Link to="/register">now!</Link>
        </Typography>
      </StyledForm>
    </StyledLogin>
  );
};

export default LoginFeature;

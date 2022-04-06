import { Button, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Login } from '@mui/icons-material';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import useHooks from './hooks';

import { StyledForm, StyledLogin } from './styles';
import { DisplayErrorMessage } from '../../components';

const schema = yup
  .object({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
  })
  .required();

const LoginFeature = () => {
  const {
    register: registerForm,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
    criteriaMode: 'all',
    mode: 'all',
  });

  const { handlers, selectors } = useHooks();
  const { onSubmitLogin } = handlers;
  const {} = selectors;

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
        <TextField
          type="text"
          label="Username"
          placeholder="Your username"
          autoComplete="off"
          sx={{ width: '100%' }}
          {...registerForm('username')}
        />
        <DisplayErrorMessage errors={errors} fieldName="username" />

        <TextField
          type="password"
          placeholder="Your password"
          label="Password"
          autoComplete="off"
          sx={{ width: '100%', mt: 1.5 }}
          {...registerForm('password')}
        />
        <DisplayErrorMessage errors={errors} fieldName="password" />

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

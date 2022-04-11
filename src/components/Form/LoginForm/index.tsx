import { Login } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import * as yup from 'yup';

import Form from '../index';
import MUIInput from '../MUIInput';
import useLogin from './hooks';

const schema = yup
  .object({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
  })
  .required();

const LoginForm = () => {
  const {
    handlers: { onSubmitLogin },
  } = useLogin();

  return (
    <Form
      options={{ criteriaMode: 'all', mode: 'all' }}
      schema={schema}
      onSubmit={onSubmitLogin}
    >
      <MUIInput
        name="username"
        inputProps={{
          label: 'Username',
          type: 'text',
          autoComplete: 'off',
          placeholder: 'Your username',
        }}
      />

      <MUIInput
        name="password"
        inputProps={{
          label: 'Password',
          type: 'password',
          autoComplete: 'off',
          placeholder: 'Your password',
        }}
      />

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
    </Form>
  );
};

export default LoginForm;

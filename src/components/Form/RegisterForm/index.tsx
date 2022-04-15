import { yupResolver } from '@hookform/resolvers/yup';
import { PersonAdd } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import * as yup from 'yup';

import Form from '../index';
import MUIInput from '../MUIInput';
import useRegister from './hooks';

const schema = yup
  .object({
    username: yup
      .string()
      .required('Username is required')
      .min(8, 'Username must be at least 8 characters long')
      .max(32, 'Username must not exceed 32 characters'),
    password: yup
      .string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters long')
      .max(32, 'Password must not exceed 32 characters')
      .matches(
        /^(?:(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*)$/,
        'Password must contain 1 number, 1 lowercase and 1 uppercase'
      ),
  })
  .required();

const RegisterForm = () => {
  const {
    handlers: { onSubmitRegister },
  } = useRegister();

  const resolver = schema ? yupResolver(schema) : undefined;

  return (
    <Form
      options={{ criteriaMode: 'all', mode: 'all', resolver }}
      schema={schema}
      onSubmit={onSubmitRegister}
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
    </Form>
  );
};

export default RegisterForm;

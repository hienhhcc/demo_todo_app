import { Button, TextField, Typography } from '@mui/material';
import { PersonAdd } from '@mui/icons-material';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';

import useHooks from './hooks';
import { StyledRegister } from './styles';
import { StyledForm } from '../LoginFeature/styles';
import { DisplayErrorMessage } from '../../components';
import { sliceKey, reducer } from './slice';
import saga from './saga';

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

const RegisterFeature = () => {
  useInjectSaga({ key: sliceKey, saga });
  useInjectReducer({ key: sliceKey, reducer });

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

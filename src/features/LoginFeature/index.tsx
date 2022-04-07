import { Button, Input, Snackbar, TextField, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { Login } from '@mui/icons-material';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

import saga from './saga';
import useHooks from './hooks';
import { sliceKey, reducer, actions } from './slice';

import { StyledForm, StyledLogin } from './styles';
import { DisplayErrorMessage } from '../../components';
import { forwardRef, useEffect, useState } from 'react';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { useDispatch } from 'react-redux';
import { useDebounce } from 'usehooks-ts';

const schema = yup
  .object({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
  })
  .required();

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const LoginFeature = () => {
  useInjectSaga({ key: sliceKey, saga });
  useInjectReducer({ key: sliceKey, reducer });
  const dispatch = useDispatch();
  // const [searchField, setSearchField] = useState('');
  // const debounce = useDebounce(searchField);

  // useEffect(() => {
  //   console.log('hello');
  // }, [debounce]);

  const {
    register: registerForm,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
    criteriaMode: 'all',
    mode: 'all',
  });

  const location: { state?: any } = useLocation();
  const { handlers, selectors } = useHooks();
  const { onSubmitLogin } = handlers;
  const { error } = selectors;

  const [open, setOpen] = useState(true);
  const [openError, setOpenError] = useState(true);
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleCloseError = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    dispatch(actions.clearError({}));
  };

  return (
    <StyledLogin>
      {location.state?.from === 'register' && (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: '100%' }}
          >
            Register success, you can now login!
          </Alert>
        </Snackbar>
      )}
      {error && (
        <Snackbar
          open={openError}
          autoHideDuration={6000}
          onClose={handleCloseError}
        >
          <Alert
            onClose={handleCloseError}
            severity="error"
            sx={{ width: '100%' }}
          >
            {error}
          </Alert>
        </Snackbar>
      )}

      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        sx={{ textAlign: 'center' }}
      >
        Login
      </Typography>
      {/* <Input
        onChange={(e) => {
          setSearchField(e.target.value);
        }}
        placeholder="Search"
      /> */}
      <StyledForm onSubmit={handleSubmit(onSubmitLogin)}>
        <TextField
          type="text"
          label="Username"
          placeholder="Your username"
          autoComplete="off"
          sx={{ width: '100%', mt: 2 }}
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

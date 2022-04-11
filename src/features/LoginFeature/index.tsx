import { Snackbar, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';

import saga from './saga';
import useHooks from './hooks';
import { sliceKey, reducer } from './slice';

import { StyledLogin } from './styles';
import { LoginForm } from '../../components';
import { forwardRef } from 'react';

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const LoginFeature = () => {
  useInjectSaga({ key: sliceKey, saga });
  useInjectReducer({ key: sliceKey, reducer });

  const location: { state?: any } = useLocation();
  const { handlers, selectors } = useHooks();
  const { handleClose, handleCloseError } = handlers;
  const { error, open, openError } = selectors;

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
      <LoginForm />
    </StyledLogin>
  );
};

export default LoginFeature;

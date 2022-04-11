import { Typography } from '@mui/material';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';

import { StyledRegister } from './styles';
import { RegisterForm } from '../../components';
import { sliceKey, reducer } from './slice';
import saga from './saga';

const RegisterFeature = () => {
  useInjectSaga({ key: sliceKey, saga });
  useInjectReducer({ key: sliceKey, reducer });

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
      <RegisterForm />
    </StyledRegister>
  );
};

export default RegisterFeature;

import usePublicRoute from 'hooks/usePublicRoute';

import { RegisterFeature } from 'features';

const RegisterPage = () => {
  usePublicRoute();

  return <RegisterFeature />;
};

export default RegisterPage;

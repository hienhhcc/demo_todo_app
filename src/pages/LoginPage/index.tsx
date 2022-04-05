import usePublicRoute from 'hooks/usePublicRoute';

import { LoginFeature } from 'features';

const LoginPage = () => {
  usePublicRoute();

  return <LoginFeature />;
};

export default LoginPage;

import { Navigate } from 'react-router-dom';

interface Props {
  children: any;
}

const PrivateRoute = ({ children }: Props) => {
  const isAuthenticated = false;

  return isAuthenticated ? children : <Navigate to={'/login'} />;
};

export default PrivateRoute;

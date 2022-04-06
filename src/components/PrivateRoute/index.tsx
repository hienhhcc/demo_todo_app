import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsAuthenticated } from '../../features/LoginFeature/selectors';

interface Props {
  children: any;
}

const PrivateRoute = ({ children }: Props) => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return isAuthenticated ? children : <Navigate to={'/login'} />;
};

export default PrivateRoute;

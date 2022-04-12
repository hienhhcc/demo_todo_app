import { useSelector } from 'react-redux';
import useAuth from '../../contexts/Auth/useAuth';
// import { selectIsAuthenticated } from '../../features/LoginFeature/selectors';

const useHooks = () => {
  // const isAuthenticated = useSelector(selectIsAuthenticated);
  const { isAuthenticated } = useAuth();

  return { handlers: {}, selectors: { isAuthenticated } };
};

export default useHooks;

import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from '../../features/LoginFeature/selectors';


const useHooks = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return { handlers: {}, selectors: { isAuthenticated } };
};

export default useHooks;

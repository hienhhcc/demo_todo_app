import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const usePublicRoute = () => {
  const navigate = useNavigate();

  const isAuthenticated = true;

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/home');
    }
  }, [isAuthenticated, navigate]);
};

export default usePublicRoute;

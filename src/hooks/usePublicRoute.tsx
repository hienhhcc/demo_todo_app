import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const usePublicRoute = () => {
  const navigate = useNavigate();

  const isAuthenticated = false;

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);
};

export default usePublicRoute;

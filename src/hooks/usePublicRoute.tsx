import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../contexts/Auth/useAuth';

const usePublicRoute = () => {
  const navigate = useNavigate();

  // const isAuthenticated = false;
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);
};

export default usePublicRoute;

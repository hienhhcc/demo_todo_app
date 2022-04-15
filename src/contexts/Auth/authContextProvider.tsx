import AuthContext from './authContext';
import useAuthContextProvider from './useAuthContextProvider';

interface AuthContextProviderProps {
  children: React.ReactElement;
}

const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const values = useAuthContextProvider();

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;

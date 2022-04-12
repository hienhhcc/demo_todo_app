import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import useAuth from '../../contexts/Auth/useAuth';
// import { selectIsAuthenticated } from '../../features/LoginFeature/selectors';

const HomePage = () => {
  // const isAuthenticated = useSelector(selectIsAuthenticated);
  const { isAuthenticated } = useAuth();

  let content = (
    <Box sx={{ margin: 'auto', mt: 2, textAlign: 'center' }}>
      <Typography variant="h3">Welcome</Typography>
      <p>
        Please <Link to="/login">login</Link> to proceed the app
      </p>
    </Box>
  );

  if (isAuthenticated) {
    content = (
      <Box sx={{ margin: 'auto', mt: 2, textAlign: 'center' }}>
        <Typography variant="h3">Welcome</Typography>
        <p>
          Let's plan <Link to="/todos">todos</Link>
        </p>
      </Box>
    );
  }

  return content;
};

export default HomePage;

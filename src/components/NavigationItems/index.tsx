import { Stack } from '@mui/material';
import { StyledNavigationItem } from './NavigationItem/styles';
import { StyledNavigationItems } from './styles';
import useHooks from './hooks';

const NavigationItems = () => {
  const { selectors } = useHooks();
  const { isAuthenticated } = selectors;

  let navigationItems = [
    {
      to: '/login',
      name: 'Login',
    },
    {
      to: '/register',
      name: 'Register',
    },
  ];

  if (isAuthenticated) {
    navigationItems = [
      {
        to: '/',
        name: 'Home',
      },
      {
        to: '/todos',
        name: 'Todos',
      },
      {
        to: '/logout',
        name: 'Logout',
      },
    ];
  }

  return (
    <StyledNavigationItems>
      <Stack
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        gap="0.5rem"
      >
        {navigationItems.map(({ name, to }) => (
          <StyledNavigationItem key={name} to={to}>
            {name}
          </StyledNavigationItem>
        ))}
      </Stack>
    </StyledNavigationItems>
  );
};

export default NavigationItems;

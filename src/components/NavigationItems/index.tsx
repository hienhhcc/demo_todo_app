import { Button, Stack } from '@mui/material';
import { StyledNavigationItem } from './NavigationItem/styles';
import { StyledNavigationItems } from './styles';
import useHooks from './hooks';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const NavigationItems = () => {
  const { t, i18n } = useTranslation();
  const { selectors } = useHooks();
  const { isAuthenticated } = selectors;

  let navigationItems = [
    {
      to: '/login',
      name: t('Login'),
    },
    {
      to: '/register',
      name: t('Register'),
    },
  ];

  if (isAuthenticated) {
    navigationItems = [
      {
        to: '/',
        name: t('Home'),
      },
      {
        to: '/todos',
        name: t('Todos'),
      },
      {
        to: '/logout',
        name: t('Logout'),
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
        <Button
          variant="contained"
          onClick={() => {
            i18n.changeLanguage('en');
          }}
        >
          EN
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            i18n.changeLanguage('vn');
          }}
        >
          VN
        </Button>
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

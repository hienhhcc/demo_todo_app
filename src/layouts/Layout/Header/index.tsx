import { Avatar, Box, Container, Stack } from '@mui/material';
import { MyLink, NavigationItems } from 'components/index';
import { StyledHeader } from './styles';

const Header = () => {
  return (
    <StyledHeader>
      <Container maxWidth="lg" style={{ height: '100%' }}>
        <Stack
          justifyContent="space-between"
          alignItems="center"
          direction="row"
          style={{ height: '100%' }}
        >
          <MyLink to={'/'}>
            <Stack
              justifyContent="center"
              alignItems="center"
              direction="row"
              gap="0.5rem"
            >
              <Avatar sx={{ bgcolor: 'orange' }}>T</Avatar>
              <Box component="span">My Todo</Box>
            </Stack>
          </MyLink>
          <NavigationItems />
        </Stack>
      </Container>
    </StyledHeader>
  );
};

export default Header;

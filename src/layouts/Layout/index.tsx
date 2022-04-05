import { Outlet } from 'react-router-dom';

import Header from './Header';

import { StyledMain } from './styles';

const Layout = () => {
  return (
    <>
      <Header />
      <StyledMain>
        <Outlet />
      </StyledMain>
    </>
  );
};

export default Layout;

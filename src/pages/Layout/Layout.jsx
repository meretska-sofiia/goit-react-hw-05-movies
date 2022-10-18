import { Outlet } from 'react-router-dom';
import { Header, StyledLink, Container } from './Layout.styled';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <>
      <Header>
        <Container>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="movies">Movies</StyledLink>
        </Container>
      </Header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
export default Layout;

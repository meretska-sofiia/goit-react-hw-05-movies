import { Outlet } from 'react-router-dom';
import { Header, StyledLink, MainContainer } from './Layout.styled';

const Layout = () => {
  return (
    <MainContainer>
      <Header>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="movies">Movies</StyledLink>
      </Header>
      <main>
        <Outlet />
      </main>
    </MainContainer>
  );
};
export default Layout;

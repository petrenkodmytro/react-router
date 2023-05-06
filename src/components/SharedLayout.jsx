import { Outlet } from 'react-router-dom';
import { Container, Header, Logo, LinkPage } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <span role="img" aria-label="computer icon">
            💻
          </span>{' '}
          GoMerch Store
        </Logo>
        <nav>
          <LinkPage to="/">Home</LinkPage>
          <LinkPage to="/about">About</LinkPage>
          <LinkPage to="/products">Products</LinkPage>
        </nav>
      </Header>
      <Outlet />
    </Container>
  );
};

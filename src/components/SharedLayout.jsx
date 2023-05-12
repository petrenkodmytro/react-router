import { Outlet } from 'react-router-dom';
import { Container, Header, Logo, LinkPage } from './SharedLayout.styled';
import { Suspense } from 'react';
import { AiOutlineLaptop } from 'react-icons/ai';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <span role="img" aria-label="computer icon">
            <AiOutlineLaptop />
          </span>{' '}
          GoMerch Store
        </Logo>
        <nav>
          <LinkPage to="/">Home</LinkPage>
          <LinkPage to="/about">About</LinkPage>
          <LinkPage to="/products">Products</LinkPage>
        </nav>
      </Header>

      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

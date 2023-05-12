import { Link, useLocation } from 'react-router-dom';
import { ContainerWrap, CardWrapper, ProductName } from './ProductList.styled';

export const ProductList = ({ products }) => {
  const location = useLocation();
  return (
    <ContainerWrap>
      {products.map(product => (
        <CardWrapper key={product.id}>
          <Link to={`${product.id}`} state={{ from: location }}>
            <img src="https://via.placeholder.com/200x100" alt="" />
            <ProductName>{product.name}</ProductName>
          </Link>
        </CardWrapper>
      ))}
    </ContainerWrap>
  );
};

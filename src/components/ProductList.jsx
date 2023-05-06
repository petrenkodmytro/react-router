import { Link } from 'react-router-dom';
import { ContainerWrap, CardWrapper, ProductName } from './ProductList.styled';

export const ProductList = ({ products }) => {
  return (
    <ContainerWrap>
      {products.map(product => (
        <CardWrapper key={product.id}>
          <Link to={`${product.id}`}>
            <img src="https://via.placeholder.com/200x100" alt="" />
            <ProductName>{product.name}</ProductName>
          </Link>
        </CardWrapper>
      ))}
    </ContainerWrap>
  );
};

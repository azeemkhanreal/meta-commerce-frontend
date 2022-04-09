import styled from "styled-components";
import Product from "./Product";

const Products = ({ title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <ProductContainer>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </ProductContainer>
    </Container>
  );
};

const Container = styled.div`
  padding: 0px 45px;
`;
const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Title = styled.div`
  font-size: 26px;
  font-weight: 400;
  margin: 20px 0px;
  text-transform: uppercase;
`;

export default Products;

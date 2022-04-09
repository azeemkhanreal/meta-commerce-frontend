import { Link } from "react-router-dom";
import styled from "styled-components";
import Product from "./Product";

const Products = ({ title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <ProductContainer>
        <Link to="/product/1">
          <Product />
        </Link>
        <Link to="/product/1">
          <Product />
        </Link>
        <Link to="/product/1">
          <Product />
        </Link>
        <Link to="/product/1">
          <Product />
        </Link>
        <Link to="/product/1">
          <Product />
        </Link>
        <Link to="/product/1">
          <Product />
        </Link>
        <Link to="/product/1">
          <Product />
        </Link>
        <Link to="/product/1">
          <Product />
        </Link>
      </ProductContainer>
    </Container>
  );
};

const Container = styled.div`
  padding: 0px 35px;
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

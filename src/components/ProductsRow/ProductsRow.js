import React from "react";
import { Container, ProductRowHeader } from "./productRow.style";
import Products from "./components/Products/Products";
const ProductsRow = ({ title }) => {
  return (
    <Container>
      <ProductRowHeader>
        <h1>{title}</h1>
        <h4>View All</h4>
      </ProductRowHeader>
      <Products />
    </Container>
  );
};

export default ProductsRow;

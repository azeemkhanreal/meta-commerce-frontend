import React from "react";
import { ProductCard, Container } from "../Products/products.style";

const Products = () => {
  return (
    <Container>
      <ProductCard>
        <img src="https://picsum.photos/200/300" alt="" />
        <h1 className="product_title">Nike Thomas</h1>
        <h4 className="product_desc">Training Nike backpack</h4>
        <h4 className="product_price">$24,89</h4>
      </ProductCard>
      <ProductCard>
        <img src="https://picsum.photos/200/300" alt="" />
        <h1 className="product_title">Nike Thomas</h1>
        <h4 className="product_desc">Training Nike backpack</h4>
        <h4 className="product_price">$24,89</h4>
      </ProductCard>
      <ProductCard>
        <img src="https://picsum.photos/200/300" alt="" />
        <h1 className="product_title">Nike Thomas</h1>
        <h4 className="product_desc">Training Nike backpack</h4>
        <h4 className="product_price">$24,89</h4>
      </ProductCard>
      <ProductCard>
        <img src="https://picsum.photos/200/300" alt="" />
        <h1 className="product_title">Nike Thomas</h1>
        <h4 className="product_desc">Training Nike backpack</h4>
        <h4 className="product_price">$24,89</h4>
      </ProductCard>
      <ProductCard>
        <img src="https://picsum.photos/200/300" alt="" />
        <h1 className="product_title">Nike Thomas</h1>
        <h4 className="product_desc">Training Nike backpack</h4>
        <h4 className="product_price">$24,89</h4>
      </ProductCard>
    </Container>
  );
};

export default Products;

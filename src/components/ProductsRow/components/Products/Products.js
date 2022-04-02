import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ProductCard, Container } from "../Products/products.style";

const Products = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  return (
    <Container>
      {data.map((item) => (
        <Link key={item.id} to={`/product/${item.id}`}>
          <ProductCard>
            <img src={item.image} alt="" />
            <h1 className="product_title">{item.title}</h1>
            {/* <h4 className="product_desc">Training Nike backpack</h4> */}
            <h4 className="product_price">{item.price} $</h4>
          </ProductCard>
        </Link>
      ))}
    </Container>
  );
};

export default Products;

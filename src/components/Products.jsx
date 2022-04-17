import { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import { userRequest } from "../constants/requests";

const Products = ({ category, filters, sort, title, sex }) => {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        let res;
        if (sex && category) {
          res = await userRequest.get(
            `/products/?sex=${sex}&category=${category}`
          );
        } else {
          res = await userRequest.get(`/products?category=${category}`);
        }
        // const res = await userRequest.get(`/products?category=${category}`);
        setProducts(res.data);
      } catch (error) {}
    };
    getProducts();
  }, [category]);

  useEffect(() => {
    category &&
      setFilterProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, category, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilterProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilterProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setFilterProducts((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sort]);

  return (
    <Container>
      {!category && <Title>{title}</Title>}
      <ProductContainer>
        {category
          ? filterProducts?.map((product) => (
              <Product key={product._id} product={product} />
            ))
          : products.map((product) => (
              <Product key={product._id} product={product} />
            ))}
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

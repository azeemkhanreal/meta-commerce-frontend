import { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import axios from "axios";
import { TOKEN } from "../constants/requests";

const Products = ({ category, filters, sort, title }) => {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);

  // filterization of category
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          category
            ? `http://localhost:5000/api/products?category=${category}`
            : "http://localhost:5000/api/products",
          {
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${TOKEN}`,
            },
          }
        );
        setProducts(res.data.data);
      } catch (error) {}
    };
    getProducts();
  }, [category]);
  //  filterization of category and size,color
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
          ? filterProducts?.map((item) => (
              <Product key={item._id} item={item} />
            ))
          : products
              .slice(0, 4)
              ?.map((item) => <Product key={item._id} item={item} />)}
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

import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Product from "../components/Product";
import { userRequest } from "../constants/requests";
import { Outlet, useOutlet } from "react-router-dom";
import GoToTop from "../components/GoToTop";

const Men = () => {
  const [products, setProducts] = useState([]);
  const outlet = useOutlet();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await userRequest.get("/products?sex=male");
        setProducts(res.data);
      } catch (error) {}
    };
    getProducts();
  }, []);

  return (
    <Container>
      <Announcement />
      <Header />
      {/* if there is no outlet */}
      {!outlet && (
        <React.StrictMode>
          <Slider />
          <Categories />
          <ProductContainer>
            <Title>Top T-Shirts</Title>
            <ProductList>
              {products.slice(0, 4).map((product) => (
                <Product key={product._id} product={product} />
              ))}
            </ProductList>
          </ProductContainer>

          <ProductContainer>
            <Title>Top Shirts</Title>
            <ProductList>
              {products
                .filter((product) => product.categories.includes("shirts"))
                .slice(0, 4)
                .map((product) => (
                  <Product key={product._id} product={product} />
                ))}
            </ProductList>
          </ProductContainer>

          <ProductContainer>
            <Title>Top Jeans</Title>
            <ProductList>
              {products
                .filter((product) => product.categories.includes("jeans"))
                .map((product) => (
                  <Product key={product._id} product={product} />
                ))}
            </ProductList>
          </ProductContainer>
          <Newsletter />
        </React.StrictMode>
      )}
      {/* here outlet rendering will be done */}
      <Outlet />
      <Footer />
      <GoToTop />
    </Container>
  );
};

const Container = styled.div``;
const ProductContainer = styled.div`
  padding: 20px 45px;
`;
const Title = styled.h1`
  font-size: 26px;
  font-weight: 400;
  margin-bottom: 20px;
  text-transform: uppercase;
`;
const ProductList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export default Men;

import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { womenCategories, womenSlider } from "../db";
import { useEffect, useState } from "react";
import { Outlet, useOutlet } from "react-router-dom";
import { userRequest } from "../constants/requests";
import GoToTop from "../components/GoToTop";
import Product from "../components/Product";

const Women = () => {
  const [products, setProducts] = useState([]);
  const outlet = useOutlet();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await userRequest.get("/products?sex=women");
        setProducts(res.data);
      } catch (error) {}
    };
    getProducts();
  }, []);

  return (
    <Container>
      <Announcement />
      <Header />

      {!outlet && (
        <React.StrictMode>
          <Slider slide={womenSlider} />
          <Categories cat={womenCategories} />
          <ProductContainer>
            <Title>Top T-Shirts</Title>
            <ProductList>
              {products
                .filter((product) => product.categories.includes("tshirts"))
                .slice(0, 4)
                .map((product) => (
                  <Product key={product._id} product={product} />
                ))}
            </ProductList>
          </ProductContainer>

          <ProductContainer>
            <Title>Top Sarees</Title>
            <ProductList>
              {products
                .filter((product) => product.categories.includes("sarees"))
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
export default Women;

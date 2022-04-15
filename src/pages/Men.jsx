import styled from "styled-components";
import Header from "../components/Header";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Product from "../components/Product";
import { userRequest } from "../constants/requests";

const Men = () => {
  const { token } = useSelector((state) => state.user.currentUser);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await userRequest.get("/products");
        setProducts(res.data);
      } catch (error) {}
    };
    getProducts();
  }, [token]);

  return (
    <Container>
      <Announcement />
      <Header />
      <Slider />
      <Categories owner="men" />

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
      <Footer />
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
  flex-wrap: wrap;
`;

export default Men;

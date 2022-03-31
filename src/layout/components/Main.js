import React from "react";
import styled from "styled-components";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ProductDesc from "../../components/ProductDescription/ProductDesc";
import Men from "../../pages/Men/Men";
import Women from "../../pages/Women/Women";
const Main = () => {
  return (
    <Container>
      <Header />
      <ProductDesc />
      {/* <Men /> */}
      {/* <Women /> */}
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  background-color: rgb(250, 250, 250);
  width: calc(100% - 200px);
  flex: 1;
  position: absolute;
  left: 200px;
`;

export default Main;

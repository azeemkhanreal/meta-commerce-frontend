import React from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import AdFeature from "../../components/AdFeature/AdFeature";
const Main = () => {
  return (
    <Container>
      <Header />
      <AdFeature />
    </Container>
  );
};

const Container = styled.div`
  background-color: rgb(250, 250, 250);
  height: 100vh;
  width: 100%;
  flex: 1;
`;

export default Main;

import React from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import Men from "../../pages/Men/Men";
const Main = () => {
  return (
    <Container>
      <Header />
      <Men />
    </Container>
  );
};

const Container = styled.div`
  background-color: rgb(250, 250, 250);
  height: 100vh;
  width: calc(100% - 200px);
  flex: 1;
  position: absolute;
  left: 200px;
`;

export default Main;

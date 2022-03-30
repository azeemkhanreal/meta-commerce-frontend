import React from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";

const Main = () => {
  return (
    <Container>
      {/* Header */}
      <Header />
    </Container>
  );
};

const Container = styled.div`
  background-color: rgb(250, 250, 250);
  height: 100vh;
  width: 100vw;
  flex: 1;
`;

export default Main;

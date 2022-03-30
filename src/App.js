import React from "react";
import { Counter } from "./features/counter/Counter";
import styled from "styled-components";
import Layout from "./layout/Layout";
function App() {
  return (
    <Container className="App">
      <Layout />
    </Container>
  );
}

export const Container = styled.div``;

export default App;

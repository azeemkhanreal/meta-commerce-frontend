import React from "react";
import { Counter } from "./features/counter/Counter";
import styled from "styled-components";
import Men from "./pages/Men/Men";

function App() {
  return <Men />;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default App;

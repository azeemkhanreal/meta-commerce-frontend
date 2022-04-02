import React from "react";
import { Counter } from "./features/counter/Counter";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Men from "./pages/Men/Men";
import Women from "./pages/Women/Women";
import ProductDesc from "./components/ProductDescription/ProductDesc";
import Footer from "./components/Footer/Footer";
import Shirts from "./pages/Men/subPages/Shirts/Shirts";

function App() {
  return (
    <Container className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Men />} />
          <Route path="men" element={<Men />}>
            <Route path="shirts" element={<Shirts />} />
          </Route>
          <Route path="/women" element={<Women />}>
            <Route path="shirts" element={<Shirts />} />
          </Route>
          <Route path="/product/:id" element={<ProductDesc />} />
        </Routes>
        <Footer />
      </Router>
    </Container>
  );
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default App;

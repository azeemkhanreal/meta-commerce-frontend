import React from "react";
import { Counter } from "./features/counter/Counter";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Men from "./pages/Men/Men";
import Women from "./pages/Women/Women";
import ProductDesc from "./components/ProductDescription/ProductDesc";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <Container className="App">
      <Router>
        <Sidebar />
        <Header />
        <Content>
          <Routes>
            <Route path="/" element={<p>Home</p>} />
            <Route path="men" element={<Men />} />
            <Route path="/women" element={<Women />} />
            <Route path="/product/:id" element={<ProductDesc />} />
          </Routes>
          <Footer />
        </Content>
      </Router>
    </Container>
  );
}

export const Container = styled.div`
  display: flex;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 200px;
  width: calc(100% - 200px);
`;

export default App;

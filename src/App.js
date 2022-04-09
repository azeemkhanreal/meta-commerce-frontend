import { Counter } from "./features/counter/Counter";
import styled from "styled-components";
import Men from "./pages/Men";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Women from "./pages/Women";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useState } from "react";

function App() {
  const [user, setUser] = useState("Azeem");

  return (
    <Container>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/men" replace />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/register" replace />}
          />
          <Route
            path="/register"
            element={user ? <Register /> : <Navigate to="/login" replace />}
          />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="*" element={<h1>"Page Not Found"</h1>} />
        </Routes>
      </Router>
    </Container>
  );
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default App;

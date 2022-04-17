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
import ProductList from "./pages/ProductList";
import { useSelector } from "react-redux";
import Error404 from "./pages/Error404";
import Profile from "./pages/profile/Profile";
import BasicInfo from "./pages/profile/components/BasicInfo";
import Address from "./pages/profile/components/Address";
import Order from "./pages/profile/components/Order";
import ChangePassword from "./pages/profile/components/ChangePassword";

function App() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <Container>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/men" replace />} />
          <Route path="men" element={<Men />}>
            <Route path="shirts" element={<ProductList />} />
            <Route path="tshirts" element={<ProductList />} />
            <Route path="jeans" element={<ProductList />} />
          </Route>
          <Route path="women" element={<Women />}>
            <Route path="tshirts" element={<ProductList />} />
            <Route path="sarees" element={<ProductList />} />
            <Route path="jeans" element={<ProductList />} />
            <Route path="kurtas" element={<ProductList />} />
          </Route>
          <Route path="/cart" element={currentUser ? <Cart /> : <Login />} />
          <Route
            path="/login"
            element={currentUser ? <Navigate to="/" replace /> : <Login />}
          />
          <Route
            path="/register"
            element={currentUser ? <Navigate to="/" replace /> : <Register />}
          />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="profile" element={<Profile />}>
            <Route index element={<BasicInfo />} />
            <Route path="address" element={<Address />} />
            <Route path="orders" element={<Order />} />
            <Route path="change-password" element={<ChangePassword />} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </Container>
  );
}

export const Container = styled.div``;

export default App;

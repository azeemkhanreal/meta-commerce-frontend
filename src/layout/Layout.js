import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Main from "./components/Main";
import { Container } from "./layout.style";

const Layout = () => {
  return (
    <Container>
      <Sidebar />
      <Main />
    </Container>
  );
};

export default Layout;

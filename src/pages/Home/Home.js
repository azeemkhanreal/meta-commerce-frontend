import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Main from "./components/Main";
import { Container } from "./home.style";

const Home = () => {
  return (
    <Container>
      <Sidebar />
      <Main />
    </Container>
  );
};

export default Home;

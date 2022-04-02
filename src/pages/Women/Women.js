import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Container, Content } from "../Women/women.style";

const Women = () => {
  return (
    <Container className="women">
      <Content>
        <Sidebar categories="women" />
      </Content>
    </Container>
  );
};

export default Women;

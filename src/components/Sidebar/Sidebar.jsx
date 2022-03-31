import React from "react";
import { Container, Logo, Links, Button } from "./sidebar.style";
import logoUrl from "../../assets/images/logo.png";

const Sidebar = () => {
  return (
    <Container className="sidebar">
      <Logo src={logoUrl} alt="" />
      <Links>
        <a href="/">Explore</a>
        <a href="/">Shirts</a>
        <a href="/">Sweaters</a>
        <a href="/">Hoodies</a>
        <a href="/">T-Shirts</a>
        <a href="/">Jeans</a>
      </Links>
      <Button className="logout">Log out</Button>
    </Container>
  );
};

export default Sidebar;

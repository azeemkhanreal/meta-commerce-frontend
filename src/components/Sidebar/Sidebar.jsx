import React from "react";
import { Container, Logo, Links, Button } from "./sidebar.style";
import logoUrl from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";

const Sidebar = ({ categories }) => {
  return (
    <Container className="sidebar">
      <Logo src={logoUrl} alt="" />
      <Links>
        {categories === "men" && (
          <>
            <NavLink to="shirts">Shirts</NavLink>
          </>
        )}
        {categories === "women" && (
          <>
            <NavLink to="shirts">Kurtas</NavLink>
          </>
        )}
      </Links>
      <Button className="logout">Log out</Button>
    </Container>
  );
};

export default Sidebar;

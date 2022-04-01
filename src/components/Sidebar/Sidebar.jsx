import React from "react";
import { Container, Logo, Links, Button } from "./sidebar.style";
import logoUrl from "../../assets/images/logo.png";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <Container className="sidebar">
      <Logo src={logoUrl} alt="" />
      <Links>
        {pathname === "/men" && (
          <>
            <NavLink to="explorer">Explore</NavLink>
            <NavLink to="/">Shirts</NavLink>
            <NavLink to="/">Sweaters</NavLink>
            <NavLink to="/">Hoodies</NavLink>
            <NavLink to="/">T-Shirts</NavLink>
            <NavLink to="/">Jeans</NavLink>
          </>
        )}
        {pathname === "/women" && (
          <>
            <NavLink to="/explore">Explore</NavLink>
            <NavLink to="/">Kurtas</NavLink>
            <NavLink to="/">Sarees</NavLink>
            <NavLink to="/">Lehnga</NavLink>
            <NavLink to="/">Footwear</NavLink>
            <NavLink to="/">Jeans</NavLink>
          </>
        )}
      </Links>
      <Button className="logout">Log out</Button>
    </Container>
  );
};

export default Sidebar;

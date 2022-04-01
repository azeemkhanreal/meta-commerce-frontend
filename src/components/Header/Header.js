import React from "react";
import { Container, Links, SocialLinks } from "./header.style";
import {
  IoCartOutline,
  IoHeartOutline,
  IoPersonCircleOutline,
} from "react-icons/io5";
import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <Links>
        <NavLink to="/men">Men</NavLink>
        <NavLink to="/women">Women</NavLink>
        <NavLink to="/kids">Kid's</NavLink>
      </Links>
      <SearchBar />
      {/* Social menu */}
      <SocialLinks>
        <a href="/">
          <IoHeartOutline />
        </a>
        <a href="/">
          <IoCartOutline />
        </a>
        <a href="/">
          <IoPersonCircleOutline />
        </a>
      </SocialLinks>
    </Container>
  );
};

export default Header;

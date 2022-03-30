import React from "react";
import { Container, Links, SocialLinks } from "./header.style";
import {
  IoCartOutline,
  IoHeartOutline,
  IoPersonCircleOutline,
} from "react-icons/io5";

const Header = () => {
  return (
    <Container>
      <Links>
        <a href="/">Men</a>
        <a href="/">Women</a>
        <a href="/">Kid's</a>
      </Links>
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

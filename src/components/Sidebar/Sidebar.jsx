import React from "react";
import styled from "styled-components";
import logoUrl from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <Container className="sidebar">
      <Wrapper>
        <Logo src={logoUrl} alt="" />
        <Navbar>
          <Link href="/">Shirts</Link>
          <Link href="/">Kurtas</Link>
          <Link href="/">Kurtas</Link>
        </Navbar>
        <Button className="logout">Log out</Button>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
`;
const Wrapper = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  padding: 50px 0px;
  background-color: #fff;
  box-shadow: 8px 0px 8px -10px rgb(0, 0, 0, 0.5);
  z-index: 1;
`;
const Navbar = styled.div`
  display: flex;
  flex-direction: column;
`;
const Link = styled.a`
  text-decoration: none;
  color: #000;
  padding-top: 40px;
  font-size: 16px;
  color: gray;
  cursor: pointer;
  .active {
    font-size: 16px;
    color: black;
    font-weight: bold;
  }
`;
const Logo = styled.img`
  height: 50px;
`;
const Button = styled.button`
  background-color: #fff;
  outline: none;
  border: none;
  color: gray;
  cursor: pointer;
`;

export default Sidebar;

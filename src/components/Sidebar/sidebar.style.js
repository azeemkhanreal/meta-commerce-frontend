import styled from "styled-components";

export const Container = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  position: fixed;
  padding: 50px 0px;
  background-color: #fff;
`;
export const Logo = styled.img`
  height: 50px;
`;
export const Links = styled.div`
  display: flex;
  flex-direction: column;
  a {
    text-decoration: none;
    color: #000;
    padding-top: 40px;
    font-size: 14px;
    color: gray;
  }
  .active {
    font-size: 16px;
    color: black;
    font-weight: bold;
  }
`;
export const Button = styled.button`
  background-color: #fff;
  outline: none;
  border: none;
  color: gray;
`;

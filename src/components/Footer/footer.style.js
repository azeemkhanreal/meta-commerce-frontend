import styled from "styled-components";
export const Container = styled.div`
  background-color: rgb(53, 53, 53);
  width: calc(100% - 200px);
  margin-left: 200px;
`;
export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 70px;
  height: 300px;
`;
export const Nav = styled.nav`
  h1 {
    color: #fff;
    font-size: 20px;
  }
`;
export const Links = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  a {
    text-decoration: none;
    color: #fff;
    padding: 6px 0px;
    font-size: 14px;
  }
`;
export const LeftContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex: 0.8;
`;
export const RightContainer = styled.div`
  width: 400px;
  color: #fff;
  h1 {
    font-size: 25px;
    padding: 20px 0px;
  }
  p {
    font-size: 13px;
  }
`;
export const InputButton = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #fff;
  width: 230px;
  margin: 20px 0px;
  input {
    height: 30px;
    border: none;
    outline: none;
    padding-left: 10px;
  }
  svg {
    color: #fff;
    margin-left: 10px;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  a {
    margin-left: 15px;
    color: #fff;
    svg {
      font-size: 22px;
    }
  }
`;
export const FooterBottom = styled.div`
  border-top: 2px solid #605c5c;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;
  padding: 30px;
  color: #fff;
  img {
    height: 30px;
  }
`;

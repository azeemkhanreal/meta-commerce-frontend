import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px 30px;
  align-items: center;
  position: fixed;
  width: calc(100% - 200px);
  margin-left: 200px;
  background-color: rgb(250, 250, 250);
  z-index: 1;
`;
export const Links = styled.div`
  a {
    text-decoration: none;
    color: gray;
    padding-left: 10px;
  }
  .active {
    font-size: 20px;
    color: Black;
  }
`;
export const SocialLinks = styled.div`
  display: flex;
  a {
    color: black;
    svg {
      font-size: 20px;
      margin-right: 10px;
    }
  }
`;

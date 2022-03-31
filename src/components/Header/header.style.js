import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px 30px;
  align-items: center;
  position: fixed;
  width: inherit;
  background-color: rgb(250, 250, 250);
`;
export const Links = styled.div`
  a {
    text-decoration: none;
    color: gray;
    padding-left: 10px;
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

import styled from "styled-components";
export const Container = styled.div`
  padding: 30px;
  width: calc(100%-200px);
`;
export const ProductRowHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  h1 {
    font-size: 19px;
    font-weight: bold;
  }
  h4 {
    color: gray;
    font-size: 14px;
  }
`;

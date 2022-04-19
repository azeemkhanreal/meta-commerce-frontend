import styled from "styled-components";
import { mobile } from "../responsive";

const Announcement = () => {
  return <Container>Super Deal! Free Shipping on Orders Over $50</Container>;
};

export const Container = styled.div`
  height: 30px;
  background-color: black;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  ${mobile({ fontSize: "12px" })}
`;

export default Announcement;

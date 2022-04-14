import styled from "styled-components";

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
  width: 100%;
`;

export default Announcement;

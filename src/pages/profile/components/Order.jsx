import styled from "styled-components";
import { mobile } from "../../../responsive";

const Order = () => {
  return (
    <Container>
      <Top>
        <Title>Orders</Title>
      </Top>
      <InfoContainer>There is no orders!</InfoContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  ${mobile({ width: "initial" })}
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #cef2f2;
  padding: 20px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
`;

export default Order;

import styled from "styled-components";
import SendIcon from "@mui/icons-material/Send";
const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely updates from your products.</Description>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <SendIcon />
        </Button>
      </InputContainer>
    </Container>
  );
};

export const Container = styled.div`
  height: 60vh;
  background-color: #e2f7ef;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 30px;
`;
export const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;
export const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`;
export const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`;
export const Input = styled.input`
  border: none;
  flex: 8;
  outline: none;
  padding-left: 20px;
`;
export const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: #fff;
`;

export default Newsletter;

import styled from "styled-components";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
const Register = () => {
  return (
    <Container>
      <Sidebar />
      <Wrapper>
        <Header />
        <FormContainer>
          <Title>CREATE AN ACCOUNT</Title>
          <Form>
            <Input placeholder="first name" />
            <Input placeholder="last name" />
            <Input placeholder="username" />
            <Input placeholder="email" />
            <Input placeholder="password" />
            <Input placeholder="confirm password" />
            <Agreement>
              by creating an account, I consent to the processing of my personal
              data in accordance with the <b>PRIVACY POLICY</b>
            </Agreement>
            <Button>CREATE AN ACCOUNT</Button>
          </Form>
        </FormContainer>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;
const Wrapper = styled.div`
  width: calc(100vw - 200px);
  display: flex;
  flex-direction: column;
`;
const FormContainer = styled.div`
  padding: 20px;
  height: 100vh;
  width: 40%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;
export default Register;

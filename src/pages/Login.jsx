import styled from "styled-components";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Login = () => {
  return (
    <Container>
      <Sidebar />
      <Wrapper>
        <Header />
        <FormContainer>
          <Title>SIGN IN</Title>
          <Form>
            <Input placeholder="username" />
            <Input placeholder="password" />
            <Button>Login</Button>
            <Link>DO YOU REMEMBER THE PASSWORD?</Link>
            <Link>CREATE A NEW ACCOUNT</Link>
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
  width: 25%;
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
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  margin-bottom: 10px;
  cursor: pointer;
`;
const Link = styled.a`
  margin: 10px 0;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;
export default Login;

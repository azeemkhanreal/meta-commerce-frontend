import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { login } from "../features/apiCalls";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { email, password });
  };
  return (
    <Container>
      <Sidebar />
      <Wrapper>
        <Header />
        <FormContainer>
          <Title>SIGN IN</Title>
          <Form>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              placeholder="username"
            />
            <Input
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              type="password"
            />
            <Button onClick={handleClick} disabled={isFetching}>
              Login
            </Button>
            {error && <Error>Something went wrong ...</Error>}
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
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;
const Link = styled.a`
  margin: 10px 0;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;
const Error = styled.span`
  color: red;
`;
export default Login;

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import { login } from "../features/apiCalls";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { email, password });
  };

  return (
    <Container>
      <Header />
      <FormContainer>
        <Title>SIGN IN</Title>
        <Form onSubmit={handleClick}>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
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
          <StyledLink to="/forget-password">
            DO YOU REMEMBER THE PASSWORD?
          </StyledLink>
          <StyledLink to="/register">CREATE A NEW ACCOUNT</StyledLink>
        </Form>
      </FormContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
`;
const FormContainer = styled.div`
  padding: 20px;
  height: 80vh;
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
const StyledLink = styled(Link)`
  margin: 10px 0;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;
const Error = styled.span`
  color: red;
`;
export default Login;

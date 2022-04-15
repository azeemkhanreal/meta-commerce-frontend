import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Header from "../components/Header";
import { register } from "../features/apiCalls";

const Register = () => {
  const [user, setUser] = useState({});
  const [confirmPwd, setConfirmPwd] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = async (e) => {
    e.preventDefault();
    if (confirmPwd !== user.password) {
      setErrorMessage("Password not match");
    } else {
      register(dispatch, user);
    }
  };
  return (
    <Container>
      <Header />
      <FormContainer>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input
            placeholder="first name"
            onChange={(e) => setUser({ ...user, firstname: e.target.value })}
          />
          <Input
            placeholder="last name"
            onChange={(e) => setUser({ ...user, lastname: e.target.value })}
          />
          <Input
            placeholder="username"
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
          <Input
            placeholder="email"
            type="email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <Input
            type="password"
            placeholder="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <Input
            placeholder="confirm password"
            type="password"
            onChange={(e) => setConfirmPwd(e.target.value)}
          />
          <Agreement>
            by creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={handleClick} disabled={isFetching}>
            CREATE AN ACCOUNT
          </Button>
        </Form>
        {error && (
          <Error>
            {errorMessage ? errorMessage : `Something went wrong ...`}
          </Error>
        )}
      </FormContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
const FormContainer = styled.div`
  padding: 20px;
  height: 80vh;
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
  &:disabled {
    cursor: not-allowed;
    color: green;
  }
`;
const Error = styled.div`
  color: red;
  margin-top: 10px;
`;
export default Register;

import { Button } from "@mui/material";
import { useState } from "react";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import SaveAsOutlinedIcon from "@mui/icons-material/SaveAsOutlined";
import styled from "styled-components";
import { userRequest } from "../../../constants/requests";
import { useSelector } from "react-redux";

const ChangePassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [checked, setChecked] = useState(true);
  const [Message, setMessage] = useState("");
  const { _id } = useSelector((state) => state.user.currentUser);

  const handleSaveClick = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setMessage("Password not match");
    } else {
      setNewPassword(newPassword);
      try {
        await userRequest.put(`/users/${_id}`, {
          password: newPassword.toString(),
        });
        setMessage("Password Changed");
      } catch (err) {
        setMessage("Something went wrong...");
      }
    }
  };

  return (
    <Container>
      <Top>
        <Title>Change Password</Title>
      </Top>
      <InfoContainer>
        <InputController>
          <Label>New Password</Label>
          <Input
            type={checked ? "password" : "text"}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </InputController>
        <InputController>
          <Label>Confirm Password</Label>
          <Input
            type={checked ? "password" : "text"}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </InputController>

        <CheckboxContainer>
          <Checkbox
            defaultChecked={!checked}
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
            onChange={() => setChecked(!checked)}
          />
          <span>{checked ? "Show Password" : "Hide Password"}</span>
        </CheckboxContainer>

        <StyledButton
          onClick={handleSaveClick}
          variant="contained"
          endIcon={<SaveAsOutlinedIcon />}
        >
          Save
        </StyledButton>
        {Message && <Error>{Message}</Error>}
      </InfoContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
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
  justify-content: center;
  padding: 25px;
`;
const InputController = styled.div`
  margin: 6px;
`;
const Label = styled.div`
  padding: 5px;
`;
const Input = styled.input`
  padding: 5px;
`;
const StyledButton = styled(Button)`
  margin: 20px !important;
`;
const Error = styled.h4`
  color: red;
`;
const CheckboxContainer = styled.div`
  margin-top: 10px;
  &span {
    font-size: 12px;
  }
`;
const Checkbox = styled.input`
  margin-right: 7px;
`;
export default ChangePassword;

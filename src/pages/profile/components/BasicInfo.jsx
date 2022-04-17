import styled from "styled-components";
import { Button } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import SaveAsOutlinedIcon from "@mui/icons-material/SaveAsOutlined";
import { useState } from "react";

const BasicInfo = () => {
  const [user, setUser] = useState({
    name: "Azeem Ahmad Khan",
  });
  const [editToggle, setEditToggle] = useState(false);

  const handleEditClick = (e) => {
    e.preventDefault();
    setEditToggle(!editToggle);
  };
  const handleSaveClick = (e) => {
    e.preventDefault();
    setUser(user);
    setEditToggle(!editToggle);
  };
  return (
    <Container>
      <Top>
        <Title>Profile</Title>
        <Button
          onClick={handleEditClick}
          variant="contained"
          endIcon={<EditOutlinedIcon />}
        >
          Edit
        </Button>
      </Top>
      <InfoContainer>
        <Form>
          <InputController>
            <Label>Name</Label>
            <Input
              type="text"
              disabled={!editToggle && "false"}
              value={user.name}
              onChange={(e) => setUser({ name: e.target.value })}
            />
          </InputController>
          <InputController>
            <Label>DOB</Label>
            <Input
              type="calendar"
              onChange={(e) => setUser({ dob: e.target.value })}
              disabled={!editToggle && "false"}
              value={user.dob}
            />
          </InputController>
          <InputController>
            <Label>Mobile Number</Label>
            <Input
              type="text"
              onChange={(e) => setUser({ mob: e.target.value })}
              disabled={!editToggle && "false"}
              value={user.mob}
            />
          </InputController>
          <InputController>
            <Label>E-mail</Label>
            <Input
              type="email"
              onChange={(e) => setUser({ email: e.target.value })}
              disabled={!editToggle && "false"}
              value={user.email}
            />
          </InputController>
          <InputController>
            <Label>Website</Label>
            <Input
              type="text"
              onChange={(e) => setUser({ website: e.target.value })}
              disabled={!editToggle && "false"}
              value={user.website}
            />
          </InputController>
        </Form>
        {editToggle && (
          <Button
            onClick={handleSaveClick}
            variant="contained"
            endIcon={<SaveAsOutlinedIcon />}
          >
            Save
          </Button>
        )}
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
  padding: 25px;
`;
const Form = styled.form`
  margin-top: 15px;
  width: 100%;
`;
const InputController = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
`;
const Label = styled.div``;
const Input = styled.input`
  border: ${(props) => props.disabled && "none"};
  color: #000;
  font-size: 14px;
  width: 200px;
`;

export default BasicInfo;

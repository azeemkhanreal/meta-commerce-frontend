import styled from "styled-components";
import { Button } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import SaveAsOutlinedIcon from "@mui/icons-material/SaveAsOutlined";
import { useState } from "react";

const Address = () => {
  const [user, setUser] = useState({
    address:
      "R-38, Fourth Floor, Sir Syed Road Batla House Okhla, New Delhi-110025",
    nearby: "Hari Masjid",
    city: "South Delhi",
    state: "New Delhi",
    country: "India",
    pincode: "110025",
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
        <Title>Address</Title>
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
            <Label>Address</Label>
            <Input
              style={{ width: "80%" }}
              type="text"
              disabled={!editToggle && "false"}
              value={user.address}
              onChange={(e) => setUser({ address: e.target.value })}
            />
          </InputController>
          <InputController>
            <Label>Nearby</Label>
            <Input
              type="text"
              onChange={(e) => setUser({ nearby: e.target.value })}
              disabled={!editToggle && "false"}
              value={user.nearby}
              direction={editToggle ? "left" : "right"}
            />
          </InputController>
          <InputController>
            <Label>Ciy</Label>
            <Input
              type="text"
              onChange={(e) => setUser({ city: e.target.value })}
              disabled={!editToggle && "false"}
              value={user.city}
              direction={editToggle ? "left" : "right"}
            />
          </InputController>
          <InputController>
            <Label>State</Label>
            <Input
              type="text"
              onChange={(e) => setUser({ state: e.target.value })}
              disabled={!editToggle && "false"}
              value={user.state}
              direction={editToggle ? "left" : "right"}
            />
          </InputController>
          <InputController>
            <Label>Country</Label>
            <Input
              type="text"
              onChange={(e) => setUser({ country: e.target.value })}
              disabled={!editToggle && "false"}
              value={user.country}
              direction={editToggle ? "left" : "right"}
            />
          </InputController>
          <InputController>
            <Label>Pin Code</Label>
            <Input
              type="text"
              onChange={(e) => setUser({ pincode: e.target.value })}
              disabled={!editToggle && "false"}
              value={user.pincode}
              direction={editToggle ? "left" : "right"}
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
  text-align: ${(props) => props.direction};
`;

export default Address;

import styled from "styled-components";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Avatar from "@mui/material/Avatar";
import SearchBar from "../components/SearchBar";
import { Badge } from "@mui/material";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <MenuItem>Men</MenuItem>
          <MenuItem>Women</MenuItem>
          <MenuItem>Kids</MenuItem>
        </Left>
        <Center>
          <SearchBar />
        </Center>
        <Right>
          <Badge badgeContent={4} color="primary">
            <FavoriteBorderOutlinedIcon />
          </Badge>
          <Badge badgeContent={4} color="primary">
            <ShoppingCartOutlinedIcon />
          </Badge>
          <Avatar src="https://picsum.photos/50/50" className="avatar" />
        </Right>
      </Wrapper>
    </Container>
  );
};

export const Container = styled.div`
  background-color: rgb(250, 250, 250);
  width: 100%;
  position: sticky;
  top: 0;
  overflow: auto;
  z-index: 2;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border: 1px solid lightgray;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const MenuItem = styled.div`
  margin-left: 20px;
  transition: all 0.2s ease;
  cursor: pointer;
  :hover {
    transform: scale(1.2);
  }
`;
const Center = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 10px;
  gap: 15px;
  .avatar {
    cursor: pointer;
  }
`;

export default Header;

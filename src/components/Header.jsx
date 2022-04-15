import styled from "styled-components";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Avatar from "@mui/material/Avatar";
import SearchBar from "../components/SearchBar";
import { Badge, Divider, IconButton, ListItemIcon, Menu } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import logo from "../assets/images/logo.png";
import { useState } from "react";
import { Logout } from "@mui/icons-material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import { removeUser } from "../features/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.cart.quantity);
  const { currentUser } = useSelector((state) => state.user);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Container>
      <Top>
        <Left>
          <NavLink to="/men">
            <Logo src={logo} />
          </NavLink>
        </Left>
        <Center>
          <StyledLink
            to="/men"
            className={(isActive) => (isActive ? "active" : "inActive")}
          >
            <MenuItem>Men</MenuItem>
          </StyledLink>
          <StyledLink
            to="/women"
            className={(isActive) => (isActive ? "active" : "inActive")}
          >
            <MenuItem>Women</MenuItem>
          </StyledLink>
          <StyledLink
            to="/kids"
            className={(isActive) => (isActive ? "active" : "inActive")}
          >
            <MenuItem>Kids</MenuItem>
          </StyledLink>
        </Center>
        <Right>
          <NavLink to="/wishlist">
            <Badge badgeContent={4} color="primary">
              <FavoriteBorderOutlinedIcon />
            </Badge>
          </NavLink>
          <NavLink to="/cart">
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </NavLink>
          {currentUser ? (
            <>
              <IconButton
                onClick={handleClick}
                size="small"
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <Avatar>A</Avatar>
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <StyledMenuItem>
                  <ListItemIcon>
                    <AccountCircleIcon fontSize="small" />
                  </ListItemIcon>
                  Profile
                </StyledMenuItem>
                <Divider />
                <StyledMenuItem onClick={() => dispatch(removeUser())}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </StyledMenuItem>
              </Menu>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </Right>
      </Top>
      <Bottom>
        <SearchBar />
      </Bottom>
    </Container>
  );
};

export const Container = styled.div`
  background-color: #fff;
  width: 100%;
  position: sticky;
  top: 0;
  overflow: auto;
  z-index: 4;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border: 1px solid lightgray;
`;
const Left = styled.div`
  margin-left: 20px;
`;
const Logo = styled.img`
  width: 50px;
  object-fit: contain;
`;
const MenuItem = styled.div`
  margin-left: 20px;
  transition: all 0.2s ease;
  cursor: pointer;
`;
const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 10px;
  gap: 15px;
  .avatar {
    cursor: pointer;
  }
`;
const StyledLink = styled(NavLink)`
  &.active {
    transform: scale(1.2);
    font-weight: 600;
  }
`;
const Bottom = styled.div``;
const StyledMenuItem = styled(MenuItem)`
  padding: 10px;
  margin: 0px;
  display: flex;
  align-items: center;
`;
export default Header;

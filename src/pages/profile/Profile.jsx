import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { NavLink, Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <Container>
      <Header />
      <ProfileWrapper>
        <ProfileContainer>
          <Sidebar>
            <StyledLink
              to="/profile"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              Profile
            </StyledLink>
            <StyledLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="address"
            >
              Your Address
            </StyledLink>
            <StyledLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="orders"
            >
              Your Orders
            </StyledLink>
            <StyledLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="change-password"
            >
              Change Password
            </StyledLink>
          </Sidebar>
          <Content>
            <Outlet />
          </Content>
        </ProfileContainer>
      </ProfileWrapper>
      <Footer />
    </Container>
  );
};

const Container = styled.div``;
const ProfileWrapper = styled.div`
  width: 100vw;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ProfileContainer = styled.div`
  display: flex;
`;
const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #326262;
  width: 190px;
  align-items: center;
`;
const StyledLink = styled(NavLink)`
  padding: 7px;
  color: #fff;
  width: 100%;
  text-align: center;

  &:hover {
    background: #183705;
  }
`;
const Content = styled.div`
  height: 400px;
  border: 1px solid lightgray;
`;
export default Profile;

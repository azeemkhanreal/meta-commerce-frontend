import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
} from "react-icons/io5";
import styled from "styled-components";
import logoURL from "../assets/images/logo.png";
import { mobile } from "../responsive";
const Footer = () => {
  return (
    <Container>
      <FooterContainer>
        <LeftContainer>
          <Nav>
            <h1>Shop</h1>
            <Links>
              <a href="/">Mens</a>
              <a href="/">Womens</a>
              <a href="/">Kids</a>
              <a href="/">Size Guide</a>
              <a href="/">Gift Card</a>
            </Links>
          </Nav>
          <Nav>
            <h1>Information</h1>
            <Links>
              <a href="/">Contact</a>
              <a href="/">Shipping</a>
              <a href="/">Payment</a>
              <a href="/">About Alif</a>
              <a href="/">My Account</a>
              <a href="/">Delivery</a>
            </Links>
          </Nav>
          <Nav>
            <h1>Discover</h1>
            <Links>
              <a href="/">Careers</a>
              <a href="/">Stores</a>
            </Links>
          </Nav>
        </LeftContainer>
        <RightContainer>
          <h1>Social Networks</h1>
          <SocialLinks>
            <a href="/">
              <IoLogoFacebook />
            </a>
            <a href="/">
              <IoLogoInstagram />
            </a>
            <a href="/">
              <IoLogoTwitter />
            </a>
          </SocialLinks>
        </RightContainer>
      </FooterContainer>
      <FooterBottom>
        <p>&copy; 2019 Meta-Commerce</p>
        <img src={logoURL} alt="" />
        <p>Privacy & Cookies</p>
      </FooterBottom>
    </Container>
  );
};

const Container = styled.div`
  background-color: rgb(53, 53, 53);
`;
const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 70px;
  height: 300px;
  ${mobile({ flexWrap: "wrap", height: "initial", padding: "30px" })}
`;
const Nav = styled.nav`
  h1 {
    color: #fff;
    font-size: 20px;
    ${mobile({ fontSize: "17px" })};
  }
`;
const Links = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  a {
    text-decoration: none;
    color: #fff;
    padding: 6px 0px;
    font-size: 14px;
    ${mobile({ fontSize: "13px" })};
  }
`;
const LeftContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex: 0.8;
  ${mobile({ flex: "1", justifyContent: "space-between" })}
`;
const RightContainer = styled.div`
  width: 400px;
  color: #fff;
  h1 {
    font-size: 25px;
    padding: 20px 0px;
    ${mobile({ fontSize: "18px", padding: " 18px 0px", textAlign: "center" })}
  }
  p {
    font-size: 13px;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  ${mobile({ justifyContent: "center" })}
  a {
    margin-left: 15px;
    color: #fff;
    ${mobile({ margin: " 0px 8px" })}
    svg {
      font-size: 22px;
    }
  }
`;
const FooterBottom = styled.div`
  border-top: 1px solid #605c5c;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;
  padding: 30px;
  color: #fff;
  ${mobile({ height: "20px", padding: "20px" })};
  p {
    ${mobile({ fontSize: "12px" })}
  }
  img {
    height: 30px;
    ${mobile({ height: "28px" })}
  }
`;

export default Footer;

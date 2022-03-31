import React from "react";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
  IoPaperPlaneOutline,
} from "react-icons/io5";
import {
  Container,
  FooterBottom,
  FooterContainer,
  InputButton,
  LeftContainer,
  Links,
  Nav,
  RightContainer,
  SocialLinks,
} from "./footer.style";
import logoURL from "../../assets/images/logo.png";

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
          <h1>Subscription / Social Networks</h1>
          <p>
            Subscribe to the newsletter and social networks to be aware of all
            the news and promotions
          </p>
          <SocialLinks>
            <InputButton>
              <input type="text" placeholder="E-mail" />
              <IoPaperPlaneOutline />
            </InputButton>
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

export default Footer;

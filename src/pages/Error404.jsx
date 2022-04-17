import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import imgUrl from "../assets/images/404.png";

const Error404 = () => {
  return (
    <Container>
      <Header />
      <Wrapper>
        <Image src={imgUrl} />
        <Content>
          <Title>Under Maintenance</Title>
          <Desc>
            The Page you're looking for is currently <br />
            under maintenance and will be back soon.
          </Desc>
        </Content>
      </Wrapper>
      <Footer />
    </Container>
  );
};
export default Error404;

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;
const Image = styled.img`
  height: 200px;
`;
const Content = styled.div`
  padding: 10px;
  text-align: center;
`;
const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 3px;
  text-transform: uppercase;
`;
const Desc = styled.p`
  font-size: 16px;
  padding-top: 10px;
  line-height: 1.5;
`;

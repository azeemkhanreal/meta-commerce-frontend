import styled from "styled-components";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Announcement from "../../components/Announcement";
import Slider from "../../components/Slider";
import AdFeature from "../../components/AdFeature";
import Newsletter from "../../components/Newsletter";
import Footer from "../../components/Footer";
const Men = () => {
  return (
    <Container>
      <Sidebar />
      <Wrapper>
        <Announcement />
        <Header />
        <Slider />
        <AdFeature title={"Top Picks"} />
        <Newsletter />
        <Footer />
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;
const Wrapper = styled.div`
  width: 100%;
  width: calc(100vw - 200px);
  display: flex;
  flex-direction: column;
`;

export default Men;

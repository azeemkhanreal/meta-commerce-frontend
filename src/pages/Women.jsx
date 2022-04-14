import styled from "styled-components";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
const Men = () => {
  return (
    <Container>
      <Sidebar />
      <Wrapper>
        <Announcement />
        <Header />
        <Slider />
        <Categories />
        <Products title={"New Arrivals"} />
        <Products title={"Popular Products"} />
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

import styled from "styled-components";
import Header from "../components/Header";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Men = () => {
  return (
    <Container>
      <Announcement />
      <Header />
      <Slider />
      <Categories owner="men" />
      <Products title={"New Arrivals"} />
      <Products title={"Popular Products"} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

const Container = styled.div``;

export default Men;

import React from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Announcement from "../../components/Announcement";
import Slider from "../../components/Slider";
import AdFeature from "../../components/AdFeature/AdFeature";
const Men = () => {
  return (
    <Container>
      <Sidebar />
      <Wrapper>
        <Announcement />
        <Header />
        <Slider />
        <AdFeature title={"Top Picks"} />
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

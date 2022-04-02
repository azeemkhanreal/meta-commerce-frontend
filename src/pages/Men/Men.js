import React from "react";
import { Outlet, useOutlet } from "react-router-dom";
import AdFeature from "../../components/AdFeature/AdFeature";
import ProductsRow from "../../components/ProductsRow/ProductsRow";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Container, Content } from "./Men.style";
const Men = () => {
  const outlet = useOutlet();
  return (
    <Container className="men">
      <Sidebar categories="men" />
      <Content className="content">
        {outlet || (
          <>
            <AdFeature />
            <ProductsRow title="Popular Now" />
            <ProductsRow title="Latest Products" />
            <ProductsRow title="Eid Offer" />
          </>
        )}
      </Content>
    </Container>
  );
};

export default Men;

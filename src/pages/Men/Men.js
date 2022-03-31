import React from "react";
import AdFeature from "../../components/AdFeature/AdFeature";
import ProductsRow from "../../components/ProductsRow/ProductsRow";
import { Container } from "./Men.style";
const Men = () => {
  return (
    <Container>
      <AdFeature />
      <ProductsRow title="Popular Now" />
      <ProductsRow title="Latest Products" />
      <ProductsRow title="Eid Offer" />
    </Container>
  );
};

export default Men;
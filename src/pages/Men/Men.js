import React from "react";
import AdFeature from "../../components/AdFeature/AdFeature";
import ProductsRow from "../../components/ProductsRow/ProductsRow";
const Men = () => {
  return (
    <div>
      <AdFeature />
      <ProductsRow title="Popular Now" />
      <ProductsRow title="Latest Products" />
      <ProductsRow title="Eid Offer" />
    </div>
  );
};

export default Men;

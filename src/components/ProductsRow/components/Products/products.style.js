import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
export const ProductCard = styled.div`
  width: 220px;
  height: 350px;
  img {
    object-fit: contain;
    width: 180px;
    height: 260px;
    border-radius: 10px;
  }
  .product_title {
    font-size: 16px;
    padding: 5px 0px;
  }
  .product_desc {
    font-size: 14px;
    color: gray;
    font-weight: normal;
  }
  .product_price {
    font-size: 18px;
    padding: 10px 0px;
  }
`;

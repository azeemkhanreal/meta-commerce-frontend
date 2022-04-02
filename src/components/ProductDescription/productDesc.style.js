import styled from "styled-components";

export const Container = styled.div``;
const name = "Azeem";

export const ProductDetails = styled.div`
  margin-top: 100px;
  padding: 0px 50px;
  display: flex;
  margin-left: 200px;
`;
export const LeftContainer = styled.div`
  width: 500px;
  img {
    border-radius: 25px;
    width: 500px;
    height: 500px;
    cursor: pointer;
    object-fit: contain;
  }
`;
export const ImgCarousel = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  img {
    height: 80px;
    margin-right: 20px;
    opacity: 0.5;
    cursor: pointer;
  }
`;
export const RightContainer = styled.div`
  flex: 1;
  margin-left: 40px;
`;

export const ProductDescription = styled.div`
  .product-title {
    font-size: 35px;
    font-weight: bold;
    padding: 10px 0px;
  }
  .product-price {
    font-size: 22px;
  }
  .product-description {
    font-size: 14px;
    padding: 30px 0px;
  }
  .product-measurement {
    font-size: 14px;
    span {
      text-transform: uppercase;
      font-weight: bold;
    }
  }
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    color: gray;
    font-size: 14px;
    font-weight: normal;
  }
`;
export const Ratings = styled.div``;

export const ProductSizeContainer = styled.div``;
export const ProductSizeTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 50px;
  h1 {
    font-size: 18px;
  }
  h4 {
    font-size: 16px;
    color: gray;
  }
`;
export const ProductSizeDisplay = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0px;
`;
export const ProductSizeCode = styled.div`
  background-color: #fff;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid whitesmoke;
  font-size: 12px;
  font-weight: bold;
`;

export const ProductCounter = styled.div`
  display: flex;
  align-items: center;
  .icon {
    padding: 20px;
    background: rgb(245, 245, 245);
    font-size: 16px;
    cursor: pointer;
  }
  h1 {
    font-size: 14px;
    padding: 0px 20px;
  }
`;
export const ProductButtons = styled.div`
  display: flex;
  align-items: center;
  button {
    flex: 1;
    margin-left: 20px;
    height: 50px;
    background-color: #000;
    color: #fff;
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 20px;
    &::after {
      content: "";
      position: absolute;
      width: 30px;
      height: 1px;
      background-color: #fff;
      transform: translate(28px, 8px);
    }
  }
`;

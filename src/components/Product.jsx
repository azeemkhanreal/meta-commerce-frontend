import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "../features/cartSlice";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    // updateCart
    // dispatch(addProduct(product));
  };
  return (
    <Container>
      <Thumbnail>
        <Image src={product.img} />
        <IconsHoverContainer>
          <Icon onClick={handleAddToCart}>
            <ShoppingCartOutlinedIcon />
          </Icon>
          <Icon>
            <Link to={`/product/${product._id}`}>
              <SearchOutlinedIcon />
            </Link>
          </Icon>
          <Icon>
            <FavoriteBorderOutlinedIcon />
          </Icon>
        </IconsHoverContainer>
      </Thumbnail>

      <Content>
        <Title>{product.title}</Title>
        <Desc>{product.desc}</Desc>
        <Price>&#8377; {product.price}</Price>
      </Content>
    </Container>
  );
};
const IconsHoverContainer = styled.div`
  opacity: 0;
  position: absolute;
  background-color: #fff;
  border: 1px solid lightgray;
  z-index: 1;
  display: flex;
  justify-content: center;
  transition: all 0.5s ease;
  width: 100%;
  cursor: pointer;
  margin-top: 0px;
`;
const Container = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 20px;
  overflow: hidden;
  &:hover ${IconsHoverContainer} {
    opacity: 1;
    margin-top: -68px;
  }
`;
const Thumbnail = styled.div`
  overflow: hidden;
`;

const Image = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 0;
  object-fit: contain;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 10px;
  transition: all 250ms ease;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;
const Content = styled.div`
  position: relative;
  background-color: #fff;
  z-index: 2;
  padding: 15px 5px;
  height: 115px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Title = styled.h1`
  font-size: 17px;
`;
const Desc = styled.p`
  font-size: 14px;
  padding: 5px 0px;
`;
const Price = styled.span`
  font-size: 16px;
  font-weight: 600;
`;

export default Product;

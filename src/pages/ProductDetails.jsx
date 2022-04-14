import { AddOutlined, RemoveOutlined } from "@mui/icons-material";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import Announcement from "../components/Announcement";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import GoToTop from "../components/GoToTop";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { userRequest } from "../constants/requests";
import { addProduct } from "../features/cartSlice";
import { useDispatch } from "react-redux";

const ProductDetails = () => {
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const product = await userRequest.get(`/products/${id}`);
        setProduct(product.data.data);
      } catch (error) {}
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "inc") {
      setQuantity(quantity + 1);
    } else {
      quantity > 1 && setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    // updateCart
    dispatch(addProduct({ ...product, quantity, color, size }));
  };
  console.log(size);

  return (
    <Container>
      <Sidebar />
      <Wrapper>
        <Announcement />
        <Header />
        <ProductInfo>
          <ImageContainer>
            <Image src={product.img} />
          </ImageContainer>
          <InfoContainer>
            <Title>{product.title}</Title>
            <Desc>{product.desc}</Desc>
            <Price>$ {product.price}</Price>
            <FilterContainer>
              <Filter>
                <FilterTitle>Color</FilterTitle>
                {product.color?.map((c) => (
                  <FilterColor key="c" color={c} onClick={() => setColor(c)} />
                ))}
              </Filter>
              <Filter>
                <FilterTitle>Size</FilterTitle>
                <FilterSize onChange={(e) => setSize(e.target.value)}>
                  {product.size?.map((s) => (
                    <FilterSizeOption key={s}>{s}</FilterSizeOption>
                  ))}
                </FilterSize>
              </Filter>
            </FilterContainer>
            <AddContainer>
              <AmountContainer>
                <RemoveOutlined
                  style={{ cursor: "pointer" }}
                  onClick={() => handleQuantity("dec")}
                />
                <Amount>{quantity}</Amount>
                <AddOutlined
                  style={{ cursor: "pointer" }}
                  onClick={() => handleQuantity("inc")}
                />
              </AmountContainer>
              <Button onClick={handleAddToCart}>ADD TO CART</Button>
            </AddContainer>
          </InfoContainer>
        </ProductInfo>
        <Newsletter />
        <Footer />
      </Wrapper>
      <GoToTop />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;
const Wrapper = styled.div`
  width: calc(100vw - 200px);
`;
const ProductInfo = styled.div`
  display: flex;
  padding: 50px;
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 8px;
  cursor: pointer;
`;
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
  background-color: #fff;
`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #f8f4f4;
  }
`;
export default ProductDetails;

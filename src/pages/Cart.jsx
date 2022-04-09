import { AddOutlined, RemoveOutlined } from "@mui/icons-material";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import GoToTop from "../components/GoToTop";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
const Cart = () => {
  return (
    <Container>
      <Sidebar />
      <Wrapper>
        <Announcement />
        <Header />
        <CartContainer>
          <Title>YOUR BAG</Title>
          <Top>
            <TopBottom>CONTINUE SHOPPING</TopBottom>
            <TopTexts>
              <TopText>Shopping Bag(2)</TopText>
              <TopText>Your Wishlist</TopText>
            </TopTexts>
            <TopBottom type="filled">CHECKOUT NOW</TopBottom>
          </Top>
          <Bottom>
            <Info>
              <Product>
                <ProductDetail>
                  <Image src="https://picsum.photos/500/500" />
                  <Details>
                    <ProductName>
                      <b>Product: </b> JESSIE THUNDER SHOES
                    </ProductName>
                    <ProductId>
                      <b>ID: </b>232323
                    </ProductId>
                    <ProductColor color="black" />
                    <ProductSize>
                      <b>Size: </b>37.5
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <AddOutlined />
                    <ProductAmount>2</ProductAmount>
                    <RemoveOutlined />
                  </ProductAmountContainer>
                  <ProductPrice>$30</ProductPrice>
                </PriceDetail>
              </Product>
              <Hr />
              <Product>
                <ProductDetail>
                  <Image src="https://picsum.photos/500/500" />
                  <Details>
                    <ProductName>
                      <b>Product: </b> JESSIE THUNDER SHOES
                    </ProductName>
                    <ProductId>
                      <b>ID: </b>232323
                    </ProductId>
                    <ProductColor color="black" />
                    <ProductSize>
                      <b>Size: </b>37.5
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <AddOutlined />
                    <ProductAmount>2</ProductAmount>
                    <RemoveOutlined />
                  </ProductAmountContainer>
                  <ProductPrice>$30</ProductPrice>
                </PriceDetail>
              </Product>
            </Info>
            <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>$80</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Estimated Shipping</SummaryItemText>
                <SummaryItemPrice>$5.90</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Shipping Discount</SummaryItemText>
                <SummaryItemPrice>$-5.90</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type="total">
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice>$80</SummaryItemPrice>
              </SummaryItem>
              <SummaryButton>CHECKOUT NOW</SummaryButton>
            </Summary>
          </Bottom>
        </CartContainer>
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
const CartContainer = styled.div`
  padding: 45px;
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  justify-content: space-between;
`;
const TopBottom = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
const TopTexts = styled.div``;
const TopText = styled.div`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;
const Info = styled.div`
  flex: 3;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;
const PriceDetail = styled.span`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;
const SummaryTitle = styled.h1`
  font-weight: 200;
`;
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const SummaryButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

export default Cart;
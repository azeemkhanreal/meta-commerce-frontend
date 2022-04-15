import { Link } from "react-router-dom";
import styled from "styled-components";

const Categories = () => {
  return (
    <Container>
      <Heading>Top Picks</Heading>
      <Wrapper>
        <CategoryItem>
          <Link to="tshirts">
            <Image src="https://picsum.photos/350/200" alt="" />
            <InfoContainer>
              <Title>T-Shirts</Title>
              <Button>Shop Now</Button>
            </InfoContainer>
          </Link>
        </CategoryItem>
        <CategoryItem>
          <Link to="shirts">
            <Image src="https://picsum.photos/350/200" alt="" />
            <InfoContainer>
              <Title>Shirts</Title>
              <Button>Shop Now</Button>
            </InfoContainer>
          </Link>
        </CategoryItem>
        <CategoryItem>
          <Link to="jeans">
            <Image src="https://picsum.photos/350/200" alt="" />
            <InfoContainer>
              <Title>Jeans</Title>
              <Button>Shop Now</Button>
            </InfoContainer>
          </Link>
        </CategoryItem>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  padding: 45px;
`;
const Heading = styled.h1`
  font-size: 26px;
  font-weight: 400;
  margin-bottom: 20px;
  text-transform: uppercase;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const CategoryItem = styled.div`
  border: 1px solid lightgray;
  position: relative;
  height: 40vh;
  flex: 1;
  margin: 3px;
  position: relative;
  cursor: pointer;
  flex-wrap: wrap;
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
const InfoContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: #fff;
  color: gray;
  cursor: pointer;
`;

export default Categories;

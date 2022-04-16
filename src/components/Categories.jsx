import { Link } from "react-router-dom";
import styled from "styled-components";

const Categories = () => {
  return (
    <Container>
      <Heading>Top Picks</Heading>
      <Wrapper>
        <CategoryItem>
          <Discount>Up to 15% off</Discount>
          <Image
            src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2016/12/attachment_51396615.jpg?auto=format&q=60&fit=max&w=930"
            alt=""
          />
          <InfoContainer>
            <Title>T-Shirts</Title>
            <Link to="tshirts">
              <Button>Shop Now</Button>
            </Link>
          </InfoContainer>
        </CategoryItem>
        <CategoryItem>
          <Discount>Up to 40-60% off</Discount>
          <Image
            src="https://imgmedia.lbb.in/media/2020/05/5eac0e7c833b2b7acdc583b2_1588334204878.jpg"
            alt=""
          />
          <InfoContainer>
            <Title>Shirts</Title>
            <Link to="shirts">
              <Button>Shop Now</Button>
            </Link>
          </InfoContainer>
        </CategoryItem>
        <CategoryItem>
          <Discount>Up to 40-60% off</Discount>
          <Image
            src="https://media.istockphoto.com/photos/textured-background-with-variety-of-mens-and-womens-blue-jeans-picture-id1182646775?k=20&m=1182646775&s=612x612&w=0&h=Q2fQeuR16GXvP0eGN8SwfGM4k5XzJ5zs1Eg-Ayyzrco="
            alt=""
          />
          <InfoContainer>
            <Title>Jeans</Title>
            <Link to="jeans">
              <Button>Shop Now</Button>
            </Link>
          </InfoContainer>
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
const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
const CategoryItem = styled.div`
  /* height: 40vh; */
  /* flex: 1; */
  margin: 3px;
  position: relative;
  flex-wrap: wrap;
  border-radius: 50% 0% 50%;
  width: 200px;
  height: 200px;
  margin: 0px 20px;
  position: relative;
  overflow: hidden;
  box-shadow: 0px 14px 30px -8px rgba(0, 0, 0, 0.5);
  &:hover {
    ${Image} {
      transform: scale(1.1);
      transition: transform 0.5s ease;
    }
  }
`;
const Discount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 18px;
  height: 50px;
  padding: 0px 20px;
  background-color: #000;
  position: absolute;
  top: -50px;
  right: 0;
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
  font-size: 20px;
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: #fff;
  color: gray;
  cursor: pointer;
`;

export default Categories;

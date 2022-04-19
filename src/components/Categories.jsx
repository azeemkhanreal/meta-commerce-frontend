import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const Categories = ({ cat }) => {
  return (
    <Container>
      <Heading>Top Picks</Heading>
      <Wrapper>
        {cat.map((category, index) => (
          <CategoryItem key={index}>
            <Image src={category.img} alt="" />
            <InfoContainer>
              <Title>{category.title}</Title>
              <Link to={category.slug}>
                <Button>Shop Now</Button>
              </Link>
            </InfoContainer>
          </CategoryItem>
        ))}
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  padding: 45px;
  ${mobile({ padding: "20px" })}
`;
const Heading = styled.h1`
  font-size: 26px;
  font-weight: 400;
  margin-bottom: 20px;
  text-transform: uppercase;
  ${mobile({ fontSize: "20px" })}
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  ${mobile({ flexWrap: "wrap" })}
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
  ${mobile({ margin: " 15px 0px" })}
  &:hover {
    ${Image} {
      transform: scale(1.1);
      transition: transform 0.5s ease;
    }
  }
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

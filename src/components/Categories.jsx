import styled from "styled-components";
const Categories = () => {
  return (
    <Container>
      <Heading>Top Picks</Heading>
      <Wrapper>
        <CategoryItem>
          <Image src="https://picsum.photos/350/200" alt="" />
          <InfoContainer>
            <Title>T-Shirts</Title>
            {/* <CardDesc>Under Rs. 799</CardDesc> */}
          </InfoContainer>
        </CategoryItem>
        <CategoryItem>
          <Image src="https://picsum.photos/350/200" alt="" />
          <InfoContainer>
            <Title>Jeans</Title>
            {/* <CardDesc>Under Rs. 799</CardDesc> */}
          </InfoContainer>
        </CategoryItem>
        <CategoryItem>
          <Image src="https://picsum.photos/350/200" alt="" />
          <InfoContainer>
            <Title>Accessories</Title>
            {/* <CardDesc>Under Rs. 799</CardDesc> */}
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
  gap: 3px;
  flex-wrap: wrap;
`;
const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid lightgray;
  position: relative;
  height: 40vh;
  flex: 1;

  cursor: pointer;
`;

const Image = styled.img`
  object-fit: cover;
  opacity: 0.8;
  width: 100%;
  height: 100%;
`;
const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 10px 0px;
  text-transform: uppercase;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 1;
`;
const Title = styled.h1`
  padding: 10px 0px;
  font-size: 32px;
  font-weight: 800;
  color: #fff;
`;
// const Desc = styled.span`
//   padding-bottom: 10px;
//   color: #fff;
//   font-size: 24px;
//   font-weight: 800;
// `;

export default Categories;

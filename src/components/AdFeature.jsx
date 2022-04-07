import styled from "styled-components";
const AdFeature = () => {
  return (
    <Container>
      <Title>Top Picks</Title>
      <Wrapper>
        <CardContainer>
          <CardImage src="https://picsum.photos/350/200" alt="" />
          <CardInfo>
            <CardTitle>T-Shirts</CardTitle>
            {/* <CardDesc>Under Rs. 799</CardDesc> */}
          </CardInfo>
        </CardContainer>
        <CardContainer>
          <CardImage src="https://picsum.photos/350/200" alt="" />
          <CardInfo>
            <CardTitle>Jeans</CardTitle>
            {/* <CardDesc>Under Rs. 799</CardDesc> */}
          </CardInfo>
        </CardContainer>
        <CardContainer>
          <CardImage src="https://picsum.photos/350/200" alt="" />
          <CardInfo>
            <CardTitle>Accessories</CardTitle>
            {/* <CardDesc>Under Rs. 799</CardDesc> */}
          </CardInfo>
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  padding: 45px;
`;
const Title = styled.h1`
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
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 4px solid;
  position: relative;
  height: 40vh;
  flex: 1;

  cursor: pointer;
  border-image-source: linear-gradient(
    0deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 27%,
    rgba(0, 212, 255, 1) 100%
  );
  border-image-slice: 1;
`;

const CardImage = styled.img`
  object-fit: cover;
  opacity: 0.8;
  width: 100%;
  height: 100%;
`;
const CardInfo = styled.div`
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
const CardTitle = styled.h1`
  padding: 10px 0px;
  font-size: 32px;
  font-weight: 800;
  color: #fff;
  -webkit-text-stroke-width: 0.3px;
  -webkit-text-stroke-color: black;
`;
const CardDesc = styled.span`
  padding-bottom: 10px;
  color: #fff;
  -webkit-text-stroke-width: 0.3px;
  -webkit-text-stroke-color: black;
  font-size: 24px;
  font-weight: 800;
`;

const Card = styled.img`
  border-radius: 20px;
  padding: 5px;
  object-fit: contain;
`;
export default AdFeature;

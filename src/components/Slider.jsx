import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { useState } from "react";
import styled from "styled-components";
import model_1 from "../assets/images/model_1.png";
import model_2 from "../assets/images/model_2.png";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 1);
    } else {
      setSlideIndex(slideIndex < 1 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container className="slider">
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex} className="wrapper">
        <Slide bg="#f5fafd">
          <InfoContainer>
            <Title>The Summer Sale</Title>
            <Subtitle>Craziest deals of the season are here!</Subtitle>
            <Desc>
              50-90 % OFF* | 10,000+ STYLES | 10+ BRANDS | May 1 - May 5
            </Desc>
            <Button>Show Now</Button>
          </InfoContainer>
          <ImageContainer>
            <Image src={model_2} />
          </ImageContainer>
        </Slide>
        <Slide bg="#eed400">
          <InfoContainer>
            <Title>
              HRX{" "}
              <Subtitle
                style={{
                  textAlign: "initial",
                  display: "inline-block",
                  textTransform: "initial",
                }}
              >
                by Hrithik Roshan
              </Subtitle>
            </Title>
            <Desc>
              The HRX Men's Active T-shirt is a classic you can't go wrong with.
              This black T-shirt can be worn as it is for a light workout or
              layered under a shirt for a more casual vibe.
            </Desc>
            <Button>Show Now</Button>
          </InfoContainer>
          <ImageContainer>
            <Image src={model_1} />
          </ImageContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

const Container = styled.div`
  overflow: hidden;
  width: 100%;
  display: flex;
  position: relative;
`;
const Wrapper = styled.div`
  display: flex;
  width: ${(props) => props.width};
  transition: all 1s ease;
  width: 100vw;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${(props) => props.bg};
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  opacity: 0.5;
  z-index: 2;
`;
const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
  object-fit: contain;
  height: 90vh;
  margin-left: 35px;
`;
const InfoContainer = styled.div`
  width: 100vw;
  flex: 1;
  padding: 0px 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Title = styled.h1`
  text-transform: uppercase;
  font-size: 65px;
`;
const Subtitle = styled.h2`
  text-align: center;
  padding-top: 15px;
  font-size: 35px;
  font-family: "Dancing Script", cursive;
`;
const Desc = styled.p`
  text-transform: uppercase;
  margin: 50px 0px;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 3px;
`;
const Button = styled.button`
  text-transform: uppercase;
  padding: 10px;
  font-size: 16px;
  background-color: transparent;
  cursor: pointer;
  border-radius: 15px;
  width: 150px;
`;

export default Slider;

import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { useState } from "react";
import styled from "styled-components";
import slider_image from "../assets/images/model_1.png";

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
            <Title>Armani T-Shirt</Title>
            <Desc>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              quod similique magni consequuntur, molestias ab soluta a veritatis
              quam totam, vero delectus fuga, deserunt quidem. Sequi dolor
              laudantium est quas.
            </Desc>
            <Button>Show Now</Button>
          </InfoContainer>
          <ImageContainer>
            <Image src={slider_image} />
          </ImageContainer>
        </Slide>
        <Slide bg="#fcf1ed">
          <InfoContainer>
            <Title>Zaara T-Shirt</Title>
            <Desc>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              quod similique magni consequuntur, molestias ab soluta a veritatis
              quam totam, vero delectus fuga, deserunt quidem. Sequi dolor
              laudantium est quas.
            </Desc>
            <Button>Show Now</Button>
          </InfoContainer>
          <ImageContainer>
            <Image src={slider_image} />
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
  transition: all 1.5s ease;
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
  justify-content: flex-start;
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
  font-size: 70px;
`;
const Desc = styled.p`
  text-transform: uppercase;
  margin: 50px 0px;
  font-size: 16px;
  font-weight: 400;
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

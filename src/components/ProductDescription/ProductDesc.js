import React from "react";
import {
  Container,
  LeftContainer,
  RightContainer,
  ImgCarousel,
  Top,
  Ratings,
  ProductDescription,
  ProductSizeContainer,
  ProductSizeTop,
  ProductSizeDisplay,
  ProductSizeCode,
  ProductCounter,
  ProductButtons,
  ProductDetails,
} from "./productDesc.style";
import { IoStarHalf, IoStar, IoRemove, IoAddOutline } from "react-icons/io5";
import ProductsRow from "../ProductsRow/ProductsRow";
import Sidebar from "../Sidebar/Sidebar";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const ProductDesc = () => {
  const [product, setProduct] = useState("");
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, []);

  return (
    <Container>
      <Sidebar categories="men" />
      <ProductDetails>
        <LeftContainer>
          <img src={product.image} alt="" srcset="" />
          <ImgCarousel>
            <img src="https://picsum.photos/650/850" alt="" srcset="" />
            <img src="https://picsum.photos/650/850" alt="" srcset="" />
            <img src="https://picsum.photos/650/850" alt="" srcset="" />
          </ImgCarousel>
        </LeftContainer>
        <RightContainer>
          <Top>
            <p>{product.category}</p>
            <Ratings>
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStarHalf />
              <IoStar style={{ color: "lightgray" }} />
            </Ratings>
          </Top>
          <ProductDescription>
            <h1 className="product-title">{product.title}</h1>
            <h4 className="product-price">{product.price}</h4>
            <p className="product-description">{product.description}</p>
            <p className="product-measurement">
              {/* <span>Height of Model: </span>189 CM / 74.4" SIZE EUR 50 */}
            </p>
          </ProductDescription>
          <ProductSizeContainer>
            <ProductSizeTop>
              <h1>Select Size</h1>
              <h4>What's my size?</h4>
            </ProductSizeTop>
            <ProductSizeDisplay>
              <ProductSizeCode>XS</ProductSizeCode>
              <ProductSizeCode>S</ProductSizeCode>
              <ProductSizeCode style={{ background: "black", color: "white" }}>
                M
              </ProductSizeCode>
              <ProductSizeCode>L</ProductSizeCode>
              <ProductSizeCode>XL</ProductSizeCode>
            </ProductSizeDisplay>
          </ProductSizeContainer>
          <ProductButtons>
            <ProductCounter>
              <div className="icon">
                <IoRemove />
              </div>
              <h1>1</h1>
              <div className="icon">
                <IoAddOutline />
              </div>
            </ProductCounter>
            <button>Add to Cart</button>
          </ProductButtons>
        </RightContainer>
      </ProductDetails>

      <ProductsRow title="Popular Now" />
    </Container>
  );
};

export default ProductDesc;

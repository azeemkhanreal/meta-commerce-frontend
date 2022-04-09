import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import GoToTop from "../components/GoToTop";
import Header from "../components/Header";
import Products from "../components/Products";

const ProductList = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Dresses</Title>
        <FilterContainer>
          <Filter>
            <FilterText>Filter Products: </FilterText>
            <Select>
              <Option disabled>Color</Option>
              <Option>White</Option>
              <Option>Black</Option>
            </Select>
            <Select>
              <Option disabled>Size</Option>
              <Option>XS</Option>
              <Option>S</Option>
              <Option>M</Option>
              <Option>L</Option>
              <Option>XL</Option>
            </Select>
          </Filter>
          <Filter>
            <FilterText>Sort Products: </FilterText>
            <Select>
              <Option disabled>Newest:</Option>
              <Option>Price (Asc) </Option>
              <Option>Price (Desc) </Option>
            </Select>
          </Filter>
        </FilterContainer>
        <Products />
      </Wrapper>
      <GoToTop />
    </Container>
  );
};

const Container = styled.div``;
const Title = styled.h1`
  padding: 10px;
`;
const Wrapper = styled.div``;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
`;
const FilterText = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  background-color: #fff;
`;
const Option = styled.option``;

export default ProductList;

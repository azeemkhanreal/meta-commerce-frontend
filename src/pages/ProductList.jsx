import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import GoToTop from "../components/GoToTop";
import Products from "../components/Products";
import { mobile } from "../responsive";
const ProductList = () => {
  const location = useLocation();
  const category = location.pathname.split("/")[2];
  const gender = location.pathname.split("/")[1];
  const [filters, setFilter] = useState({});
  const [sort, setSort] = useState("newest");
  const handleFilters = async (e) => {
    const value = e.target.value;
    setFilter({
      ...filters,
      [e.target.name]: value,
    });
  };
  return (
    <Container>
      <Wrapper>
        <Title>{category}</Title>
        <FilterContainer>
          <Filter>
            <FilterText>Filter Products: </FilterText>
            <Select name="color" onChange={handleFilters}>
              <Option disabled>Color</Option>
              <Option>white</Option>
              <Option>black</Option>
              <Option>red</Option>
              <Option>green</Option>
              <Option>yellow</Option>
              <Option>blue</Option>
            </Select>
            <Select name="size" onChange={handleFilters}>
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
            <Select onChange={(e) => setSort(e.target.value)}>
              <Option value="newest">Newest:</Option>
              <Option value="asc">Price (Asc) </Option>
              <Option value="desc">Price (Desc) </Option>
            </Select>
          </Filter>
        </FilterContainer>
        <Products
          category={category}
          filters={filters}
          sort={sort}
          sex={gender}
        />
      </Wrapper>
      <GoToTop />
    </Container>
  );
};

const Container = styled.div``;
const Title = styled.h1`
  padding: 20px;
  font-size: 24px;
  text-transform: uppercase;
  ${mobile({ fontSize: "18px", fontWeight: "normal" })}
`;
const Wrapper = styled.div``;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexWrap: "wrap" })}
`;
const Filter = styled.div`
  margin: 20px 20px;
  display: flex;
  align-items: center;
  ${mobile({ margin: "5px 22px" })}
`;
const FilterText = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ fontSize: "16px" })}
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  background-color: #fff;
`;
const Option = styled.option``;

export default ProductList;

import styled from "styled-components";
import { IoSearchOutline } from "react-icons/io5";
const SearchBar = () => {
  return (
    <Container>
      <SearchInput>
        {/* <IoSearchOutline /> */}
        <Input type="text" placeholder="What are you looking for?" />
      </SearchInput>
    </Container>
  );
};

export const Container = styled.div`
  flex: 0.5;
  text-align: center;
`;
export const Input = styled.input`
  /* width: 300px; */
`;
export const SearchInput = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 10px;
  border-radius: 50px;
  border: 1px solid rgb(0, 0, 0, 0.1);
  input {
    background-color: none;
    outline: none;
    border: none;
    padding-left: 5px;
    text-align: center;
    width: 100%;
  }
`;
export default SearchBar;

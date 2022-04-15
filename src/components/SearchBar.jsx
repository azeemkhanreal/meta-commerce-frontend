import styled from "styled-components";
const SearchBar = () => {
  return (
    <Container>
      <SearchInput>
        <Input type="text" placeholder="What are you looking for?" />
      </SearchInput>
    </Container>
  );
};

export const Container = styled.div`
  text-align: center;
  width: 100vw;
`;
export const Input = styled.input`
  /* width: 300px; */
`;
export const SearchInput = styled.div`
  input {
    width: 100%;
    height: 30px;
    background-color: whitesmoke;
    border: none;
    text-align: center;
    outline: none;
    /* box-shadow: 0px 6px 24px -14px rgba(0, 0, 0, 0.5) inset; */
  }
`;
export default SearchBar;

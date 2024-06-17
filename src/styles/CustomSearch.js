import styled from 'styled-components';
import SearchInput from 'react-search-input';

export const CustomSearchInput = styled(SearchInput)`
  input {
    border: 2px solid #000;
    padding: 5px;
    font-size: 18px;
    font-family: sans-serif;
  }
`;

export const SingleMailWrapper = styled.div`
  padding: 5px;
  margin: 10px auto;
  border: 1px solid red;
`;

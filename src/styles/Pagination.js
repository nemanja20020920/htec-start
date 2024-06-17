import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

export const CustomPagination = styled(ReactPaginate)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  gap: 10px;
  padding: 0;

  li {
    list-style: none;
  }

  .button {
    padding: 10px;
    border: 1px solid #000;
    border-radius: 3px;
    background-color: #fff;
    color: #000;
    cursor: pointer;
  }

  .button-link {
    color: #000;
    font-size: 20px;
  }

  .active-link {
    color: red !important;
    border-color: red !important;
  }

  .link {
    color: #000;
    font-size: 20px;
    cursor: pointer;
    border: 1px solid #000;
    border-radius: 3px;
    padding: 5px 10px;
  }
`;

export const CustomWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  border: 2px solid red;
  border-radius: 5px;
  margin: 10px 0;

  p {
    max-width: 90%;
  }
`;

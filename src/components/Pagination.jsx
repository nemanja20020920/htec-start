/* eslint-disable react/prop-types */
import { useState } from 'react';
import { CustomPagination } from '../styles/Pagination';
import { SingleMailWrapper } from '../styles/CustomSearch';
import ModalTest from './ModalTest';

const Items = ({ currentItems }) => {
  return (
    <>
      {currentItems &&
        currentItems.map((mail) => (
          <SingleMailWrapper key={mail.id}>
            <p>Name:{mail.user.name}</p>
            <p>Name:{mail.user.name}</p>
            <ModalTest mail={mail} />
          </SingleMailWrapper>
        ))}
    </>
  );
};

const Pagination = ({ itemsPerPage, items }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <CustomPagination
        breakLabel="..."
        nextLabel="Sledeca >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< Prethodna"
        renderOnZeroPageCount={null}
        nextClassName="button"
        previousClassName="button"
        nextLinkClassName="button-link"
        previousLinkClassName="button-link"
        pageLinkClassName="link"
        activeLinkClassName="active-link"
      />
    </>
  );
};

export default Pagination;

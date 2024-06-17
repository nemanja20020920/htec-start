/* eslint-disable react/prop-types */
import { useMemo, useState } from 'react';
import { CustomPagination } from '../styles/Pagination';
import Items from './Items';

const Pagination = ({ itemsPerPage, items }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;

  const currentItems = useMemo(
    () => items.slice(itemOffset, endOffset),
    [items, itemOffset, endOffset]
  );
  const pageCount = useMemo(
    () => Math.ceil(items.length / itemsPerPage),
    [items, itemsPerPage]
  );

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
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

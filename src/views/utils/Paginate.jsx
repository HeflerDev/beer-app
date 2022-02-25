import React from 'react';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';

export const Paginate = ({handlePageClick, pageCount}) => (
  <ReactPaginate
    breakLabel="..."
    nextLabel="next >"
    onPageChange={handlePageClick}
    pageRangeDisplayed={5}
    pageCount={pageCount}
    previousLabel="< previous"
    renderOnZeroPageCount={null}
  />
);

Paginate.propTypes = {
  handlePageClick: PropTypes.func.isRequired,
  pageCount: PropTypes.number.isRequired,
};

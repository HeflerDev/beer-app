import React from 'react';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';

export const Paginate = ({handlePageClick, pageCount}) => (
  <ReactPaginate
    breakLabel="..."
    nextLabel=">"
    onPageChange={handlePageClick}
    pageRangeDisplayed={1}
    marginPagesDisplayed={2}
    pageCount={pageCount}
    previousLabel="<"
    renderOnZeroPageCount={null}
    pageClassName="page-number"
    activeClassName="page-number-active"
    nextClassName="next"
    previousClassName="previous"
    disabledClassName="npdisabled"
    breakClassName="break"
  />
);

Paginate.propTypes = {
  handlePageClick: PropTypes.func.isRequired,
  pageCount: PropTypes.number.isRequired,
};

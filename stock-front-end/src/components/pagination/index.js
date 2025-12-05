import React, { useState } from 'react'
import { get } from 'lodash'
import ReactPaginate from 'react-paginate'

const PreviousIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="16px/Left">
      <path id="&#240;&#159;&#140;&#136;--Icon-color" fillRule="evenodd" clipRule="evenodd" d="M9.29289 3.29289C9.68342 2.90237 10.3166 2.90237 10.7071 3.29289C11.0676 3.65338 11.0953 4.22061 10.7903 4.6129L10.7071 4.70711L7.415 8L10.7071 11.2929C11.0676 11.6534 11.0953 12.2206 10.7903 12.6129L10.7071 12.7071C10.3466 13.0676 9.77939 13.0953 9.3871 12.7903L9.29289 12.7071L5.29289 8.70711C4.93241 8.34662 4.90468 7.77939 5.2097 7.3871L5.29289 7.29289L9.29289 3.29289Z" fill="#6681A1" />
    </g>
  </svg>
)

const NextIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="16px/Right">
      <path id="&#240;&#159;&#140;&#136;--Icon-color" fillRule="evenodd" clipRule="evenodd" d="M5.29289 3.29289C5.65338 2.93241 6.22061 2.90468 6.6129 3.2097L6.70711 3.29289L10.7071 7.29289C11.0676 7.65338 11.0953 8.22061 10.7903 8.6129L10.7071 8.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071C4.93241 12.3466 4.90468 11.7794 5.2097 11.3871L5.29289 11.2929L8.585 8L5.29289 4.70711C4.93241 4.34662 4.90468 3.77939 5.2097 3.3871L5.29289 3.29289Z" fill="#6681A1" />
    </g>
  </svg>
)

const DISPLAY_PAGE = 6

const Pagination = ({ totalPage, currentPage, onPageChange }) => {
  const changePageTo = (item) => {
    const selected = get(item, 'selected', 0)
    // if (selected === 0 && currentPage === 1) return
    if (onPageChange) {
      onPageChange(selected + 1)
    }
  }

  if (totalPage && totalPage > 1) {
    return (
      <ReactPaginate
        breakLabel="..."
        breakClassName="break-me"
        pageCount={totalPage}
        marginPagesDisplayed={totalPage < (DISPLAY_PAGE - 1) ? 0 : 1}
        pageRangeDisplayed={totalPage < (DISPLAY_PAGE - 1) ? totalPage : (DISPLAY_PAGE - 1)}
        onPageChange={changePageTo}
        forcePage={currentPage}
        containerClassName="pagination-container"
        subContainerClassName="pages pagination-container"
        activeClassName="active"
        previousLabel={<div className="icon-pagination"><PreviousIcon /></div>}
        nextLabel={<div className="icon-pagination"><NextIcon /></div>}
      />
    )
  }
  return null
}

export default Pagination

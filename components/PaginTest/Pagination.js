import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";
import Image from "next/image";

// const PER_PAGE = 12;

export default function Pagination({
  data,
  Component,
  currentPage,
  setCurrentPage,
  perPage = 12,
  toTopHandler,
}) {
  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }
  //next lines are temp
  const offset = currentPage * perPage;

  const currentPageData = data.slice(offset, offset + perPage);

  //pagecount should be received from server
  const pageCount = Math.ceil(data.length / perPage);

  return (
    <>
      {/* <div> */}
      {currentPageData.map((item, id) => (
        <Component {...item} key={id} />
      ))}
      {/* </div> */}
      <ReactPaginate
        previousLabel={
          <Image alt="prev" src="/images/arrows/white-left.svg" width={28} height={28} />
        }
        nextLabel={
          <Image alt="next" src="/images/arrows/white-right.svg" width={28} height={28} />
        }
        // pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        onPageChange={(value) => {
          toTopHandler();
          handlePageClick(value);
        }}
        containerClassName={styles.pagination}
        previousLinkClassName={styles["pagination-prev"]}
        nextLinkClassName={styles["pagination-next"]}
        disabledClassName={styles["pagination__link-disabled"]}
        activeClassName={styles["pagination__link-active"]}
        forcePage={currentPage}
      />
    </>
  );
}

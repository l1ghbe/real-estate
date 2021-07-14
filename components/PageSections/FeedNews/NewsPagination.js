import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import styles from "./NewsPagination.module.scss";
import Image from "next/image";
import FeedNewsBoardCard from "./FeedNewsBoardCard";
import FeedNewsCard from "./FeedNewsCard";
import scrollToContainerTop from "../../../utils/scrollToElementTop";

// const PER_PAGE = 12;

export default function NewsPagination({
  data,
  currentPage,
  setCurrentPage,
  perPage = 8,
  ref,
  toTopHandler,
}) {
  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }
  const areWhite = [2, 3, 4, 5];
  const offset = currentPage * perPage;

  const currentPageData = data.slice(offset, offset + perPage);

  const pageCount = Math.ceil(data.length / perPage);

  return (
    <>
      {currentPageData.map((item, id) => {
        if (areWhite.includes(id)) {
          return <FeedNewsBoardCard key={id} {...item} />;
        }
        return <FeedNewsCard key={id} {...item} />;
      })}
      <ReactPaginate
        previousLabel={
          <Image
            alt="prev"
            src="/images/arrows/white-left.svg"
            width={28}
            height={28}
          />
        }
        nextLabel={
          <Image
            alt="next"
            src="/images/arrows/white-right.svg"
            width={28}
            height={28}
          />
        }
        // pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        onPageChange={(value) => {
          handlePageClick(value);
          toTopHandler();
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

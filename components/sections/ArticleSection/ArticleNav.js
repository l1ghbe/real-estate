import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import styles from "./ArticleNav.module.scss";
import Image from "next/image";
import FeedNewsBoardCard from "../../../components/PageSections/FeedNews/FeedNewsBoardCard";
import FeedNewsCard from "../../../components/PageSections/FeedNews/FeedNewsCard";

// const PER_PAGE = 12;

export default function ArticleNav({
  data,
  currentPage,
  setCurrentPage,
  perPage = 12,
  toTopHandler,
}) {
  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }
  const areBlack = [0, 1, 2];
  const offset = currentPage * perPage;

  const currentPageData = data.slice(offset, offset + perPage);

  const pageCount = Math.ceil(data.length / perPage);

  return (
    <>
      {currentPageData.map((item, id) => {
        if (areBlack.includes(id)) {
          return <FeedNewsCard type="article" key={id} {...item} />;
        }
        return <FeedNewsBoardCard type="article" key={id} {...item} />;
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

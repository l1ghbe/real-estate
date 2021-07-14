import React, { useEffect, useRef, useState } from "react";
import Title from "../../Title/Title";
import styles from "./DevRating.module.scss";
import DevelopersCardRating from "../../DevelopersCardRating/DevelopersCardRating";
import { useSelector } from "react-redux";
import Pagination from "./../../PaginTest/Pagination";
import scrollToContainerTop from "../../../utils/scrollToElementTop";

const DevRating = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const ratingRef = useRef(null);
  const { data, error, loading } = useSelector(
    (state) => state.developersCardRating
  );
  useEffect(()=>{
    //{payload:currentPage}
  },[])
  const toTopHandler = () => {
    scrollToContainerTop(ratingRef);
  };
  
  return (
    <div className={styles["devs-rating"]} ref={ratingRef}>
      <div className={styles["devs-rating-title"]}>
        <Title text="Рейтинг застройщиков" />
      </div>
      <div className={styles["devs-rating-grid"]}>
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          data={data}
          Component={DevelopersCardRating}
          perPage={12}
          toTopHandler={toTopHandler}
        />
      </div>
    </div>
  );
};

export default DevRating;

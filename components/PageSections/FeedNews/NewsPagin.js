import Image from "next/image";
import React, { useRef } from "react";
import scrollToContainerTop from "../../../utils/scrollToElementTop";
import NewsRender from "./NewsRender";
import styles from "./FeedNews.module.scss";
import Title from "../../Title/Title";

const NewsPagin = ({ title }) => {
  const toTopHandler = () => {
    scrollToContainerTop(newsRef);
  };
  const newsRef = useRef(null);
  return (
    <div ref={newsRef} className={styles["newspagin-container"]}>
      <div className={styles["journal-title"]}>
        <Title text={title} />
      </div>
      <div className={styles["feed-news"]}>
        <NewsRender toTopHandler={toTopHandler} />
      </div>
    </div>
  );
};

export default NewsPagin;

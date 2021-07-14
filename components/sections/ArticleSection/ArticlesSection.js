import React, { useRef } from "react";
import { useSelector } from "react-redux";
import Title from "../../../components/Title/Title";
import scrollToContainerTop from "../../../utils/scrollToElementTop";
import styles from "./../News.module.scss";
import ArticleRender from "./ArticleRender";

const ArticleSection = () => {
  const articleRef = useRef(null);
  const toTopHandler = () => {
    scrollToContainerTop(articleRef);
  };
  return (
    <div className={styles.articles} ref={articleRef}>
      <div className={styles["articles-title"]}>
        <Title text="Статьи" />
      </div>
      <div className={styles["articles-grid"]}>
        <ArticleRender toTopHandler={toTopHandler} />
      </div>
    </div>
  );
};

export default ArticleSection;

import React from "react";
import styles from "./News.module.scss";
import FeedNewsBoardCard from "../../components/PageSections/FeedNews/FeedNewsBoardCard";
import Link from "next/link";
import { useSelector } from "react-redux";
import convertDate from "../../utils/convertDate";

const LastNewsSection = () => {
  const { data, error, loading } = useSelector((state) => state.lastNews);
  //   const sortedData = data
  //     .slice()
  //     .sort((a, b) => a.date - b.date)
  //     .slice(data.length - 3);
  // //   sortedData.forEach((item) => {
  // //   });
  return (
    <div className={styles["articles-news"]}>
      <div className={styles["articles-main"]}>
        {/* <Image src="/images/articles/image1.png" alt="Main" width={1059} height={508}/> */}
        <img src="/images/articles/image1.png" alt="Main" />
        <div className={styles["articles-text"]}>
          <Link href={`/news/${data[0].id}`}>
            <a>
              <h2 className={styles["article-title"]}>{data[0].title}</h2>
            </a>
          </Link>
          <p className={styles["article-description"]}>{data[0].description}</p>
          <Link href="/">
            <a className={styles["article-date"]}>
              {convertDate(data[0].date, "russian")}
            </a>
          </Link>
        </div>
      </div>
      <div className={styles["articles-news-items"]}>
        <FeedNewsBoardCard {...data[1]} />
        <FeedNewsBoardCard {...data[2]} />
      </div>
    </div>
  );
};

export default LastNewsSection;

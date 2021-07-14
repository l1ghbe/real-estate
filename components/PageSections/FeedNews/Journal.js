import Image from "next/image";
import Link from "next/link";
import React from "react";
import Title from "../../Title/Title";
import styles from "./FeedNews.module.scss";
import JournalRender from "./JournalRender";

const Journal = ({ title }) => {
  return (
    <>
      {/* <div className={styles["journal-title"]}> */}
        {title === "Журнал" ? (
          <Link href="/news">
            <a>
              <div className={styles["journal-title"]}>
                <Title text={title} />
                <Image
                  alt="title"
                  src="/images/arrows/white-right.svg"
                  width={37}
                  height={37}
                />
              </div>
            </a>
          </Link>
        ) : (
          <div className={styles["journal-title"]}>
            <Title text={title} />
          </div>
        )}
      {/* </div> */}
      <div className={styles["feed-news"]}>
        <JournalRender />
      </div>
    </>
  );
};

export default Journal;

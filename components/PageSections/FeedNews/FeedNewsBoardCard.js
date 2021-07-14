import styles from "./FeedNews.module.scss";
import Image from "next/image";
import Link from "next/link";
import convertDate from "../../../utils/convertDate";

const FeedNewsBoardCard = ({ title, description, date, id, type = "news" }) => {
  const redirectUrl = type === "article" ? `/articles/${id}` : `/news/${id}`;
  return (
    <div className={styles["feed-news-card-board"]}>
      <Link href={redirectUrl}>
        <a>
          <h3 className={styles["feed-news-card-board__title"]}>{title}</h3>
        </a>
      </Link>
      <p className={styles["feed-news-card-board__description"]}>
        {description}
      </p>
      <div className={styles["feed-news-card-board-info"]}>
        <Link href={redirectUrl}>
          <a className={styles["feed-news-card-board-more"]}>
            <span>Читать</span>
            <Image
              alt="article"
              src="/images/arrows/right-black.svg"
              width={20}
              height={13}
            />
          </a>
        </Link>
        <Link href="/">
          <a className={styles["feed-news-date"]}>
            {/* {newsBoardDate} */}
            {convertDate(date, "russian")}
          </a>
        </Link>
      </div>
    </div>
  );
};

export default FeedNewsBoardCard;

import styles from "./FeedNews.module.scss";
import Image from "next/image";
import Link from "next/link";

const FeedNewsCard = ({ title, description, image, id, type = "news" }) => {
  const redirectUrl = type === "article" ? `/articles/${id}` : `/news/${id}`;
  return (
    <div className={styles["feed-news-card"]}>
      <Link href={redirectUrl}>
        <a>
          <h2 className={styles["feed-news-card__title"]}>{title}</h2>
        </a>
      </Link>
      <h2 className={styles["feed-news-card__description"]}>{description}</h2>
      <div className={styles["news-image"]}>
        <Image
          alt="news"
          src={image}
          width={520}
          height={318}
          layout="responsive"
        />
      </div>
    </div>
  );
};

export default FeedNewsCard;

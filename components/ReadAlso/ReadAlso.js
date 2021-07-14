import FeedNewsBoardCard from "../PageSections/FeedNews/FeedNewsBoardCard";
import styles from "./ReadAlso.module.scss";

const ReadAlso = ({ data, type }) => {
  return (
    <div className={styles["news-board"]}>
      <div className={styles["news-board-title"]}>Читайте по теме</div>
      {data.map((newsBoardItem) => (
        <FeedNewsBoardCard
          type={type}
          key={newsBoardItem.id}
          id={newsBoardItem.id}
          title={newsBoardItem.title}
          description={newsBoardItem.description}
          date={newsBoardItem.date}
        />
      ))}
    </div>
  );
};

export default ReadAlso;

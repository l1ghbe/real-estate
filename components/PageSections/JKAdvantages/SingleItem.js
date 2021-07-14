import styles from "./JKAdvantages.module.scss";

const SingleItem = ({ title, text, number }) => {
  return (
    <div className={styles["item-cont"]}>
      <div className={styles["title-cont"]}>
        <div className={styles["title-num"]}> {number}</div>
        <h2 className={styles["title-adv"]}>{title}</h2>
      </div>
      <div className={styles["item-text"]}>{text}</div>
    </div>
  );
};

export default SingleItem;

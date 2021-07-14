import styles from "./RatingMeter.module.scss";

function getColor(rating) {
  if (rating < 3) {
    return "bad";
  } else if (rating < 4) {
    return "average";
  } else return "good";
}

const RatingMeter = ({ rating }) => {
  const style = { width: (rating / 5) * 100 + "%" };
  return (
    <>
      <div className={styles.flex}>
        <div>Рейтинг</div>
        <div>{rating}</div>
        <div
          style={style}
          className={`${styles.rating} ${styles[getColor(rating)]}`}
        ></div>
      </div>
    </>
  );
};

export default RatingMeter;

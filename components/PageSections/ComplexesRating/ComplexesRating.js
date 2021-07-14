import styles from "./ComplexesRating.module.scss";
import Image from "next/image";
import convertDate from "../../../utils/convertDate";

const ComplexesRating = ({ data }) => {
  const { krasnodar, russia, region, date } = data;
  const convertedDate = convertDate(date);
  return (
    <div className={styles["complex-ratings"]}>
      <h3 className={styles["complex-ratings-title"]}>Рейтинг комплекса</h3>
      <div className={styles["complex-ratings-item"]}>
        <div className={styles["complex-ratings-item-star"]}>
          <Image src="/images/Star.svg" width={20} height={20} alt="Звезда" />
          <span>{krasnodar}</span>
        </div>
        <p className={styles["complex-ratings-item-text"]}>
          по городу Краснодар
        </p>
        <p className={styles["complex-ratings-item-date"]}>{convertedDate}</p>
      </div>
      <div className={styles["complex-ratings-item"]}>
        <div className={styles["complex-ratings-item-star"]}>
          <Image src="/images/Star.svg" width={20} height={20} alt="Звезда" />
          <span>{region}</span>
        </div>
        <p className={styles["complex-ratings-item-text"]}>по региону</p>
        <p className={styles["complex-ratings-item-date"]}>{convertedDate}</p>
      </div>
      <div className={styles["complex-ratings-item"]}>
        <div className={styles["complex-ratings-item-star"]}>
          <Image src="/images/Star.svg" width={20} height={20} alt="Звезда" />
          <span>{russia}</span>
        </div>
        <p className={styles["complex-ratings-item-text"]}>по России</p>
        <p className={styles["complex-ratings-item-date"]}>{convertedDate}</p>
      </div>
      {/* <div className="complex-ratings-region"></div>
            <div className="complex-ratings-country"></div> */}
    </div>
  );
};

export default ComplexesRating;

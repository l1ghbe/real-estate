import styles from "./DevelopersCardRating.module.scss";
import Image from "next/image";
import Link from "next/link";

const DevelopersRating = ({
  place,
  quantityComplexes,
  quantityCottages,
  image,
  id,
}) => {
  return (
    <div className={styles["devs-rating-card"]}>
      <div className={styles["devs-rating-card-developer"]}>
        <div
          className={`${styles["devs-rating-card-title"]} ${styles.developerTitle}`}
        >
          Застройщик
        </div>
        <Link href={`/developers/${id}`}>
          <a>
            <div className={styles["devs-rating-card-data"]}>
              <Image src={image} width={103} height={44} alt="CCK" />
            </div>
          </a>
        </Link>
      </div>
      <div className={styles["devs-rating-card-place"]}>
        <div className={styles["devs-rating-card-title"]}>Место</div>
        <div className={styles["devs-rating-card-data"]}>{place}</div>
      </div>
      <div className={styles["devs-rating-card-quantity"]}>
        <div className={styles["devs-rating-card-title"]}>Количество жк</div>
        <div className={styles["devs-rating-card-data"]}>
          {quantityComplexes}
        </div>
      </div>
      <div className={styles["devs-rating-card-cottages"]}>
        <div className={styles["devs-rating-card-title"]}>
          Коттеджные поселки
        </div>
        <div className={styles["devs-rating-card-data"]}>
          {quantityCottages}
        </div>
      </div>
    </div>
  );
};

export default DevelopersRating;

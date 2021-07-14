import styles from "./DeveloperCard.module.scss";
import Image from "next/image";
import Link from "next/link";

const DeveloperCard = ({
  name,
  image,
  rating,
  description,
  id,
  isFirst,
}) => {
  return (
    <div
      className={`${styles.container} ${
        isFirst ? styles["container-first"] : ""
      }`}
    >
      <div className={styles['mobile-adaptive-image']}>
        <Link href={`/developers/${id}`}><a><Image src={image} width={200} height={100} alt="developer"  /></a></Link>
        {isFirst && (
          <div className={styles["first-wrapper"]}>
            <div className={styles.title}>{name}</div>
            <div className={styles.description}>{description}</div>
          </div>
        )}
      </div>

      <div className={`${styles.rating} ${styles["rating-flex"]}`}>
        <div className={styles["rating-title"]}>
          <span className={styles.optional}>Рейтинг компании по городу</span>
          Краснодар
        </div>
        <div className={styles["image-wrapper"]}>
          <Image
            layout="fixed"
            src={"/images/Star.svg"}
            width={20}
            height={20}
            alt="star"
          />
          <span className={styles["rating-number"]}>{rating.krasnodar}</span>
        </div>
      </div>
    </div>
  );
};

export default DeveloperCard;

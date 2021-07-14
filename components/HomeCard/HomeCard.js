import styles from "./HomeCard.module.scss";
import Link from "next/link";
import Image from "next/image";
import RatingMeter from "../RatingMeter/RatingMeter";

function getPriceFromNumber(num) {
  return `от ${num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₽`;
}

const HomeCard = ({
  title,
  description,
  location,
  price,
  type,
  status,
  rating = undefined,
  image,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image
          alt="home"
          src={image}
          width={200}
          height={120}
          layout="responsive"
        />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
        <div className={styles.location}>{location}</div>
        {rating && <RatingMeter rating={rating} />}

        <div
          className={`${styles["card-footer"]} ${
            !rating && styles["without-rating"]
          }`}
        >
          <div className={styles.summary}>
            <div className={styles.price}>{getPriceFromNumber(price)}</div>
            <div className={styles.status}>{status}</div>
          </div>
          <Link href="/">
            <a>
              <Image
                alt="buy"
                src="/images/arrows/right-black.svg"
                width={20}
                height={20}
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;

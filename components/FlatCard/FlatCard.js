import styles from "./FlatCard.module.scss";
import Link from "next/link";
import Image from "next/image";

function getPriceFromNumber(num) {
  return `от ${num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₽`;
}

const FlatCard = ({
  rating = undefined,
  title,
  developer,
  developersImage,
  description,
  location,
  price,
  type,
  status,
  image,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles["developer-image"]}>
        <Image
          alt="developer"
          src={developersImage}
          width={200}
          height={120}
          layout="responsive"
        />
      </div>
      <div className={styles["content-flex"]}>
        <div className={styles.image}>
          <Image alt="home" src={image} layout="fill" objectFit="cover" />
        </div>
        <div className={styles.content}>
          <div className={styles.title}>{title}</div>
          <div className={styles.location}>{developer}</div>

          <div className={styles.location}>{location}</div>
          <div className={styles.description}>{description}</div>

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
    </div>
  );
};

export default FlatCard;

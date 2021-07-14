import Button from "../../Button/Button";
import Title from "../../Title/Title";
import Image from "next/image";
import Link from "next/link";
import styles from "./BuyApartment.module.scss";
import appartmentTypes from "./appartmentTypes";
import BuyAppartmentCard from "./BuyAppartmentCard";

const BuyApartment = ({ titleText }) => {
  return (
    <div className={styles["buy-apartment"]}>
      <Title text={titleText} marginBottom="48px" />
      <div className={styles["buy-apartment-grid"]}>
        {appartmentTypes.map((type) => (
          <BuyAppartmentCard key={type.id} id={type.id} text={type.text} />
        ))}
        
        <div
          className={`${styles["buy-apartment-card"]} ${styles["buy-apartment-card-all"]}`}
        >
          <Image
            alt="appartment"
            className={styles["buy-apartment-img"]}
            src="/images/grid/image6.jpg"
            width={517}
            height={320}
            layout="responsive"
          />
          <Link href="/">
            <a className={styles["buy-apartment-all"]}>
              <p>Показать все</p>
              <Image
                src="/images/arrows/white-right.svg"
                alt="Arrow right"
                width={33}
                height={33}
              />
            </a>
          </Link>
        </div>
      </div>
      <div className={styles["btn-show-all"]}>
        <Link href="/">
          <a>
            <Button text="Показать все" marginRight="12px" arrow="true" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default BuyApartment;

import styles from "./DeveloperDescription.module.scss";
import Image from "next/image";
import Link from "next/link";
import convertDate from "../../utils/convertDate";
const DevelopersDescriptionCard = ({ name, image, date }) => {
  return (
    // <div className={styles['devs-jk-card']}>
    <Link href="/">
      <a className={styles["devs-jk-card"]}>
        <div className={styles["devs-jk-card-image"]}>
          <Image src={image} width={40} height={40} alt="Card 1" />
        </div>
        <h3 className={styles["devs-jk-card-text"]}>{name}</h3>
        <span className={styles["devs-jk-card-date"]}>{convertDate(date)}</span>
      </a>
    </Link>
    // </div>
  );
};

export default DevelopersDescriptionCard;

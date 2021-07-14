import styles from "./RatingSection.module.scss";
import Button from "../../Button/Button";
import Image from "next/image";
import Link from "next/link";

const SectionHeader = ({title = 'Рейтинг'}) => {
  return (
    <div className={styles.header}>
      <div className={styles.title}>{title}</div>
      <div className={styles["button-desk"]}>
        <Link href="/">
          <a>
            <Button arrow={true} text={"Перейти в каталог"} />
          </a>
        </Link>
      </div>
      <div className={styles["button-mob"]}>
        <Image
          alt="link"
          layout="fixed"
          src="/images/arrows/right-black.svg"
          width={28}
          height={28}
        />
      </div>
    </div>
  );
};

export default SectionHeader;

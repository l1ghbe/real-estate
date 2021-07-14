import React from "react";
import styles from "./DevelopersInfo.module.scss";
import Button from "../../Button/Button";
import Image from "next/image";
import Link from "next/link";

const SectionHeader = () => {
  return (
    <div className={styles.header}>
      <div className={styles.title}>Застройщики города Краснодар</div>
      <div className={styles["button-desk"]}>
        <Link href="/developers">
          <a>
            <Button arrow={true} text={"Смотреть всех"} />
          </a>
        </Link>
      </div>
      <div className={styles["button-mob"]}>
        <Image
          alt="right"
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

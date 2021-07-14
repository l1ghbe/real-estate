import React from "react";
import styles from "./LargeHouse.module.scss";
import Button from "../../Button/Button";
import Image from "next/image";
import housesTabs from "./tabList";

const SectionHeader = ({ selected }) => {
  const { tabName } = housesTabs.find((item) => item.label == selected);
  return (
    <div className={styles.header}>
      <div className={styles.title}>{tabName} в городе Краснодар</div>
      <div className={styles["button-desk"]}>
        <Button arrow={true} text={"Перейти в каталог"} />
      </div>
      <div className={styles["button-mob"]}>
        <Image
          alt="forward"
          layout="fixed"
          src="/images/arrows/white-right.svg"
          width={28}
          height={28}
        />
      </div>
    </div>
  );
};

export default SectionHeader;

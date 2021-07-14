import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import styles from "./ComplexDesc.module.scss";
import Image from "next/image"

const ComplexDesc = ({name,prices}) => {
  return (
    <div className={styles.container}>
      {/* <div className={styles['developer-logo']}>
        <Image src="/images/developers/CCK.svg" width={111} height={48} />
      </div> */}
      <div className={styles.title}>{name}</div>
      <div className={styles.price}>
        <div className={styles.from}>от {prices.from} млн ₽</div>
        <div className={styles.to}>до {prices.to} млн ₽</div>
      </div>
      <div className={styles.status}>дом сдан</div>
    </div>
  );
};

export default ComplexDesc;

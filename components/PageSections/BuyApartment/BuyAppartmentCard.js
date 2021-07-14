import React from "react";
import styles from "./BuyApartment.module.scss";
import Image from "next/image";
import Link from "next/link";
import Button from "../../Button/Button";

const BuyAppartmentCard = ({ id, text }) => {
  return (
    <div className={styles["buy-apartment-card"]}>
      <Image
        alt={text}
        className={styles["buy-apartment-img"]}
        src={`/images/grid/image${id}.jpg`}
        width={517}
        height={320}
        layout="responsive"
      />
      <Link href="/">
        <a>
          <Button text={text} marginRight="25px" icon={true} />
        </a>
      </Link>
    </div>
  );
};

export default BuyAppartmentCard;

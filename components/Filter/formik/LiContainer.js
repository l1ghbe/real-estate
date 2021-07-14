import React from "react";
import styles from "./../Filter.module.scss";
import Image from "next/image";
import { SingleRadioVariant } from "../addFilter/FilterItemTypes/RadioCont";

const LiContainer = ({
  formikKey,
  name,
  mobile,
  isBlack,
  isCurrent,
  isFilter,
  open,
  setOpen,
}) => {
  return (
    <div
      className={`${styles["li__container"]}`}
      onClick={(e) => {
        setOpen && setOpen((prev) => !prev);
        // e.stopPropagation();
      }}
    >
      <span className={`${styles.span} ${mobile ? styles["span-black"] : ""}`}>
        {isFilter && mobile ? (
          <div style={{ display: "flex" }}>
            <div
              className={`${
                open ? styles["add-opened"] : styles["add-closed"]
              }`}
            >
              <Image
                width={28}
                height={28}
                src="/images/arrows/down-black.svg"
                alt="open"
              />
            </div>
            <div>{name}</div>
          </div>
        ) : (
          <div>{name}</div>
        )}
      </span>
      <div
        className={`${styles["image_container"]} ${
          isCurrent ? styles.rotate : ""
        }`}
      >
        <Image
          src={
            isBlack
              ? "/images/arrows/down-white.svg"
              : "/images/arrows/down-black.svg"
          }
          alt="arrow"
          width={20}
          height={20}
        />
      </div>
    </div>
  );
};

export default LiContainer;

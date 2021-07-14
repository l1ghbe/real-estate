import TwoColumnCont from "../containers/TwoColumnsCont";
import styles from "../addFilter.module.scss";
import { SingleCheckbox } from "./CheckBoxCont";
import Image from "next/image";
import { useState } from "react";

const CheckBoxAccordeonCont = ({ data }) => {
  const [open, setOpen] = useState(false);
  const { name, key, variants } = data;
  return (
    <div className={styles["item-container"]}>
      <div
        className={styles["accord-cont"]}
        onClick={() => setOpen((prev) => !prev)}
      >
        <h1>{name}</h1>
        <Image
          className={open ? styles["open"] : ""}
          src="/images/arrows/down-black.svg"
          width={20}
          height={20}
          alt="open"
        />
      </div>
      {open && (
        <TwoColumnCont>
          {variants.map((item) => (
            <SingleCheckbox
              key={item}
              id={item + "-id"}
              name={`filters.${key}`}
              value={item}
            >
              {item}
            </SingleCheckbox>
          ))}
        </TwoColumnCont>
      )}
    </div>
  );
};
export default CheckBoxAccordeonCont;

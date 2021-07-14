import React from "react";
import TwoColumnCont from "../containers/TwoColumnsCont";
import PriceInput from "./PriceInput";
import styles from "../addFilter.module.scss";
import { SingleCheckbox } from "./CheckBoxCont";

//для блоков с чекбоксами и инпутами одновременно
const MishedCont = ({ data }) => {
  const { name, key, variants } = data;
  return (
    <div className={styles["item-container"]}>
      <h1>{name}</h1>
      <TwoColumnCont>
        <PriceInput placeholder="От" name={`filters.${key}.from`} />
        <PriceInput placeholder="До" name={`filters.${key}.to`} />
      </TwoColumnCont>
      {variants.map((item) => (
        <SingleCheckbox
          key={item}
          id={item + "-id"}
          name={`filters.${key}.variants`}
          value={item}
        >
          {item}
        </SingleCheckbox>
      ))}
    </div>
  );
};

export default MishedCont;

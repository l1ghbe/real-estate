import { useField } from "formik";
import React, { useRef } from "react";
import SingleOption from "../../SingleOption";
import ThreeColumnCont from "../containers/ThreeColumnCont";
import styles from "./../addFilter.module.scss";

export const SingleRadioVariant = ({ children, isActive, id, ...props }) => {
  const [field, meta] = useField({ ...props, type: "radio" });
  return (
    <>
      
      <label
        // htmlFor={id}
        className={`${styles.label} ${isActive ? styles.active : ""}`}
      >
        <input
        // id={id}
        className={styles.input}
        {...field}
        {...props}
        type="radio"
      />
        {children}
      </label>
    </>
  );
};

const RadioCont = ({ data, actualValue }) => {
  const { name, key, variants } = data;
  return (
    <div className={styles["item-container"]}>
      <h1>{name}</h1>

      <ThreeColumnCont>
        {variants.map((item) => (
          <SingleRadioVariant
            id={item + "-id"}
            isActive={item === actualValue}
            name={`filters.${key}`}
            value={item}
            key={item}
          >
            {item}
          </SingleRadioVariant>
        ))}
      </ThreeColumnCont>
    </div>
  );
};

export default RadioCont;

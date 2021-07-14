import React from "react";
import styles from "./CustomCheckbox.module.scss";

const CustomCheckbox = ({ children, id, ...props }) => {
  return (
    <div className={styles.container}>
      <input id={id} className={styles.checkbox} type="checkbox" {...props} />
      <label htmlFor={id} className={styles["checkbox-label"]}></label>
      <label htmlFor={id} className={styles["text-label"]}>
        {children}
      </label>
    </div>
  );
};

export default CustomCheckbox;

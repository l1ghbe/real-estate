import React from "react";
import styles from "./../addFilter.module.scss";

const ThreeColumnCont = ({ children }) => {
  return <div className={styles["three-grid"]}>{children}</div>;
};

export default ThreeColumnCont;

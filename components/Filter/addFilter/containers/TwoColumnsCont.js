import React from "react";
import styles from "./../addFilter.module.scss";

const TwoColumnCont = ({ children }) => {
  return <div className={styles["two-grid"]}>{children}</div>;
};

export default TwoColumnCont;

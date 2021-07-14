import React from "react";
import styles from "./addFilter.module.scss";

const ResetButton = ({ children }) => {
  return (
    <>
      <button className={styles["reset-button"]} type="reset">
        {children}
      </button>
    </>
  );
};

export default ResetButton;

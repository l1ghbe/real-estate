import React, { useState, useCallback } from "react";
import styles from "./Tabs.module.scss";

function Tabs({ init, callback, data, children, withTitle, setCurrentPage }) {
  const initialTab = init;
  const [activeTab, setActiveTab] = useState(init);
  const handleActiveTab = (label) => {
    setActiveTab(label);
    setCurrentPage && setCurrentPage((prev) => 0);
  };
  const tabs = data.map((child) => (
    <div
      onClick={(e) => {
        handleActiveTab(child.label);
        callback && callback(child.label);
      }}
      className={`
      ${styles["tabs__tab"]} 
      ${child.label === activeTab ? styles["active"] : ""}
      `}
      key={child.label}
    >
      {child.tabName}
    </div>
  ));

  return (
    <div>
      <div className={styles["tabs-flex"]}>
        {withTitle && <h1 className={styles["tabs-title"]}>{withTitle}</h1>}
        <div className={styles["tabs__box"]}>{tabs}</div>
      </div>
      <>{children}</>
    </div>
  );
}

export default Tabs;

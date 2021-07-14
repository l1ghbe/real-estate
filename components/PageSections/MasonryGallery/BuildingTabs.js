import React, { useState, useCallback } from "react";
import SingleDate from "./SingleDate";
import styles from "./MasonryGallery.module.scss";

function BuildingTabs({ init, callback, data, children, withTitle }) {
  const [activeTab, setActiveTab] = useState(init);
  const handleActiveTab = useCallback((label) => setActiveTab(label), []);

  return (
    <div>
      <div className={styles["masonry-gallery-dates"]}>
        {data.map((date, id) => (
          <SingleDate
            onClick={(e) => {
              handleActiveTab(date.date);
              callback && callback(date);
            }}
            className={`${styles["masonry-gallery-date"]} ${
              activeTab === date.date ? styles.active :"" 
            }`}
            key={id}
            name={date.date}
          />
        ))}
      </div>
      <>{children}</>
    </div>
  );
}

export default BuildingTabs;

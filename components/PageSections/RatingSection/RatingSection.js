import Tabs from "../../ReusableTab/Tabs";
import ratingTabs from "./ratingTabList";
import SectionHeader from "./SectionHeader";
import styles from "./RatingSection.module.scss";
import { useState } from "react";
import SingleItem from "./SingleItem";

// const SelectedContext = React.createContext();

const RatingList = ({ title }) => {
  const [selected, setSelected] = useState("Новостройки");
  return (
    <div className={styles.container} >
      <div
        className={styles["content-container"]}
      >
        <SectionHeader title={title} selected={selected} />
        <Tabs init={selected} callback={setSelected} data={ratingTabs}>
          <SingleItem label={selected} />
        </Tabs>
      </div>
    </div>
  );
};

export default RatingList;

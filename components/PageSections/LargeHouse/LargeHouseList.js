import Tabs from "../../ReusableTab/Tabs";
import SingleTab from "../../ReusableTab/SingleTab";
import HouseContainer from "./HouseContainer";
import housesTabs from "./tabList";
import SectionHeader from "./SectionHeader";
import styles from "./LargeHouse.module.scss";
import { useEffect, useRef, useState } from "react";
import scrollToContainerTop from "../../../utils/scrollToElementTop";

// const SelectedContext = React.createContext();

const LargeHouseList = () => {
  const [selected, setSelected] = useState("Коттедж");
  const [currentPage, setCurrentPage] = useState(0);
  const houseRef = useRef(null);
  
  //скролл до топа блока при пагинации
  const toTopHandler = () => {
    scrollToContainerTop(houseRef);
  };

  return (
    <div className={styles.container} ref={houseRef}>
      <div className={styles["content-container"]}>
        <SectionHeader selected={selected} />
        <Tabs
          setCurrentPage={setCurrentPage}
          init={selected}
          callback={setSelected}
          data={housesTabs}
        >
          <HouseContainer
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            label={selected}
            toTopHandler={toTopHandler}
          />
        </Tabs>
      </div>
    </div>
  );
};

export default LargeHouseList;

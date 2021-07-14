import Tabs from "../../ReusableTab/Tabs";
import housesTabs from "./tabList";
import styles from "./FlatsPlanning.module.scss";
import { useRef, useState } from "react";
import FlatsContainer from "./FlatsContainer";

const FlatsPlanning = () => {
  const [selected, setSelected] = useState("1 комната");
  const [currentPage, setCurrentPage] = useState(0);

  const flatsRef = useRef(null);

  const toTopHandler = () => {
    scrollToContainerTop(newsRef);
  };
  return (
    <div className={styles.container} ref={flatsRef}>
      <div className={styles["content-container"]}>
        <Tabs
          withTitle="Планировки квартир"
          init={selected}
          callback={setSelected}
          data={housesTabs}
          setCurrentPage={setCurrentPage}
        >
          <FlatsContainer
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

export default FlatsPlanning;

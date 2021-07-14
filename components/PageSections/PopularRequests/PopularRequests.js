import { useSelector } from "react-redux";
import GridContainer from "../../GridContainer/GridContainer";
import HomeCard from "../../HomeCard/HomeCard";
import styles from "./popularreq.module.scss";

const PopularRequests = () => {
  const { data, error, loading } = useSelector(
    (state) => state.popularRequests
  );
  return (
    <div className={styles.container}>
    <div className={styles.header}>Популярные запросы</div>
      <GridContainer lessThanFour>
        {data.map((request,index) => (
          <HomeCard key={index} {...request} />
        ))}
      </GridContainer>
    </div>
  );
};

export default PopularRequests;

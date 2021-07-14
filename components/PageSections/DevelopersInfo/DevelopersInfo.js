import styles from "./DevelopersInfo.module.scss";
import DeveloperCard from "../../DeveloperCard/DeveloperCard";
import { useSelector } from "react-redux";
import SectionHeader from "./SectionHeader";
import { useEffect } from "react";

const DevelopersInfoSection = () => {
  const { data, loading, error } = useSelector((state) => state.developers);
  useEffect(() => {
    //async logic {}
  }, []);
  return (
    <>
      <SectionHeader />
      <div className={styles["info-container"]}>
        {data.map((item, index) => {
          if (index === 0) {
            return <DeveloperCard {...item} key={index} isFirst />;
          }
          return <DeveloperCard {...item} key={index} />;
        })}
      </div>
    </>
  );
};

export default DevelopersInfoSection;

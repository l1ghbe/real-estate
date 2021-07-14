import styles from "./MasonryGallery.module.scss";
import Title from "../../Title/Title";
import Image from "next/image";
import { useEffect, useState } from "react";
import {isMobile2} from "../../Galery/isMobile";
import Galery from "../../Galery/Galery";
import SingleDate from "./SingleDate";
import BuildingTabs from "./BuildingTabs";

const isLargeGridRow = (index) => {
  if (index === 1 || index === 6) {
    // return 472;
    return 470;
  }
  if (index === 2 || index === 5) {
    // return 469;
    return 445;
  }
  if (index === 3 || index === 4) {
    return 374;
  }
};

const MasonryGallery = ({ buildingProcessData }) => {
  const [actual, setActual] = useState(buildingProcessData[0]);

  const [mobile, setMobile] = useState(false);
  const resizeHandler = () => {
    setMobile(isMobile2());
  };

  useEffect(() => {
    const mobileCalculated = isMobile2();
    if (mobileCalculated !== mobile) {
      setMobile(mobileCalculated);
    }
    window.addEventListener("resize", resizeHandler);
  }, [mobile]);
  return (
    <div className={styles["masonry-gallery"]}>
      <div className={styles["masonry-gallery-title"]}>
        <Title text="Ход строительства ЖК «Абрикосово»" />
      </div>

      <BuildingTabs
        init={actual.date}
        callback={setActual}
        data={buildingProcessData}
      >
        {mobile ? (
          <Galery data={actual.images} />
        ) : (
          <div className={styles["masonry-gallery-photos"]}>
            {actual.images.map((image, index) => {
              return (
                <Image
                  src={image}
                  width={isLargeGridRow(index + 1)}
                  height={268}
                  alt="Ход строительства"
                  key={index}
                />
              );
            })}
          </div>
        )}
      </BuildingTabs>
    </div>
  );
};

export default MasonryGallery;

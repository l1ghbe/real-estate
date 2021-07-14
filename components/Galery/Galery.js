import React, { useEffect, useState } from "react";
import isMobile from "./isMobile";
import GaleryReprClass from "./GaleryReprClass";
import GaleryRepresent from "./GaleryRepr";
import styles from "./galery.module.scss";
import Title from '../Title/Title'
// import images from "./images";

const Galery = ({ data }) => {
  const [mobile, setMobile] = useState(false);
  const resizeHandler = () => {
    setMobile(isMobile());
  };

  useEffect(() => {
    const mobileCalculated = isMobile();
    if (mobileCalculated !== mobile) {
      setMobile(mobileCalculated);
    }
    window.addEventListener("resize", resizeHandler);
  }, [mobile]);
  return (
    <div className={styles.container}>
      
      <div id="galery">
        <GaleryRepresent data={data} mobile={+mobile} />
      </div>
    </div>
  );
};

export default Galery;

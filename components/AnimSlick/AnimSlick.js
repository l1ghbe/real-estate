import React, { useEffect, useState } from "react";
import AnimSlickRepresent from "./AnimSlickRepresent";
import isMobile from "./isMobile";
import ClassAnimSlickRepresent from "./ClassAnimSlickRepr";

const AnimSlick = ({ centerMode, centerPadding }) => {
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
    <div id="anim">
      <ClassAnimSlickRepresent
        mobile={mobile}
        centerMode={centerMode}
        centerPadding={centerPadding}
      />
      {/* <h1>{mobile ? "mob" : "desk"}</h1> */}
    </div>
  );
};

export default AnimSlick;

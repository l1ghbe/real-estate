import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import styles from "./JKSlider.module.scss";
// import images from "./images";
import NextButton from "../SliderNav/NextButton";
import PrevButton from "../SliderNav/PrevButton";
import { useRef, useState, useEffect } from "react";
import isMobile from "./isMobile";

const JKSlider = ({ children, data, inFlex, devLogo = true }) => {
  const sliderRef = useRef();

  const [mobile, setMobile] = useState(false);
  const [end, setEnd] = useState(false);
  const [start, setStart] = useState(true);

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

  function renderNavigation() {
    return (
      <div className={styles["nav-cont"]}>
        <PrevButton
          complex
          mobile={+mobile}
          onClick={() => sliderRef.current.slickPrev()}
          className={start ? styles.disabled : ""}
        />
        <NextButton
          complex
          mobile={+mobile}
          onClick={() => sliderRef.current.slickNext()}
          className={end ? styles.disabled : ""}
        />
      </div>
    );
  }
  var settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true, //pc
    swipe: true, //phone
    infinite: false,
    beforeChange: (current, next) => {
      if (next === data.length - 1) {
        setEnd(true);
        return;
      } 
      if (next === 0) {
        setStart(true);
        return;
      }
      setEnd(false);
      setStart(false);
    },
  };
  return (
    <div style={{ position: "relative", overflow: 'hidden' }}>
      {renderNavigation()}
      {
        devLogo 
          ? <div className={styles['developer-logo']}>
              <Image alt="logo" src="/images/developers/CCK.svg" width={111} height={48} />
            </div>
          : null
      }
      {children}
      <Slider ref={sliderRef} {...settings}>
        {data.map((image, id) => (
          <div className={styles["image-container"]} key={id}>
            <Image
              alt="building"
              src={image}
              width={1400}
              height={inFlex && !mobile ? 2050 : inFlex && mobile ? 800 : 560}
              layout="responsive"
              //objectFit="cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default JKSlider;

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import styles from "./AnimSlick.module.scss";
import slides from "./slides.js";
import { useCallback, useEffect, useRef, useState } from "react";

const AnimSlickRepresent = ({
  mobile,
  centerMode = true,
  centerPadding = "5%",
}) => {
  const sliderRef = useRef(null);
  var settings = {
    arrows: false,
    centerMode,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "linear",
    draggable: false, //pc
    swipe: false, //phone
  };

  useEffect(() => {}, []);

  return (
    <Slider ref={sliderRef} {...settings}>
      {slides.map((item) => (
        <div className={styles["image-container"]} key={item.id}>
          <Image
            alt="slide"
            src={item.src}
            width={100}
            height={mobile ? 55 : 25}
            layout="responsive"
          />
        </div>
      ))}
    </Slider>
  );
};

export default AnimSlickRepresent;

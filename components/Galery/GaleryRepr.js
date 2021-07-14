import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import styles from "./galery.module.scss";
import NextButton from "../SliderNav/NextButton";
import PrevButton from "../SliderNav/PrevButton";
import { useRef } from "react";
// import appendDots from "./appendDots";

const GaleryRepresent = ({ mobile, data }) => {
  const sliderRef = useRef();
  const isMobile = Boolean(mobile);
  const settings = {
    dots: isMobile,
    arrows: !isMobile,
    centerMode: !isMobile,
    speed: 500,
    slidesToShow: isMobile ? 1 : 2,
    slidesToScroll: 1,
    centerPadding: "10%",
    infinite: false,
    draggable: true, //pc
    swipe: true, //phone
    infinite: true,
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
    appendDots: function appendDots(dots) {
      return (
        <div
          style={{
            paddingTop: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <PrevButton mobile onClick={() => sliderRef.current.slickPrev()} />
          <ul style={{ margin: "0px" }}> {dots} </ul>
          <NextButton mobile onClick={() => sliderRef.current.slickNext()} />
        </div>
      );
    },
  };
  return (
    <Slider ref={sliderRef} {...settings}>
      {data.map((image, index) => (
        <div key={index} className={styles["image-container"]}>
          <Image
            alt="image"
            src={image}
            width={65}
            height={35}
            layout="responsive"
          />
        </div>
      ))}
    </Slider>
  );
};

export default GaleryRepresent;

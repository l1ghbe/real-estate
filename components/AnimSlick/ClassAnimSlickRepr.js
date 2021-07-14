import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import styles from "./AnimSlick.module.scss";
import slides from "./slides.js";
import { useCallback, useEffect, useRef, useState } from "react";
import React from "react";
export default class ClassAnimSlickRepresent extends React.Component {
  constructor(props) {
    super(props);
    this.end = this.end.bind(this);
    this.start = this.start.bind(this);
  }
  componentDidMount() {
    this.start();
  }
  componentWillUnmount() {
    this.end();
  }
  start() {
    this.timerId = setInterval(() => {
      this.slider.slickNext();
      // console.log(this.timerId);
    }, 2000);
    // console.log("m", this.timerId);
  }
  end() {
    clearInterval(this.timerId);
    // console.log("u", this.timerId);
  }
  render() {
    const { centerPadding, centerMode, mobile } = this.props;
    var settings = {
      arrows: false,
      centerMode,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerPadding,
      infinite: true,
      autoplay: true,
      //autoplaySpeed: 2500,
      speed: 1500,
      //   draggable: false, //pc
      //   swipe: false, //phone
    };

    return (
      <Slider ref={(slider) => (this.slider = slider)} {...settings}>
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
  }
}
ClassAnimSlickRepresent.defaultProps = {
  centerMode: true,
  centerPadding: "5%",
};

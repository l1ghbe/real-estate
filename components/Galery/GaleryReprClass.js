// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import Image from "next/image";
// import styles from "./galery.module.scss";
// import images from "./images";
// import NextButton from "../SliderNav/NextButton";
// import PrevButton from "../SliderNav/PrevButton";
// import React, { Component } from "react";

// export default class GaleryReprClass extends Component {
//   constructor(props) {
//     super(props);
//     this.next = this.next.bind(this);
//     this.previous = this.previous.bind(this);
//   }
//   next() {
//     this.refs.slider.slickNext();
//   }
//   previous() {
//     this.refs.slider.slickPrev();
//   }
//   render() {
//     const settings = {
//       dots: this.props.mobile,
//       arrows: true,
//       centerMode: !this.props.mobile,
//       speed: 500,
//       slidesToShow: this.props.mobile ? 1 : 2,
//       slidesToScroll: 1,
//       centerPadding: "5%",
//       infinite: false,
//       draggable: true, //pc
//       swipe: true, //phone
//       infinite: true,
//       nextArrow: <NextButton />,
//       prevArrow: <PrevButton />,
//       appendDots: (dots) => (
//         <div
//           style={{
//             backgroundColor: "#ddd",
//             borderRadius: "10px",
//             padding: "10px",
//             display: "flex",
//           }}
//         >
//           <PrevButton onClick={() => this.previous()} />
//           <ul style={{ margin: "0px" }}> {dots} </ul>
//           <NextButton onClick={() => this.next()} />
//         </div>
//       ),
//     };
//     return (
//       <Slider {...settings}>
//         {images.map((image) => (
//           <div className={styles["image-container"]}>
//             <Image src={image} width={65} height={40} layout="responsive" />
//           </div>
//         ))}
//       </Slider>
//     );
//   }
// }

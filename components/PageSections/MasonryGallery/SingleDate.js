import React from "react";
import styles from "./MasonryGallery.module.scss";

const SingleDate = ({ name, onClick,className }) => {
  return (
    <div onClick={onClick} className={className}>
      <span>{name}</span>
    </div>
  );
};

export default SingleDate;

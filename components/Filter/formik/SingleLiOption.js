import React from "react";
import styles from "./../Filter.module.scss";
import LiContainer from "./LiContainer";
import { SingleRadioVariant } from "../addFilter/FilterItemTypes/RadioCont";

const SingleLiOption = ({
  formikKey,
  name,
  isBlack,
  mobile,
  current,
  setCurrent,
  data,
  values,
  containerClassName,
}) => {
  const isCurrent = formikKey === current;
  return (
    <>
      <li
        onClick={(e) => {
          if (!isCurrent) {
            e.stopPropagation();
            setCurrent(formikKey);
          }
        }}
        className={styles.li}
      >
        <LiContainer
          isBlack={isBlack}
          mobile={+mobile}
          formikKey={formikKey}
          name={name}
          isCurrent={isCurrent}
          //   current={current}
          //   setCurrent={setCurrent}
        />
        {isCurrent || mobile ? (
          <div
            className={styles["common-cont"]}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className={`${styles[containerClassName]}`}>
              {data.map((word, index) => {
                return (
                  <SingleRadioVariant
                    id={word + "-id"}
                    isActive={word === values[formikKey]}
                    name={formikKey}
                    value={word}
                    key={index}
                  >
                    {word}
                  </SingleRadioVariant>
                );
              })}
            </div>
          </div>
        ) : null}
      </li>
    </>
  );
};

export default SingleLiOption;

import React from "react";
import styles from "./../Filter.module.scss";
import LiContainer from "./LiContainer";
import { SingleRadioVariant } from "../addFilter/FilterItemTypes/RadioCont";
import Button from "../../Button/Button";
// import { PriceInput } from "../addFilter/FilterItemTypes/InputCont";
import PriceInput from "../addFilter/FilterItemTypes/PriceInput";

const RangeOption = ({
  formikKey,
  name,
  isBlack,
  mobile,
  current,
  setCurrent,
  containerClassName,
  values,
  setMobileOpen,
  toTopHandler,
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
            <div className={styles[containerClassName]}>
              <PriceInput
                money={+true}
                name={`${formikKey}.from`}
                placeholder={"От"}
              />
              <PriceInput
                money={+true}
                name={`${formikKey}.to`}
                placeholder={"До"}
              />
              {/* </div> */}

              <div className={styles["btn-wrapper"]}>
                <Button
                  fullWidth
                  text={`Показать ${mobile ? "" : "1536 предложений"}`}
                />
              </div>

              {mobile ? (
                <Button
                  text="Закрыть"
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileOpen(false);
                    toTopHandler();
                  }}
                />
              ) : null}
            </div>
          </div>
        ) : null}
      </li>
    </>
  );
};

export default RangeOption;

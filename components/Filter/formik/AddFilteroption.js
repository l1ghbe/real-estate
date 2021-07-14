import React, { useEffect, useState } from "react";
import LiContainer from "./LiContainer";
import styles from "../Filter.module.scss";
import AddFilterComponent from "../addFilter/AddFilterComponent";

const AddFilteroption = ({
  name,
  current,
  setCurrent,
  isBlack,
  mobile,
  values,
  formikKey,
}) => {
  const isCurrent = formikKey === current;
  const [open, setOpen] = useState(false);

  return (
    <>
      <li
        onClick={(e) => {
          if (!isCurrent && !mobile) {
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
          isFilter
          open={open}
          setOpen={setOpen}
          //   current={current}
          //   setCurrent={setCurrent}
        />
        {isCurrent || (mobile && open) ? (
          <div
            className={`${styles["common-cont"]} ${styles["big-filter"]}`}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <AddFilterComponent values={values} />
          </div>
        ) : null}
      </li>
    </>
  );
};

export default AddFilteroption;

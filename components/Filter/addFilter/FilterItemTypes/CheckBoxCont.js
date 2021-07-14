import { useField } from "formik";
import React from "react";
import CustomCheckbox from "../../../CustomCheckbox/CustomCheckbox";
import TwoColumnCont from "../containers/TwoColumnsCont";
import styles from "../addFilter.module.scss";

export const SingleCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <div className={styles["checkbox-wrapper"]}>
      <CustomCheckbox {...field} {...props}>
        {children}
      </CustomCheckbox>
    </div>
  );
};

const CheckBoxCont = ({ data }) => {
  const { name, key, variants } = data;
  return (
    <div className={styles["item-container"]}>
      <h1>{name}</h1>
      <TwoColumnCont>
        {variants.map((item) => (
          <SingleCheckbox
            key={item}
            id={item + "-id"}
            name={`filters.${key}`}
            value={item}
          >
            {item}
          </SingleCheckbox>
        ))}
      </TwoColumnCont>
    </div>
  );
};

export default CheckBoxCont;

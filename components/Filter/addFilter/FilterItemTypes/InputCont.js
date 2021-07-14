import { useField } from "formik";
import React from "react";
import styles from "./../addFilter.module.scss";
import TwoColumnCont from "../containers/TwoColumnsCont";
import PriceInput from "./PriceInput";

// export const PriceInput = (props) => {
//   const [field, meta] = useField({ ...props, type: "text" });
//   return (
//     <>
//       <div className={styles["form-input__container"]}>
//         {/* <label className={styles["form-input__span"]}>₽</label> */}
//         <input className={styles["form-input"]} {...props} {...field} />
//       </div>
//     </>
//   );
// };

const InputCont = ({ data }) => {
  const { key, name } = data;
  return (
    <div className={styles["item-container"]}>
      <h1>{name}</h1>

      <TwoColumnCont>
        <PriceInput placeholder="От" name={`filters.${key}.from`} />
        <PriceInput placeholder="До" name={`filters.${key}.to`} />
      </TwoColumnCont>
    </div>
  );
};

export default InputCont;

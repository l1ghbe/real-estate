import { useField } from "formik";
import styles from "./../../Filter.module.scss";

const PriceInput = (props) => {
  const [field, meta] = useField({ ...props, type: "text" });
  return (
    <>
      <div
        className={`${props.money ? styles.money : ""} ${
          styles["form-input__container"]
        }`}
      >
        {/* <label className={styles["form-input__span"]}>₽</label> */}
        <input className={styles["form-input"]} {...props} {...field} />
      </div>
    </>
  );
};

export default PriceInput;

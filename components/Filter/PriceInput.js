import styles from "./Filter.module.scss";
import Button from "../Button/Button";
const PriceInput = (props) => {
  return (
    <>
      <div className={styles["form-input__container"]}>
        {/* <label className={styles["form-input__span"]}>₽</label> */}
        <input className={styles["form-input"]} {...props} type="text" />
      </div>
    </>
  );
};

export default PriceInput;

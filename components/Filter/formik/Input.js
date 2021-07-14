import { useField } from "formik";
import styles from "../Filter.module.scss";

const Input = ({isBlack, ...props}) => {
  const [field, meta] = useField({ ...props, type: "text" });
  const shouldBeBlack = isBlack && !props.mobile;
  return (
    <>
      <input
        className={`${styles["search__container"]} ${
          shouldBeBlack ? styles["black-input"] : ""
        }`}
        {...field}
        {...props}
        type="text"
      />
    </>
  );
};

export default Input;

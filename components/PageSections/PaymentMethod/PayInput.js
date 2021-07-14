import { useField, ErrorMessage } from "formik";
import styles from "./PaymentMethod.module.scss";

const PayInput = (props) => {
  const [field, meta] = useField({ ...props, type: "text" });
  const hasError = meta.touched && meta.error;
  const isCorrect = meta.touched && !meta.error;
  const className = hasError
    ? styles["form-error"]
    : isCorrect
    ? styles["form-correct"]
    : "";
  return (
    <>
      <div className={styles["payment-form-input-name"]}>
        <label htmlFor={props.name}>{props.label}</label>
        <input
          // type="text"
          id={props.name}
          className={className}
          {...field}
          {...props}
        />
      </div>
      {hasError && (
        <ErrorMessage
          name={props.name}
          render={(msg) => <div className={`${styles["error"]}`}>{msg}</div>}
        />
      )}
    </>
  );
};

export default PayInput;

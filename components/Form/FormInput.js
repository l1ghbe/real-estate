import { useField, ErrorMessage } from "formik";
import Input from "../Input/Input";
import styles from "./Form.module.scss";

const FormInput = (props) => {
  const [field, meta] = useField(props);
  const hasError = meta.touched && meta.error;
  const isCorrect = meta.touched && !meta.error;
  const className = hasError ? "form-error" : isCorrect ? "form-correct" : "";
  return (
    <div
      className={`${styles["form-logic"]}`}
    >
      <label className={styles["form-label"]} htmlFor={props.id || props.name}>
        {props.label}
      </label>
      <div className={styles["input-wrapper"]}>
        <Input
          className={`${styles["form-input"]}  ${styles[className]}`}
          {...field}
          {...props}
        />
      </div>
      {hasError && (
        <ErrorMessage
          name={props.name}
          render={(msg) => (
            <div className={`${styles["required-field"]}`}>{msg}</div>
          )}
        />
      )}
    </div>
  );
};

export default FormInput;

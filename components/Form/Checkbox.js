import { useField, ErrorMessage } from "formik";
import styles from "./Form.module.scss";
import CustomCheckbox from "../CustomCheckbox/CustomCheckbox";

const Checkbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <div>
      <CustomCheckbox {...field} {...props} id="agree">
        {children}
      </CustomCheckbox>
      {meta.touched && meta.error ? (
        <ErrorMessage
          name={props.name}
          render={(msg) => (
            <div className={`${styles["required-field"]}`}>{msg}</div>
          )}
        />
      ) : null}
    </div>
  );
};

export default Checkbox;

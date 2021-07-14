import styles from "./PaymentMethod.module.scss";
import Button from "../../Button/Button";
import { Formik, Form } from "formik";
import { paymentFormValidation } from "./paymentFormValidation";
import Checkbox from "../../Form/Checkbox";
import PayInput from "./PayInput";
import { useState, useEffect } from "react";
import Modal from "../../Modal/Modal";

const PaymentForm = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {

    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [open]);
  return (
    <div className={styles["payment-info-form"]}>
      <Formik
        initialValues={{
          name: "",
          phone: "",
          agree: false,
        }}
        validationSchema={paymentFormValidation}
        onSubmit={(values) => {
          setOpen(true);
        }}
      >
        <Form className={styles["payment-form"]}>
          <h2 className={styles["payment-form-title"]}>Оставить заявку</h2>
          <PayInput
            label="Имя"
            name="name"
            type="text"
            placeholder="Введите имя"
          />
          <PayInput
            label="Имя"
            name="phone"
            type="text"
            placeholder="88005553535"
          />
          <div className={styles["payment-form-input-policy"]}>
            <Checkbox name="agree">
              Отправляя заявку, вы соглашаетесь с условиями политики
              конфиденциальности и правилами обработки данных
            </Checkbox>
            {/* {props.errors.agree && props.touched.agree && (
                <div className={styles.error}>{props.errors.agree}</div>
              )} */}
          </div>
          <Button type="white" text="Отправить" />
        </Form>
      </Formik>
      {<Modal setOpen={setOpen} open={open} />}
    </div>
  );
};

export default PaymentForm;

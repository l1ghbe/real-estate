import { Formik, Form } from "formik";
import { leadValidation } from "./leadValidation";
import Button from "../Button/Button";
import FormInput from "./FormInput";
import styles from "./Form.module.scss";
import { useState, useEffect } from "react";
import Modal from "../Modal/Modal";
import Checkbox from "./Checkbox";

const FormikLogic = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {

    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [open]);
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          phoneNumber: "",
          agree: false,
        }}
        validationSchema={leadValidation}
        onSubmit={(values) => {
          setOpen(true);
        }}
      >
        <Form>
          <div className={styles["input-container"]}>
            <FormInput
              label="Имя"
              name="name"
              type="text"
              placeholder="Введите имя"
            />
            <FormInput
              label="Телефон"
              name="phoneNumber"
              type="text"
              placeholder="+7(928)000-00-00"
            />
            <div className={styles["checkbox-container"]}>
              <Checkbox name="agree">
                Отправляя заявку, вы соглашаетесь с условиями политики
                конфиденциальности и правилами обработки данных
              </Checkbox>
            </div>
            <div className={styles["button-wrapper"]}>
              <Button type="white" text="Отправить" />
            </div>
          </div>
        </Form>
      </Formik>
      {<Modal setOpen={setOpen} open={open} />}
    </>
  );
};

export default FormikLogic;

import styles from "./Form.module.scss";
import Image from "next/image";
import FormikLogic from "./FormikLogic";

const LeadForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles["form-content__container"]}>
        <div className={styles["image-wrapper"]}>
          <img alt="form-image" className={styles.image} src="/images/form/form.jpg" />
        </div>
        <div className={styles["form-content"]}>
          <div className={styles["form-content__title"]}>
            Получить консультацию
          </div>
          <div className={styles["form-content__description"]}>
            Равным образом дальнейшее развитие различных форм деятельности
            представляет собой интересный эксперимент проверки дальнейших
            направлений развития.
          </div>
          <FormikLogic />
          {/* <div className={styles.warning}>
            Отправляя заявку, вы соглашаетесь с условиями политики
            конфиденциальности и правилами обработки данных
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default LeadForm;

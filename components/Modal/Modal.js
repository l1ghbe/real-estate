import React from "react";
import styles from "./Modal.module.scss";
import Button from "../Button/Button";
import Image from "next/image";
// import success from "./formicons/success.svg";
// import failure from "./story.jpg";

const Modal = ({ error, setOpen, open }) => {



  return (
    <div className={open ? `${styles["page-wrapper"]} ${styles.active}` : styles["page-wrapper"]} onClick={() => setOpen(false)}>
      <div
        className={open ? `${styles.container} ${styles.active}` : styles.container}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className={styles["result_container"]}>
          <div className={styles["image_container"]}>
            {error ? (
              <Image
                alt="error"
                width={100}
                height={100}
                layout="responsive"
                src="/formicons/failure.svg"
              />
            ) : (
              <Image
                alt="success"
                width={100}
                height={100}
                layout="responsive"
                src="/formicons/success.svg"
              />
            )}
          </div>
        </div>
        <div className={styles.title}>
          {error ? "Извините, произошла ошибка." : "Спасибо за заявку!"}
        </div>
        <div className={styles.message}>
          Мы отправили вашу заявку, ожидайте ответа от нашего специалиста в
          течении часа.
        </div>
        <div className={styles["button-wrapper"]}>
          <Button
            text="Вернуться"
            type="black"
            onClick={() => setOpen(false)}
          />
        </div>

        <div
          onClick={() => {
            setOpen(false);
          }}
          className={styles.close}
        >
          <Image alt="close" src="/images/cross-black.svg" width={20} height={20} />
        </div>
      </div>
    </div>
  );
};

export default Modal;

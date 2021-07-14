import styles from './PaymentMethod.module.scss'

const PaymentInfo = () => {
    return (
        <div className={styles["payment-info-text"]}>
            <h2 className={styles["payment-info-text__title"]}>Ипотека на готовое жилье в Краснодаре от 7,7%</h2>
            <p className={styles["payment-info-text__description"]}>Товарищи! реализация намеченных плановых заданий представляет собой интересный эксперимент проверки дальнейших направлений развития. Товарищи! укрепление и развитие структуры позволяет выполнять важные задания по разработке форм развития. Повседневная практика показывает.</p>
            <div className={styles["payment-text-advantages"]}>
                <div className={styles["payment-text-advantages__initial"]}>Первоначальный взнос <span>от 10%</span></div>
                <div className={styles["payment-text-advantages__term"]}>Срок кредита <span>до 30 лет</span></div>
                <div className={styles["payment-text-advantages__minamount"]}>Мин. сумма кредита <span>300 тыс. ₽</span></div>
                <div className={styles["payment-text-advantages__maxamount"]}>Макс. сумма кредита <span> 60 млн. ₽</span></div>
            </div>
        </div>
    )
}

export default PaymentInfo

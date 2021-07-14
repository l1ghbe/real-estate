import styles from './PaymentMethod.module.scss'

const BankItem = ({
    image,
    percent,
    altName
}) => {
    return (
        <div className={styles["payment-bank-item"]}>
            <img src={`/images/banks/${image}`} alt={`${altName} логотип`} />
            <p className={styles['banks-percentage']}>{percent}</p>
        </div>
    )
}

export default BankItem

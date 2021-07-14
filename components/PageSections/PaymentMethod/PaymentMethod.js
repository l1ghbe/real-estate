import styles from './PaymentMethod.module.scss'
import Title from '../../Title/Title'
import BankItem from './BankItem'
import PaymentInfo from './PaymentInfo'
import PaymentForm from './PaymentForm'

const PaymentMethod = () => {
    const banks = [
        {
            image: 'sber.png',
            altName: 'Сбербанк',
            percent: '8%'
        },
        {
            image: 'svyaz.png',
            altName: 'Связь Банк',
            percent: '3,2%'
        },
        {
            image: 'otkritie.png',
            altName: 'Открытие',
            percent: '7%'
        },
        {
            image: 'uralsib.png',
            altName: 'УралСиб',
            percent: '11,1%'
        },
        {
            image: 'sovkom.png',
            altName: 'Совком',
            percent: '10%'
        },
        {
            image: 'alfa.png',
            altName: 'Альфа Банк',
            percent: '4,5%'
        },
    ]
    return (
        <div className={styles['payment-method']}>
            <div className={styles['payment-method-title']}>
                <Title text="Способы оплаты" />
            </div>
            <div className={styles["payment-method-row"]}>
                <div className={styles["payment-method-info"]}>
                    {/* перенести пропсы из Info, если потребуется */}
                    <PaymentInfo />
                    <PaymentForm />
                </div>
                <div className={styles["payment-method-banks"]}
                >
                    <div className={styles["payment-banks-title"]}>
                        <Title fz="32px" text="Банки партнёры" />
                    </div>
                    <div className={styles["payment-banks-row"]}>
                        {
                            banks.map((bank, id) => (
                                <BankItem image={bank.image} altName={bank.altName} percent={bank.percent} key={id} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentMethod

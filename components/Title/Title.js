import styles from './Title.module.scss'

const Title = ({ text, marginBottom = '0px', fz = '48px'}) => {
    return (
        <h2 className={styles.title} style={{marginBottom: `${marginBottom}`, fontSize: `${fz}`}}>
            {text}
        </h2>
    )
}

export default Title

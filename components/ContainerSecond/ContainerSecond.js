import styles from "./Container.module.scss";

const ContainerSecond = ({children}) => {
  return <div className={styles.container}>{children}</div>;
};

export default ContainerSecond;

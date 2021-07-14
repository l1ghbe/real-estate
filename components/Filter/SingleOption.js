import styles from "./Filter.module.scss";

const SingleOption = ({ children, isActive }) => {
  return <label className={`${styles.option} ${isActive?styles.active:""}`}>{children}</label>;
};

export default SingleOption;

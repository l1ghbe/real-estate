import styles from "./GridContainer.module.scss";

const GridContainer = ({ children, lessThanFour }) => {
  const className = lessThanFour ? "less-container" : "container";
  return <div className={styles[className]}>{children}</div>;
};

export default GridContainer;

import React from "react";
import { useSelector } from "react-redux";
import styles from "./JKAdvantages.module.scss";
import SingleItem from "./SingleItem";

const JKAdvantages = ({advantages,disadvantages}) => {
  // const { data, error, loading } = useSelector(
  //   (state) => state.housingComplexes
  // );
  // const { advantages, disadvantages } = data[0];
  return (
    <div className={styles.container}>
      <div className={styles.advantages}>
        <h1 className={styles.title}>Положительные стороны жк</h1>
        {advantages.map((adv, index) => (
          <SingleItem number={index + 1} key={index} title={adv.title} text={adv.text} />
        ))}
      </div>
      <div className={styles.line}></div>
      <div className={styles.advantages}>
        <h1 className={styles.title}>Могут вызвать затруднения</h1>
        {disadvantages.map((disadv, index) => (
          <SingleItem
            number={index + 1}
            title={disadv.title}
            text={disadv.text}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default JKAdvantages;

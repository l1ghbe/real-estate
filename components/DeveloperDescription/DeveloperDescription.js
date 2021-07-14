import styles from "./DeveloperDescription.module.scss";
import Title from "../Title/Title";
import DevelopersDescriptionCard from "./DevelopersDescriptionCard";
import HTMLParser from "../HTMLParser/HTMLParser";

const DeveloperDescription = ({ already, toBuy, content }) => {
  return (
    <div className={styles["devs-description"]}>
      <div className={styles["devs-jk-rented"]}>
        <h2 className={styles["devs-jk-rented-title"]}>
          Жилые комплексы, уже сданные в эксплуатацию:
        </h2>
        <div className={styles["devs-jk-rented-cards"]}>
          {already.map((card, id) => (
            <DevelopersDescriptionCard
              name={card.name}
              image={card.image}
              date={card.date}
              key={id}
            />
          ))}
        </div>
      </div>
      <div className={styles["devs-jk-in-progress"]}>
        <div className={styles["devs-jk-in-progress"]}>
          <h2 className={styles["devs-jk-in-progress-title"]}>
            Продолжают строиться и ждут своих жильцов:
          </h2>
          <div className={styles["devs-jk-in-progress-cards"]}>
            {toBuy.map((card, id) => (
              <DevelopersDescriptionCard
                name={card.name}
                image={card.image}
                date={card.date}
                key={id}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={styles["devs-info"]}>
        <HTMLParser data={content} />
      </div>
    </div>
  );
};

export default DeveloperDescription;

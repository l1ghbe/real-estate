import styles from "./FindEstate.module.scss";
import FindEstateLink from "./FindEstateLink";

const FindEstate = () => {
  const menuItems = [
    {
      linkTitle: "Купить квартиру",
      linkPath: "/",
    },
    {
      linkTitle: "Новостройки",
      linkPath: "/complexes",
    },
    {
      linkTitle: "Частные дома",
      linkPath: "/",
    },
    {
      linkTitle: "Коттеджные поселки",
      linkPath: "/",
    },
    {
      linkTitle: "Застройщики",
      linkPath: "/developers",
    },
  ];

  return (
    <div className={styles["find-estate"]}>
      <div className={styles["find-estate-text"]}>
        <h2 className={styles["find-estate-text__title"]}>
          Поиск недвижимости
        </h2>
        <div className={styles["find-estate-text__description"]}>
          Товарищи! реализация намеченных плановых заданий представляет собой
          интересный эксперимент проверки дальнейших направлений развития.
          Товарищи! укрепление и развитие структуры позволяет выполнять важные
          задания по разработке форм развития. Повседневная практика показывает,
          что консультация с широким активом позволяет оценить значение форм
          развития. Разнообразный и богатый опыт консультация с широким активом
          влечет за собой процесс внедрения и модернизации модели развития.
          Товарищи! сложившаяся структура организации обеспечивает широкому
          кругу (специалистов) участие в формировании модели развития.{" "}
        </div>
      </div>
      <div className={styles["find-estate-links"]}>
        <h3 className={styles["find-estate-links__title"]}>
          Перейти в разделы
        </h3>
        <ul className={styles["find-estate-links__list"]}>
          {menuItems.map((item, id) => (
            <FindEstateLink
              linkTitle={item.linkTitle}
              linkPath={item.linkPath}
              key={id}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FindEstate;

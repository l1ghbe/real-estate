import styles from "./AboutJKDeveloper.module.scss";
import Button from "../../Button/Button";
import JKSlider from "../../Slider/JKSlider";
import Link from "next/link";
import Image from "next/image";
import HTMLParser from "../../HTMLParser/HTMLParser";

const AboutJKDeveloper = ({
  developer: { image, name, classH, otdelka, square, year, info, website },
  images,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles["card-info"]}>
        <div className={styles.slider}>
          <JKSlider inFlex data={images} devLogo={false} />
        </div>
        <div className={styles["about-section"]}>
          <div className={styles.info}>
            <div className={styles["white-block"]}>
              <Image
                src={image}
                width={111}
                height={48}
                alt="CCK"
                layout="fixed"
              />
            </div>
            <div className={styles["info-class"]}>
              <Image
                src="/images/smile.svg"
                width={20}
                height={20}
                alt="Smile"
                layout="fixed"
              />
              <p className={styles["info-class-text"]}>
                Класс жилья <span>{classH}</span>
              </p>
            </div>
            <div className={styles["info-area"]}>
              <Image
                src="/images/square.svg"
                width={20}
                height={20}
                alt="Area"
                layout="fixed"
              />
              <p className={styles["info-area-text"]}>
                Площадь
                <span>
                  От {square.from} до {square.to} м2
                </span>
              </p>
            </div>
            <div className={styles["info-paint"]}>
              <Image
                src="/images/painting-roller.svg"
                width={20}
                height={20}
                alt="Paint"
                layout="fixed"
              />
              <p className={styles["info-paint-text"]}>
                Отделка <span>{otdelka ? "есть" : "Без отделки"}</span>
              </p>
            </div>
          </div>

          <div className={styles.developer}>Застройщик {name}</div>
          <div>Основан в {year} г.</div>
          <h2 className={styles.title}>О застройщике</h2>
          <div className={styles.description}>
            <HTMLParser data={info} />
          </div>
          <Button text="Перейти на сайт ЖК" marginRight="10px" icon={true} />
        </div>
      </div>
      <div className={styles["card-btn"]}>
        <Link href="/">
          <a>
            <Button text="Узнать подробнее" icon="true" marginRight="10px" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default AboutJKDeveloper;

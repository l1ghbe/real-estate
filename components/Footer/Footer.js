import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.scss";
import { useState } from "react";

const Footer = () => {
  const windowSize = 720;
  const [activeApartment, setActiveApartment] = useState(false);
  const [activeHouses, setActiveHouses] = useState(false);
  const [activeCottage, setActiveCottage] = useState(false);
  const [activeDevs, setActiveDevs] = useState(false);
  const [activeJournal, setActiveJournal] = useState(false);

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footer__row}>
          <div className={styles["footer-links"]}>
            <Link href="/">
              <a className={styles["footer-logo"]}>
                <Image
                  src="/images/Logo.svg"
                  alt="Logotype"
                  width={187}
                  height={60}
                />
              </a>
            </Link>
            <div
              onClick={() => setActiveApartment(!activeApartment)}
              className={styles["footer-section"]}
            >
              <h5
                // className={styles['footer-section-title']}
                className={
                  activeApartment && window.innerWidth < windowSize
                    ? `${styles["footer-section-title"]} ${styles.active}`
                    : styles["footer-section-title"]
                }
              >
                Квартиры
              </h5>
              <ul
                className={
                  activeApartment && window.innerWidth < windowSize
                    ? `${styles["footer-navigation-list"]} ${styles.active}`
                    : styles["footer-navigation-list"]
                }
              >
                <li className={styles["footer-navigation-item"]}>
                  <Link href="/">
                    <a className={styles["footer-navigation__link"]}>Студии</a>
                  </Link>
                </li>
                <li className={styles["footer-navigation-item"]}>
                  <Link href="/">
                    <a className={styles["footer-navigation__link"]}>
                      1-комнатная
                    </a>
                  </Link>
                </li>
                <li className={styles["footer-navigation-item"]}>
                  <Link href="/">
                    <a className={styles["footer-navigation__link"]}>
                      2-комнатная
                    </a>
                  </Link>
                </li>
                <li className={styles["footer-navigation-item"]}>
                  <Link href="/">
                    <a className={styles["footer-navigation__link"]}>
                      3-комнатная
                    </a>
                  </Link>
                </li>
                <li className={styles["footer-navigation-item"]}>
                  <Link href="/">
                    <a className={styles["footer-navigation__link"]}>
                      Аппартаменты
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div
              onClick={() => setActiveHouses(!activeHouses)}
              className={`${(styles["footer-houses"] = "")} ${
                styles["footer-section"]
              }`}
            >
              <h5
                className={
                  activeHouses && window.innerWidth < windowSize
                    ? `${styles["footer-section-title"]} ${styles.active}`
                    : styles["footer-section-title"]
                }
              >
                Дома
              </h5>
              <ul
                className={
                  activeHouses && window.innerWidth < windowSize
                    ? `${styles["footer-houses__list"]} ${styles["footer-navigation-list"]} ${styles.active}`
                    : `${styles["footer-houses__list"]} ${styles["footer-navigation-list"]}`
                }
              >
                <li className={styles["footer-navigation-item"]}>
                  <Link href="/">
                    <a className={styles["footer-navigation__link"]}>Дом</a>
                  </Link>
                </li>
                <li className={styles["footer-navigation-item"]}>
                  <Link href="/">
                    <a className={styles["footer-navigation__link"]}>
                      Таунхаус
                    </a>
                  </Link>
                </li>
                <li className={styles["footer-navigation-item"]}>
                  <Link href="/">
                    <a className={styles["footer-navigation__link"]}>Участок</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div
              onClick={() => setActiveCottage(!activeCottage)}
              className={styles["footer-section"]}
            >
              <h5
                className={
                  activeCottage && window.innerWidth < windowSize
                    ? `${styles["footer-section-title"]} ${styles.active}`
                    : styles["footer-section-title"]
                }
              >
                Коттеджные поселки
              </h5>
              <ul
                className={
                  activeCottage && window.innerWidth < windowSize
                    ? `${styles["footer-navigation-list"]} ${styles.active}`
                    : styles["footer-navigation-list"]
                }
              >
                <li className={styles["footer-navigation-item"]}>
                  <Link href="/">
                    <a className={styles["footer-navigation__link"]}>
                      Коттеджный поселок 1
                    </a>
                  </Link>
                </li>
                <li className={styles["footer-navigation-item"]}>
                  <Link href="/">
                    <a className={styles["footer-navigation__link"]}>
                      Коттеджный поселок 2
                    </a>
                  </Link>
                </li>
                <li className={styles["footer-navigation-item"]}>
                  <Link href="/">
                    <a className={styles["footer-navigation__link"]}>
                      Коттеджный поселок 3
                    </a>
                  </Link>
                </li>
                <li className={styles["footer-navigation-item"]}>
                  <Link href="/">
                    <a className={styles["footer-navigation__link"]}>
                      Коттеджный поселок 4
                    </a>
                  </Link>
                </li>
                <li className={styles["footer-navigation-item"]}>
                  <Link href="/">
                    <a className={styles["footer-navigation__link"]}>
                      Коттеджный поселок 5
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div
              onClick={() => setActiveDevs(!activeDevs)}
              className={`${styles["footer-developers"]} ${styles["footer-section"]}`}
            >
              <h5
                className={
                  activeDevs && window.innerWidth < windowSize
                    ? `${styles["footer-section-title"]} ${styles.active}`
                    : styles["footer-section-title"]
                }
              >
                Застройщики
              </h5>
              <ul
                className={
                  activeDevs && window.innerWidth < windowSize
                    ? `${styles["footer-navigation-list"]} ${styles.active}`
                    : styles["footer-navigation-list"]
                }
              >
                <li className={styles["footer-navigation-item"]}>
                  <Link href="/">
                    <a className={styles["footer-navigation__link"]}>
                      Застройщики 1
                    </a>
                  </Link>
                </li>
                <li className={styles["footer-navigation-item"]}>
                  <Link href="/">
                    <a className={styles["footer-navigation__link"]}>
                      Застройщики 2
                    </a>
                  </Link>
                </li>
                <li className={styles["footer-navigation-item"]}>
                  <Link href="/">
                    <a className={styles["footer-navigation__link"]}>
                      Застройщики 3
                    </a>
                  </Link>
                </li>
                <li className={styles["footer-navigation-item"]}>
                  <Link href="/">
                    <a className={styles["footer-navigation__link"]}>
                      Застройщики 4
                    </a>
                  </Link>
                </li>
                <li className={styles["footer-navigation-item"]}>
                  <Link href="/">
                    <a className={styles["footer-navigation__link"]}>
                      Застройщики 5
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div
              onClick={() => setActiveJournal(!activeJournal)}
              className={styles["footer-section"]}
            >
              <h5
                className={
                  activeJournal && window.innerWidth < windowSize
                    ? `${styles["footer-section-title"]} ${styles.active}`
                    : styles["footer-section-title"]
                }
              >
                Журнал
              </h5>
              <ul
                className={
                  activeJournal && window.innerWidth < windowSize
                    ? `${styles["footer-navigation-list"]} ${styles.active}`
                    : styles["footer-navigation-list"]
                }
              >
                <li className={styles["footer-navigation-item"]}>
                  <Link href="/">
                    <a className={styles["footer-navigation__link"]}>Новости</a>
                  </Link>
                </li>
                <li className={styles["footer-navigation-item"]}>
                  <Link href="/">
                    <a className={styles["footer-navigation__link"]}>Статьи</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div
              className={`${styles["footer-communication"]} ${styles["footer-section"]}`}
            >
              <Link href="/">
                <a
                  className={`${styles["footer-communication__feedback"]} ${styles["footer-navigation__link"]}`}
                >
                  Обратная связь
                </a>
              </Link>
              <Link href="/">
                <a
                  className={`${styles["footer-communication__help"]} ${styles["footer-navigation__link"]}`}
                >
                  Помощь
                </a>
              </Link>
              <ul className={styles["footer-communication__list"]}>
                <li className={styles["footer-communication__item"]}>
                  <Link href="/">
                    <a className={styles["footer-communication__link"]}>
                      <Image
                        src="/images/whatsup-white.svg"
                        width={27}
                        height={27}
                        alt="What's Up"
                      />
                    </a>
                  </Link>
                </li>
                <li className={styles["footer-communication__item"]}>
                  <Link href="/">
                    <a className={styles["footer-communication__link"]}>
                      <Image
                        src="/images/telegram-white.svg"
                        width={27}
                        height={27}
                        alt="Telegram"
                      />
                    </a>
                  </Link>
                </li>
                <li className={styles["footer-communication__item"]}>
                  <Link href="/">
                    <a className={styles["footer-communication__link"]}>
                      <Image
                        src="/images/instagram-white.svg"
                        width={27}
                        height={27}
                        alt="Instagram"
                      />
                    </a>
                  </Link>
                </li>
                <li className={styles["footer-communication__item"]}>
                  <Link href="/">
                    <a className={styles["footer-communication__link"]}>
                      <Image
                        src="/images/yt-white.svg"
                        width={27}
                        height={27}
                        alt="YouTube"
                      />
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles["footer-info"]}>
            <div className={styles["footer-info__copyright"]}>
              <h4>
                2018 - 2021 © COMPANY <br />
                Все права защищены
              </h4>
            </div>
            <div className={styles["footer-info__description"]}>
              <p>
                Данный интернет-сайт носит исключительно информационный характер
                и ни при каких условиях не является публичной офертой,
                определяемой положениями Статьи 437 п.2 Гражданского кодекса
                Российской Федерации. Для получения подробной информации о
                стоимости указанных услуг, пожалуйста, обращайтесь к
                администрации сайта с помощью специальной формы связи или по
                телефону.
              </p>
            </div>
            <div className={styles["footer-info__rules"]}>
              <Link href="/">
                <a className={styles["footer-policy"]}>
                  Политика конфидициальности
                </a>
              </Link>
              <Link href="/">
                <a className={styles["footer-rules"]}>
                  Правила обработки данных
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

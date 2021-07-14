import styles from "./DocsSection.module.scss";
import Image from "next/image";
import Link from "next/link";
import DocsSectionNav from "./DocsSectionNav";

const DocsSection = ({ docs, name, prices, housesCount }) => {
  return (
    <div className={styles["docs"]}>
      <div className={styles["docs-files"]}>
        <h3 className={styles["docs-files__title"]}>Документация комплекса</h3>
        <DocsSectionNav title={"Проектная декларация"} data={docs.projects} />
        <DocsSectionNav
          title={"Разрешения на строительство"}
          data={docs.allows}
        />
      </div>
      <div className={styles["docs-info"]}>
        <div className={styles["docs-info-text"]}>
          <div className={styles["docs-info-text-left"]}>
            <h2 className={styles["docs-info-text-left__title"]}>{name}</h2>
            <p className={styles["docs-info-text-left__price"]}>
              {prices.from} млн - {prices.to} млн ₽
            </p>
          </div>
          <div className={styles["docs-info-text-right"]}>
            <div className={styles["docs-info-text-in-progress"]}>
              <h3 className={styles["docs-info-text-in-progress-number"]}>
                {housesCount.areBuilding}
              </h3>
              <p className={styles["docs-info-text-in-progress-text"]}>
                домов строится в 8 ЖК
              </p>
            </div>
            <div className={styles["docs-info-text-leased"]}>
              <h3 className={styles["docs-info-text-leased-number"]}>
                {housesCount.already}
              </h3>
              <p className={styles["docs-info-text-leased-text"]}>
                домов сдано в 10 ЖК
              </p>
            </div>
          </div>
        </div>
        <Link href="/">
          <a className={styles["callme-btn"]}>
            <Image
              src="/images/phone.svg"
              width={20}
              height={20}
              alt="Phone Icon"
            />
            <span>Позвоните нам</span>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default DocsSection;

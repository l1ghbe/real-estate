import styles from "./DocsSection.module.scss";
import Image from "next/image";
import Link from "next/link";
import convertDate from "../../../utils/convertDate";

const DocsSectionItem = ({ name, date, size,title }) => {
  return (
    <>
      <li className={styles["docs-files-list__item"]}>
        {/* <Link href="/">
          <a className={styles["docs-files-list__link"]}> */}
        <div className={styles["docs-files-list__link-row"]}>
          <h4 className={styles["docs-files-list__link-name"]}>{title}</h4>
          <p className={styles["docs-files-list__link-date"]}>
            Добавлено: {convertDate(date)}
          </p>
        </div>
        <span className={styles["docs-files-list__link-file"]}>
          <a href={name} download>
            {name.replace(/^.*[\\\/]/, "")} - {size} Кб.
          </a>
        </span>
        {/* </a>
        </Link> */}
      </li>
    </>
  );
};

export default DocsSectionItem;

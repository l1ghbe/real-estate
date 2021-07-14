import styles from "./DocsSection.module.scss";
import Image from "next/image";
import Link from "next/link";
import DocsSectionItem from "./DocsSectionItem";
import { useState } from "react";
import getNounDeclination from "../../../utils/nounDeclination";

const DocsSectionNav = ({ data, title }) => {
  const [openedTab, setOpenedTab] = useState(false);

  return (
    <div
      onClick={() => setOpenedTab((prev) => !prev)}
      className={styles["docs-files-nav"]}
    >
      <div className={styles["docs-files-nav-title"]}>
        <h3 className={styles["docs-files-nav__title-text"]}>{title}</h3>
        <p className={styles["docs-files-nav__title-files"]}>
          {getNounDeclination(data.length, ["файл", "файла", "файлов"])}
        </p>
        <div className={`${openedTab ? styles.opened : styles.closed} ${styles.arrow}`}>
          <Image
            src="/images/arrows/down-white.svg"
            width={20}
            height={20}
            alt="Arrow Down"
          />
        </div>
      </div>
      <ul
        onClick={(e) => e.stopPropagation()}
        className={
          openedTab
            ? `${styles["docs-files-list"]} ${styles.active}`
            : styles["docs-files-list"]
        }
      >
        {data.map((item, id) => (
          <DocsSectionItem
            key={id}
            title={title}
            name={item.name}
            date={item.date}
            size={item.size}
          />
        ))}
      </ul>
    </div>
  );
};

export default DocsSectionNav;

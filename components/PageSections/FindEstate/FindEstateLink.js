import styles from "./FindEstate.module.scss";
import Image from "next/image";
import Link from "next/link";

const FindEstateLink = ({ linkTitle, linkPath }) => {
  return (
    <li className={styles["find-estate-links__list-item"]}>
      <Link href={linkPath}>
        <a className={styles["find-estate-links__list-link"]}>
          <span>{linkTitle}</span>
          <Image
            alt="forward"
            src="/images/arrows/right-black.svg"
            width={15}
            height={10}
          />
        </a>
      </Link>
    </li>
  );
};

export default FindEstateLink;

import Image from "next/image";
import Link from "next/link";
import React from "react";
import convertDate from "../../utils/convertDate";
import HTMLParser from "../HTMLParser/HTMLParser";
import styles from "./SingleNews.module.scss";
import socialLinks from "./socialLinks";

const SingleContentItem = ({ data, type }) => {
  return (
    <div className={styles["news-item"]}>
      <Link href="/news">
        <a>
          <div className={styles["news-tag"]}>{type}</div>
        </a>
      </Link>
      <h2 className={styles["news-item-title"]}>{data.title}</h2>
      <h4 className={styles["news-item-subtitle"]}>{data.description}</h4>
      <div className={styles["news-image"]}>
        <Image src={data.image} alt="News" width={963} height={506} />
      </div>
      <div className={styles["news-item-text"]}>
        <HTMLParser data={data.content} />
      </div>
      <div className={styles["news-item-links"]}>
        <Link href="/">
          <a className={styles["news-item-links-date"]}>
            {convertDate(data.date)}
          </a>
        </Link>
        <div className={styles["news-item-links-social"]}>
          <span>Поделиться</span>
          <ul className={styles["news-links-list"]}>
            {socialLinks.map((link) => (
              <li className={styles["news-links-item"]} key={link.id}>
                <Link href={`/${link.linkTo}`}>
                  <a className={styles["news-link"]}>
                    <Image
                      src={`/images/socials/${link.imageName}.svg`}
                      width={20}
                      height={20}
                      alt="Socials"
                    />
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SingleContentItem;

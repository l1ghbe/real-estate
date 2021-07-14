import styles from "./NewsId.module.scss";
import FeedNewsBoardCard from "../../components/PageSections/FeedNews/FeedNewsBoardCard";
import Link from "next/link";
import Image from "next/image";
import Container from "../../components/Container/Container";

import SingleNews from "../../components/SingleNews/SingleNews";
import ReadAlsoNews from "../../components/PageSections/ReadAlsoNews/ReadAlsoNews";

const SingleNewsPage = () => {
  return (
    <>
      <Container>
        <div className={styles["news-single"]}>
          <SingleNews />
          <ReadAlsoNews />
        </div>
      </Container>
    </>
  );
};

export default SingleNewsPage;

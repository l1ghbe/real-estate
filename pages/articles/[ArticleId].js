import styles from "./Articles.module.scss";
import Container from "../../components/Container/Container";
import SingleArticle from "../../components/SingleArticle/SingleArticle";
import ReadAlsoArticle from "../../components/PageSections/ReadAlsoArticle/ReadAlsoArticle";
import { useEffect } from "react";

const SingleArticlePage = ({ ArticleId }) => {
  return (
    <>
      <Container>
        <div className={styles["news-single"]}>
          <SingleArticle id={ArticleId}/>
          <ReadAlsoArticle />
        </div>
      </Container>
    </>
  );
};
export const getServerSideProps = async ({ params }) => {
  const { ArticleId } = params;
  return {
    props: { ArticleId },
  };
};

export default SingleArticlePage;

import Image from "next/image";
import Link from "next/link";
// import FeedNews from "../../components/PageSections/FeedNews/FeedNews";
import FeedNewsBoardCard from "../../components/PageSections/FeedNews/FeedNewsBoardCard";
import FeedNewsCard from "../../components/PageSections/FeedNews/FeedNewsCard";
import Title from "../../components/Title/Title";
import Container from "../../components/Container/Container";
import convertDate from "../../utils/convertDate";
// import LastNewsSection from "./sections/LastNewsSection";
// import ArticleSection from "./sections/ArticleSection/ArticlesSection";
import LastNewsSection from "../../components/sections/LastNewsSection"
import FeedNews from "../../components/PageSections/FeedNews/FeedNews"
import ArticleSection from "../../components/sections/ArticleSection/ArticlesSection"

const NewsPage = () => {
  return (
    <>
      <Container>
        <LastNewsSection />

        <FeedNews withPagin title="Новости" />
        <ArticleSection />
      </Container>
    </>
  );
};

export default NewsPage;

import styles from "./Developers.module.scss";
import DevelopersCardRating from "../../components/DevelopersCardRating/DevelopersCardRating";
import Container from "../../components/Container/Container";
import BannerSlider from "../../components/PageSections/BannerSlider/BannerSlider";
import FeedNews from "../../components/PageSections/FeedNews/FeedNews";
import Title from "../../components/Title/Title";
import { useSelector } from "react-redux";
import DevRating from "../../components/PageSections/DevRating/DevRating";

const DevelopersPage = () => {
  return (
    <>
      <Container>
        <BannerSlider centerMode={false} centerPadding="0%" />
        <DevRating />
        <FeedNews title="Новости застройщиков" />
      </Container>
    </>
  );
};

export default DevelopersPage;

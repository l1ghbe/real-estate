
import RatingList from "../../components/PageSections/RatingSection/RatingSection";
import FeedNews from "../../components/PageSections/FeedNews/FeedNews";
import FindEstate from "../../components/PageSections/FindEstate/FindEstate";
import PopularRequests from "../../components/PageSections/PopularRequests/PopularRequests";
import Container from "../../components/Container/Container";
import BannerSlider from "../../components/PageSections/BannerSlider/BannerSlider";
import BuildingsPlanning from '../../components/PageSections/BuildingsPlanning/BuildingsPlanning'

const BuildingsPage = () => {
    return (
        <>
            <Container>
                <BannerSlider centerMode="false" centerPadding="0%" />

            </Container>
            <BuildingsPlanning />

            <RatingList title="Рейтинг новостроек" bgColor="#ffffff" paddingTopBottom="0" />

            <Container>
                <FeedNews title="Журнал" />
                <FindEstate />
                <PopularRequests />
            </Container>
        </>
    );
};

export default BuildingsPage;

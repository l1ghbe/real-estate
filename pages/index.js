import BuyApartment from "../components/PageSections/BuyApartment/BuyApartment";
import DevelopersInfoSection from "../components/PageSections/DevelopersInfo/DevelopersInfo";
import FeedNews from "../components/PageSections/FeedNews/FeedNews";
import FindEstate from "../components/PageSections/FindEstate/FindEstate";
import LeadForm from "../components/Form/LeadForm";
import PopularRequests from "../components/PageSections/PopularRequests/PopularRequests";
import LargeHouseList from "../components/PageSections/LargeHouse/LargeHouseList";
import Container from "../components/Container/Container";
import RatingList from "../components/PageSections/RatingSection/RatingSection";
import BannerSlider from "../components/PageSections/BannerSlider/BannerSlider";

const MainPage = () => {
  return (
    <>
      <BannerSlider />

      <Container>
        <BuyApartment titleText="Купить квартиру" />
      </Container>
      <LargeHouseList />

      <Container>
        <DevelopersInfoSection />
        <FeedNews title="Журнал" />
      </Container>

      <RatingList />

      <Container>
        <FindEstate />
        <LeadForm />
        <PopularRequests />
      </Container>
    </>
  );
};

export default MainPage;

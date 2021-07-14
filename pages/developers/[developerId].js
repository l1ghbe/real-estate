import Container from "../../components/Container/Container";
import ContainerSecond from "../../components/ContainerSecond/ContainerSecond";
import ComplexesRating from "../../components/PageSections/ComplexesRating/ComplexesRating";
import AboutJKDeveloper from "../../components/PageSections/AboutJKDeveloper/AboutJKDeveloper";
import BuyApartment from "../../components/PageSections/BuyApartment/BuyApartment";
import BannerSlider from "../../components/PageSections/BannerSlider/BannerSlider";
import DeveloperDescription from "../../components/DeveloperDescription/DeveloperDescription";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const SingleDeveloperPage = ({ developerId }) => {
  const { data, error, loading } = useSelector(
    (state) => state.singleDeveloper
  );
  useEffect(() => {
    //async logic {payload:developerId}
  }, []);
  return (
    <>
      <Container>
        <BannerSlider centerMode="false" centerPadding="0%" />
      </Container>
      <ContainerSecond>
        <ComplexesRating data={data.rating} />
        <AboutJKDeveloper developer={data} images={data.pictures} />
        <DeveloperDescription
          already={data.readyComplexes}
          toBuy={data.toBuyComplexes}
          content={data.content}
        />
      </ContainerSecond>
      <Container>
        <BuyApartment titleText="Жилые комплексы" />
      </Container>
    </>
  );
};

export const getServerSideProps = async ({ params }) => {
  const { developerId } = params;
  return {
    props: { developerId },
  };
};
export default SingleDeveloperPage;

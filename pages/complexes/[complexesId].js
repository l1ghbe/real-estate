import styles from "./Complexes.module.scss";
import IvanTest from "../../components/IvanTest/IvanTest";
import MaximTest from "../../components/MaximTest/MaximTest";
import Container from "../../components/Container/Container";
import ContainerSecond from "../../components/ContainerSecond/ContainerSecond";
import DocsSection from "../../components/PageSections/DocsSection/DocsSection";
import PaymentMethod from "../../components/PageSections/PaymentMethod/PaymentMethod";
import Galery from "../../components/Galery/Galery";
import MasonryGallery from "../../components/PageSections/MasonryGallery/MasonryGallery";
import Instagram from "../../components/InstagramCard/Instagram";
import JKAdvantages from "../../components/PageSections/JKAdvantages/JKAdvantages";
import JKSlider from "../../components/Slider/JKSlider";
import FilterDesktop from "../../components/Filter/Filters";
import ComplexDesc from "../../components/ComplexDesc/ComplexDesc";
import ComplexesRating from "../../components/PageSections/ComplexesRating/ComplexesRating";
import AboutJKDeveloper from "../../components/PageSections/AboutJKDeveloper/AboutJKDeveloper";
import FlatsPlanning from "../../components/PageSections/FlatsPlanning/FlatsPlanning";
import Title from "../../components/Title/Title";

import DefaultErrorPage from "next/error";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const SingleComplexPage = ({ complexesId }) => {
  const { data, error, loading } = useSelector(
    (state) => state.singleHousingComplex
  );

  useEffect(() => {
    //async logic {payload:complexId}
  }, []);

  const {
    name,
    prices,
    images,
    advantages,
    disadvantages,
    rating,
    developer,
    docs,
    buildingProcessData,
    housesCount,
  } = data;
  return (
    <div>
      <Container>
        <JKSlider data={images}>
          <ComplexDesc name={name} prices={prices} />
        </JKSlider>
        <div className={styles.filter}>
          <FilterDesktop variant="black" />
        </div>
      </Container>
      <ContainerSecond>
        <JKAdvantages advantages={advantages} disadvantages={disadvantages} />
        <ComplexesRating data={rating} />
        <AboutJKDeveloper images={images} developer={developer} />
        <DocsSection
          name={name}
          prices={prices}
          housesCount={housesCount}
          docs={docs}
        />
      </ContainerSecond>
      <FlatsPlanning />
      <ContainerSecond>
        <PaymentMethod />
      </ContainerSecond>
      <div className={styles.gallery}>
        <div className={styles["gallery-title"]}>
          <Title text="Фотогалерея" />
        </div>
        <Galery data={images} />
      </div>

      <ContainerSecond>
        <MasonryGallery buildingProcessData={buildingProcessData} />
        <Instagram />
      </ContainerSecond>
    </div>
  );
};

export default SingleComplexPage;

export const getServerSideProps = async ({ params }) => {
  const { complexesId } = params;
  return {
    props: { complexesId },
  };
};

import { useState } from "react";
import { useSelector } from "react-redux";
import Tabs from "../ReusableTab/Tabs";
import SingleTab from "../ReusableTab/SingleTab";
import DeveloperCard from "../DeveloperCard/DeveloperCard";
import DevelopersInfoSection from "../PageSections/DevelopersInfo/DevelopersInfo";
import FeedNews from "../PageSections/FeedNews/FeedNews";
import AnimSlick from "../AnimSlick/AnimSlick";
import LargeHouseList from "../PageSections/LargeHouse/LargeHouseList";
import GridContainer from "../GridContainer/GridContainer";
import LeadForm from "../Form/LeadForm";
import PopularRequests from "../PageSections/PopularRequests/PopularRequests";
import JKSlider from "../Slider/JKSlider";
import JKAdvantages from "../PageSections/JKAdvantages/JKAdvantages";
import ContainerSecond from "../ContainerSecond/ContainerSecond";
import RatingList from "../PageSections/RatingSection/RatingSection";
import Galery from "../Galery/Galery";
import ComplexDesc from "../ComplexDesc/ComplexDesc";
import AboutJKDeveloper from "../PageSections/AboutJKDeveloper/AboutJKDeveloper";
import FlatCard from "../FlatCard/FlatCard";
import FlatsPlanning from "../PageSections/FlatsPlanning/FlatsPlanning";
import PafintTest from "../PaginTest/PagintTest";
import Pagination from "../PaginTest/Pagination";

const MaximTest = () => {
  const { data, loading, error } = useSelector((state) => state.flats);

  return (
    <>
      {/* <FlatCard {...data[0]} /> */}
      {/* <FlatsPlanning/> */}
      <LargeHouseList />
      {/* <Pagination /> */}
    </>
  );
};

export default MaximTest;

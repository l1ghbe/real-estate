import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getHouses } from "../../../redux/reducers/largeHousesReducer";
import HomeCard from "../../HomeCard/HomeCard";
import GridContainer from "../../GridContainer/GridContainer";

const isDeveloped = (label) => {
  if (label === "Новостройки" || label === "Коттеджи") {
    return true;
  }
  return false;
};

const SingleItem = ({ label }) => {
  const { data, error, loading } = useSelector(
    (state) => state.homeRatingCards
  );
  if (!isDeveloped(label)) {
    return <h1>еще рано</h1>;
  }
  //temp solution
  const dataForTab = data
    .slice()
    .filter((home) => home.type === label)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  return (
    <GridContainer lessThanFour={dataForTab.length <= 4}>
      {dataForTab.map((house, id) => (
        <HomeCard {...house} key={id} />
      ))}
    </GridContainer>
  );
};

export default SingleItem;

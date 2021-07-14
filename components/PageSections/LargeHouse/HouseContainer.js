import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getHouses } from "../../../redux/reducers/largeHousesReducer";
import HomeCard from "../../HomeCard/HomeCard";
import GridContainer from "../../GridContainer/GridContainer";
import Pagination from "../../PaginTest/Pagination";
const HouseContainer = ({ label, currentPage, setCurrentPage,toTopHandler }) => {
  const { data, error, loading } = useSelector((state) => state.largeHouses);

  useEffect(() => {
    //async logic {payload:{label,currentPage}}
  }, [])

  //temp solution
  const dataForTab = data.filter((item) => {
    return item.type === label;
  });
  return (
    <GridContainer lessThanFour={dataForTab.length <= 4}>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        data={dataForTab}
        Component={HomeCard}
        toTopHandler={toTopHandler}
      />
    </GridContainer>
  );
};

export default HouseContainer;

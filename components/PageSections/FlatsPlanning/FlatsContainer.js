import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import FlatCard from "../../FlatCard/FlatCard";
import Pagination from "../../PaginTest/Pagination";

const FlatsContainer = ({
  label,
  currentPage,
  setCurrentPage,
  toTopHandler,
}) => {
  const { data, error, loading } = useSelector((state) => state.flats);

  useEffect(() => {
    //async logic {payload:{label,currentPage}}
  }, []);
  //temp
  const dataForTab = data.filter((item) => {
    return item.type === label;
  });
  return (
    <>
      {/* {dataForTab.map((house, id) => (
        <FlatCard {...house} key={id} />
      ))} */}
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        data={dataForTab}
        Component={FlatCard}
        toTopHandler={toTopHandler}
      />
    </>
  );
};

export default FlatsContainer;

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NewsPagination from "./NewsPagination";

const NewsRender = ({ toTopHandler }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const { data, error, loading } = useSelector((state) => state.news);
  useEffect(() => {
    //async logic {payload:{label,currentPage}}
  }, [])
  return (
    <>
      <NewsPagination
        data={data}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        perPage={8}
        toTopHandler={toTopHandler}
      />
    </>
  );
};

export default NewsRender;

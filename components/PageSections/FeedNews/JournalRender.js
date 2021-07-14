import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FeedNewsBoardCard from "./FeedNewsBoardCard";
import FeedNewsCard from "./FeedNewsCard";
import NewsPagination from "./NewsPagination";

const JournalRender = () => {
  const { data, error, loading } = useSelector((state) => state.developersNews);
  useEffect(() => {
    //async logic {payload:{label,currentPage}}
  }, []);
  const areWhite = [2, 3, 4, 5];
  return (
    <>
      {data.map((item, id) => {
        if (areWhite.includes(id)) {
          return <FeedNewsBoardCard key={id} {...item} />;
        }
        return <FeedNewsCard key={id} {...item} />;
      })}
    </>
  );
};

export default JournalRender;

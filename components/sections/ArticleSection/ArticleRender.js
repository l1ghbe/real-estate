import React, { useState } from "react";
import { useSelector } from "react-redux";
import ArticleNav from "./ArticleNav";

const ArticleRender = ({toTopHandler}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const { data, error, loading } = useSelector((state) => state.articles);

  return (
    <>
      <ArticleNav
        data={data}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        perPage={12}
        toTopHandler={toTopHandler}
      />
    </>
  );
};

export default ArticleRender;

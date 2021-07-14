import { useEffect } from "react";
import { useSelector } from "react-redux";
import ReadAlso from "../../ReadAlso/ReadAlso";

const ReadAlsoArticle = () => {
  const { data, error, loading } = useSelector(
    (state) => state.readAlsoArticles
  );
  useEffect(() => {
    //async logic here
  }, []);
  return <ReadAlso type="article" data={data} />;
};

export default ReadAlsoArticle;

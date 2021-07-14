import { useEffect } from "react";
import { useSelector } from "react-redux";
import SingleContentItem from "../SingleContentItem/SingleContentItem";

const SingleArticle = ({ id }) => {
  const { data, error, loading } = useSelector((state) => state.singleArticle);
  useEffect(() => {
    // async logic {payload:id}
  }, []);
  return <SingleContentItem data={data} type="Статьи" />;
};

export default SingleArticle;

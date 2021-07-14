
import { useSelector } from "react-redux";
import SingleContentItem from "../SingleContentItem/SingleContentItem";


const SingleNews = () => {
  const { data, error, loading } = useSelector((state) => state.singleNews);
  return (
    <SingleContentItem data={data} type="Новости"/>
  );
};

export default SingleNews;

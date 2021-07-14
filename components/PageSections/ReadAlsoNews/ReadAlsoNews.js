import { useEffect } from "react";
import { useSelector } from "react-redux";
import ReadAlso from "../../ReadAlso/ReadAlso";

const ReadAlsoNews = () => {
  const { data, error, loading } = useSelector((state) => state.readAlsoNews);
  useEffect(()=>{
    //async logic here
  },[])
  return <ReadAlso type="news" data={data} />;
};

export default ReadAlsoNews;

import styles from "./FeedNews.module.scss";
import Image from "next/image";
import FeedNewsCard from "./FeedNewsCard";
import Title from "../../Title/Title";
import FeedNewsBoardCard from "./FeedNewsBoardCard";
import Link from "next/link";
import { useSelector } from "react-redux";
import NewsRender from "./NewsRender";
import { useRef } from "react";
import scrollToContainerTop from "../../../utils/scrollToElementTop";
import NewsPagin from "./NewsPagin";
import Journal from "./Journal";

const FeedNews = ({ title, withPagin }) => {
  return (
    <>{withPagin ? <NewsPagin title={title} /> : <Journal title={title} />}</>
  );
};

export default FeedNews;

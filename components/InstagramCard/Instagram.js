import styles from "./InstagramCard.module.scss";
import { useSelector } from "react-redux";
import Title from "../Title/Title";
import InstagramCard from "./InstagramCard";

const Instagram = () => {
  const { data, loading, error } = useSelector((state) => state.instagramPosts);
  return (
    <div className={styles.instagram}>
      <div className={styles["instagram-title"]}>
        <Title text="Новости жк" />
      </div>
      <div className={styles["instagram-cards"]}>
        {data.map((card, index) => (
          <InstagramCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Instagram;

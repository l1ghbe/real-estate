import styles from "./InstagramCard.module.scss";
import Image from "next/image";
import Link from "next/link";

const InstagramCard = ({
  image,
  accLogo,
  name,
  location,
  likedInfo,
  commentTitle,
  description,
}) => {
  return (
    <div className={styles["insta-card"]}>
      <div className={styles["insta-card-header"]}>
        <div className={styles["insta-header__info"]}>
          <div className={styles["insta-header__logo"]}>
            <Image alt="logo" src={accLogo} width={32} height={32} layout="fixed" />
          </div>
          <div className={styles["insta-header-text"]}>
            <h3 className={styles["insta-header__title"]}>{name}</h3>
            <p className={styles["insta-header__location"]}>{location}</p>
          </div>
        </div>
        <div className={styles["insta-header__more"]}>
          <Image
            alt="dots"
            src="/images/instagram/dots.svg"
            width={13}
            height={3}
          />
        </div>
      </div>
      <div className="insta-card-image">
        <Image alt="card-image" src={image} width={320} height={320} layout="fixed" />
      </div>
      <div className={styles["insta-card-buttons"]}>
        <div className={styles["insta-buttons-left"]}>
          <button className={styles["insta-buttons-like"]}>
            <Image
              alt="like"
              src="/images/instagram/heart.svg"
              width={20}
              height={20}
            />
          </button>
          <button className={styles["insta-buttons-comment"]}>
            <Image
              alt="comment"
              src="/images/instagram/comment.svg"
              width={20}
              height={20}
            />
          </button>
          <button className={styles["insta-buttons-share"]}>
            <Image
              alt="share"
              src="/images/instagram/share.svg"
              width={20}
              height={20}
            />
          </button>
        </div>
        <div className={styles["insta-buttons-right"]}>
          <button className={styles["insta-buttons-bookmark"]}>
            <Image
              alt="instagram"
              src="/images/instagram/bookmark.svg"
              width={20}
              height={20}
            />
          </button>
        </div>
      </div>
      <div className={styles["insta-card-text"]}>
        <div className={styles["insta-card-liked-info"]}>{likedInfo}</div>
        <div className={styles["insta-card-description"]}>
          <span>{commentTitle}</span> {description}
        </div>
      </div>
    </div>
  );
};

export default InstagramCard;

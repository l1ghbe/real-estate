import styles from "./BannerSlider.module.scss";
import AnimSlick from "../../AnimSlick/AnimSlick";
import FilterDesktop from "../../Filter/Filters";

const BannerSlider = ({
  sliderTitle = "Недвижимость в краснодаре",
  centerMode,
  centerPadding,
}) => {
  return (
    <div className={styles["slider-section"]}>
      <div className={styles["slider-bar"]}>
        <div className={styles["slider-itself"]}>
          <AnimSlick centerMode={centerMode} centerPadding={centerPadding} />
          {/* <AnimSlickSecond
            centerMode={centerMode}
            centerPadding={centerPadding}
          /> */}
        </div>
        <div className={styles["slider-bar-content"]}>
          <h1>{sliderTitle}</h1>
          <div className={styles.filter}>
            <FilterDesktop />
          </div>
        </div>
      </div>
      <div className={styles["mobile-filter"]}>
        <FilterDesktop />
      </div>
    </div>
  );
};

export default BannerSlider;

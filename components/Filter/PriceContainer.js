import PriceInput from "./PriceInput";
import styles from "./Filter.module.scss";
import Button from "../Button/Button";

const PriceContainer = ({
  filters,
  setFilters,
  mobile,
  setMobileOpen,
  isBlack,
  city,
}) => {
  return (
    <>
      {/* <div className={styles["flex-cont"]}> */}
      {/* <div className={styles["input-flex"]}> */}
      <PriceInput
        value={filters.from}
        placeholder={"От"}
        onChange={(e) =>
          setFilters((prev) => ({
            ...prev,
            from: e.target.value,
          }))
        }
      />
      <PriceInput
        value={filters.to}
        onChange={(e) =>
          setFilters((prev) => ({
            ...prev,
            to: e.target.value,
          }))
        }
        placeholder={"До"}
      />
      {/* </div> */}

      <div className={styles["btn-wrapper"]}>
        <Button
          fullWidth
          onClick={() => {
            alert(JSON.stringify({ city, ...filters }, null, 4));
          }}
          // type={isBlack ? "white" : "black"}
          text={`Показать ${mobile ? "" : "1536 предложений"}`}
        />
      </div>

      {mobile && (
        // <Button
        //   // type={isBlack ? "white" : "black"}
        //   // type="black"
        //   text="Закрыть"
        //   onClick={(e) => {
        //     e.preventDefault();
        //     setMobileOpen(false);
        //   }}
        // />
        <button type="button"> закрыть</button>
      )}
    </>
  );
};

export default PriceContainer;

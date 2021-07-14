import React, { useCallback, useEffect } from "react";
import styles from "../Filter.module.scss";
import Image from "next/image";
import LiContainer from "./LiContainer";
import { SingleRadioVariant } from "../addFilter/FilterItemTypes/RadioCont";
import TwoColumnCont from "../addFilter/containers/TwoColumnsCont";
import SingleLiOption from "./SingleLiOption";
import AddFilteroption from "./AddFilteroption";
import RangeOption from "./RangeOption";

const FormikList = ({
  values,
  isBlack,
  mobile,
  current,
  setCurrent,
  setMobileOpen,
  toTopHandler
}) => {
  const windowClickHandler = useCallback(
    (event) => {
      setCurrent("");
    },
    [setCurrent]
  );
  useEffect(() => {
    window.addEventListener("click", windowClickHandler);
    return () => window.removeEventListener("click", windowClickHandler);
  }, [windowClickHandler]);

  return (
    <>
      <SingleLiOption
        name="Купить"
        formikKey="buyOrRent"
        current={current}
        setCurrent={setCurrent}
        isBlack={isBlack}
        mobile={+mobile}
        data={["Купить", "Снять"]}
        values={values}
        containerClassName={"two-grid"}
      />
      <SingleLiOption
        name="Жилье"
        formikKey="type"
        current={current}
        setCurrent={setCurrent}
        isBlack={isBlack}
        mobile={+mobile}
        data={["Дома", "Квартиры"]}
        values={values}
        containerClassName={"two-grid"}
      />
      <SingleLiOption
        name="Комнат"
        formikKey="rooms"
        current={current}
        setCurrent={setCurrent}
        isBlack={isBlack}
        mobile={+mobile}
        data={["1", "2", "3", "4", "5+", "Студия"]}
        values={values}
        containerClassName={"three-grid"}
      />
      <RangeOption
        name="Цена"
        formikKey="price"
        current={current}
        setCurrent={setCurrent}
        isBlack={isBlack}
        mobile={+mobile}
        containerClassName={"mished-grid"}
        values={values}
        setMobileOpen={setMobileOpen}
        toTopHandler={toTopHandler}
      />
      {isBlack && (
        <AddFilteroption
          name="Фильтры"
          current={current}
          setCurrent={setCurrent}
          isBlack={isBlack}
          mobile={+mobile}
          values={values}
          formikKey="filters"
        />
      )}
    </>
  );
};

export default FormikList;

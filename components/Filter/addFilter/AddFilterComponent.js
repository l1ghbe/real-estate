import React, { useState } from "react";
import additionalFilterState from "./stateAddFilter";
//{ state, setState }
import CheckBoxCont from "./FilterItemTypes/CheckBoxCont";
import addFilterData from "./addFilterData";
import { Form, Formik } from "formik";
import InputCont from "./FilterItemTypes/InputCont";
import RadioCont from "./FilterItemTypes/RadioCont";
import styles from "./addFilter.module.scss";
import DataRender from "./DataRender";
import Button from "../../Button/Button";
import ResetButton from "./ResetButton";

const AddFilterComponent = ({ values }) => {
  const dataHalfIndex = Math.ceil(addFilterData.length / 2 - 1);
  return (
    <>
      <div className={styles["filter-container"]}>
        <div className={styles.flex}>
          <DataRender
            values={values}
            data={addFilterData.slice(0, dataHalfIndex)}
          />
          <DataRender
            values={values}
            data={addFilterData.slice(dataHalfIndex + 1)}
          />
        </div>
        <div className={styles["button-wrapper"]}>
          <ResetButton>Очистить фильтр</ResetButton>
          <Button fullWidth text="Показать 1536 предложений" />
        </div>
      </div>
    </>
  );
};

export default AddFilterComponent;

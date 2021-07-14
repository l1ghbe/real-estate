import React from "react";

import InputCont from "./FilterItemTypes/InputCont";
import RadioCont from "./FilterItemTypes/RadioCont";
import CheckBoxCont from "./FilterItemTypes/CheckBoxCont";
import CheckBoxAccordeonCont from "./FilterItemTypes/CheckBoxAccordeonContainer";
import MishedCont from "./FilterItemTypes/MishedCont";

const DataRender = ({ data, values }) => {
  return (
    <div>
      {data.map((filterItem, index) => {
        switch (filterItem.type) {
          case "range":
            return <InputCont key={index} data={filterItem} />;
          case "radio":
            return (
              <RadioCont
                key={index}
                actualValue={values.filters[filterItem.key]}
                data={filterItem}
              />
            );
          case "checkbox":
            return <CheckBoxCont key={index} data={filterItem} />;
          case "checkbox-accord":
            return <CheckBoxAccordeonCont key={index} data={filterItem} />;
          case "mished":
            return <MishedCont key={index} data={filterItem}/>
        }
      })}
    </div>
  );
};

export default DataRender;

import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./Filter.module.scss";
import Button from "../Button/Button";

import Image from "next/image";
import checkIfMobile from "./checkIfMobile";
import additionalFilterState from "./addFilter/stateAddFilter";
import { Formik, Form } from "formik";
import Input from "./formik/Input";
import FormikList from "./formik/FormikList";
import scrollToContainerTop from "../../utils/scrollToElementTop";

const FilterDesktop = ({ variant }) => {
  const isBlack = variant === "black";
  const [mobile, setMobile] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [current, setCurrent] = useState("");

  const filterRef = useRef(null);

  const toTopHandler = () => {
    scrollToContainerTop(filterRef);
  };

  const resizeHandler = () => {
    setMobile(checkIfMobile());
  };

  useEffect(() => {
    if (checkIfMobile() !== mobile) {
      setMobile(checkIfMobile());
    }
    window.addEventListener("resize", resizeHandler);
  }, [mobile]);
  return (
    <Formik
      initialValues={{
        city: "",
        buyOrRent: "",
        type: "",
        rooms: "",
        price: {
          from: "",
          to: "",
        },
        filters: isBlack ? additionalFilterState : null,
      }}
      onSubmit={(values) => alert(JSON.stringify(values))}
    >
      {({ values }) => (
        <Form>
          <div
            className={`${styles.container} ${
              isBlack && !mobile
                ? styles["container_black"]
                : styles["container_white"]
            } ${!mobile ? styles["with-border"] : ""}`}
            ref={filterRef}
          >
            <div className={styles["search__wrapper"]}>
              <Input
                isBlack={isBlack}
                mobile={+mobile}
                type="text"
                name="city"
                placeholder="Введите город, адрес, метро или ЖК"
              />
              <div
                onClick={() => setMobileOpen((prev) => !prev)}
                className={styles["burger-wrapper"]}
              >
                <Image
                  alt="mobile"
                  width={45}
                  height={45}
                  src="/images/filter-white.svg"
                />
              </div>
            </div>

            {
              <ul
                className={`${styles.ul} ${
                  isBlack ? styles["white-color"] : ""
                } ${
                  !mobile || (mobile && mobileOpen)
                    ? styles["visible"]
                    : styles["unvisible"]
                }`}
              >
                <FormikList
                  values={values}
                  isBlack={isBlack}
                  mobile={+mobile}
                  current={current}
                  setCurrent={setCurrent}
                  setMobileOpen={setMobileOpen}
                  toTopHandler={toTopHandler}
                />
              </ul>
            }
            {!mobile ? (
              <Button type={isBlack ? "white" : "black"} text="Искать" />
            ) : null}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FilterDesktop;

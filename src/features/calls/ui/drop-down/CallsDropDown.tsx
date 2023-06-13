import { FC, useEffect, useRef, useState } from "react";
import { Arrow, ModalDropDown } from "../../../../shared";
import {
  CallsDropDownProps,
  useCallsFeatures,
  useCallsFeaturesAction,
} from "../../model";

import styles from "./CallsDropDown.module.scss";

const CallsDropDown: FC<CallsDropDownProps> = ({ initialOptions, name }) => {
  const [options, setOptions] = useState(initialOptions);
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const { setInOutFilter, setFilterState, setFilter } =
    useCallsFeaturesAction();
  const { cancelFilterState } = useCallsFeatures();

  const handleChangeValue = (label: string) => {
    switch (label) {
      case "incoming":
        setInOutFilter(1);
        break;
      case "outgoing":
        setInOutFilter(0);
        break;
      case "AllTypes":
        setInOutFilter("");
        break;
    }

    setOptions((prev) =>
      prev.map((item) => {
        if (item.label === label) {
          return { ...item, checked: true };
        } else {
          return { ...item, checked: false };
        }
      })
    );

    if (options[0].label !== label) {
      setFilter();
    }

    setActive((prev) => !prev);
    handleCheckActiveFilters(label);
  };

  useEffect(() => {
    if (cancelFilterState) {
      setOptions((prev) =>
        prev.map((item, ind) => {
          if (ind === 0) {
            return { ...item, checked: true };
          } else {
            return { ...item, checked: false };
          }
        })
      );
    }
  }, [cancelFilterState]);

  const handleCheckActiveFilters = (label: string) => {
    if (!name) return;
    const checkChange: boolean = options[0].label === label ? false : true;
    setFilterState(name, checkChange);
  };

  const handleToggleOptions = () => {
    setActive((prev) => !prev);
  };

  const handleClickOutside = (e: any) => {
    if (!ref.current?.contains(e.target)) {
      setActive(() => false);
    }
  };

  useEffect(() => {
    if (!ref.current) return;

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const checkActiveFilter = () => !options[0].checked;

  return (
    <div ref={ref} className={styles.root}>
      <div onClick={handleToggleOptions} className={styles.header}>
        <h2
          className={
            checkActiveFilter()
              ? `${styles.titile} ${styles.titile_active}`
              : styles.title
          }
        >
          {options.find((item) => item.checked)?.value}
        </h2>
        <Arrow active={active} />
      </div>
      {active && (
        <ModalDropDown options={options} onChange={handleChangeValue} />
      )}
    </div>
  );
};

export { CallsDropDown };

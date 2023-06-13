import { useEffect, useRef, useState } from "react";
import { CalendarSvg, ModalDropDown, SideArrow } from "../../../../shared";
import { dropDownCalendarOptions } from "../../libs/config/dropDownOptions";
import { getDate } from "../../libs/helpers/getSrartDate";
import { PeriodVariant, useCallsFeaturesAction } from "../../model";

import styles from "./CallsCalendar.module.scss";

const CallsCalendar = () => {
  const refCalendar = useRef<HTMLInputElement>(null);
  const [calendarOptions, setCalendarOptions] = useState(
    dropDownCalendarOptions
  );
  const [modalStatus, setModalStatus] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { setStartDate } = useCallsFeaturesAction();

  const handleChangeValue = (label: PeriodVariant) => {
    setStartDate(getDate(label));

    setCalendarOptions((prev) =>
      prev.map((item) => {
        if (item.label === label) {
          return { ...item, checked: true };
        } else {
          return { ...item, checked: false };
        }
      })
    );
  };

  const checkClickOutside = (e: any) => {
    if (!ref.current) return;
    if (!ref.current.contains(e.target)) {
      setModalStatus((prev) => !prev);
    }
  };

  useEffect(() => {
    if (!ref.current) return;
    if (!modalStatus) return;

    document.addEventListener("click", checkClickOutside);

    return () => {
      document.removeEventListener("click", checkClickOutside);
    };
  });

  const titleOptions = () => {
    const checked = calendarOptions.find((item) => item.checked);
    if (!checked) return "no ckecked";
    return checked.value;
  };

  return (
    <div
      ref={ref}
      onClick={() => setModalStatus((prev) => !prev)}
      className={styles.root}
    >
      <SideArrow direction="left" />
      <div className={styles.calendar_center}>
        <CalendarSvg />
        <div className={styles.value}>{titleOptions()}</div>
      </div>
      <SideArrow direction="right" />
      {modalStatus && (
        <ModalDropDown options={calendarOptions} onChange={handleChangeValue}>
          <div
            onClick={() => refCalendar.current?.click()}
            className={styles.calendar_input}
          >
            <h2 className={styles.calendar_input__title}>Указать даты</h2>
            <div className={styles.calendar_input__container}>
              <span className={styles.calendar_input__value}>
                {"__.__.__-__.__.__"}
              </span>
              <CalendarSvg />
            </div>
          </div>
        </ModalDropDown>
      )}
    </div>
  );
};

export { CallsCalendar };

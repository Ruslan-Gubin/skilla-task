import { useEffect, useRef, useState } from "react";
import { Close, SearchSvg } from "../../../../shared";
import { updatePhoneNumber } from "../../libs";

import styles from "./CallsSearchPhone.module.scss";

const CallsSearchPhone = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [active, setActive] = useState<boolean>(false);
  const refInput = useRef<HTMLInputElement>(null);

  const handleClickOutside = (e: any) => {
    if (!refInput.current) return;
    if (!refInput.current.contains(e.target)) {
      setActive(false);
    }
  };

  useEffect(() => {
    if (!refInput.current || !active) return;

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value;
    setPhoneNumber(() => updatePhoneNumber(value));
  };

  const handleClearPhone = () => {
    setActive(false);
    setPhoneNumber("");
  };

  const handleActiveInput = () => {
    refInput.current?.focus();
    setActive(true);
  };

  return (
    <div
      onClick={handleActiveInput}
      className={
        phoneNumber.length > 0
          ? `${styles.root} ${styles.active_border}`
          : styles.root
      }
    >
      <div className={styles.start_search}>
        <div className={styles.start_search__svg}>
          <SearchSvg />
        </div>
        {phoneNumber.length > 0 && <span>+7</span>}
        <input
          className={styles.input}
          ref={refInput}
          value={phoneNumber}
          onChange={handleChangeInput}
          type="text"
          placeholder="Поиск по звонкам"
        />
      </div>
      {phoneNumber.length > 0 && <Close onClick={handleClearPhone} />}
    </div>
  );
};

export { CallsSearchPhone };

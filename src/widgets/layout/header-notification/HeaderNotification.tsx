import { FC } from "react";
import styles from "./HeaderNotification.module.scss";

interface HeaderNotificationProps {
  text: string;
  proccess?: number;
  color: "green" | "yellow" | "red";
  count?: string;
}

const HeaderNotification: FC<HeaderNotificationProps> = ({
  text,
  proccess,
  color,
  count,
}) => {
  return (
    <div className={styles.root}>
      <h2>
        {text}{" "}
        <span className={`${styles[color]} ${styles.span}`}>
          {" "}
          {count ? count : `${proccess}%`}
        </span>
      </h2>

      <div className={styles.proggress}>
        <div
          style={{ width: `${proccess}%` }}
          className={`${styles[color]} ${styles.proccess}`}
        ></div>
      </div>
    </div>
  );
};

export { HeaderNotification };

import { memo } from "react";
import styles from "./CallsEmployee.module.scss";

const CallsEmployee = memo(({ avatar }: { avatar: string }) => {
  return (
    <img
      className={styles.person_avatar}
      src={avatar ? avatar : "https://lk.skilla.ru/img/noavatar.jpg"}
      alt="Avatar"
    />
  );
});

export { CallsEmployee };

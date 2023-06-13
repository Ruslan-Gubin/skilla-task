import { memo } from "react";
import styles from "./CallsNotification.module.scss";

const CallsNotification = memo(() => {
  return (
    <div className={styles.root}>
      <div className={styles.types}>Тип</div>
      <div className={styles.time}>Время</div>
      <div className={styles.employee}>Сотрудник</div>
      <div className={styles.call}>Звонок</div>
      <div className={styles.source}>Источник</div>
      <div className={styles.evaluation}>Оценка</div>
      <div className={styles.duration}>Длительность</div>
    </div>
  );
});

export { CallsNotification };

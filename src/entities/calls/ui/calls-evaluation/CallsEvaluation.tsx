import { memo } from "react";
import styles from "./CallsEvaluation.module.scss";

const CallsEvaluation = memo(() => {
  return (
    <>
      <div className={styles.root}>
        <div className={styles.elipse}></div>
        <span className={styles.evaluation}>Отлично</span>
      </div>
    </>
  );
});

export { CallsEvaluation };

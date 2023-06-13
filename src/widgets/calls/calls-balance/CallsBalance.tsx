import { IncrementSvg } from "../../../shared";
import styles from "./CallsBalance.module.scss";

const CallsBalance = ({ balans }: { balans: number }) => {
  return (
    <div className={styles.root}>
      <p>
        Баланс: <span>{balans} ₽</span>
      </p>
      <IncrementSvg active />
    </div>
  );
};

export { CallsBalance };

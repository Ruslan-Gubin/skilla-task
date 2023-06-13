import { ButtonMain, ExclamationSvg, Logo } from "../../../shared";
import { IncrementSvg } from "../../../shared/ui/IncrementSvg/IncrementSvg";
import { LayoutNav } from "../layout-nav/LayoutNav";

import styles from "./LayoutAside.module.scss";

const LayoutAside = () => {
  return (
    <aside className={styles.layout_aside}>
      <Logo className={styles.layout_aside__logo} />
      <LayoutNav />
      <div className={styles.layout_aside__button}>
        <ButtonMain
          text="Добавить заказ"
          image={<IncrementSvg />}
          onClick={() => {}}
        />
        <ButtonMain
          text="Оплата"
          image={<ExclamationSvg />}
          onClick={() => {}}
        />
      </div>
    </aside>
  );
};

export { LayoutAside };

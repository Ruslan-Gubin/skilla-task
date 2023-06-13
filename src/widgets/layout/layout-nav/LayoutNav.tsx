import { NAVS_ASIDE } from "../../../shared";
import { NavsSvg } from "./NavsSvg";

import styles from "./LayoutNav.module.scss";

const LayoutNav = () => {
  return (
    <nav className={styles.layoyt_nav}>
      <ul>
        {NAVS_ASIDE.map((nav) => (
          <li
            key={nav.path}
            className={
              nav.label === "calls"
                ? `${styles.nav_item} ${styles.active}`
                : styles.nav_item
            }
          >
            <picture>
              <NavsSvg key={nav.path} label={nav.label} />
            </picture>
            <span
              className={
                nav.label === "calls"
                  ? `${styles.nav_item__text} ${styles.active_text}`
                  : styles.nav_item__text
              }
            >
              {nav.value}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { LayoutNav };

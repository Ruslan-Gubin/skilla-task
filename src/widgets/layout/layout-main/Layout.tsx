import { Outlet } from "react-router";
import { LayoutAside } from "../layout-aside/LayoutAside";
import { LayoutHeader } from "../layout-header/LayoutHeader";

import styles from './Layout.module.scss';


const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <LayoutAside />
      <section className={styles.container}>
      <LayoutHeader />
      <div className={styles.content}>
      <Outlet/>
      </div>
      </section>
    </div>
  );
};

export {Layout};
import { LayoutHeaderDate } from "../../../features";
import { HeaderAuth } from "../header-auth/HeaderAuth";
import { HeaderNotification } from "../header-notification/HeaderNotification";
import styles from "./LayoutHeader.module.scss";


const LayoutHeader = () => {


  return (
    <div className={styles.layout_header}>
      <LayoutHeaderDate />
      <div className={styles.notification_container}>
      <HeaderNotification color="green" text="Новые звонки" count="20 из 30 шт" proccess={66}   />
      <HeaderNotification color="yellow" text="Качество разговоров"  proccess={40}   />
      <HeaderNotification color="red" text="Новые звонки" proccess={67}   />
      </div>
      <HeaderAuth />
    
    </div>
  );
};

export { LayoutHeader };

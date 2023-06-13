import { CallsCalendar } from "../../features";
import { CallsBalance, CallsFilters } from "../../widgets";
import CallsList from "../../widgets/calls/calls-list/CallsList";

import styles from "./CallsPage.module.scss";

const CallsPage = () => {
  return (
    <section className={styles.home_wrapper}>
      <div className={styles.viewer_options}>
        <CallsBalance balans={272} />
        <CallsCalendar />
      </div>
      <CallsFilters />
      <CallsList />
    </section>
  );
};

export default CallsPage;

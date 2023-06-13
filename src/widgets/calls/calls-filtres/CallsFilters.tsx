import {
  CallsDropDown,
  CallsSearchPhone,
  CancelFilters,
} from "../../../features";
import * as options from "../../../shared";

import styles from "./CallsFilters.module.scss";

const CallsFilters = () => {
  return (
    <div className={styles.root}>
      <CallsSearchPhone />
      <div className={styles.filters}>
        <CancelFilters />
        <CallsDropDown initialOptions={options.callsTypes} name="types" />
        <CallsDropDown initialOptions={options.staffs} name="employer" />
        <CallsDropDown initialOptions={options.allCalls} name="calls" />
        <CallsDropDown
          initialOptions={options.ratingsOptions}
          name="evaluations"
        />
        <CallsDropDown
          initialOptions={options.allErrorsOptions}
          name="errors"
        />
      </div>
    </div>
  );
};

export { CallsFilters };
